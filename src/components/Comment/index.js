import React from 'react';
import './comment.scss';
import Slide from './Slide';
const Comment = () => {
    return (
        <div className='comment'>
            <h1 className="comment_title">Bewertungen</h1>
            <div className="comment_cards">
                <Slide />
            </div>
        </div>
    )
}

export default Comment
