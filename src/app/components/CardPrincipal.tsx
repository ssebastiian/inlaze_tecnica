'use client'
import React, { FC } from 'react';
import { Card, CardMedia, CardContent, Box, Typography, IconButton, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import { FavoriteOutlined } from '@mui/icons-material';
import { IMovie } from '@/interfaces';

interface Props {
    movie?: IMovie;
}

export const CardPrincipal: FC<Props> = ({ movie }) => {

  return (
    <Card sx={{ display: 'flex', position: 'relative', overflow: 'hidden', boxShadow: 3, mt: 8 }}>
      {movie ? (
        <>
          <CardMedia
            component="img"
            image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
            alt="Kung Fu Panda 4"
            sx={{
              width: '100%',
              height: 500,
              objectFit: 'cover',
              filter: 'brightness(0.8)',
            }}
          />

          <CardContent
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              position: 'absolute',
              bottom: 0,
              color: '#fff',
              width: '100%',
              background: 'linear-gradient(to top, rgba(0, 0, 0, 1) 70%, rgba(0, 0, 0, 0) 100%)',
              paddingX: 5,
            }}
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, md: 8 }} mb={2} >
                <Typography variant="h4" fontWeight="bold">
                  {movie.title}
                </Typography>
                <Typography variant="body1">
                  {movie.overview || 'No description available.'}
                </Typography>
              </Grid>
              <Grid size={{ xs: 12, md: 4 }} >
                <Box display={{ xs: 'none', md: 'flex' }} justifyContent="flex-end" gap={4} mt={5}>
                  <IconButton sx={{ color: '#fff' }}>
                    <FavoriteOutlined />
                  </IconButton>
                  <Box display={{ xs: 'none', md: 'inline-flex' }} position="relative">
                    <CircularProgress variant="determinate" value={97} size={60} sx={{ color: '#00FF00' }} />
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
                        97%
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </CardContent>
        </>
      ) : (
        <Box
          sx={{
            width: '100%',
            height: 450,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#333',
          }}
        >
          <CircularProgress size={60} sx={{ color: '#00FF00' }} />
        </Box>
      )}
    </Card>
  );
};
