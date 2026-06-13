// Archivo: Temporizador.jsx
import { useState, useEffect } from "react";

export default function Temporizador() {
    const [contador, setContador] = useState(0);

    useEffect(() => {
        console.log("¡Esto solo debería verse una vez al cargar la página!");
    }, []); // 🔴 CLASE 687: Agregamos los corchetes vacíos aquí abajo

    return (
        <div style={{ padding: "20px", textAlign: "center", border: "2px solid #007bff", borderRadius: "10px" }}>
            <h2>Clase 687: Dependencias ⏳</h2>
            <p style={{ fontSize: "24px" }}>
                Clicks: <strong style={{ color: "#ffcc00" }}>{contador}</strong>
            </p>
            <button onClick={() => setContador(contador + 1)} style={{ padding: "10px" }}>
                Sumar +1
            </button>
        </div>
    );
}