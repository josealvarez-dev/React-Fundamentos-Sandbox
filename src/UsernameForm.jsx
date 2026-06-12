// Archivo: UsernameForm.jsx
import { useState } from "react";

export default function UsernameForm() {
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");

    const actualizarNombre = (evento) => {
        setNombre(evento.target.value);
    };

    const actualizarApellido = (evento) => {
        setApellido(evento.target.value);
    };

    return (
        <div style={{ padding: "20px", textAlign: "center", border: "2px solid #007bff", borderRadius: "10px", marginTop: "20px" }}>
            <h3>Registro Completo 📝</h3>

            <div>
                <label htmlFor="nombre" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                    Nombre:
                </label>
                <input
                    id="nombre"
                    type="text"
                    value={nombre}
                    onChange={actualizarNombre}
                    style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid gray" }}
                />
            </div>

            <div>
                <label htmlFor="apellido" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
                    Apellido:
                </label>
                <input
                    id="apellido"
                    type="text"
                    value={apellido}
                    onChange={actualizarApellido}
                    style={{ padding: "10px", marginBottom: "15px", borderRadius: "5px", border: "1px solid gray" }}
                />
            </div>

            <p style={{ fontSize: "20px" }}>
                Hola, <strong style={{ color: "#ffcc00" }}>{nombre} {apellido}</strong>
            </p>

            <button style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>
                Enviar
            </button>
        </div>
    );
}