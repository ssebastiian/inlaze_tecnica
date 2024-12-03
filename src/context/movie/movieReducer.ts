'use client'

import { IMovie, Results } from '@/interfaces';
import { movieState } from './'

type movieActionType = 
| { type: '[movie] - GetMovies', payload:Results }
| { type: '[movie] - GetOneMovie', payload:IMovie}

export const MovieReducer = (state: movieState, action:movieActionType):movieState => {

    switch (action.type) {
        case '[movie] - GetMovies':
            return{
                ...state,
                movie: action.payload,
            }
        
        case '[movie] - GetOneMovie':
            return{
                ...state,
                OneMovie: action.payload,
            }

        default:
            return state;
    }

}