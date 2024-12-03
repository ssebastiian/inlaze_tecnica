'use client'

import { FC, ReactNode, useReducer } from 'react';
import { movieContext, MovieReducer } from './';
import { IMovie, Results } from '@/interfaces';
import { ValidateErrors } from '@/utils';
import axios from 'axios';

export interface movieState {
    children?: ReactNode;
    movie?: Results;
    OneMovie?: IMovie;
}

const MOVIE_INITIAL_STATE: movieState = {
    movie: undefined,
    OneMovie: undefined
}

export const movieProvider : FC<movieState> = ({ children }) => {

    const [state, dispatch] = useReducer(MovieReducer, MOVIE_INITIAL_STATE)

    const setMovies = async( key : string ) => {

        try {
            const { data } = await  axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=es-ES&page=3`);
            dispatch({type:'[movie] - GetMovies', payload: data});
        } catch (error) {
            const axiosError = await ValidateErrors(error);

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
            const axiosError = await ValidateErrors(error);

        };

    };

    const values = {
        ...state,

        setMovies,
        setUneMovie
    }

    return (
        <movieContext.Provider value={values}>
            {children}
        </movieContext.Provider>
    )
};