import styled from 'styled-components';

export const Icon = styled.a`
    svg {
        padding: 10px;
        width: 50px;
        height: 50px;
        color: var(--gray);
        border: 3px solid var(--gray);
        border-radius: 50px;

        @media(max-width: 400px) {
            width: 45px;
            height: 45px;
        }
    }
`