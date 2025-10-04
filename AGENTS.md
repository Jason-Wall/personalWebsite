# Personal Website - Agent Context & Development Guide

## 🏗️ Project Overview

This is a personal website/blog built with modern web technologies, featuring a clean MDX-based blog system with full routing support.

### Tech Stack

- **Frontend Framework**: React 19+ with TypeScript
- **Build Tool**: Vite 7+
- **UI Library**: Material-UI (MUI) v7
- **Routing**: React Router DOM
- **Content**: MDX (Markdown + JSX)
- **Styling**: Material-UI's sx prop + theme system
- **Package Manager**: npm

## 📁 Project Structure

```
personalWebsite/
├── apps/
│   └── frontend/                    # Main React application
│       ├── src/
│       │   ├── components/          # React components
│       │   │   ├── Navigation.tsx   # App-wide navigation with routing
│       │   │   ├── HomePage.tsx     # Landing page component
│       │   │   ├── BlogPage.tsx     # Blog listing page wrapper
│       │   │   ├── BlogPostPage.tsx # Individual blog post wrapper
│       │   │   ├── BlogIndex.tsx    # Reusable blog post grid
│       │   │   └── BlogPostLayout.tsx # MDX blog post layout template
│       │   ├── content/             # MDX content files
│       │   │   ├── blog/           # Blog posts (.mdx files)
│       │   │   └── pages/          # Static pages (.mdx files)
│       │   ├── assets/             # Static assets
│       │   │   └── images/         # Organized image directories
│       │   │       ├── photos/     # Personal photos
│       │   │       ├── icons/      # UI icons
│       │   │       └── backgrounds/ # Background images
│       │   ├── utils/              # Utility functions
│       │   │   └── blog.ts         # Blog post management utilities
│       │   ├── theme.ts            # Material-UI theme configuration
│       │   ├── mdx.d.ts           # TypeScript declarations for MDX
│       │   ├── App.tsx            # Main app with router setup
│       │   └── main.tsx           # React entry point
│       ├── vite.config.ts         # Vite + MDX configuration
│       └── package.json           # Frontend dependencies
└── package.json                   # Root workspace (clean)
```

## 🎯 Key Features Implemented

### 1. MDX Blog System

- **Location**: `src/content/blog/`
- **Format**: Frontmatter + MDX content
- **Features**:
  - React components in markdown
  - Metadata (title, date, tags, author, etc.)
  - Draft/published status
  - Featured posts support

### 2. Routing System

- **Home**: `/` - Landing page with hero banner
- **Blog Index**: `/blog` - List of all published posts
- **Individual Posts**: `/blog/{slug}` - Shareable post URLs
- **About Page**: `/about` - Static about page
- **Future Categories**: Ready for `/blog?category={name}`

### 3. Theme System

- Light/dark mode toggle
- System preference detection
- Persistent user choice in localStorage
- Material-UI theme integration

### 4. Component Architecture

- **Page Components**: Handle routing and data
- **UI Components**: Reusable interface elements
- **Layout Components**: MDX content wrappers

## 📝 Blog Post Format

```mdx
---
title: 'Post Title'
date: '2025-10-03'
description: 'Brief description for SEO and previews'
tags: ['react', 'typescript', 'blog']
author: 'Jason'
featured: true
draft: false
slug: 'custom-slug' # Optional, auto-generated from filename
---

import { BlogPostLayout } from '../../components/BlogPostLayout';
import { Alert, Button } from '@mui/material';

export default function BlogPost({ children }) {
  return <BlogPostLayout {...frontmatter}>{children}</BlogPostLayout>;
}

# Your Content Here

Regular markdown with **formatting**.

<Alert severity='info'>React components work seamlessly!</Alert>

## More sections...
```

## 🔧 Configuration Files

### Vite Config (`vite.config.ts`)

- MDX plugin with frontmatter support
- Remark plugins for metadata parsing
- React plugin for JSX

### TypeScript (`mdx.d.ts`)

