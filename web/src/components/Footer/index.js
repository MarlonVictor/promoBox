import React from 'react';

import { Container } from './styles';

const Footer = () => (
    <Container className="d-flex justify-content-center w-100 m-auto p-3 mt-5">
        <a 
            href="https://gatry.com/" 
            target="_blank"
            rel="noopener noreferrer"
        >
            gatry?
        </a>

        <a 
            href="https://github.com/MarlonVictor" 
            target="_blank"
            rel="noopener noreferrer"
        >
            Github
        </a>

        <a 
            href="https://www.linkedin.com/in/marlon-victor-2548b51a2/" 
            target="_blank"
            rel="noopener noreferrer"
        >
            Linkedin
        </a>
        
        <small>Marlon Victor</small>
    </Container>
);

export default Footer;