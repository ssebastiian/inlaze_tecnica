'use client'
/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useEffect } from 'react'
import { Box } from '@mui/material';
import { LayoutPrincipal } from '@/layouts/LayoutPrincipal';
import { MovieDescriptionCard } from './MovieDescriptionCard';
import { CardSection } from '@/app/components/CardSection';
import { useMovie } from '@/context';

interface Props {
    idMovie : string;
}

export const MovieContent:FC<Props> = ({ idMovie }) => {

    const { OneIdMovie,RecommendationsMovies, setIdMovie,getRecommendations } = useMovie();
  
// eslint-disable-next-line react-hooks/exhaustive-deps
useEffect(() => {
  setIdMovie('53c529a91fe5cf5cc90471988fa1254f', idMovie);
  getRecommendations(idMovie, '53c529a91fe5cf5cc90471988fa1254f');
}, []);


  return (
    <LayoutPrincipal>
      <MovieDescriptionCard movie = { OneIdMovie }/>
      <Box bgcolor={'#444444'} >
        <CardSection title='Recomendados' movies={RecommendationsMovies?.results} />
      </Box>
    </LayoutPrincipal>
  )
}