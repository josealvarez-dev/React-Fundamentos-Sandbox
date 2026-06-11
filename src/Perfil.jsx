// Archivo: Perfil.jsx
export default function Perfil({ nombre = "Usuario Misterioso", ciudad = "Desconocida", juegos, esPro = false }) {

    // CLASE 636: Definimos el color de fondo dinámicamente
    // ¿Es pro? Sí -> Fondo dorado oscuro. No -> Fondo gris oscuro.
    const colorFondo = esPro ? "#4a3b00" : "#1a1a1a";

    return (
        <div style={{
            border: "2px solid #646cff",
            padding: "15px",
            margin: "15px",
            borderRadius: "10px",
            backgroundColor: colorFondo, // ¡Inyectamos la variable dinámica aquí!
            color: "white",
            transition: "background-color 0.3s ease" // Un toque suave al cargar
        }}>
            <h2>
                ¡Hola, soy {nombre}!
                {esPro ? " ⭐" : ""}
            </h2>

            {esPro && <h3 style={{ color: "gold", margin: "5px 0" }}>[ Rango: Jugador Profesional ]</h3>}

            <p>Base de operaciones: {ciudad}</p>
            <p>Juegos favoritos: {juegos}</p>
        </div>
    );
}