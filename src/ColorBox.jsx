// Archivo: ColorBox.jsx
import { useState } from "react";

// Función matemática rápida para elegir un elemento aleatorio de un arreglo
function randomChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
}

export default function ColorBox({ colors }) {
    // 1. La memoria de ESTA cajita. Inicia con un color al azar.
    const [color, setColor] = useState(randomChoice(colors));

    // 2. El evento de click
    const changeColor = () => {
        const randomColor = randomChoice(colors);
        setColor(randomColor);
    };

    return (
        <div
            onClick={changeColor}
            style={{
                backgroundColor: color,
                width: "50px",
                height: "50px",
                cursor: "pointer",
                border: "1px solid rgba(0,0,0,0.2)" // Un borde sutil para que se noten las cajas
            }}
        ></div>
    );
}