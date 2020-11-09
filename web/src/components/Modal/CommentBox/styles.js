import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    padding-bottom: 0;

    img {
        width: 35px;
        height: 35px;

        @media(max-width: 425px) {
            width: 30px;
            height: 30px;
        }
    }
    b {
        color: #555;
        font-size: 16px;
        
        transform: translate(10px, 5px);
        margin-bottom: 20px;

        @media(max-width: 425px) {
            font-size: 16px;
        }
    }
    textarea {
        width: 95%;
        height: 80px;
        padding: 5px;

        font-size: 14px;
        outline: none;

        @media(max-width: 425px) {
            width: 100%;
            height: 60px;
        }
    }
    button.btn {
        max-height: 33px;
        margin-bottom: -10px;

        font-size: 14px;
        border: none;

        &:hover {
            background-color: #F5F5F5;
            color: #007BFF;
        }
    }
`