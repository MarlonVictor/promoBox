import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --whiteIce: #F5F5F5;
        --white: #fff;
        --pink: #FF3375;
        --gray: #AAA;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
    }
    ul {
        list-style: none;
    }
`