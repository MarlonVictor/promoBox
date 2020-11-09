import styled from 'styled-components';

export const Container = styled.ul`
    list-style: none;
    font-size: 14px;
    padding-left: 0;

    li {
        border: 1px solid #DDD;
        border-top-color: #f5f5f5;
        padding: 15px;
        transform: translateX(-1px);

        li{
            margin: 10px 0 5px 20px;
            padding: 20px 5px 0;
            border: 1px solid #DDD;
            border-left-width: 5px;
            transform: translateX(6px);

            button.btn {
                margin-bottom: 15px;
            }
        }
    }
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
    button.btn {
        font-size: 16px;

        &:hover {
            background: unset;
            color: #17a2b8;
        }
    }
    @media(max-width: 425px) {
        li li {
            margin-left: 8px;
        }
        img {
            width: 25px;
            height: 25px;
        }
        b, p, button.btn {
            font-size: 12px;
        }
    }
`