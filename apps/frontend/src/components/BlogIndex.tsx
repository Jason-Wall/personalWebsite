import React from 'react';
import { Box, Card, CardContent, Typography, Chip, Stack, Button } from '@mui/material';
import type { BlogPost } from '../utils/blog';

interface BlogIndexProps {
  posts: BlogPost[];
  onPostClick: (slug: string) => void;
}

export const BlogIndex: React.FC<BlogIndexProps> = ({ posts, onPostClick }) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', p: 3 }}>
      <Typography variant='h2' component='h1' gutterBottom>
        Blog
      </Typography>

      <Typography variant='h6' color='text.secondary' sx={{ mb: 4 }}>
        Thoughts on development, technology, and life
      </Typography>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)' },
          gap: 3,
        }}
      >
        {posts.map((post) => (
          <Card
            key={post.slug}
            sx={{
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              transition: 'transform 0.2s',
              '&:hover': {
                transform: 'translateY(-4px)',
                boxShadow: 3,
              },
            }}
          >
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant='h5' component='h2' gutterBottom>
                {post.meta.title}
              </Typography>

              <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
                {formatDate(post.meta.date)} {post.meta.author && `• by ${post.meta.author}`}
              </Typography>

              {post.meta.description && (
                <Typography variant='body2' sx={{ mb: 2, lineHeight: 1.6 }}>
                  {post.meta.description}
                </Typography>
              )}

              {post.meta.tags && post.meta.tags.length > 0 && (
                <Stack direction='row' spacing={1} flexWrap='wrap' sx={{ mb: 2 }}>
                  {post.meta.tags.slice(0, 3).map((tag) => (
                    <Chip key={tag} label={tag} size='small' variant='outlined' />
                  ))}
                  {post.meta.tags.length > 3 && (
                    <Chip label={`+${post.meta.tags.length - 3}`} size='small' variant='outlined' />
                  )}
                </Stack>
              )}

              <Button variant='outlined' onClick={() => onPostClick(post.slug)} sx={{ mt: 'auto' }}>
                Read More
              </Button>
            </CardContent>
          </Card>
        ))}
      </Box>

      {posts.length === 0 && (
        <Box sx={{ textAlign: 'center', py: 8 }}>
          <Typography variant='h6' color='text.secondary'>
            No blog posts yet. Check back soon!
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default BlogIndex;
