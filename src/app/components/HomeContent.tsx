'use client';

import { useEffect } from 'react';
import Grid from '@mui/material/Grid2';
import { LayoutPrincipal } from '@/layouts/LayoutPrincipal';

import { CardPrincipal } from './CardPrincipal';
import { MainLateral } from './MainLateral';
import { CardSection } from './CardSection';
import { useMovie } from '@/context';


export const HomeContent = () => {

  const { movie, OneMovie, setMovies, setUneMovie } = useMovie();

  useEffect(() => {
    setMovies('53c529a91fe5cf5cc90471988fa1254f');
    setUneMovie('53c529a91fe5cf5cc90471988fa1254f','Kung Fu Panda 4')
  }, [setMovies, setUneMovie])
  
  return (
    <LayoutPrincipal>
      <CardPrincipal movie = {OneMovie}/>
      <Grid container spacing={0}>
        <Grid size={{ xs: 12, md: 2 }} >
          <MainLateral/>
        </Grid>
        <Grid size={{ xs: 12, md: 10 }} bgcolor={'#444444'} >
          <CardSection title='Popular' movies = {movie?.results}/>
          <CardSection title='Acción' movies = {movie?.results.filter((movie) =>movie.genre_ids.includes(28))}/>
          <CardSection title='horror' movies = {movie?.results.filter((movie) =>movie.genre_ids.includes(27))}/>
          <CardSection title='comedy' movies = {movie?.results.filter((movie) =>movie.genre_ids.includes(35))}/>
        </Grid>
      </Grid>
      
    </LayoutPrincipal>
  );
};
