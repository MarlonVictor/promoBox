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
        margin: 0 auto;
        position: relative;
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

        &.home {
            font-size: 35px;

            @media(max-width: 500px){
                font-size: 20px;
                transform: translateY(10px);
            }
        }
    }
    h6 {
        @media(max-width: 500px){
            display: none;
        }
    }
    button.send {
        background: var(--darkBlue);
        transition: .3s;

        &:hover {
            filter: brightness(90%);
        }
    }
    a.back {
        background: #E0E7ED;
        border: 1px solid #ccd5dd;
        transition: .3s;

        &:hover {
            filter: brightness(90%);
        }
    }
    div.bg-white, .alert {
        max-width: 850px;
    }
`