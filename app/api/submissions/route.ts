import { NextRequest, NextResponse } from 'next/server'
import { supabaseAdmin } from '@/lib/supabase'

export async function POST(req: NextRequest) {
  const { title, category, subcategory, standfirst, body, author_name, author_email } = await req.json()

  if (!title || !category || !body || !author_name) {
    return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
  }

  const { error } = await supabaseAdmin
    .from('submissions')
    .insert({ title, category, subcategory, standfirst, body, author_name, author_email, status: 'pending' })

  if (error) {
    return NextResponse.json({ error: 'Failed to submit' }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
