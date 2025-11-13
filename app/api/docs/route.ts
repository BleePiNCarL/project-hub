import { NextResponse } from 'next/server'
import { getAllDocs, getDocBySlug } from '@/lib/markdown'

export async function GET() {
  try {
    const slugs = getAllDocs()
    const docs = slugs.map(slug => {
      try {
        const doc = getDocBySlug(slug)
        // Extract title from first heading in markdown
        const titleMatch = doc.content.match(/^#\s+(.+)$/m)
        const title = titleMatch ? titleMatch[1] : null
        
        return {
          slug,
          title
        }
      } catch (err) {
        return {
          slug,
          title: null
        }
      }
    })
    
    return NextResponse.json(docs)
  } catch (error) {
    console.error('Error fetching docs:', error)
    return NextResponse.json({ error: 'Failed to fetch docs' }, { status: 500 })
  }
}

