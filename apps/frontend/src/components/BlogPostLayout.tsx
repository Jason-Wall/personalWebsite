import React from 'react';
import { Box, Typography, Chip, Stack } from '@mui/material';

interface BlogPostLayoutProps {
  title: string;
  date: string;
  description?: string;
  tags?: string[];
  author?: string;
  children: React.ReactNode;
}

export const BlogPostLayout: React.FC<BlogPostLayoutProps> = ({
  title,
  date,
  description,
  tags = [],
  author,
  children,
}) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <Box sx={{ maxWidth: 800, mx: 'auto', p: 3 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant='h3' component='h1' gutterBottom>
          {title}
        </Typography>

        <Typography variant='body2' color='text.secondary' sx={{ mb: 2 }}>
          {formatDate(date)} {author && `• by ${author}`}
        </Typography>

        {description && (
          <Typography variant='h6' color='text.secondary' sx={{ mb: 2, fontWeight: 400 }}>
            {description}
          </Typography>
        )}

        {tags.length > 0 && (
          <Stack direction='row' spacing={1} flexWrap='wrap'>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} size='small' variant='outlined' />
            ))}
          </Stack>
        )}
      </Box>

      {/* Content */}
      <Box
        sx={{
          '& h1, & h2, & h3, & h4, & h5, & h6': {
            mt: 3,
            mb: 2,
          },
          '& p': {
            mb: 2,
            lineHeight: 1.7,
          },
          '& pre': {
            backgroundColor: 'grey.100',
            p: 2,
            borderRadius: 1,
            overflow: 'auto',
          },
          '& code': {
            backgroundColor: 'grey.100',
            px: 0.5,
            borderRadius: 0.5,
            fontSize: '0.875em',
          },
          '& blockquote': {
            borderLeft: 4,
            borderColor: 'primary.main',
            pl: 2,
            ml: 0,
            fontStyle: 'italic',
            color: 'text.secondary',
          },
          '& img': {
            maxWidth: '100%',
            height: 'auto',
            borderRadius: 1,
          },
          '& ul, & ol': {
            mb: 2,
            pl: 3,
          },
          '& li': {
            mb: 0.5,
          },
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default BlogPostLayout;
