// Archivo: ScoreKeeper.jsx
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ScoreKeeperParte2() {
    // 1. EL ESTADO: Un arreglo de objetos con nuestros jugadores
    const [jugadores, setJugadores] = useState([
        { id: uuid(), nombre: "Gato", puntaje: 0 },
        { id: uuid(), nombre: "Arquitecto_MERN", puntaje: 0 },
        { id: uuid(), nombre: "Jugador 3", puntaje: 0 }
    ]);

    // 2. FUNCIÓN PARA UN SOLO JUGADOR (Clase 664)
    const sumarPunto = (idGanador) => {
        // El inspector camina por la lista
        const nuevosPuntajes = jugadores.map((jugador) => {
            if (jugador.id === idGanador) {
                // Si es el jugador que hizo el punto, le creamos un clon y le sumamos 1
                return { ...jugador, puntaje: jugador.puntaje + 1 };
            } else {
                // Si son los otros jugadores, los dejamos intactos
                return jugador;
            }
        });
        // Entregamos la lista actualizada
        setJugadores(nuevosPuntajes);
    };

    // 3. FUNCIÓN PARA TODOS LOS JUGADORES (Clase 665)
    const reiniciarPartida = () => {
        // El inspector camina por TODA la lista sin condiciones (sin 'if')
        const partidaReiniciada = jugadores.map((jugador) => {
            // A todos, sin excepción, les crea un clon y les aplasta el puntaje a 0
            return { ...jugador, puntaje: 0 };
        });
        // Entregamos la lista reseteada
        setJugadores(partidaReiniciada);
    };

    return (
        <div style={{ border: "3px solid #ffcc00", padding: "30px", textAlign: "center", borderRadius: "10px", width: "400px" }}>
            <h2>🏆 Tablero del Torneo</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {/* Recorremos la lista para dibujar a los jugadores */}
                {jugadores.map((jugador) => (
                    <li key={jugador.id} style={{ fontSize: "22px", margin: "15px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>

                        {/* Mostramos el nombre y el puntaje */}
                        <span>{jugador.nombre}: <strong>{jugador.puntaje}</strong></span>

                        {/* Botón individual para sumar un punto a este ID específico */}
                        <button
                            onClick={() => sumarPunto(jugador.id)}
                            style={{ padding: "8px 12px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}
                        >
                            +1 Punto
                        </button>

                    </li>
                ))}
            </ul>

            <hr style={{ margin: "20px 0" }} />

            {/* Botón de pánico que resetea a todos */}
            <button
                onClick={reiniciarPartida}
                style={{ padding: "12px 20px", backgroundColor: "#dc3545", color: "white", border: "none", cursor: "pointer", borderRadius: "5px", fontSize: "18px", width: "100%" }}
            >
                🔄 Reiniciar Partida
            </button>
        </div>
    );
}