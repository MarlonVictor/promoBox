import React, { useState } from 'react';

import { Container } from './styles';

const TopContent = ({ comment, setComment, sendCommentInfo }) => {
    const [showTopContent, setShowTopContent] = useState(true)

    if(!showTopContent) {
        return ''
    }

    return (
        <Container>
            <div className="d-flex">
                <img src="https://gatry.com/img/user_foto.png" alt="foto de Visitante" className="rounded-circle"/>
                <b>Visitante</b>
            </div>

            <textarea onChange={e => setComment(e.target.value)} value={comment} />

            <div className="d-flex justify-content-end">
                <button className="btn btn-outline-primary btn-sm mr-2" onClick={() => setShowTopContent(false)}>cancelar</button>
                <button
                    type="submit"
                    disabled={sendCommentInfo.loading}
                    className="btn btn-primary btn-sm"
                >
                    {sendCommentInfo.loading ? 'Enviando...' : 'Enviar'}
                </button>
            </div>
        </Container>
    )
}

export default TopContent;