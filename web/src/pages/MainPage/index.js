import React, { useEffect, useState } from 'react';

import PromotionCard from '../../components/PromotionCard';
import SkeletonPromotionCard from '../../components/PromotionCard/Skeleton';
import SearchField from '../../components/SearchField';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Modal from '../../components/Modal';

import useApi from '../../hooks/useApi';


const MainPage = () => {
    const [promotions, setPromotions] = useState([])
    const [search, setSearch] = useState('')
    const [promotionId, setPromotionId] = useState(null)

    const [load, loadInfo] = useApi({
        url: '/promotions',
        method: 'get',
        params: {
            _embed: 'comments',
            _order: 'desc',
            _sort: 'id',
            title_like: search || undefined
        },
        debounceDelay: 300,
        onCompleted: res => {
            setPromotions(res.data)
        }
    })

    useEffect(() => {
        load()
    }, [search])

    if(loadInfo.loading && search.length === 0 || promotionId !== null) {
        return (
            <>
                <Header />
                <SearchField search={search} setSearch={setSearch} />

                <SkeletonPromotionCard />
                <SkeletonPromotionCard />
                <SkeletonPromotionCard />

                <Modal isOpen={Boolean(promotionId)} onClickClose={() => setPromotionId(null)}>
                    <h1>comments</h1>
                </Modal>

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
                            <PromotionCard 
                                promotion={promotion} 
                                key={key} 
                                onClickComments={() => setPromotionId(promotion.id)}
                            />
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