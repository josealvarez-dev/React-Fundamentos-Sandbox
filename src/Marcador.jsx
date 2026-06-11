// Archivo: Marcador.jsx
import { useState } from "react";

export default function Marcador() {
    // 1. Empezamos con un arreglo de 4 puntajes
    const [puntajes, setPuntajes] = useState([10, 15, 20, 25]);

    // 2. La función que actualiza TODOS los elementos
    const duplicarTodo = () => {

        // Usamos .map() para recorrer el arreglo viejo.
        // Por cada 'punto' viejo, retornamos 'punto * 2' y lo guardamos en un arreglo NUEVO.
        const nuevosPuntajes = puntajes.map((punto) => {
            return punto * 2;
        });

        // Le pasamos el arreglo completamente nuevo al control remoto de React
        setPuntajes(nuevosPuntajes);
    };

    return (
        <div style={{ border: "2px solid #646cff", padding: "20px", textAlign: "center", width: "300px" }}>
            <h2>🏆 Puntajes del Equipo</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {/* Mostramos los puntajes en pantalla */}
                {puntajes.map((p, index) => (
                    <li key={index} style={{ fontSize: "24px", margin: "10px 0" }}>
                        Jugador {index + 1}: <span style={{ fontWeight: "bold", color: "#646cff" }}>{p} pts</span>
                    </li>
                ))}
            </ul>

            <button onClick={duplicarTodo} style={{ cursor: "pointer", marginTop: "10px" }}>
                x2 a TODOS
            </button>
        </div>
    );
}