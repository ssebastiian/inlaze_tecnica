'use client'

import { IMovie, Results } from '@/interfaces';
import { createContext, useContext } from 'react'

interface ContextProps {
    
    movie?: Results;
    OneMovie?: IMovie;
    OneIdMovie?: IMovie;
    RecommendationsMovies?:Results;

    setMovies: (key: string) => Promise<void>;
    setUneMovie: (key: string, movie: string) => Promise<void>;
    setIdMovie: (key: string, movieId: string) => Promise<void>;
    getRecommendations: (movieId: string, apiKey: string) => Promise<void>;

}

export const movieContext = createContext({} as ContextProps);
export const useMovie = () => useContext( movieContext );