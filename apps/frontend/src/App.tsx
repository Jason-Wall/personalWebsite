import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import {
  createAppTheme,
  getComponentStyles,
  getSystemTheme,
  getStoredTheme,
  setStoredTheme,
} from './theme';

// Blog imports
import type { BlogPost } from './utils/blog';
import { sortPostsByDate, filterPublishedPosts } from './utils/blog';
import WelcomeBlogPost, {
  frontmatter as welcomeMeta,
} from './content/blog/2025-10-03-welcome-to-my-blog.mdx';
import AboutPage from './content/pages/about.mdx';

// Router components
import { HomePage } from './components/HomePage';
import { BlogPage } from './components/BlogPage';
import { BlogPostPage } from './components/BlogPostPage';
import { Navigation } from './components/Navigation';

function App() {
  // Initialize theme with stored preference, fallback to system, then light
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    return getStoredTheme() || getSystemTheme();
  });

  // Blog posts array
  const allPosts: BlogPost[] = [
    {
      meta: welcomeMeta,
      component: WelcomeBlogPost,
      slug: 'welcome-to-my-blog',
    },
  ];

  const publishedPosts = sortPostsByDate(filterPublishedPosts(allPosts));

  const theme = createAppTheme(themeMode);
  const styles = getComponentStyles(theme);

  // Listen for system theme changes
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      // Only update if user hasn't set a preference
      if (!getStoredTheme()) {
        setThemeMode(e.matches ? 'dark' : 'light');
      }
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleTheme = () => {
    const newMode = themeMode === 'light' ? 'dark' : 'light';
    setThemeMode(newMode);
    setStoredTheme(newMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={styles.root}>
          <Navigation styles={styles} themeMode={themeMode} onToggleTheme={toggleTheme} />

          <Routes>
            <Route path='/' element={<HomePage styles={styles} />} />
            <Route path='/blog' element={<BlogPage posts={publishedPosts} />} />
            <Route path='/blog/:slug' element={<BlogPostPage posts={allPosts} />} />
            <Route path='/about' element={<AboutPage />} />
          </Routes>
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
