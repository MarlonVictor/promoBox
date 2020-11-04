import React from 'react';

import { Container } from './styles';


const CommentsTree = ({ comments }) => {
    if (!comments) {
        return <p>Carregando comentários...</p>;
    }

    return (
        <Container>
            {comments.length === 0 && <li className="pl-2">Nenhum comentário para esta promoção</li>}

            {comments.map((i, key) => (
                <li key={key}>
                    <div>
                        <img src={i.user.avatarUrl} alt={`foto de ${i.user.name}`} />
                        <b>{i.user.name}</b>
                    </div>

                    <p>{i.comment}</p>

                    <hr/>
                </li>
            ))}
        </Container>
    )
}

export default CommentsTree;