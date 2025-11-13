# Creating Prototypes for Colleagues

## Quick Start

### 1. Create a New Prototype

```bash
# Create a new folder in app/prototypes/
mkdir app/prototypes/my-demo
```

### 2. Add a page.tsx file

Copy this template:

```tsx
'use client'

export default function MyDemo() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">My Demo</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        {/* Your component here */}
      </div>
    </div>
  )
}
```

### 3. Share the URL

Send your colleagues:
```
http://localhost:3000/prototypes/my-demo
```

Or when deployed:
```
https://your-app.vercel.app/prototypes/my-demo
```

## Examples

### Simple Component Demo

```tsx
// app/prototypes/button-demo/page.tsx
export default function ButtonDemo() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Button Component Demo</h1>
      
      <div className="space-y-4">
        <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
          Primary Button
        </button>
        <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300">
          Secondary Button
        </button>
      </div>
    </div>
  )
}
```

### Interactive Demo with State

```tsx
// app/prototypes/form-demo/page.tsx
'use client'

import { useState } from 'react'

export default function FormDemo() {
  const [name, setName] = useState('')
  
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Form Demo</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-full px-4 py-2 border rounded-lg"
        />
        
        <p className="mt-4">Hello, {name || 'stranger'}!</p>
      </div>
    </div>
  )
}
```

## Tips for Sharing with Colleagues

### 1. Deploy to Vercel (Free)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Now you have a live URL to share!

### 2. No Sidebar? Make it Fullscreen

If you want a prototype without the sidebar, use a different layout:

```tsx
// app/prototypes/my-demo/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen p-8">{children}</div>
}
```

### 3. Add Multiple Routes

You can create as many as you want:

```
app/prototypes/
├── dashboard-demo/
├── form-validation/
├── data-viz/
├── auth-flow/
└── component-library/
```

Each gets its own URL:
- `/prototypes/dashboard-demo`
- `/prototypes/form-validation`
- `/prototypes/data-viz`
- etc.

## Full Example: Dashboard Prototype

```tsx
'use client'

import { useState } from 'react'

export default function DashboardDemo() {
  const [activeTab, setActiveTab] = useState('overview')
  
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold mb-2">Dashboard Prototype</h1>
        <p className="text-gray-600">Interactive demo for the team</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-6 border-b">
        {['overview', 'analytics', 'settings'].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 font-medium capitalize ${
              activeTab === tab 
                ? 'border-b-2 border-blue-500 text-blue-600' 
                : 'text-gray-600'
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="bg-white rounded-lg shadow-lg p-8">
        {activeTab === 'overview' && (
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-blue-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-700">1,234</div>
              <div className="text-blue-600">Total Users</div>
            </div>
            <div className="bg-green-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-700">$12.5k</div>
              <div className="text-green-600">Revenue</div>
            </div>
            <div className="bg-purple-100 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-700">89%</div>
              <div className="text-purple-600">Conversion</div>
            </div>
          </div>
        )}
        
        {activeTab === 'analytics' && (
          <div>Analytics content here...</div>
        )}
        
        {activeTab === 'settings' && (
          <div>Settings content here...</div>
        )}
      </div>
    </div>
  )
}
```

## Workflow

1. **Build** - Create your prototype in `app/prototypes/[name]/page.tsx`
2. **Test** - View at `http://localhost:3000/prototypes/[name]`
3. **Share** - Send URL to colleagues (or deploy first)
4. **Iterate** - Update code, refresh browser

That's it! No need to update the sidebar unless you want navigation.


