import React from 'react';
import Cart from './Cart';
import './price.scss';
const Price = () => {
    return (
        <div className="price">
            <div className="price_desc">
                <h1>Price</h1>
                <p>Die Preise für unseren Schlüsseldienst Köln sind niedriger als der empfohlene Mittelwert. 
                    Wir optimieren unsere Arbeit die ganze Zeit. Wir haben es geschafft, 
                    dass ein Durchschnittsmensch sich qualitativen Schlüsseldienst leisten kann. 
                    Der Schlüsseldienst ist etwas, worauf man nicht verzichten kann, wenn er gebraucht wird. 
                    So ist unser ganzes System darauf bestrebt, die Kosten für unseren Dienst günstig zu halten. 
                </p>
            </div>
            <div className="price_carts">
                <Cart name="Türöffnung" price="37"/>
                <Cart name="Tresoröffnung" price="75" />
                <Cart name="Einbruchschutz" price="65"/>
            </div>
        </div>
    )
}

export default Price
