import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'
import { writeClient } from '@/lib/sanity'

function checkAuth(req: NextRequest) {
  return req.cookies.get('admin_session')?.value === process.env.ADMIN_PASSWORD
}

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

function estimateReadTime(text: string) {
  const minutes = Math.ceil(text.split(/\s+/).length / 200)
  return `${minutes} min read`
}

function toPortableText(text: string) {
  return text.split(/\n\n+/).filter(p => p.trim()).map(paragraph => ({
    _type: 'block',
    _key: Math.random().toString(36).slice(2, 9),
    style: 'normal',
    markDefs: [],
    children: [{
      _type: 'span',
      _key: Math.random().toString(36).slice(2, 9),
      text: paragraph.trim(),
      marks: [],
    }],
  }))
}

export async function GET(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { data, error } = await supabaseAdmin
    .from('submissions')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) return NextResponse.json({ error: 'Failed to fetch' }, { status: 500 })
  return NextResponse.json(data)
}

export async function POST(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await req.json()

  const { data: submission, error: fetchError } = await supabaseAdmin
    .from('submissions')
    .select('*')
    .eq('id', id)
    .single()

  if (fetchError || !submission) return NextResponse.json({ error: 'Submission not found' }, { status: 404 })

  await writeClient.create({
    _type: 'article',
    title: submission.title,
    slug: { _type: 'slug', current: slugify(submission.title) },
    category: submission.category,
    subcategory: submission.subcategory || undefined,
    standfirst: submission.standfirst || undefined,
    authorName: submission.author_name,
    body: toPortableText(submission.body),
    publishedAt: new Date().toISOString(),
    readTime: estimateReadTime(submission.body),
    isFeatured: false,
  })

  await supabaseAdmin.from('submissions').update({ status: 'published' }).eq('id', id)

  return NextResponse.json({ success: true })
}

export async function DELETE(req: NextRequest) {
  if (!checkAuth(req)) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })

  const { id } = await req.json()
  const { error } = await supabaseAdmin.from('submissions').delete().eq('id', id)

  if (error) return NextResponse.json({ error: 'Failed to delete' }, { status: 500 })
  return NextResponse.json({ success: true })
}
