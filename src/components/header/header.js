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
                            <li>
                              <a href='.'>
                                Startseite
                              </a>
                            </li>
                            <li>
                              <a href='.'>
                                Einsatzgebiet
                              </a>
                             </li>
                            <li>
                              <a href='.'>
                                Leistungen
                              </a>
                            </li>
                            <li>
                              <a href='.'>
                                Über uns
                              </a>
                            </li>
                            <li>
                              <a href='.'>
                                Kontakt
                              </a>
                            </li>
                        </ul>
                    </nav>
                    <Button />
                </div>
            </div>
        </>
    )
}

export default Header
