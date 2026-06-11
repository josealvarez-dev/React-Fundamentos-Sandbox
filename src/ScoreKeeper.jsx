// Archivo: ScoreKeeper.jsx
import { useState } from "react";

export default function ScoreKeeper() {
    const [score, setScore] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    // ¡NUEVA FUNCIÓN INTELIGENTE PARA SUMAR PUNTOS!
    const sumarPunto = () => {
        // Usamos un condicional clásico de JavaScript (Sección 63)
        if (isPaused === false) {
            // SOLO si el juego NO está pausado, le sumamos 1 punto.
            setScore(score + 1);
        } else {
            // Si está pausado, lanzamos una alerta y no sumamos nada.
            alert("¡No puedes sumar puntos, el juego está en pausa!");
        }
    };

    return (
        <div style={{ border: "2px solid white", padding: "20px", textAlign: "center" }}>
            <h2>Puntaje: {score}</h2>
            <h3>El juego está: {isPaused ? "PAUSADO ⏸️" : "CORRIENDO ▶️"}</h3>

            {/* Ahora llamamos a nuestra nueva función inteligente */}
            <button onClick={sumarPunto} style={{ margin: "5px" }}>
                +1 Punto
            </button>

            {/* Este botón sigue haciendo su trabajo de invertir la pausa */}
            <button onClick={() => setIsPaused(!isPaused)} style={{ margin: "5px" }}>
                Pausar / Despausar
            </button>
        </div>
    );
}