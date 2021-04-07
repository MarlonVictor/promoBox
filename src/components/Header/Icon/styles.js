import styled from 'styled-components';


export const Icon = styled.a`
    svg {
        color: var(--gray);
        border: 3px solid var(--gray);
        border-radius: 50px;
        padding: 10px;
        width: 50px;
        height: 50px;

        @media(max-width: 400px) {
            width: 45px;
            height: 45px;
        }
    }
`