import styled from 'styled-components';


export const Container = styled.footer`
    background: #FFF;
    position: absolute;
    bottom: 0;
    transform: translateY(60px);
    
    a {
        padding: 5px;
        color: var(--darkBlue);

        font-size: 14px;
        font-weight: bold;
        text-decoration: none;
        text-transform: uppercase;
    }
    small {
        margin-top: 5px;
        padding: 0 0 0 10px;

        font-size: 12px;
    }

    @media(max-width: 430px) {
        a, small {
            font-size: 10px;
        }
    }
`
