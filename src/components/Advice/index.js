import React from 'react'
import './advice.scss'
import InfoCard from './InfoCard'
const Advice = () => {
    return (
        <div className='advice'>
            <div className="advice_desc">
                <h1>So können Sie handeln, um unsere Hilfe zu bekommen.</h1>
                <p>
                    Wir haben für Sie alle Schritte aufgelistet, die Sie durchführen müssen, 
                    um stresslos an den <span>Schlüsseldienst Köln</span> zu kommen.
                </p>
            </div>
            <div className='advice_info'>
                <InfoCard text='Kontaktaufnahme'/>
                <InfoCard text='Vorbereitung'/>
                <InfoCard text='Arbeitsdurchführung'/>
                <InfoCard text='Arbeitsende'/>
            </div>
        </div>
    )
}

export default Advice
