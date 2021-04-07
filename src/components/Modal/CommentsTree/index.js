import React, { useState, useMemo } from 'react';

import CommentBox from '../CommentBox';

import { Container } from './styles';


function getTree(list) {
    if (!list){
        return []
    }

    const roots = []
    const childrenByParentId = {}

    list.forEach(item => {
        if (!item.parentId) {
            roots.push(item)
            return
        }

        if (!childrenByParentId[item.parentId]) {
            childrenByParentId[item.parentId] = []
        }

        childrenByParentId[item.parentId].push(item)
    })

    function buildNodes(nodes) {
        if (!nodes) {
            return null
        }

        return nodes.map(node => ({
            ...node,
            children: buildNodes(childrenByParentId[node.id])
        }))
    }

    return buildNodes(roots)
}


const CommentsTree = ({ comments, sendComment }) => {
    const tree = useMemo(() => getTree(comments), [comments])
    const [activeCommentBox, setActiveCommentBox] = useState(null)
    const [comment, setComment] = useState('')

    function renderItem(i) {
        return (
            <li>
                <div>
                    <img src={i.user.avatarUrl} alt={`foto de ${i.user.name}`} />
                    <b>{i.user.name}</b>
                </div>

                <p>{i.comment}</p>

                <button
                    type="button"
                    className="btn btn-outline-info btn-sm border-0 p-0 ml-2"
                    onClick={() => {
                        setComment('')
                        setActiveCommentBox(activeCommentBox === i.id ? null : i.id)
                    }}
                >
                    Responder
                </button>

                {activeCommentBox === i.id && (
                    <CommentBox 
                        setComment={setComment}
                        comment={comment}
                        sendComment={sendComment}
                        sendCommentInfo={null}
                        activeCommentBox={setActiveCommentBox}
                        commentId={i.id}
                    />
                )}

                {i.children && renderList(i.children)}
            </li>
        )
    }
    function renderList(list) {
        return (
            <Container>
                {comments.length === 0 && <li className="pl-2">Nenhum comentário para esta promoção</li>}

                {list.map(renderItem)}
            </Container>
        )
    }


    if (!comments) {
        return <p className="loading">Carregando comentários...</p>
    }

    return renderList(tree)
}

CommentsTree.defaultProps = {
    sendComment: () => {}
}

export default CommentsTree;