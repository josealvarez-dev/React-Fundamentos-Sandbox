// Archivo: TableroEventos.jsx
export default function TableroEventos() {

    // Función 1: Para el botón simple (Clase 646)
    const manejarClick = () => {
        alert("¡Boom! Hiciste click en el botón, ingeniero.");
    };

    // Función 2: Para el formulario con el objeto 'e' (Clase 647)
    const manejarEnvio = (e) => {
        e.preventDefault(); // ¡Magia! Evitamos que la página se recargue
        alert("¡Formulario enviado con éxito sin recargar la página!");
    };

    return (
        <div style={{ textAlign: "center", padding: "50px", color: "white" }}>
            <h2>Panel de Pruebas de Eventos</h2>

            {/* Botón simple usando onClick */}
            <div style={{ marginBottom: "30px" }}>
                <button onClick={manejarClick} style={{ padding: "10px 20px", fontSize: "16px" }}>
                    Púlsame
                </button>
            </div>

            {/* Formulario usando onSubmit */}
            <form onSubmit={manejarEnvio}>
                <p>Prueba enviar este formulario:</p>
                <button type="submit" style={{ padding: "10px 20px", backgroundColor: "#28a745", color: "white" }}>
                    Enviar Formulario
                </button>
            </form>
        </div>
    );
}