import styled from 'styled-components';


export const Top = styled.div`
    border-bottom: 1px #F5F5F5 solid;
    align-items: center;

    h1, a {
        border-right: 1px #F5F5F5 solid;
        padding: 20px 30px;
        margin: 0;

        &:last-child {
            border-right: none;
        }
        @media(max-width: 400px) {
            padding: 15px 20px;
        }

    }
    a {
        cursor: pointer;
    }
`

export const Bottom = styled.nav`
    border-bottom: 1px #F5F5F5 solid;
    
    p {
        margin: 0;
        padding: 20px 30px;

        @media(max-width: 600px) {
            font-size: 14px;
            padding: 20px 15px;
        }
        @media(max-width: 400px) {
            padding: 20px 8px;
        }
    }
`