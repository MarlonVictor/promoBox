import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';


const PromotionCard = ({ promotion }) => {
    return (
        <Container className="d-flex bg-white p-2 mt-3 rounded">
            <img src={promotion.imageUrl} alt={promotion.title}/>{/* Imagem da promoção */}

            <main className="position-relative pr-2">
                <header>{/* Informações do produto */}
                    <h4>{promotion.title}</h4>{/* Título da promoção */}
                    <h1>R$ {promotion.price}</h1>{/* Preço da promoção */}
                    <h5>{promotion.comments.length > 0 && 
                        (`"${promotion.comments[0].comment}"`)}{/* Mostrar primeiro comentário */}
                    </h5>
                </header>

                <footer className="position-absolute fixed-bottom">{/* Botões da promoção */}
                    <div type="button" className="btn btn-outline-info btn-sm border-0">{/* Indicar o número de comentários */}
                        {promotion.comments.length}{' '}
                        {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
                    </div>

                    <a href={promotion.url} target="_blank" className="btn btn-outline-info btn-sm">{/* Link da promoção */}
                        Ir Para o Site
                    </a>

                    <Link to={`/edit/${promotion.id}`} title="Editar" className="btn btn-outline-info btn-sm px-1 ml-1 border-0">{/* Editar promoção */}
                        <b>°°°</b>
                    </Link>
                </footer>
            </main>
        </Container>
    )
};

export default PromotionCard;