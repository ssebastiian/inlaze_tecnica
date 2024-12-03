'use client'

import React, { useMemo, useState } from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { Box, Typography, TextField, FormControl, InputLabel, Select, MenuItem, useTheme, Autocomplete } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'
import { useMovie } from '@/context';


const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 
    'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery'
  ];
  
export const MainLateral = () => {

    const theme = useTheme();
    const [genre] = useState('');
    const [inputValue, setInputValue] = useState('');
    const { movie } = useMovie();

    const filteredOptions = useMemo(() => {
        if (!movie?.results || !Array.isArray(movie.results)) {
          return [];
        }
      
        if (inputValue === '') {
          return movie.results.slice(0, 3);
        }
      
        return movie.results.filter(option =>
          option.title.toLowerCase().includes(inputValue.toLowerCase())
        );
      }, [inputValue, movie]);
      
      
    return (
    
    <Box sx={{ width: '100%', bgcolor: '#333', p: 2, color: '#fff' }}>

        <Typography variant="h4" color="white" mb={2} mt={3}>
        Search
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', position: 'relative', width: '100%',}}>
            <Autocomplete
              freeSolo
              options={filteredOptions!}
              getOptionLabel={(option) => typeof option === 'string' ? option : option.title}
              renderOption={(props, option) => {
                const { key, ...restProps } = props;
              
                return (
                  <li key={key} {...restProps}>
                    <Link
                      href={`/movie/${option.id}`}
                      passHref
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        textDecoration: 'none',
                        color: 'inherit',
                      }}
                    >
                      <Box sx={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                        <Image 
                          src={`https://image.tmdb.org/t/p/w500/${option.backdrop_path}`}
                          alt={option.title || 'Sin título'}
                          width={50}
                          height={50}
                          objectFit="cover"
                          style={{ marginRight: 10 }}
                        />
                        <Typography variant="body2">{option.title || 'Sin título'}</Typography>
                      </Box>
                    </Link>
                  </li>
                );
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  placeholder="Buscar ..."
                  variant="outlined"
                  size="small"
                  sx={{
                    backgroundColor: 'white',
                    width: 280,
                    '& .MuiOutlinedInput-root': {
   
                      '&:hover fieldset': {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: theme.palette.secondary.main,
                        borderWidth: '2px',
                      },
                    },
                    '& .MuiInputBase-input': {
                      padding: '8px 12px',
                    },
                  }}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <React.Fragment>
                        {params.InputProps.endAdornment}
                        <SearchOutlined/>
                      </React.Fragment>
                    ),
                  }}  />
              )}
              onInputChange={(event, newInputValue) => {
                setInputValue(newInputValue);
              }}
            />
        </Box>

        <Typography variant="h6" color="white" mt={3} mb={2}>
        Genres
        </Typography>

        <FormControl fullWidth size="small" variant="outlined" sx={{ bgcolor: '#444' }}>
        <InputLabel sx={{ color: '#fff' }}>Selecciona Genero</InputLabel>
        <Select
            value={genre}
            label="Select Genre"
            sx={{
            color: '#fff',
            '.MuiOutlinedInput-notchedOutline': { borderColor: '#555' },
            }}
            MenuProps={{
            PaperProps: {
                sx: {
                bgcolor: '#333',
                color: '#fff',
                '& .MuiMenuItem-root': {
                    '&:hover': { bgcolor: '#444' },
                },
                },
            },
            }}
        >
            {genres.map((g) => (
            <MenuItem key={g} value={g}>
                {g}
            </MenuItem>
            ))}
        </Select>
        </FormControl>
    </Box>
   )
}
