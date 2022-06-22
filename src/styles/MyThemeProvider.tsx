import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { GlobalStyles } from './global-styles';
import { ChildrenProps } from '../types/global-types';
import { render } from '@testing-library/react';

export const MyThemeProvider: React.FC<ChildrenProps> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      {children}
      <GlobalStyles />
    </ThemeProvider>
  );
};
