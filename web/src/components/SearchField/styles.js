import styled from 'styled-components';

export const Container = styled.div`
    width: 98%;
    max-width: 850px;
    margin: 0 auto;
    height: 40px;

    a {
        font-size: 16px;

        @media(max-width: 390px) {
            font-size: 12px;
            padding-top: 10px;
        }
    }
`

export const InputArea = styled.form`
    flex: 1;
    border: 1px #CCC solid;
    margin-right: 25px;

    input {
        flex: 1;
        padding: 15px;
        font-size: 16px;
        outline: none;
    }
    button {
        width: 40px;
    }
    svg {
        color: #777;
        transform: translateY(-2px)
    }

    @media(max-width: 440px) {
        margin-right: 10px;

        input, button {
            font-size: 13px;
            padding: 0;
            padding-left: 5px;
        }
    }
`