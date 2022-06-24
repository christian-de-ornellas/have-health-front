import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
html{
    font-size: 16px;
    font-family: 'Montserrat Alternates', sans-serif;
}
body{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

.leaflet-container{
    width: 100vw;
    height: 100vh;
}
`;
