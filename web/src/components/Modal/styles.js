import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    background: rgba(0, 0, 0, 0.7);
`

export const Container = styled.main`
    position: relative;

    width: 94%;
    max-width: 850px;
    min-height: 300px;
    margin: 60px auto 0 auto;

    background: #F8F8F8;
    border-radius: 5px;

    @media(max-width: 630px) {
        width: 90%;
    }
    @media(max-width: 400px) {
        width: 86%;
    }
`

export const CloseBtn = styled.button`
    position: absolute;
    right: 0;
    transform: translateX(20px) translateY(-20px);

    width: 40px;
    height: 40px;

    color: #FFF;
    background: #000;

    border-radius: 50%;
    border: none;
`