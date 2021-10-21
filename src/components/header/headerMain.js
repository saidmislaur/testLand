import React from 'react'
import Button from '../Button'
import './header.scss';
const HeaderMain = () => {
    return (
        <>
            <div className="header_main">
                <div className="header_main-info">
                    <h1>Schlüsseldienst Köln</h1>
                    <ul>
                        <li>
                            <img src="./img/check.svg" alt="check" />
                            in 15-30 Minuten vor Ort</li>
                        <li><img src="./img/check.svg" alt="check" />24h Schlüsselnotdienst</li>
                        <li><img src="./img/check.svg" alt="check" />Türöffnung ohne Schäden</li>
                    </ul>
                    <span>Der Schlüsseldienst Köln öffnet jede Tür ohne Schlüssel ab  
                        <span className="header_main-price"> 39,-€</span>
                    </span>
                    <Button />
                </div>
                <div className="header_main-logo">
                    <img src="./img/banner.png" alt="img"/>
                </div>
            </div>  
        </>
    )
}

export default HeaderMain
