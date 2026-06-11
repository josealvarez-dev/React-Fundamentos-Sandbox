// Archivo: Inventario.jsx
import { useState } from "react";

export default function Inventario() {
    // 1. Iniciamos la memoria con un ARREGLO que tiene un solo ítem inicial
    const [items, setItems] = useState(["🗡️ Espada Básica"]);

    // 2. La función mágica para agregar un elemento
    const agregarPocion = () => {
        // ❌ Lo que haría un Junior (No funciona en React):
        // items.push("🍷 Poción de Vida");
        // setItems(items);

        // ✅ Lo que hace un Arquitecto MERN:
        setItems([
            ...items,            // "Abre un arreglo nuevo, vacía todo lo que tenía el arreglo viejo..."
            "🍷 Poción de Vida"  // "... y al final, agrégale este nuevo ítem"
        ]);
    };

    return (
        <div style={{ border: "2px solid white", padding: "20px", textAlign: "center", width: "300px" }}>
            <h2>🎒 Mi Inventario</h2>

            {/* 3. Dibujamos el arreglo usando .map() (Lo aprendimos en la Sección 64) */}
            <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item, index) => (
                    <li key={index} style={{ fontSize: "20px", margin: "10px 0" }}>
                        {item}
                    </li>
                ))}
            </ul>

            <button onClick={agregarPocion} style={{ padding: "10px", cursor: "pointer" }}>
                Comprar Poción
            </button>
        </div>
    );
}