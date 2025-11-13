import { getDocBySlug, getAllDocs } from '@/lib/markdown'
import ReactMarkdown from 'react-markdown'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import remarkGfm from 'remark-gfm'

export async function generateStaticParams() {
  const docs = getAllDocs()
  return docs.map((slug) => ({ slug }))
}

export default function DocPage({ params }: { params: { slug: string } }) {
  const doc = getDocBySlug(params.slug)

  return (
    <article className="max-w-4xl px-8 py-8">
      <div className="prose prose-lg prose-slate max-w-none
        prose-headings:font-bold prose-headings:text-gray-900
        prose-h1:text-4xl prose-h1:mb-4
        prose-h2:text-3xl prose-h2:mt-8 prose-h2:mb-4 prose-h2:border-b prose-h2:pb-2
        prose-h3:text-2xl prose-h3:mt-6 prose-h3:mb-3
        prose-h4:text-xl prose-h4:mt-4 prose-h4:mb-2
        prose-p:text-gray-700 prose-p:leading-relaxed
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-900 prose-strong:font-semibold
        prose-code:text-pink-600 prose-code:bg-gray-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
        prose-pre:bg-gray-900 prose-pre:text-gray-100
        prose-ul:my-4 prose-li:my-1
        prose-blockquote:border-l-4 prose-blockquote:border-blue-500 prose-blockquote:bg-blue-50 prose-blockquote:py-2 prose-blockquote:px-4
        prose-table:border-collapse
        prose-th:bg-gray-100 prose-th:border prose-th:border-gray-300 prose-th:px-4 prose-th:py-2
        prose-td:border prose-td:border-gray-300 prose-td:px-4 prose-td:py-2
        prose-hr:my-8 prose-hr:border-gray-300
      ">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  style={vscDarkPlus}
                  language={match[1]}
                  PreTag="div"
                  {...props}
                >
                  {String(children).replace(/\n$/, '')}
                </SyntaxHighlighter>
              ) : (
                <code className={className} {...props}>
                  {children}
                </code>
              )
            }
          }}
        >
          {doc.content}
        </ReactMarkdown>
      </div>
    </article>
  )
}


