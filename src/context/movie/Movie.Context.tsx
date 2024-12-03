'use client'

import { IMovie, Results } from '@/interfaces';
import { createContext, useContext } from 'react'

interface ContextProps {
    
    movie?: Results;
    OneMovie?: IMovie;

    setMovies: (key: string) => Promise<void>;
    setUneMovie: (key: string, movie: string) => Promise<void>;

}

export const movieContext = createContext({} as ContextProps);
export const useMovie = () => useContext( movieContext );