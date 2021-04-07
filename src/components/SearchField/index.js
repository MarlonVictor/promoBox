import React from 'react';
import { Link } from 'react-router-dom';

import { Container, InputArea } from './styles';


const SearchField = ({ search, setSearch }) => {
    return (
        <Container className="d-flex justify-content-between">
            <InputArea className="d-flex bg-white">
                <input 
                    type="text" 
                    placeholder="Pesquisar em Promoções"
                    className="bg-transparent border-0 text-muted"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}/* Atualiza o valor de seach a cada mudança */
                />
                <button
                    disabled
                    className="bg-transparent flex-shrink-1 border-0"
                > {/* Icon da perquisa */}
                    <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-search" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10.442 10.442a1 1 0 0 1 1.415 0l3.85 3.85a1 1 0 0 1-1.414 1.415l-3.85-3.85a1 1 0 0 1 0-1.415z"/>
                        <path fillRule="evenodd" d="M6.5 12a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11zM13 6.5a6.5 6.5 0 1 1-13 0 6.5 6.5 0 0 1 13 0z"/>
                    </svg>
                </button>
            </InputArea>

            <Link to="/create" className="btn btn-success btn-sm">Nova promoção</Link>{/* Link para o formulário */}
        </Container>
    )
};

export default SearchField;