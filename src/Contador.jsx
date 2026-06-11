// Archivo: Contador.jsx

// 1. IMPORTANTE: Tenemos que importar la herramienta useState desde React
import { useState } from "react";

export default function Contador() {

    // 2. INVOCAMOS LA MAGIA (El Estado)
    // numero: Es la variable que guarda el dato actual.
    // setNumero: Es la ÚNICA función autorizada para cambiar ese dato.
    // useState(0): Le decimos que la memoria empieza en el número cero.
    const [numero, setNumero] = useState(0);

    // 3. Creamos la función para el evento del botón
    const sumarUno = () => {
        setNumero(numero + 1); // Le decimos al jefe: "Cambia la memoria sumándole 1"
    };

    return (
        <div style={{ border: "2px solid #646cff", padding: "20px", margin: "20px", textAlign: "center" }}>
            <h2>Contador de Nivel</h2>

            {/* Mostramos la memoria actual en pantalla */}
            <p style={{ fontSize: "40px", fontWeight: "bold" }}>{numero}</p>

            {/* Conectamos el evento (Sección 65) con nuestra función */}
            <button onClick={sumarUno} style={{ padding: "10px 20px", fontSize: "18px", cursor: "pointer" }}>
                Subir de Nivel
            </button>
        </div>
    );
}