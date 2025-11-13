# Getting Started with Project Hub

Welcome to your personal project hub! This is a simple space for managing docs and building prototypes.

## Structure

```
project-hub/
├── app/
│   ├── docs/[slug]/      # Docs pages (auto-generated)
│   └── prototypes/       # Your prototype pages
├── content/
│   └── docs/            # Put markdown files here
└── components/          # Shared components
```

## Adding New Docs

1. Create a new `.md` file in `content/docs/`
2. Write your content
3. Update the sidebar in `components/Sidebar.tsx` to add a link

Example:
```markdown
# My New Document

Content goes here...
```

## Adding New Prototypes

1. Create a new folder in `app/prototypes/your-prototype-name/`
2. Add a `page.tsx` file
3. Build your component
4. Update the sidebar to add a link

Example:
```tsx
export default function MyPrototype() {
  return (
    <div>
      <h1>My Prototype</h1>
      {/* Your component here */}
    </div>
  )
}
```

## Running the App

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

Visit `http://localhost:3000` to see your hub!

## Tips

- Keep it simple - don't over-engineer
- Use this as your playground
- Document as you go
- Iterate quickly on prototypes

Happy building! 🚀


