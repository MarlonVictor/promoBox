import React from 'react';

import { Container } from './styles';


const SkeletonForm = () => {
    return (
        <Container>
            <fieldset className="bg-white mt-3">
                <div className="label skeleton w-25"></div>
                <div className="skeleton w-100 mt-1"></div>
            </fieldset>

            <fieldset className="bg-white mt-3">
                <div className="label skeleton w-25"></div>
                <div className="skeleton w-100 mt-1"></div>
            </fieldset>

            <fieldset className="bg-white mt-3">
                <div className="label skeleton w-25"></div>
                <div className="skeleton w-100 mt-1"></div>
            </fieldset>

            <fieldset className="bg-white mt-3">
                <div className="label skeleton w-25"></div>
                <div className="skeleton w-100 mt-1"></div>
            </fieldset>

            <div className="d-flex mt-5">
                <div className="button skeleton w-25"></div>
                <div className="button skeleton w-75 ml-2"></div>
            </div>
        </Container>
    )
};

export default SkeletonForm;