'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Sidebar() {
  const pathname = usePathname()
  
  const isActive = (path: string) => pathname?.startsWith(path)
  
  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 p-6">
      <Link href="/">
        <h1 className="text-xl font-bold mb-8 text-gray-800">Project Hub</h1>
      </Link>
      
      <nav className="space-y-6">
        {/* Docs Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            📄 Docs
          </h2>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/docs/example"
                className={`block px-3 py-2 rounded transition-colors ${
                  isActive('/docs/example') 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Example Doc
              </Link>
            </li>
            <li>
              <Link 
                href="/docs/getting-started"
                className={`block px-3 py-2 rounded transition-colors ${
                  isActive('/docs/getting-started') 
                    ? 'bg-blue-100 text-blue-700 font-medium' 
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                Getting Started
              </Link>
            </li>
          </ul>
        </div>

        {/* Prototypes Section */}
        <div>
          <h2 className="text-sm font-semibold text-gray-500 uppercase mb-3">
            ⚡ Prototypes
          </h2>
          <ul className="space-y-2">
            <li>
              <Link 
                href="/prototypes/demo"
                className={`block px-3 py-2 rounded transition-colors ${
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
                className={`block px-3 py-2 rounded transition-colors ${
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