- MDX module declarations
- Frontmatter type definitions
- Component prop types

## 🚀 Development Workflow

### Adding New Blog Posts

1. Create `.mdx` file in `src/content/blog/`
2. Use naming convention: `YYYY-MM-DD-slug.mdx`
3. Add frontmatter metadata
4. Import in `App.tsx`
5. Add to `allPosts` array

### Adding New Pages

1. Create `.mdx` file in `src/content/pages/`
2. Add route in `App.tsx`
3. Import page component

### Running Development

```bash
cd apps/frontend
npm run dev
```

## 🎨 Styling Guidelines

- Use Material-UI's `sx` prop for styling
- Leverage theme system for consistency
- Responsive design with theme breakpoints
- Dark/light mode considerations

## 🔮 Future Roadmap & TODOs

### Immediate Improvements

- [ ] Add category filtering for blog posts
- [ ] Implement search functionality
- [ ] Add RSS feed generation
- [ ] SEO meta tags and Open Graph

### Category Filtering Implementation

Located in `Navigation.tsx` - see TODO comments:

1. Add category parameter to `handleNavClick`
2. Navigate to `/blog?category={name}`
3. Update `BlogPage` to handle URL params
4. Add filtering functions to `utils/blog.ts`

### Content Management

- [ ] Build script to auto-import blog posts
- [ ] Image optimization pipeline
- [ ] Content validation scripts

### Performance

- [ ] Code splitting by route
- [ ] Image lazy loading
- [ ] Bundle analysis and optimization

### Features

- [ ] Comments system
- [ ] Social sharing buttons
- [ ] Related posts suggestions
- [ ] Tag-based navigation
- [ ] Archive/timeline view

## 🐛 Known Issues & Fixes

### Import Paths in MDX

- **Issue**: MDX files need `../../components/` for imports
- **Reason**: Files in `content/blog/` are 2 levels deep
- **Fix Applied**: Corrected all import paths

### Router Integration

- **Issue**: Navigation state management
- **Solution**: Replaced useState with React Router
- **Benefit**: Shareable URLs, browser history

## 📚 Key Dependencies

### Production

- `react` & `react-dom` - Core React
- `@mui/material` - UI components
- `@emotion/react` & `@emotion/styled` - MUI styling
- `react-router-dom` - Client-side routing
- `@mdx-js/rollup` & `@mdx-js/react` - MDX support
- `remark-frontmatter` - Frontmatter parsing
- `gray-matter` - Metadata extraction

### Development

- `vite` - Build tool
- `typescript` - Type safety
- `eslint` - Code linting
- `@types/*` - TypeScript definitions

## 🎯 Architecture Decisions

### Why MDX?

- Combines markdown simplicity with React power
- Allows interactive components in content
- Better than pure markdown for rich experiences

### Why Material-UI?

- Comprehensive component library
- Built-in theming system
- Accessibility features
- Professional design system

### Why Vite?

- Fast development experience
- Modern build tool
- Excellent TypeScript support
- Plugin ecosystem

### Component Organization

- Separate page components from UI components
- Reusable layouts for consistent design
- Clear separation of concerns

## 🔍 Debugging Guide

### Common Issues

1. **MDX Import Errors**: Check relative paths (../../)
2. **Routing Issues**: Verify route definitions in App.tsx
3. **Theme Issues**: Check theme.ts configuration
4. **Build Errors**: Usually TypeScript or import issues

### Useful Commands

```bash
# Type checking
npm run build

# Linting
npm run lint

# Development server
npm run dev
```

## 📞 Agent Instructions

When working on this project:

1. **Always check current file contents** before making changes
2. **Maintain the established patterns** for consistency
3. **Update this file** when making architectural changes
4. **Consider mobile responsiveness** for all changes
5. **Test routing changes** across all pages
6. **Preserve the clean component structure**
7. **Follow TypeScript best practices**
8. **Update TODOs** as features are completed

This project prioritizes clean architecture, type safety, and user experience. All changes should maintain these principles while extending functionality.
