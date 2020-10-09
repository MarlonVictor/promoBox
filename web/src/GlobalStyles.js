import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    :root {
        --whiteIce: #F5F5F5;
        --pink: #FF3375;
        --gray: #999;
        --darkBlue: #32549e;
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
    h1.logo {
        color: var(--pink);
        font-size: 50px;

        @media(max-width: 500px){
            font-size: 40px;
        }
    }
    h6 {
        @media(max-width: 500px){
            display: none;
        }
    }
    button.send {
        background: var(--darkBlue);
    }
    a.back {
        background: #E0E7ED;
        border: 1px solid #ccd5dd;
    }
`