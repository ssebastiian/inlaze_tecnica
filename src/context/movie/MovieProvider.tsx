'use client'

import { FC, ReactNode, useReducer } from 'react';
import { movieContext, MovieReducer } from './';
import { IMovie, Results } from '@/interfaces';
import axios from 'axios';

export interface MovieProvider {
    children?: ReactNode;
    movie?: Results;
    OneMovie?: IMovie;
    OneIdMovie?: IMovie;
    RecommendationsMovies?:Results;
}

const MOVIE_INITIAL_STATE: MovieProvider = {
    movie: undefined,
    OneMovie: undefined,
    OneIdMovie: undefined,
    RecommendationsMovies:undefined
}

export const MovieProvider : FC<MovieProvider> = ({ children }) => {

    const [state, dispatch] = useReducer(MovieReducer, MOVIE_INITIAL_STATE)

    const setMovies = async( key : string ) => {

        try {
            const { data } = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=3`);
            dispatch({type:'[movie] - GetMovies', payload: data});
        } catch (error) {
            console.log('error',error);
        
        };

    };

    const setUneMovie = async( key : string, movie: string ) => {

        try {
            const { data }: { data: Results } = await axios.get(
                `https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${movie}&language=es-ES`
              );

              const movieData = data.results.find(
                (movieItem) => movieItem.title.toLowerCase() === movie.toLowerCase()
              );

              if (movieData) {
                dispatch({type:'[movie] - GetOneMovie', payload: movieData});
              }
            
        } catch (error) {
            console.log('error',error);
        };

    };

    const setIdMovie = async (key: string, movieId: string) => {
        try {

          const { data }: { data: IMovie } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}?api_key=${key}&language=es-ES`
          );
      
          if (data) {
            dispatch({ type: '[movie] - IdMovie', payload: data });
          }
        } catch (error) {
          console.log('error', error);
        }
    };

    const getRecommendations = async (movieId: string, apiKey: string) => {
        try {
          const { data }: { data: Results } = await axios.get(
            `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}&language=es-ES&page=1`
          );
          
          if (data) {
            dispatch({ type: '[movie] - RecommendationsMovies', payload: data });
          }

        } catch (error) {
          console.error("Error fetching recommendations:", error);
        }
      };
      

    const values = {
        ...state,

        setMovies,
        setUneMovie,
        setIdMovie,
        getRecommendations
    }

    return (
        <movieContext.Provider value={values}>
            {children}
        </movieContext.Provider>
    )
};