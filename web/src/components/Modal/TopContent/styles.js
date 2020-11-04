import styled from 'styled-components';

export const Container = styled.div`
    padding: 10px;
    padding-bottom: 0;

    img {
        width: 35px;
        height: 35px;
    }
    b {
        color: #555;
        font-size: 16px;
        
        transform: translate(10px, 5px);
        margin-bottom: 20px; 
    }
    textarea {
        width: 95%;
        height: 80px;
        padding: 5px;

        font-size: 14px;
        outline: none;

        @media(max-width: 425px) {
            width: 100%
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