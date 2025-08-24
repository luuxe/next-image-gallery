# Next Image Gallery

A simple image gallery built with Next.js App Router, TypeScript, and Mantine UI, featuring image upload, search, listing, and deletion.

### 1. User Requirements

- Upload images and store them using an API
- Search for images by name using an input box and the API
- List all uploaded images
- Delete single image

### 2. Project Overview

- Next.js App Router
- TypeScript
- Mantine UI
- Jest Testing

**Total development time to current product: ~8hrs**
- Time to MVP: ~5hrs
- Additional development time for redesign using MantineUI, adding Jest, bug fixing/clean up: ~3hrs

**Future iterations:**
1. Optimizations
- Implement Tanstack/React Query, create custom query hooks for endpoints to handle caching, loading, error, and refetch states.
- Replace local disk storage implementation with a production-ready solution (S3 or other cloud storage for image URLs)
- Add server-side pagination or infinite scroll for large datasets.

2. Features
- Expand to multi select file input, update `POST api/images/uploads` to handle an array of files vs. current implementation of single file upload.
- Drag & drop uploader component
- Handle an expanded state per image on click - display image in a modal overlay w/ metadata and CTA buttons
- Super super cherry on top: run images through Computer Vision or something to generate keywords for each image & add keyword search

3. Infrastructure
- Handle multiple environments
- Pre push hooks to run test, type checks, a11y checks, lint etc
- Use feature branching vs. YOLO pushing to main
- Deploy on main merge (deploy in general)

## Getting Started

Clone the repo

```bash
git clone git@github.com:luuxe/next-image-gallery.git
```

Install dependencies

```bash
npm install
```

Start the app

```bash
npm start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Development

Install dependencies

```bash
npm install
```

Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
