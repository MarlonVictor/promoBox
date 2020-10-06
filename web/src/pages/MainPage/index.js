import React, {useEffect, useState} from 'react';
import api from '../../services/api';

import PromotionCard from '../../components/PromotionCard';

const MainPage = () => {
    const [promotions, setPromotions] = useState([])

    useEffect(() => {
        api.then(res => setPromotions(res.data))
    }, [])
    

    return (
        <>
            {promotions.map((promotion, key) => (
                <PromotionCard 
                    promotion={promotion} 
                    key={key}
                />
            ))}
        </>
    )
};

export default MainPage;