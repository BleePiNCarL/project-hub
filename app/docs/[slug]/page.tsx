import { getDocBySlug, getAllDocs } from '@/lib/markdown'
import ReactMarkdown from 'react-markdown'

export async function generateStaticParams() {
  const docs = getAllDocs()
  return docs.map((slug) => ({ slug }))
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug)

  return (
    <article className="max-w-4xl">
      <div className="prose prose-lg max-w-none">
        <ReactMarkdown>{doc.content}</ReactMarkdown>
      </div>
    </article>
  )
}


