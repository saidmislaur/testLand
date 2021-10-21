import React from 'react'
import './advantages.scss'
import Text from './Text.js'
const Adantages = () => {
    return (
        <div className='advantages'>
            <div className="advantages_desc">
                <h1>Unsere Vorteile</h1>
                <p>Wir schämen uns nicht, unsere Vorteile vorzuweisen, 
                    da wir sehr stolz auf diese sind. Hier einige, von denen 
                    Sie profitieren können:
                </p>
            </div>
            <div className='advantages_content'>
                <div className='advantages_content-left'>
                    <Text title='Durchdachtes Arbeitssystem' text='Nur dank der richtigen Strukturierung der Arbeit haben wir es geschafft, an unnötigem Arbeitsaufwand zu sparen. Somit halten wir unseren Endpreis außerordentlich günstig.'/>
                    <Text title='Einfache Erreichbarkeit' text='Sie müssen uns nirgendwo suchen. Wir finden Sie selbst. Dafür reicht nur ein Anruf Ihrerseits. Sie können uns jederzeit kontaktieren, denn wir arbeiten 24 Stunden am Tag. Selbst an Feiertagen eilen wir zu Ihnen, um Sie in Ihr Haus zu lassen.'/>
                    <Text title='Erfahrung' text='Wir sammeln schon 8 Jahre lang Erfahrung. So lange sind wir schon als Schlüsseldienst in Köln tätig. Wir haben schon so ziemlich alle Fälle gesehen und finden uns schnell zurecht. In Ihrem Fall können wir ganz bestimmt auch helfen.'/>
                </div>
                <img src="./img/Rectangle.png" alt='img'/>
                <div className="advantages_content-right">
                    <Text right='rigth' title='Schnelle und genaue Diagnostik' text='Ohne die richtige Diagnostik ist es nicht möglich, die richtige Lösung zu finden. Wenn das Problem nicht korrekt ausfindig gemacht wird, könnte man ein nicht vorhandenes Problem behandeln und das richtige Problem könnte dabei unbemerkt bleiben. Die Diagnostik von einem Profi spart daher Zeit, Geld und Aufwand.'/>
                    <Text right='rigth' title='Sicherheit' text='Wir schätzen die Sicherheit unserer Kunden. Nur geprüfte Mitarbeiter schicken wir an Ihre Tür. Wir bürgen für sie und ihre Taten.'/>
                    <Text right='rigth' title='Hohe Qualität' text='Überzeugen Sie sich von der Qualität der Arbeit, solange der Fachmann noch bei Ihnen ist. Schauen Sie, ob alles gut funktioniert. Auch das Aussehen ist wichtig. Suchen Sie ruhig Kratzer und Beschädigungen. Wir schämen uns nicht für unsere Arbeit.' />
                </div>
            </div>
        </div>
    )
}

export default Adantages
