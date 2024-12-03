'use client'

import { IMovie, Results } from '@/interfaces';
import { MovieProvider } from './'

type movieActionType = 
| { type: '[movie] - GetMovies', payload:Results }
| { type: '[movie] - GetOneMovie', payload:IMovie}
| { type: '[movie] - IdMovie', payload:IMovie}
| { type: '[movie] - RecommendationsMovies', payload:Results }


export const MovieReducer = (state: MovieProvider, action:movieActionType):MovieProvider => {

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
        
        case '[movie] - IdMovie':
            return{
                ...state,
                OneIdMovie: action.payload,
            }

        case '[movie] - RecommendationsMovies':
            return{
                ...state,
                RecommendationsMovies: action.payload,
            }

        default:
            return state;
    }

}