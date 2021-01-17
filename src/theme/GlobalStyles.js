import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  
  body {
    font-family: 'Josefin Sans', sans-serif;
    font-size: 1.6rem; // happy rems
    overflow-x: hidden;
    margin: 0;
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 0;
    background:#f8f9fa;
  }
`;

export default GlobalStyles;
