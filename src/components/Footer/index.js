import React from 'react'
import './footer.scss'
const Footer = () => {
    const disctrict = [
        'Innenstadt',
        'Rodenkirchen',
        'Lindenthal',
        'Nippes',
        'Chorweiler',
        'Porz',
        'Kalk',
        'Mülheim'
    ];
    const servises = [
        'Türöffnung',
        'Tresoröffnung',
        'Einbruchschutz',
        'Sicherheitstechnik',
        'Schlüssel nach machen',
        'Autoschlüssel'
    ]
    return (
        <div className='footer'>
            <div className='footer_logoDesc'>
                <h1>LOGO</h1>
                <p>Wir sind Ihr Helfer in Not in Sachen Schlüsseldienst. 
                    Zu jeder Tages- und Nachtzeit für Sie da!
                </p>
                <div className="footer_logoDesc-social">
                    <img src='./img/inst.svg' alt="inst" />
                    <img src='./img/twitter.svg' alt="twitter" />
                    <img src='./img/facebook.svg' alt="facebook" />
                </div>
            </div>
            <div className='footer_lists'>
                <div className='footer_lists-districts'>
                    <h3>Stadtteile</h3>
                    <ul>
                        {disctrict.map((item) => (
                            <li>
                                <img src='./img/ArrowWhite.svg' alt="str" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className='footer_lists-services'>
                <h3>Leistungen</h3>
                    <ul>
                        {servises.map((item) => (
                            <li>
                                <img src='./img/ArrowWhite.svg' alt="str" />
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='footer_contacts'>
                <h3>Kontakt</h3>
                <p>Melden Sie sich für unseren Newsletter 
                    an und erhalten Sie die neuesten Tipps per E-Mail.
                </p>
                <label>Ihre E-Mail-Adresse *</label>
                <input type="email" placeholder='Ihre E-Mail-Adresse'/>
                <button className='footer_contacts-reg'>Anmelden</button>
                <div className='footer_contacts-buttons'>
                    <button>Imprssum</button>
                    <button>Datenschutz</button>
                </div>
            </div>
        </div>
    )
}

export default Footer
