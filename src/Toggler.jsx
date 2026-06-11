import { useState } from "react";

export default function Toggler() {
    // LÍNEA A: Creamos la memoria. 
    // isHappy = El valor actual (empieza en true / verdadero).
    // setIsHappy = El control remoto para cambiarlo.
    const [isHappy, setIsHappy] = useState(true);

    // LÍNEA B: La función que hace la magia.
    const toggleIsHappy = () => {
        // El símbolo "!" significa "LO CONTRARIO".
        // Si isHappy es true, lo vuelve false. Si es false, lo vuelve true.
        setIsHappy(!isHappy);
    };

    return (
        <div>
            {/* LÍNEA C: El operador ternario de la Sección 63. */}
            {/* "Si isHappy es verdadero, dibuja 😊. Si es falso, dibuja 😢" */}
            <h1 onClick={toggleIsHappy}>
                {isHappy ? "😊" : "😢"}
            </h1>
        </div>
    );
}