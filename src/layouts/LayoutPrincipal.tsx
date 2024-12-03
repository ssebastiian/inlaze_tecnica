'use client'

import { FC } from "react";
import { Box } from "@mui/material";
import { MainPrincipal } from "@/app/components/MainPrincipal";


interface Props {
    children: React.ReactNode
};

export const LayoutPrincipal:FC<Props> = ({ children }) => {
    
    return(
        <Box 
            display="flex" 
            flexDirection="column" 
            minHeight="100vh"
            bgcolor="black"
        >   
            <MainPrincipal/>

            <Box> { children } </Box>    

        </Box>
    );
};