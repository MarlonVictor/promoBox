import React from 'react';
import { Top, Bottom } from './styles';
import HeaderIcon from './Icon';

const Header = () => {
    const person = "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"
    const share = "M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.499 2.499 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5z"

    return (
        <header className="bg-white mb-3">
            <Top className="d-flex align-middle justify-content-center">
                <h1 className="logo home">PromoBox</h1>
                <HeaderIcon 
                    icon={share}
                    link="https://github.com/MarlonVictor/promoBox"
                />
                <HeaderIcon 
                    icon={person}
                    link="https://www.linkedin.com/in/marlon-victor-2548b51a2/"
                />
            </Top>
            
            <Bottom className="d-flex align-middle justify-content-center">
                <p>Comentários</p>
                <p><b>Promoções</b></p>
                <p>Avaliações</p>
                <p>Livre</p>
            </Bottom>
        </header>
    )
};

export default Header;