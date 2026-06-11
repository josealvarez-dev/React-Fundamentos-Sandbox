// Archivo: Property.jsx
// 1. Importamos la herramienta de seguridad de React
import PropTypes from "prop-types";

export default function Property({ nombre, rating, precio }) {
    return (
        <div style={{
            border: "2px solid #646cff",
            padding: "15px",
            margin: "10px",
            borderRadius: "10px",
            backgroundColor: "#1a1a1a",
            textAlign: "center"
        }}>
            <h2>{nombre}</h2>
            <p>⭐ {rating} / 5</p>
            <p style={{ color: "#28a745", fontSize: "20px", fontWeight: "bold" }}>
                S/ {precio} al mes
            </p>
        </div>
    );
}

// 2. CONFIGURAMOS EL GUARDIA DE SEGURIDAD (JOI del Frontend)
Property.propTypes = {
    nombre: PropTypes.string,  // Exigimos que sea un Texto
    rating: PropTypes.number,  // Exigimos que sea un Número
    precio: PropTypes.number   // Exigimos que sea un Número
};