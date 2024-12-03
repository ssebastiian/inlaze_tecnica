import React, { useState } from 'react'
import { Box, Typography, TextField, InputAdornment, FormControl, InputLabel, Select, MenuItem } from '@mui/material'
import { SearchOutlined } from '@mui/icons-material'


const genres = [
    'Action', 'Adventure', 'Animation', 'Comedy', 'Crime', 'Documentary', 
    'Drama', 'Family', 'Fantasy', 'History', 'Horror', 'Music', 'Mystery'
  ];
  
export const MainLateral = () => {

    const [genre, setGenre] = useState('');
      
    return (
    
    <Box sx={{ width: '100%', bgcolor: '#333', p: 2, color: '#fff' }}>

        <Typography variant="h6" color="white" mb={2} mt={3}>
        Search
        </Typography>
        <TextField
        fullWidth
        placeholder="Keywords"
        variant="outlined"
        size="small"
        InputProps={{
            endAdornment: (
            <InputAdornment position="end">
                <SearchOutlined sx={{ color: '#fff' }} />
            </InputAdornment>
            ),
        }}
        sx={{
            bgcolor: '#444',
            input: { color: '#fff' },
            '.MuiOutlinedInput-notchedOutline': { borderColor: '#555' },
        }}
        />

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
