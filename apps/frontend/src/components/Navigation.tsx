import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Stack, IconButton } from '@mui/material';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import type { SxProps, Theme } from '@mui/material/styles';

interface NavigationProps {
  styles: Record<string, SxProps<Theme>>;
  themeMode: 'light' | 'dark';
  onToggleTheme: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({ styles, themeMode, onToggleTheme }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const navCategories = ['Technology', 'Lifestyle', 'Travel', 'Food'];

  const handleNavClick = () => {
    // TODO: Implement category filtering for blog posts
    // Future implementation could:
    // 1. Add category parameter back: handleNavClick = (category: string) => { ... }
    // 2. Navigate to filtered blog views: navigate(`/blog?category=${category}`)
    // 3. Update BlogPage component to handle category filtering
    // 4. Filter posts by category in the blog utils
    // For now, just navigate to home for these categories
    navigate('/');
  };

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <AppBar position='sticky' elevation={1}>
      <Toolbar>
        <Typography
          variant='h5'
          component='div'
          sx={styles.navTitle}
          onClick={() => navigate('/')}
          style={{ cursor: 'pointer' }}
        >
          My Blog
        </Typography>
        <Stack direction='row' spacing={2} alignItems='center'>
          <Button
            color='inherit'
            sx={styles.navButton}
            onClick={() => navigate('/blog')}
            style={{
              fontWeight:
                isActive('/blog') || location.pathname.startsWith('/blog/') ? 'bold' : 'normal',
            }}
          >
            Blog
          </Button>
          {navCategories.map((category) => (
            <Button key={category} color='inherit' sx={styles.navButton} onClick={handleNavClick}>
              {category}
            </Button>
          ))}
          <Button
            color='inherit'
            sx={styles.navButton}
            onClick={() => navigate('/about')}
            style={{
              fontWeight: isActive('/about') ? 'bold' : 'normal',
            }}
          >
            About
          </Button>
          <IconButton
            onClick={onToggleTheme}
            sx={styles.darkModeButton}
            aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
          >
            {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navigation;
