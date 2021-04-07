import React from 'react';
import { Icon } from './styles';


const HeaderIcon = ({ icon, link }) => (
    <Icon href={link} target="_blank">
        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-code" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d={icon}/>
        </svg>
    </Icon>
);

export default HeaderIcon;