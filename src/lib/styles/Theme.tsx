import { FC, ReactNode } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components';

const theme: DefaultTheme = {
  colors: {
    darkBlue: 'hsl(213, 96%, 18%)',
    blue: 'hsl(243, 100%, 62%)',
    lightBlue: 'hsl(228, 100%, 84%)',
    darkGray: 'hsl(231, 11%, 63%)',
    gray: 'hsl(229, 24%, 87%)',
    lightGray: 'hsl(217, 100%, 97%)',
    white: 'hsl(0, 0%, 100%)',
    red: 'hsl(354, 84%, 57%)',
    background: 'hsl(206, 94%, 87%)'
  },
  font: {
    family: '"Ubuntu", sans-serif',
    weight400: '400',
    weight500: '500',
    weight700: '700'
  },
  layout: {
    gapLittle: '0.5rem',
    gapSmall: '1.5rem',
    gapMedium: '3rem',
    gapBig: '5rem',
    radius: '7.5px',
    radiusCard: '15px'
  }
};

interface ThemeProps {
  children: ReactNode;
}

export const Theme: FC<ThemeProps> = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);
