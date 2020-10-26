import styled, { keyframes } from 'styled-components';

const KeyFrameLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const Container = styled.div`
    width: 98%;
    min-height: 30%;
    margin: 0 auto;
    animation: ${KeyFrameLoading} .5s infinite alternate;
    

    * {
        color: #e5e5e5;
        background: #e5e5e5;   
    }
    main, header, footer {
        background: #FFF;
    }
    .img {
        min-width: 200px;
        height: 200px;
        margin: 0 30px 0 10px;
    }
    h1, h5 {
        padding: 2px 0;
    }
    h4 {
        font-weight: 400;
    }
    h5 {
        font-weight: 400;
        margin-bottom: 50px;
        font-size: 22px;
    }
    .btn {
        font-size: 14px;
        max-height: 33px;

        b {
            font-size: 20px;
        }
        &:hover {
            color: #e5e5e5;
        }
    }

    /* Media queries */
    @media(max-width: 600px) {
        .img {
            min-width: 120px;
            height: 120px;
        }
        h1 {
            font-size: 30px;
        }
        h4, h5 {
            font-size: 18px;
        }
    }
    @media(max-width: 430px) {
        .img {
            min-width: 90px;
            height: 90px;
            margin: 0 20px 0 0;
        }
        h1 {
            font-size: 25px;
        }
        h4, h5 {
            font-size: 16px;
        }
        footer {
            transform: translateX(-30px);
            width: 210px;
        }
        .btn {
            font-size: 12px;
            padding: 5px;
        }
    }
`