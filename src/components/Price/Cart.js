import React from 'react'

const Cart = ({name, price}) => {
    return (
        <div className="price_cart">
            <h3>{name}</h3>
            <div className="price_cart-num">
                <span> ab {price} € </span>
            </div>
            <div className="price_cart-info">
                <span>24 Std. Service</span>
                <span>Ohne Schäden</span>
                <span>Schnell vor Ort</span>
            </div>
            <button>Mehr erfahren</button>
        </div>
    )
}

export default Cart
