import React from 'react';
import { Link } from 'react-router-dom';

import { Container, TrashButton } from './styles';


const PromotionCard = ({ promotion, onClickComments, onClickDelete }) => {
    return (
        <Container className="d-flex bg-white p-2 mt-3 rounded position-relative">
            <TrashButton type="button" onClick={onClickDelete}>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5a.5.5 0 0 0-1 0v7a.5.5 0 0 0 1 0v-7z"/>
                </svg>
            </TrashButton>

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
                    <button type="button" className="btn btn-outline-info btn-sm border-0" onClick={onClickComments}>{/* Indicar o número de comentários */}
                        {promotion.comments.length}{' '}
                        {promotion.comments.length > 1 ? 'Comentários' : 'Comentário'}
                    </button>

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