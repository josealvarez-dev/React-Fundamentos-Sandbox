// Archivo: ShoppingListForm.jsx
import { useState } from "react";

export default function ShoppingListForm({ funcionAgregar }) {
    const [formData, setFormData] = useState({ producto: "", cantidad: "" });

    const handleChange = (evento) => {
        setFormData((datosActuales) => {
            return {
                ...datosActuales,
                [evento.target.name]: evento.target.value
            };
        });
    };

    const handleSubmit = (evento) => {
        evento.preventDefault();
        funcionAgregar(formData);
        setFormData({ producto: "", cantidad: "" });
    };

    const productoInvalido = formData.producto.length > 0 && formData.producto.length < 3;

    return (
        <form onSubmit={handleSubmit} style={{ padding: "20px", border: "2px solid #ffcc00", borderRadius: "10px" }}>
            <h3>Agregar Nuevo 🛒</h3>

            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="producto">Producto:</label>
                <input
                    id="producto" name="producto" type="text"
                    placeholder="Ej: Leche (mín. 3 letras)"
                    value={formData.producto}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "5px", marginTop: "5px" }}
                />
                {productoInvalido && (
                    <span style={{ color: "red", fontSize: "14px" }}>
                        El producto debe tener al menos 3 letras.
                    </span>
                )}
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="cantidad">Cantidad:</label>
                <input
                    id="cantidad" name="cantidad" type="number" required
                    placeholder="Ej: 2"
                    value={formData.cantidad}
                    onChange={handleChange}
                    style={{ width: "100%", padding: "5px", marginTop: "5px" }}
                />
            </div>

            <button
                disabled={productoInvalido}
                style={{
                    padding: "10px", width: "100%", color: "white", border: "none", borderRadius: "5px",
                    cursor: productoInvalido ? "not-allowed" : "pointer",
                    backgroundColor: productoInvalido ? "gray" : "#007bff"
                }}
            >
                Agregar a la lista
            </button>
        </form>
    );
}