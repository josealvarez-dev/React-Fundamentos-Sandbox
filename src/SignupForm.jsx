// Archivo: SignupForm.jsx
import { useState } from "react";

export default function SignupForm() {
    const [formData, setFormData] = useState({
        nombre: "",
        apellido: "",
        password: ""
    });

    const handleChange = (evento) => {
        const nombreDelInput = evento.target.name;
        const valorDelInput = evento.target.value;

        setFormData((datosActuales) => {
            return {
                ...datosActuales,
                [nombreDelInput]: valorDelInput
            };
        });
    };

    return (
        <div style={{ padding: "20px", textAlign: "center", border: "2px solid #28a745", borderRadius: "10px", marginTop: "20px", width: "350px" }}>
            <h3>Formulario Senior 🚀</h3>

            {/* --- INPUT 1: NOMBRE --- */}
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="form-nombre" style={{ display: "block", marginBottom: "5px" }}>Nombre:</label>
                <input
                    id="form-nombre"
                    type="text"
                    placeholder="Tu nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    style={{ padding: "8px", borderRadius: "5px" }}
                />
            </div>

            {/* --- INPUT 2: APELLIDO --- */}
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="form-apellido" style={{ display: "block", marginBottom: "5px" }}>Apellido:</label>
                <input
                    id="form-apellido"
                    type="text"
                    placeholder="Tu apellido"
                    name="apellido"
                    value={formData.apellido}
                    onChange={handleChange}
                    style={{ padding: "8px", borderRadius: "5px" }}
                />
            </div>

            {/* --- INPUT 3: CONTRASEÑA --- */}
            <div style={{ marginBottom: "15px" }}>
                <label htmlFor="form-pass" style={{ display: "block", marginBottom: "5px" }}>Contraseña:</label>
                <input
                    id="form-pass"
                    type="password"
                    placeholder="Secreto"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    style={{ padding: "8px", borderRadius: "5px" }}
                />
            </div>

            <p style={{ fontSize: "16px", background: "#222", padding: "10px", borderRadius: "5px" }}>
                Datos listos: <br />
                <span style={{ color: "#ffcc00" }}>{formData.nombre} {formData.apellido}</span> <br />
                <span style={{ color: "gray", fontSize: "12px" }}>Pass oculta: {formData.password}</span>
            </p>

            <button style={{ padding: "10px 20px", cursor: "pointer", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>
                Registrar
            </button>
        </div>
    );
}