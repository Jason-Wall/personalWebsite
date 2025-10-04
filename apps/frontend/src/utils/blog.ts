// Utility functions for working with blog posts

export interface BlogPostMeta {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  author?: string;
  slug?: string;
  featured?: boolean;
  draft?: boolean;
}

export interface BlogPost {
  meta: BlogPostMeta;
  component: React.ComponentType;
  slug: string;
}

// Helper to generate slug from filename or frontmatter
export const generateSlug = (filename: string, frontmatterSlug?: string): string => {
  if (frontmatterSlug) return frontmatterSlug;

  // Extract slug from filename (remove .mdx extension and date prefix)
  return filename
    .replace(/\.mdx$/, '')
    .replace(/^\d{4}-\d{2}-\d{2}-/, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
};

// Sort posts by date (newest first)
export const sortPostsByDate = (posts: BlogPost[]): BlogPost[] => {
  return posts.sort((a, b) => new Date(b.meta.date).getTime() - new Date(a.meta.date).getTime());
};

// Filter out draft posts in production
export const filterPublishedPosts = (posts: BlogPost[]): BlogPost[] => {
  return posts.filter((post) => !post.meta.draft);
};

// Get posts by tag
export const getPostsByTag = (posts: BlogPost[], tag: string): BlogPost[] => {
  return posts.filter((post) => post.meta.tags?.includes(tag));
};

// Get featured posts
export const getFeaturedPosts = (posts: BlogPost[]): BlogPost[] => {
  return posts.filter((post) => post.meta.featured);
};
