'use cliente'
import { Theme } from '@mui/material';
import { createContext, useContext } from 'react';

interface ContextProps {
  currentTheme: Theme;
  // Methods
  toggleMode: (newUsedTheme: Theme) => void
}

export const ThemeToggleContext = createContext({} as ContextProps);
export const useThemeToggle = () => useContext(ThemeToggleContext);
