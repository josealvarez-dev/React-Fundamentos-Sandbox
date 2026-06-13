// Archivo: ListaUsuarios.jsx
import { useState, useEffect } from "react";

export default function ListaUsuarios() {
    const [usuarios, setUsuarios] = useState([]);
    const [error, setError] = useState(null);

    // 🔴 CLASE 689: 1. Nueva bóveda para la carga (Empieza en true porque al abrir la página, empieza a cargar)
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        async function traerDatos() {
            try {
                const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");

                if (!respuesta.ok) {
                    throw new Error("El servidor no responde o está caído.");
                }

                const datosConvertidos = await respuesta.json();
                setUsuarios(datosConvertidos);

            } catch (falla) {
                console.error("Hubo un fallo:", falla);
                setError(falla.message);
            } finally {
                // 🔴 CLASE 689: 2. El bloque 'finally' se ejecuta SIEMPRE al final, 
                // haya habido éxito o haya explotado el servidor. Apagamos la pantalla de carga.
                setCargando(false);
            }
        }

        traerDatos();
    }, []);

    return (
        <div style={{ padding: "20px", maxWidth: "400px", margin: "0 auto", border: "2px solid #28a745", borderRadius: "10px", marginTop: "20px" }}>
            <h2 style={{ textAlign: "center" }}>Directorio 🏢</h2>

            {error && (
                <div style={{ backgroundColor: "#ffcccc", color: "red", padding: "10px", borderRadius: "5px", textAlign: "center", marginBottom: "15px" }}>
                    <strong>¡Atención!</strong> {error}
                </div>
            )}

            {/* 🔴 CLASE 689: 3. Ahora dependemos de la variable 'cargando' para mostrar el letrero */}
            {cargando && !error && (
                <p style={{ textAlign: "center", color: "#007bff", fontSize: "18px", fontWeight: "bold" }}>
                    Cargando datos de la base de datos... ⏳
                </p>
            )}

            {/* Si ya no está cargando y NO hay error, mostramos la lista (aunque esté vacía) */}
            {!cargando && !error && (
                <ul style={{ listStyle: "none", padding: 0 }}>
                    {usuarios.length === 0 ? (
                        <p style={{ textAlign: "center", color: "gray" }}>No hay empleados registrados todavía.</p>
                    ) : (
                        usuarios.map((usuario) => (
                            <li key={usuario.id} style={{ padding: "10px", borderBottom: "1px solid gray" }}>
                                <strong>{usuario.name}</strong>
                            </li>
                        ))
                    )}
                </ul>
            )}
        </div>
    );
}