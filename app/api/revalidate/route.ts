import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  if (secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json({ error: 'Invalid secret' }, { status: 401 })
  }

  try {
    const body = await req.json()
    const { _type, slug, category } = body

    if (_type === 'article') {
      // Revalidate the homepage
      revalidatePath('/')

      // Revalidate the specific article page
      if (slug?.current) {
        revalidatePath(`/articles/${slug.current}`)
      }

      // Revalidate the category page
      if (category) {
        revalidatePath(`/${category}`)
      }

      // Revalidate all category pages to be safe
      for (const cat of ['nigeria', 'africa', 'solutions', 'merit-sovereignism', 'fact-checks']) {
        revalidatePath(`/${cat}`)
      }
    }

    return NextResponse.json({ revalidated: true })
  } catch {
    return NextResponse.json({ error: 'Invalid body' }, { status: 400 })
  }
}
