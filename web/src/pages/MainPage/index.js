import React, {useEffect, useState} from 'react';
import { getPromotions } from '../../services/api';

import PromotionCard from '../../components/PromotionCard';
import SearchField from '../../components/SearchField';
import Header from '../../components/Header';
import Footer from '../../components/Footer';


const MainPage = () => {
    const [promotions, setPromotions] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        const params = {}
        if(search) {
            params.title_like = search
        }

        getPromotions({params}).then(res => setPromotions(res.data))
    }, [search])


    return (
        <>
            <Header />
            <SearchField search={search} setSearch={setSearch} />
            
            {promotions.map((promotion, key) => (
                <PromotionCard promotion={promotion} key={key} />
            ))}

            <br/>
            <Footer />
        </>
    )
};

export default MainPage;