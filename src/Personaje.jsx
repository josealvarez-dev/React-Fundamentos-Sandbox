// Archivo: Personaje.jsx
import { useState } from "react";

export default function Personaje() {

    // 1. Iniciamos el Estado con un OBJETO completo
    const [jugador, setJugador] = useState({
        nombre: "Arquitecto_MERN",
        nivel: 5,
        salud: 100,
        oro: 0
    });

    // 2. La función para actualizar solo el ORO
    const ganarOro = () => {

        // ❌ CÓDIGO DE JUNIOR (Esto no repintará la pantalla):
        // jugador.oro = jugador.oro + 50;
        // setJugador(jugador);

        // ✅ CÓDIGO PROFESIONAL (Creamos un objeto NUEVO con { }):
        setJugador({
            ...jugador,           // "Esparce/Copia todos los datos viejos (nombre, nivel, salud)..."
            oro: jugador.oro + 50 // "...pero APLASTA el valor viejo del oro y ponle 50 más"
        });
    };

    return (
        <div style={{ border: "2px solid #646cff", padding: "30px", textAlign: "center", borderRadius: "10px" }}>
            <h2>🎮 Perfil del Jugador</h2>

            {/* Para mostrar un dato, entramos al objeto con el PUNTO */}
            <h3>Nombre: <span style={{ color: "#28a745" }}>{jugador.nombre}</span></h3>
            <p>Nivel: {jugador.nivel}</p>
            <p>Salud: ❤️ {jugador.salud}</p>
            <p>Oro: 💰 {jugador.oro}</p>

            <button onClick={ganarOro} style={{ marginTop: "15px", cursor: "pointer" }}>
                Recolectar 50 de Oro
            </button>
        </div>
    );
}