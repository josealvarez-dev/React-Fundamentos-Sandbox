// Archivo: ListaSegura.jsx
import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function ListaSegura() {
    const [items, setItems] = useState([
        { id: uuid(), nombre: "🗡️ Espada Básica" },
        { id: uuid(), nombre: "🛡️ Escudo de Madera" }
    ]);

    const agregarItem = () => {
        setItems([...items, { id: uuid(), nombre: "🍷 Poción de Vida" }]);
    };

    const eliminarItem = (idParaBorrar) => {
        // CLASE 663: Deleting From Arrays The React Way (con .filter)
        setItems(items.filter((item) => item.id !== idParaBorrar));
    };

    // 🔴 LA MAGIA DE LA CLASE 664 🔴
    const mejorarItem = (idParaMejorar) => {
        // Usamos .map() para crear un arreglo nuevo
        const listaMejorada = items.map((item) => {

            // Si este es el ítem que el usuario clickeó...
            if (item.id === idParaMejorar) {
                // ...retornamos un OBJETO NUEVO copiando lo viejo, pero cambiamos el nombre
                return { ...item, nombre: item.nombre + " ⭐ Nivel 2" };
            } else {
                // Si no es, lo devolvemos exactamente igual
                return item;
            }

        });

        // Le pasamos el nuevo arreglo a React
        setItems(listaMejorada);
    };

    return (
        <div style={{ border: "2px solid #646cff", padding: "20px", textAlign: "center", width: "450px" }}>
            <h2>🎒 Inventario Avanzado</h2>

            <ul style={{ listStyle: "none", padding: 0 }}>
                {items.map((item) => (
                    <li key={item.id} style={{ fontSize: "18px", margin: "10px 0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                        {item.nombre}

                        <div>
                            {/* 🔴 NUEVO BOTÓN PARA MEJORAR 🔴 */}
                            <button
                                onClick={() => mejorarItem(item.id)}
                                style={{ padding: "5px", backgroundColor: "#f0ad4e", color: "white", border: "none", cursor: "pointer", borderRadius: "5px", marginRight: "5px" }}
                            >
                                Mejorar ⬆️
                            </button>

                            <button
                                onClick={() => eliminarItem(item.id)}
                                style={{ padding: "5px", backgroundColor: "#d9534f", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}
                            >
                                Borrar ❌
                            </button>
                        </div>
                    </li>
                ))}
            </ul>

            <button onClick={agregarItem} style={{ padding: "10px", cursor: "pointer", marginTop: "15px" }}>
                Comprar Poción
            </button>
        </div>
    );
}