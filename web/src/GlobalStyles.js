import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --whiteIce: #F5F5F5;
        --pink: #FF3375;
        --gray: #999;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        min-height: 100%;
        max-width: 850px;
        margin: 0 auto;
    }
    ul {
        list-style: none;
    }
`