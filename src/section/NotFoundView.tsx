'use client'

import React from 'react'
import Image from 'next/image';
import { LayoutPrincipal } from '@/layouts/LayoutPrincipal'
import { Box, Button, Typography } from '@mui/material'


export const NotFoundView = () => {
  return (
    <LayoutPrincipal>
        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" mt={10} gap={3}>
            <Typography variant="h3" paragraph color={'white'}>
                ¡Página no encontrada!
            </Typography>
            <Typography sx={{ color: 'white' }}>
                Lo sentimos, no pudimos encontrar la página que estás buscando. ¿Quizás has escrito mal la URL?
            </Typography>
            <Image
                src={'/image/Quickbet.png'}
                alt='image principal'
                width={250}
                height={70}
                objectFit="cover"
              />
            <Button  href="/" size="large" color="inherit" variant="contained">
            Ir al inicio
            </Button>
        </Box>
      
    </LayoutPrincipal>
  )
}
