import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BlogIndex } from './BlogIndex';
import type { BlogPost } from '../utils/blog';

interface BlogPageProps {
  posts: BlogPost[];
}

export const BlogPage: React.FC<BlogPageProps> = ({ posts }) => {
  const navigate = useNavigate();

  const handlePostClick = (slug: string) => {
    navigate(`/blog/${slug}`);
  };

  return <BlogIndex posts={posts} onPostClick={handlePostClick} />;
};

export default BlogPage;
