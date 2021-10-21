import React from 'react'
import Button from '../Button';
import './header.scss';

const Header = () => {
    return (
        <>
            <div className="container">
                <div className="header">
                    <img src="./img/LOGO.svg" alt="logo"/>
                    <nav>
                        <ul>
                            <li>Startseite</li>
                            <li>Einsatzgebiet</li>
                            <li>Leistungen</li>
                            <li>Über uns</li>
                            <li>Kontakt</li>
                        </ul>
                    </nav>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default Header
