import React from 'react'

const Card = ({name, data, text}) => {
    return (
        <div className='comment_card'>
            <div className="comment_card-profile">
                <img src="./img/Ellipse.jpg" alt="img" />
                <div className="comment_card-info">
                    <span className="comment_card-name">{name}</span>
                    <img src="./img/star.jpg" alt="svg"/>
                    <img src="./img/star.jpg" alt="svg"/>
                    <img src="./img/star.jpg" alt="svg"/>
                    <img src="./img/star.jpg" alt="svg"/>
                    <img src="./img/star.jpg" alt="svg"/>
                </div>
                <span className="comment_card-data">{data}</span>
            </div>
            <div className="comment_card-text">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Card
