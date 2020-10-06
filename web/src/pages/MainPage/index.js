import React from 'react';

import PromotionCard from '../../components/PromotionCard';

const MainPage = () => {
    const promotion = {
        "id": 1,
        "title": "Kit Notebook Acer Aspire 3 + Mochila Green, A315-41-R790, AMD Ryzen 3 2200U Dual Core",
        "price": 1799,
        "imageUrl": "https://cdn.gatry.com/gatry-static/promocao/imagem_url/2631517face1861bc4f46ae154d387de.png",
        "comments": [
            {
                "id": 1,
                "comment": "TELA HD"
            }
        ]
    }

    return (
        <>
            <PromotionCard promotion={promotion}/>
        </>
    )
};

export default MainPage;