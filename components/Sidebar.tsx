'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'

interface DocMetadata {
  slug: string
  title: string
}

export default function Sidebar() {
  const pathname = usePathname()
  const [docs, setDocs] = useState<DocMetadata[]>([])
  const [loading, setLoading] = useState(true)
  
  const isActive = (path: string) => pathname?.startsWith(path)
  
  useEffect(() => {
    // Fetch list of all docs
    fetch('/api/docs')
      .then(res => res.json())
      .then(data => {
        setDocs(data)
        setLoading(false)
      })
      .catch(err => {
        console.error('Failed to load docs:', err)
        setLoading(false)
      })
  }, [])
  
  // Format slug to readable title
  const formatTitle = (slug: string) => {
    return slug
      .replace(/-prd$/, ' PRD')
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ')
  }
  
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 p-6 overflow-y-auto">
      <Link href="/">
        <h1 className="text-xl font-bold mb-8 text-gray-800">Project Hub</h1>
      </Link>
      
      <nav className="space-y-6">
        {/* Docs Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            📄 Docs
          </h2>
          {loading ? (
            <p className="text-sm text-gray-400">Loading...</p>
          ) : (
            <ul className="space-y-2">
              {docs.map((doc) => (
                <li key={doc.slug}>
                  <Link 
                    href={`/docs/${doc.slug}`}
                    className={`block px-3 py-2 rounded transition-colors text-sm ${
                      isActive(`/docs/${doc.slug}`) 
                        ? 'bg-blue-100 text-blue-700 font-medium' 
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {doc.title || formatTitle(doc.slug)}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Prototypes Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ⚡ Prototypes
          </h2>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/prototypes/kids-routine"
                className={`block px-3 py-2 rounded transition-colors text-sm ${
                  isActive('/prototypes/kids-routine') 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Kids Routine App
              </Link>
            </li>
            <li>
              <Link 
                href="/prototypes/demo"
                className={`block px-3 py-2 rounded transition-colors text-sm ${
                  isActive('/prototypes/demo') 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Demo Prototype
              </Link>
            </li>
            <li>
              <Link 
                href="/prototypes/counter"
                className={`block px-3 py-2 rounded transition-colors text-sm ${
                  isActive('/prototypes/counter') 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Counter Example
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}


