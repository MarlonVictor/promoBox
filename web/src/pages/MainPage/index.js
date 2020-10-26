import React, {useEffect, useState} from 'react';

import PromotionCard from '../../components/PromotionCard';
import SkeletonPromotionCard from '../../components/PromotionCard/Skeleton';
import SearchField from '../../components/SearchField';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import useApi from '../../hooks/useApi';


const MainPage = () => {
    const [promotions, setPromotions] = useState([])
    const [search, setSearch] = useState('')

    const [load, loadInfo] = useApi({
        url: '/promotions',
        method: 'get',
        params: {
            _embed: 'comments',
            _order: 'desc',
            _sort: 'id',
            title_like: search || undefined
        },
        onCompleted: res => {
            setPromotions(res.data)
        }
    })

    useEffect(() => {
        load()
    }, [search])

    if(loadInfo.loading && search.length === 0) {
        return (
            <>
                <Header />
                <SearchField search={search} setSearch={setSearch} />

                <SkeletonPromotionCard />
                <SkeletonPromotionCard />

                <br/>
                <Footer />
            </>
        )

    } else {
        return (
            <>
                <Header />
                <SearchField search={search} setSearch={setSearch} />

                {promotions.length === 0 && search.length > 0 && (
                    <div className="alert alert-light bg-white text-center mx-auto mt-3" role="alert">
                        Não temos nenhum "{search}"
                    </div>
                )}

                {loadInfo.error 
                    ? (
                        <div className="alert alert-danger text-center mx-auto mt-3" role="alert">
                            Algo deu errado!
                        </div>
                    )
                    : (
                        promotions.map((promotion, key) => (
                            <PromotionCard promotion={promotion} key={key} />
                        ))
                    )
                }

                <br/>
                <Footer />
            </>
        )
    }
};

export default MainPage;