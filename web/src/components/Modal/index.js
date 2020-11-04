import React, { useEffect, useState } from 'react';
import ReactDom from 'react-dom';

import useApi from '../../hooks/useApi';
import CommentsTree from './CommentsTree';
import TopContent from './TopContent';

import { Overlay, Container, CloseBtn, Form } from './styles';

const portalRoot = document.getElementById('portal-root')


const Modal = ({ isOpen, onClickClose, promotionId }) => {
    const [comment, setComment] = useState('')
    const [load, loadInfo] = useApi({
        url: '/comments',
        params: {
            promotionId,
            _expand: "user"
        }
    })

    const [sendComment, sendCommentInfo] = useApi({
        url: '/comments',
        method: 'POST'
    })

    useEffect(() => {
        load()
    }, [])

    async function onSubmit(e) {
        e.preventDefault()
        try {
            await sendComment({
                data: {
                    userId: 1,
                    promotionId,
                    comment,
                }
            })
            setComment('')
            load()

        } catch (error) {
            console.log(error)
        }
    }

    if (!isOpen) {
        return null
    }

    return ReactDom.createPortal(
        <Overlay>
            <Container>
                <CloseBtn type="button" onClick={onClickClose}>
                    <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-x" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                    </svg>
                </CloseBtn>

                <Form onSubmit={onSubmit}>
                    <TopContent 
                        setComment={setComment}
                        comment={comment}
                        sendCommentInfo={sendCommentInfo}
                    />
                
                    <hr />
                    <CommentsTree comments={loadInfo.data} />
                </Form>

            </Container>
        </Overlay>,
        portalRoot
    )
}

export default Modal;