import React, { useState } from "react";


export const TrafficLight = () => {
    const [color, setColor] = useState('');


    const glowGreen = (color) => {
        setColor(color)

    }

    return (

        <div className="traffic-light mx-auto">

            <div className={`circulo red mx-auto glow-${color == 'red' ? color : ''}`}
                onClick={() => setColor('red')} >
            </div>
            <div className={`circulo yellow mx-auto glow-${color == 'yellow' ? color : ''}`}
                onClick={() => setColor('yellow')} >
            </div>
            <div className={`circulo green mx-auto glow-${color == 'green' ? color : ''}`}
                onClick={() => setColor('green')} >
            </div>


        </div>
    )
}