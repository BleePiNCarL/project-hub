# Project Hub

A simple, personal web app for managing documentation and building prototypes.

## Features

- 📄 **Docs** - Write PRDs and notes in markdown
- ⚡ **Prototypes** - Build interactive React components
- 🎨 **Clean UI** - Minimal, focused design
- 🚀 **Fast** - Built with Next.js 14

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Structure

```
project-hub/
├── app/
│   ├── docs/[slug]/      # Dynamic doc pages
│   ├── prototypes/       # Prototype pages
│   ├── layout.tsx        # Root layout with sidebar
│   └── page.tsx          # Home page
├── components/
│   └── Sidebar.tsx       # Navigation sidebar
├── content/
│   └── docs/             # Markdown files
├── lib/
│   └── markdown.ts       # Markdown utilities
└── package.json
```

## Adding Content

### New Doc

1. Create `content/docs/your-doc.md`
2. Write content in markdown
3. Add link to `components/Sidebar.tsx`

### New Prototype

1. Create `app/prototypes/your-prototype/page.tsx`
2. Build your component
3. Add link to `components/Sidebar.tsx`

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Markdown:** react-markdown + gray-matter
- **Language:** TypeScript

## License

Personal project - use as you wish!

