export default function MyFirstDemo() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My First Demo</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <p className="text-xl text-gray-700">
          🎉 Success! This prototype is working.
        </p>
        
        <div className="mt-6 space-y-4">
          <p className="text-gray-600">
            You can now share this URL with your colleagues:
          </p>
          <code className="block bg-gray-100 p-3 rounded">
            http://localhost:3000/prototypes/my-first-demo
          </code>
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4">
          <div className="bg-blue-100 p-4 rounded text-center">
            <div className="text-2xl font-bold text-blue-700">Example</div>
            <p className="text-sm text-blue-600 mt-2">Card 1</p>
          </div>
          <div className="bg-green-100 p-4 rounded text-center">
            <div className="text-2xl font-bold text-green-700">Example</div>
            <p className="text-sm text-green-600 mt-2">Card 2</p>
          </div>
          <div className="bg-purple-100 p-4 rounded text-center">
            <div className="text-2xl font-bold text-purple-700">Example</div>
            <p className="text-sm text-purple-600 mt-2">Card 3</p>
          </div>
        </div>
      </div>
    </div>
  )
}

