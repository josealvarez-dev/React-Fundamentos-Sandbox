// Archivo: ShoppingList.jsx
import { useState } from "react";
import ShoppingListForm from "./ShoppingListForm";

export default function ShoppingList() {
    const [items, setItems] = useState([
        { id: 1, producto: "Manzanas", cantidad: 4 },
        { id: 2, producto: "Pan", cantidad: 2 }
    ]);

    const agregarItem = (nuevoItem) => {
        setItems((itemsAntiguos) => {
            return [
                ...itemsAntiguos,
                { ...nuevoItem, id: crypto.randomUUID() }
            ];
        });
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto", textAlign: "center" }}>
            <h2>Mi Lista de Compras 📋</h2>

            <ul style={{ listStyle: "none", padding: 0, fontSize: "18px" }}>
                {items.map((item) => (
                    <li key={item.id} style={{ padding: "10px", borderBottom: "1px solid gray" }}>
                        {item.producto} - <strong style={{ color: "#ffcc00" }}>Cant: {item.cantidad}</strong>
                    </li>
                ))}
            </ul>

            <hr style={{ margin: "20px 0" }} />

            <ShoppingListForm funcionAgregar={agregarItem} />
        </div>
    );
}