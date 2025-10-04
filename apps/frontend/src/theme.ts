import { createTheme, type PaletteMode, type Theme } from '@mui/material/styles';

// Create theme based on mode
export const createAppTheme = (mode: PaletteMode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: '#667eea',
      },
      secondary: {
        main: '#764ba2',
      },
    },
    typography: {
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h5: {
        fontWeight: 600,
      },
      body1: {
        fontSize: '1.1rem',
        lineHeight: 1.8,
      },
    },
    components: {
      // Override Material-UI components for better dark mode
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            margin: 0,
            padding: 0,
            transition: 'background-color 0.3s ease, color 0.3s ease',
          },
        },
      },
    },
  });
};

// Theme-aware component styles
export const getComponentStyles = (theme: Theme) => ({
  root: {
    minHeight: '100vh',
    backgroundColor: theme.palette.background.default,
    transition: 'background-color 0.3s ease',
  },
  navTitle: {
    flexGrow: 1,
    fontWeight: 600,
  },
  navButton: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  darkModeButton: {
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
    },
  },
  hero: {
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white',
    py: 12,
    textAlign: 'center',
  },
  heroTitle: {
    fontWeight: 700,
    mb: 3,
  },
  heroSubtitle: {
    mb: 4,
    opacity: 0.9,
  },
  heroButton: {
    backgroundColor: 'white',
    color: '#667eea',
    px: 4,
    py: 1.5,
    borderRadius: 25,
    fontSize: '1.1rem',
    fontWeight: 600,
    '&:hover': {
      backgroundColor: '#f5f5f5',
      transform: 'translateY(-2px)',
      boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
    },
  },
  welcomeSection: {
    py: 8,
    backgroundColor: theme.palette.mode === 'light' ? '#f8f9fa' : '#0a0a0a',
  },
  sectionTitle: {
    mb: 6,
    fontWeight: 600,
  },
  contentCard: {
    p: 3,
    transition: 'background-color 0.3s ease',
  },
  contentText: {
    fontSize: '1.1rem',
    lineHeight: 1.8,
  },
});

// Theme detection and persistence utilities
export const getSystemTheme = (): PaletteMode => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
  return 'light';
};

export const getStoredTheme = (): PaletteMode | null => {
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme-mode');
    return (stored as PaletteMode) || null;
  }
  return null;
};

export const setStoredTheme = (mode: PaletteMode): void => {
  if (typeof window !== 'undefined') {
    localStorage.setItem('theme-mode', mode);
  }
};
