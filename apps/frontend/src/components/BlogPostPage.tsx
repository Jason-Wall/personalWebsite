import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import type { BlogPost } from '../utils/blog';

interface BlogPostPageProps {
  posts: BlogPost[];
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ posts }) => {
  const { slug } = useParams<{ slug: string }>();

  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to='/blog' replace />;
  }

  const PostComponent = post.component;
  return <PostComponent />;
};

export default BlogPostPage;
