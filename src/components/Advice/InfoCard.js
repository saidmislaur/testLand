import React, {useState} from 'react'
import './advice.scss'
const InfoCard = ({text}) => {
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        setVisible(!visible)
    }
    return (
        <>
            <div className='advice_infoCard' onClick={toggleVisible}>
                <span>{text}</span>
                <img className={visible ? 'rotated' : ''} src="./img/Arrow.svg" alt='arr' />
            </div>
            {visible && <div className="advice_infoCard-text">
                <p>Überprüfen Sie die Arbeitsqualität. Wir werden uns freuen, wenn Sie uns weiterempfehlen.</p>
            </div>}
        </>
    )
}

export default InfoCard
