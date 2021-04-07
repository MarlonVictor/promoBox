import styled, { keyframes } from 'styled-components';


const KeyFrameLoading = keyframes`
    0% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`

export const Container = styled.section`
    animation: ${KeyFrameLoading} .5s infinite alternate;

    .skeleton {
        color: #e5e5e5;
        background: #e5e5e5;
        height: 40px;
        border-radius: 5px;
    }
    .label {
        height: 20px;
    }
    .button {
        height: 45px;
    }
`