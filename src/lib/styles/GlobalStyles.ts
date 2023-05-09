import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

html {
  box-sizing: border-box;
  font-family: ${({ theme }) => theme.font.family};
  font-size: 62.5%;
  font-weight: ${({ theme }) => theme.font.weight400};
  color: ${({ theme }) => theme.colors.darkBlue};
  width: 100%;
  height: 100%;
}

body {
  background-color: ${({ theme }) => theme.colors.background};
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;
}

#root {
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
}
`;
