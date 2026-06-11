// Archivo: Equipo.jsx
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function Equipo() {
    const [jugadores, setJugadores] = useState([
        { id: uuid(), nombre: "Guerrero", nivel: 5 },
        { id: uuid(), nombre: "Mago", nivel: 8 },
        { id: uuid(), nombre: "Arquero", nivel: 6 }
    ]);

    // 🔴 LA MAGIA DE LA CLASE 665 🔴
    const subirNivelATodos = () => {
        // El inspector (.map) recorre la lista completa
        const equipoMejorado = jugadores.map((jugador) => {
            // Retorna un OBJETO NUEVO para CADA UNO, copiando lo viejo y sumando 1 al nivel
            return { ...jugador, nivel: jugador.nivel + 1 };
        });

        // Pasamos el arreglo completamente nuevo a React
        setJugadores(equipoMejorado);
    };

    return (
        <div style={{ border: "2px solid #28a745", padding: "20px", textAlign: "center", width: "350px" }}>
            <h2>🛡️ Gremio de Aventureros</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {jugadores.map((jugador) => (
                    <li key={jugador.id} style={{ fontSize: "20px", margin: "10px 0" }}>
                        {jugador.nombre} - Nivel: <strong>{jugador.nivel}</strong>
                    </li>
                ))}
            </ul>

            <button onClick={subirNivelATodos} style={{ padding: "10px", backgroundColor: "#28a745", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}>
                Entrenar a TODOS (+1 Nivel)
            </button>
        </div>
    );
}