import React from 'react';

import { Container } from './styles';


const SkeletonPromotionCard = () => {
    return (
        <Container className="d-flex bg-white p-2 mt-3 rounded">
            <div className="img"></div>

            <main className="position-relative pr-2">
                <header>
                    <h4>lorem ipsum dolor sit amet, consectetur elit</h4>
                    <h1>lorem ipsum</h1>
                    <h5>lorem ipsum dolor</h5>
                </header>

                <footer className="position-absolute fixed-bottom">
                    <div className="btn mx-1">lorem ipsum</div>
                    <div className="btn mx-1">lorem ipsum</div>
                    <div className="btn mx-1">...</div>
                </footer>
            </main>
        </Container>
    )
};

export default SkeletonPromotionCard;