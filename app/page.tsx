export default function Home() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Welcome to Project Hub</h1>
      
      <p className="text-xl text-gray-700 mb-8">
        A simple space for working on two things:
      </p>

      {/* DOCS SECTION */}
      <div className="mb-12 bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          📄 Docs
        </h2>
        <p className="text-gray-700 mb-4">
          Write PRDs, brainstorms, and project documentation in Markdown.
        </p>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
          <p className="font-semibold text-blue-900 mb-2">How to add a new doc:</p>
          <ol className="list-decimal list-inside space-y-2 text-blue-800">
            <li>Create a new <code className="bg-blue-100 px-2 py-1 rounded">.md</code> file in <code className="bg-blue-100 px-2 py-1 rounded">content/docs/</code></li>
            <li>Write your content in Markdown</li>
            <li>It will automatically be available at <code className="bg-blue-100 px-2 py-1 rounded">/docs/your-filename</code></li>
            <li>(Optional) Add a link in the sidebar for easy navigation</li>
          </ol>
        </div>

        <p className="text-sm text-gray-600">
          <strong>Example:</strong> Create <code className="bg-gray-100 px-2 py-1 rounded">content/docs/my-project.md</code> 
          → Visit <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000/docs/my-project</code>
        </p>
      </div>

      {/* PROTOTYPES SECTION */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
          ⚡ Prototypes
        </h2>
        <p className="text-gray-700 mb-4">
          Build interactive React components and share them with colleagues.
        </p>
        
        <div className="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
          <p className="font-semibold text-green-900 mb-2">How to create a new prototype:</p>
          <ol className="list-decimal list-inside space-y-2 text-green-800">
            <li>Create a new folder in <code className="bg-green-100 px-2 py-1 rounded">app/prototypes/</code> (e.g., <code className="bg-green-100 px-2 py-1 rounded">my-demo</code>)</li>
            <li>Inside that folder, create a file called <code className="bg-green-100 px-2 py-1 rounded">page.tsx</code></li>
            <li>Write your React component code</li>
            <li>Share the URL: <code className="bg-green-100 px-2 py-1 rounded">/prototypes/my-demo</code></li>
          </ol>
        </div>

        <p className="text-sm text-gray-600 mb-4">
          <strong>Example:</strong> Create <code className="bg-gray-100 px-2 py-1 rounded">app/prototypes/dashboard/page.tsx</code> 
          → Visit <code className="bg-gray-100 px-2 py-1 rounded">http://localhost:3000/prototypes/dashboard</code>
        </p>

        <div className="bg-gray-50 p-4 rounded mt-4">
          <p className="text-sm font-semibold text-gray-700 mb-2">Quick Template:</p>
          <pre className="bg-gray-800 text-white p-3 rounded text-xs overflow-x-auto">
{`export default function MyDemo() {
  return (
    <div className="p-8">
      <h1>My Prototype</h1>
      {/* Your code here */}
    </div>
  )
}`}
          </pre>
        </div>
      </div>

      {/* TIPS */}
      <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
        <p className="text-sm text-yellow-800">
          💡 <strong>Tip:</strong> Use the sidebar on the left to navigate between existing docs and prototypes. 
          Click any link to view that page!
        </p>
      </div>
    </div>
  )
}

