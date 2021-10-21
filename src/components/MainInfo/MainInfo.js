import React from 'react'
import './mainInfo.scss';
const MainInfo = () => {
    return (
        <div className="main_info">
            <img src="./img/mainInfo.png" alt="img" />
            <div className="main_info-text">
                <h2>
                    Überlassen Sie die Arbeit den Experten
                </h2>
                <p>Alle unsere Mitarbeiter sind bestens ausgestattet, um jede Art von Tür zu öffnen. 
                    Die geschickten Hände unserer ausgebildeten Fachleute gepaart mit ihrem Werkzeug, 
                    das ständig nach dem letzten Stand erneuert wird, schaffen es in 95% aller Fälle, die Tür schadenfrei zu
                    öffnen. Überzeugen Sie sich selbst davon und überprüfen Sie unbedingt, ob Sie 
                    irgendwelche Kratzer an der Tür finden. Wir haben nichts zu verbergen und demonstrieren stolz 
                    unsere Arbeit.
                </p>
            </div>
        </div>
    )
}

export default MainInfo
