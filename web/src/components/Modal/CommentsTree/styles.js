import styled from 'styled-components';

export const Container = styled.ul`
    list-style: none;
    font-size: 14px;
    padding-left: 0;

    img {
        width: 30px;
        height: 30px;
        margin-right: 15px;
        border-radius: 50%;
    }
    div {
        display: flex;
        padding: 0 10px;
    }
    b {
        color: #555;
        transform: translate(-5px, 5px);
    }
    p {
        padding: 10px 10px 0 ;
    }
`