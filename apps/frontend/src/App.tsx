import { useState, useEffect } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  Paper,
  Stack,
  IconButton,
  CssBaseline,
} from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { Brightness4, Brightness7 } from '@mui/icons-material';
import {
  createAppTheme,
  getComponentStyles,
  getSystemTheme,
  getStoredTheme,
  setStoredTheme,
} from './theme';

function App() {
  const navCategories = ['Technology', 'Lifestyle', 'Travel', 'Food', 'About'];

  // Initialize theme with stored preference, fallback to system, then light
  const [themeMode, setThemeMode] = useState<'light' | 'dark'>(() => {
    return getStoredTheme() || getSystemTheme();
  });

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
      <Box sx={styles.root}>
        {/* Navigation Bar */}
        <AppBar position='sticky' elevation={1}>
          <Toolbar>
            <Typography variant='h5' component='div' sx={styles.navTitle}>
              My Blog
            </Typography>
            <Stack direction='row' spacing={2} alignItems='center'>
              {navCategories.map((category) => (
                <Button key={category} color='inherit' sx={styles.navButton}>
                  {category}
                </Button>
              ))}
              <IconButton
                onClick={toggleTheme}
                sx={styles.darkModeButton}
                aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
              >
                {themeMode === 'dark' ? <Brightness7 /> : <Brightness4 />}
              </IconButton>
            </Stack>
          </Toolbar>
        </AppBar>

        {/* Hero Banner */}
        <Box sx={styles.hero}>
          <Container maxWidth='lg'>
            <Typography variant='h2' component='h1' gutterBottom sx={styles.heroTitle}>
              Welcome to My Blog
            </Typography>
            <Typography variant='h5' paragraph sx={styles.heroSubtitle}>
              Discover stories, thinking, and expertise from writers on any topic.
            </Typography>
            <Button variant='contained' size='large' sx={styles.heroButton}>
              Start Reading
            </Button>
          </Container>
        </Box>

        {/* Welcome Content */}
        <Box sx={styles.welcomeSection}>
          <Container maxWidth='lg'>
            <Typography
              variant='h3'
              component='h2'
              align='center'
              gutterBottom
              sx={styles.sectionTitle}
            >
              About This Blog
            </Typography>

            <Stack spacing={3}>
              <Paper elevation={1} sx={styles.contentCard}>
                <Typography variant='body1' paragraph sx={styles.contentText}>
                  Welcome to my corner of the internet! This blog is a space where I share my
                  thoughts, experiences, and insights on various topics that fascinate me. From
                  cutting-edge technology and innovative solutions to personal lifestyle tips and
                  adventures around the world.
                </Typography>
              </Paper>

              <Paper elevation={1} sx={styles.contentCard}>
                <Typography variant='body1' paragraph sx={styles.contentText}>
                  Whether you're here to learn something new, find inspiration, or simply enjoy a
                  good read, I hope you'll find content that resonates with you. I believe in the
                  power of storytelling and the importance of sharing knowledge and experiences with
                  others.
                </Typography>
              </Paper>

              <Paper elevation={1} sx={styles.contentCard}>
                <Typography variant='body1' sx={styles.contentText}>
                  Join me on this journey as we explore ideas, discover new perspectives, and build
                  a community of curious minds. Feel free to browse through the different categories
                  above to find topics that interest you most. Happy reading!
                </Typography>
              </Paper>
            </Stack>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
