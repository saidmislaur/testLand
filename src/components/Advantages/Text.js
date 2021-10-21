import React from 'react'
import './advantages.scss';
const Text = ({title, text, right}) => {
    return (
        <div className={right ? 'advantages_text advantages_text--right' : 'advantages_text'}>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}

export default Text
