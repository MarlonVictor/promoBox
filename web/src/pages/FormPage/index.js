import React from 'react';
import { useParams } from 'react-router-dom';

const PagesPromotionForm = () => {
    const { id } = useParams()

    return (
        <p>Id: {id}</p>
    )
};

export default PagesPromotionForm;