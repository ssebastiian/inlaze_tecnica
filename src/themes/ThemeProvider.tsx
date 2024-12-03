import React, { FC, ReactNode, useState } from 'react';

import { lightTheme, ThemeToggleContext } from '@/themes';
import { Theme } from '@mui/material';


export interface ThemeToggleState {
  children?: ReactNode;
  currentTheme?: Theme;
}

export const THEME_STATE_INITIAL_STATE: ThemeToggleState = {
  currentTheme: lightTheme,
};

export const ThemeToggleProvider: FC<ThemeToggleState> = ({ children }) => {
  const [mode, setMode] = useState(lightTheme);

  const toggleMode = (newUsedTheme: Theme) => {

    setMode(newUsedTheme);
  };

  const values = {
    // States
    currentTheme: mode,
    // Methods
    toggleMode,
  };

  return (
    <ThemeToggleContext.Provider value={values}>
      {children}
    </ThemeToggleContext.Provider>
  );
};                                                                                                                  