import React, { FC } from 'react';
import { Box, Card, CardContent, Typography, IconButton, CircularProgress, CardMedia, useTheme, alpha } from '@mui/material';
import FavoriteOutlined from '@mui/icons-material/FavoriteOutlined';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination, Navigation } from 'swiper/modules';
import { IMovie } from '@/interfaces';

interface Props {
  title?: string;
  movies?: IMovie[];
}

export const CardSection: FC<Props> = ({ movies, title }) => {
  const theme = useTheme();
  
  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h5" fontWeight="bold" color='white' marginBottom={2}>{ title }</Typography>

      { movies && movies.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true }} 
          breakpoints={{
            320: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            960: { slidesPerView: 3 },
            1280: { slidesPerView: 5 },
          }}
          style={{ padding: '15px 0' }}
        >
          {movies.map((movie, index) => (
            <SwiperSlide key={index}>
              <Card
                sx={{
                  bgcolor: '#211b1b',
                  color: '#fff',
                  borderRadius: 2,
                  boxShadow: 3,
                  maxWidth: 280,
                  ml:1,
                  '&:hover': {
                    transform: 'scale(1.05)',
                    boxShadow: `0 0 20px ${alpha(theme.palette.secondary.main, 0.5)}`,
                },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`}
                  alt={movie.title}
                />
                <CardContent>
                  <Typography variant="subtitle1" fontWeight="bold">
                    {movie.title}
                  </Typography>
                  <Typography variant="body2" color="#aaa">
                    {movie.release_date}
                  </Typography>

                  <Box display="flex" alignItems="center" justifyContent="center" mt={2} gap={5}>
                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Typography mb={2}>Rating</Typography>
                      <Box display="flex" alignItems="center" position="relative">
                        <CircularProgress
                          variant="determinate"
                          value={movie.vote_average}
                          sx={{ color: '#00FF00', width: 40, height: 40 }}
                        />
                        <Box
                          sx={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <Typography variant="caption" fontWeight="bold" color="#fff">
                            {movie.vote_average}%
                          </Typography>
                        </Box>
                      </Box>
                    </Box>

                    <Box display="flex" flexDirection="column" justifyContent="center">
                      <Typography mb={2}>Favorites</Typography>
                      <IconButton sx={{ color: '#fff' }}>
                        <FavoriteOutlined />
                      </IconButton>     
                    </Box> 
                  </Box>
                </CardContent>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Box display="flex" justifyContent="center" alignItems="center" height="300px">
          <CircularProgress color="secondary" />
        </Box>
      )}
    </Box>
  );
};
