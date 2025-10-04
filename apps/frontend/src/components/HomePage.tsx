import React from 'react';
import { Box, Container, Typography, Button, Paper, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import type { SxProps, Theme } from '@mui/material/styles';

interface HomePageProps {
  styles: Record<string, SxProps<Theme>>;
}

export const HomePage: React.FC<HomePageProps> = ({ styles }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Hero Banner */}
      <Box sx={styles.hero}>
        <Container maxWidth='lg'>
          <Typography variant='h2' component='h1' gutterBottom sx={styles.heroTitle}>
            Welcome to My Blog
          </Typography>
          <Typography variant='h5' paragraph sx={styles.heroSubtitle}>
            Discover stories, thinking, and expertise from writers on any topic.
          </Typography>
          <Button
            variant='contained'
            size='large'
            sx={styles.heroButton}
            onClick={() => navigate('/blog')}
          >
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
                Whether you're here to learn something new, find inspiration, or simply enjoy a good
                read, I hope you'll find content that resonates with you. I believe in the power of
                storytelling and the importance of sharing knowledge and experiences with others.
              </Typography>
            </Paper>

            <Paper elevation={1} sx={styles.contentCard}>
              <Typography variant='body1' sx={styles.contentText}>
                Join me on this journey as we explore ideas, discover new perspectives, and build a
                community of curious minds. Feel free to browse through the different categories
                above to find topics that interest you most. Happy reading!
              </Typography>
            </Paper>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

export default HomePage;
