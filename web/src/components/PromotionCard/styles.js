import styled from 'styled-components';

export const Container = styled.div`
    width: 98%;
    min-height: 30%;
    margin: 0 auto;

    img {
        max-width: 200px;
        max-height: 200px;
        margin: 0 30px 0 10px;
    }
    h1, h5 {
        color: var(--gray);
        padding: 2px 0;
    }
    h4 {
        color: #444;
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
            background-color: #FFF;
            color: #17A2B8;

            &.px-1.ml-1.border-0 {
                color: #FF3375;
            }
        }
    }

    /* Media queries */
    @media(max-width: 600px) {
        img {
            max-width: 120px;
            max-height: 120px;
        }
        h1 {
            font-size: 30px;
        }
        h4, h5 {
            font-size: 18px;
        }
    }
    @media(max-width: 430px) {
        img {
            max-width: 90px;
            max-height: 90px;
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