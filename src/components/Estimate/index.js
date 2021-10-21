import React from 'react'
import './estimate.scss';
const Estimate = () => {
    return (
        <div className="estimate">
            <div className="estimate_logo">
                <img src="./img/gepru.png" alt="svg" />
            </div>
            <div className="estimate_info">
               <a href="https://schluesseldienst-koeln-24.de/">schluesseldienst-koeln-24.de</a>
               <span>Ausgezeichnet </span>
               <p>4,9 von 5,0 aus 183 Bewertungen</p>
            </div>
            <div className="estimate_services">
                <ul>
                    <li>
                        <img src="./img/checkWhite.svg" alt="check"/>
                        24 Std. Service
                    </li>
                    <li>
                        <img src="./img/checkWhite.svg" alt="check"/>   
                        Aufsperrdienst mit 24 Std. Service
                    </li>
                </ul>
                <ul>   
                    <li>
                        <img src="./img/checkWhite.svg" alt="check"/>
                        Türöffnung ohne Schäden
                    </li>
                    <li>
                        <img src="./img/checkWhite.svg" alt="check"/>
                        In 10 – 30 Minuten vor Ort
                    </li>
                </ul>
                <button> 
                    <img src="./img/phone.svg" alt="phone"/>
                    01579 2395837
                </button>
            </div>
        </div>
    )
}

export default Estimate
