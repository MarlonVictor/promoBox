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
    min-height: 100px;
    margin: 60px auto 0 auto;
    padding: 20px;

    background: #F5F5F5;
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
    transform: translateX(20px) translateY(-40px);

    width: 40px;
    height: 40px;

    color: #FFF;
    background: #000;

    border-radius: 50%;
    border: none;
`

export const Form = styled.form`
    max-height: 570px;
    margin-right: 5px;

    border: 2px solid #DDD;

    overflow-y: auto;
    overflow-x: hidden;

    font-size: 30px;

    hr {
        margin-bottom: 0;
    }
`