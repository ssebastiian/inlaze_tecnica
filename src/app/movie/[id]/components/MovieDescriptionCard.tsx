'use client';

import React, { FC } from 'react';
import { Box, Button, Card, CardContent, CardMedia, CircularProgress, IconButton, Typography } from '@mui/material';
import { ConfirmationNumberOutlined, FavoriteOutlined, PlayArrowOutlined } from '@mui/icons-material';
import Grid from '@mui/material/Grid2';
import { IMovie } from '@/interfaces';

interface Props {
  movie?: IMovie;
}

export const MovieDescriptionCard: FC<Props> = ({ movie }) => {

  if (!movie) {
    return (
      <Box>
        <Typography variant="h6" color="textSecondary">
          No movie information available.
        </Typography>
      </Box>
    );
  }

  return (
    <Card sx={{ display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: 3, mt: 8 }}>

      <CardMedia
        component="img"
        image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
        alt={movie.title}
        sx={{
          width: '100%',
          height: 560,
          objectFit: 'cover',
          filter: 'brightness(0.8)',
        }}
      />

      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'absolute',
          bottom: 0,
          color: '#fff',
          width: '100%',
          background: 'linear-gradient(to top, rgba(0, 0, 0, 0.7) 70%, rgba(0, 0, 0, 0) 100%)',
          padding: 4,
        }}
      >
        <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} gap={10}>

          <Box display="flex" flexDirection="column" gap={2} mt={5}>
            <CardMedia
              component="img"
              image={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              alt={movie.title}
              sx={{
                width: '305px',
                height: '395px',
                objectFit: 'cover',
              }}
            />
            <Button
              fullWidth
              variant="contained"
              endIcon={<PlayArrowOutlined />}
              color="secondary"
              sx={{ p: 2 }}
            >
              Official Trailer
            </Button>
          </Box>

          <Box display="flex" flexDirection="column" gap={2}>
            <Typography variant="h1" component="h1" color="white" mt={5}>
              {movie.title} ({movie.release_date.split('-')[0]})
            </Typography>

            <Box display="flex" gap={5}>
              <Typography variant="h3">{new Date(movie.release_date).toLocaleDateString()}</Typography>
              <Typography variant="h3">{movie.release_date} min</Typography>
            </Box>

            <Typography variant="h5" color="white">
              Descripción:
            </Typography>
            <Typography variant="subtitle1" component="p" color="white">
              {movie.overview}
            </Typography>

            <Box display={{ xs: 'none', md: 'flex' }} justifyContent="space-between" gap={4} mt={5}>
              <Box display="flex" justifyContent="center" alignItems="center" gap={3}>
                <Box display={{ xs: 'none', md: 'inline-flex' }} position="relative">
                  <CircularProgress variant="determinate" value={movie.vote_average * 10} size={60} sx={{ color: '#00FF00' }} />
                  <Box
                    sx={{
                      top: 0,
                      left: 0,
                      bottom: 0,
                      right: 0,
                      position: 'absolute',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Typography variant="h2" component="div" color="#fff" fontWeight="bold">
                      {Math.round(movie.vote_average * 10)}%
                    </Typography>
                  </Box>
                </Box>
                <Typography textAlign="center">User Score</Typography>
              </Box>
              <IconButton sx={{ color: '#fff' }}>
                <FavoriteOutlined />
              </IconButton>
            </Box>

            <Box mt={5}>
              <Grid container spacing={2}>
                {movie.genres.map((label, index) => (
                  <Grid size={{ xs: 6,sm:4, md: 2.4 }} key={index}>
                    <Button
                      fullWidth
                      variant="outlined"
                      color="secondary"
                      startIcon={<ConfirmationNumberOutlined />}
                    >
                      {label.name}
                    </Button>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};