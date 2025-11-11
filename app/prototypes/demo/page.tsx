export default function DemoPrototype() {
  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Demo Prototype</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 space-y-6">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">This is a demo prototype</h2>
          <p className="text-gray-600">
            You can build any React component here. Add interactivity, fetch data, 
            use hooks, import libraries - it's a full Next.js page.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4 mt-6">
          <div className="bg-blue-100 p-4 rounded text-center">
            <div className="text-2xl font-bold text-blue-700">Card 1</div>
            <p className="text-sm text-blue-600 mt-2">Example content</p>
          </div>
          <div className="bg-green-100 p-4 rounded text-center">
            <div className="text-2xl font-bold text-green-700">Card 2</div>
            <p className="text-sm text-green-600 mt-2">Example content</p>
          </div>
          <div className="bg-purple-100 p-4 rounded text-center">
            <div className="text-2xl font-bold text-purple-700">Card 3</div>
            <p className="text-sm text-purple-600 mt-2">Example content</p>
          </div>
        </div>
      </div>
    </div>
  )
}

