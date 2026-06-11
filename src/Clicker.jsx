// Archivo: Clicker.jsx

// 1. Recibimos nuestras dos Props
export default function Clicker({ textoBoton, mensaje }) {

    // 2. Creamos la función que manejará el evento
    const manejarClick = () => {
        alert(mensaje); // Lanzamos el mensaje que llegó por Props
    };

    // 3. Retornamos el diseño del botón
    return (
        <button
            onClick={manejarClick}
            style={{ padding: "10px 20px", margin: "10px", cursor: "pointer" }}
        >
            {textoBoton}
        </button>
    );
}