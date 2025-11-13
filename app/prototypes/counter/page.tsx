'use client'

import { useState } from 'react'

export default function CounterPrototype() {
  const [count, setCount] = useState(0)

  return (
    <div className="max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Counter Prototype</h1>
      
      <div className="bg-white rounded-lg shadow-md p-8">
        <div className="text-center space-y-6">
          <div className="text-6xl font-bold text-blue-600">
            {count}
          </div>
          
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => setCount(count - 1)}
              className="px-6 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-semibold"
            >
              Decrement
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-6 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors font-semibold"
            >
              Reset
            </button>
            <button
              onClick={() => setCount(count + 1)}
              className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors font-semibold"
            >
              Increment
            </button>
          </div>

          <p className="text-gray-600 mt-6">
            This demonstrates a simple interactive component with state.
          </p>
        </div>
      </div>
    </div>
  )
}


