// Archivo: BuscadorGithub.jsx
import { useState, useEffect } from "react";

export default function BuscadorGithub() {
    // 1. Formulario
    const [textoBusqueda, setTextoBusqueda] = useState("");

    // 2. Arranca completamente vacío, sin usuario por defecto
    const [usuarioBuscado, setUsuarioBuscado] = useState("");

    // 3. 🔴 CORRECCIÓN: cargando empieza en FALSE porque no estamos buscando nada al abrir la página
    const [datosGithub, setDatosGithub] = useState(null);
    const [cargando, setCargando] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Freno: Si está vacío, cancelamos todo y el Guardia no hace nada
        if (!usuarioBuscado) return;

        async function buscarPerfil() {
            setCargando(true); // Recién aquí encendemos el letrero
            setError(null);
            setDatosGithub(null); // Ocultamos el perfil anterior mientras buscamos el nuevo

            try {
                const respuesta = await fetch(`https://api.github.com/users/${usuarioBuscado}`);

                if (!respuesta.ok) {
                    throw new Error("Usuario no encontrado 😢");
                }

                const datos = await respuesta.json();
                setDatosGithub(datos);

            } catch (falla) {
                setError(falla.message);
            } finally {
                setCargando(false); // Apagamos el letrero al terminar
            }
        }

        buscarPerfil();

    }, [usuarioBuscado]);

    // 🔴 Aquí es donde el formulario envía la orden
    const manejarEnvio = (evento) => {
        evento.preventDefault();
        if (!textoBusqueda) return;

        setUsuarioBuscado(textoBusqueda);
        setTextoBusqueda("");
    };

    return (
        <div style={{ maxWidth: "450px", margin: "0 auto", textAlign: "center", border: "2px solid #555", padding: "20px", borderRadius: "10px", backgroundColor: "#222" }}>
            <h2>Buscador de GitHub 🐙</h2>

            {/* El onSubmit detecta cuando presionas Enter o le das click al botón submit */}
            <form onSubmit={manejarEnvio} style={{ marginBottom: "20px" }}>
                <input
                    type="text"
                    placeholder="Busca un usuario (ej: facebook)"
                    value={textoBusqueda}
                    onChange={(e) => setTextoBusqueda(e.target.value)}
                    style={{ padding: "10px", width: "65%", marginRight: "5px", borderRadius: "5px", border: "none" }}
                />
                <button type="submit" style={{ padding: "10px", backgroundColor: "#2ea043", color: "white", border: "none", borderRadius: "5px", cursor: "pointer", fontWeight: "bold" }}>
                    Buscar
                </button>
            </form>

            {/* Escenario 0: Pantalla de inicio (No hay búsqueda, no está cargando y no hay error) */}
            {!usuarioBuscado && !cargando && !error && (
                <p style={{ color: "#aaa", fontSize: "16px", fontStyle: "italic" }}>
                    Ingresa un nombre de usuario para comenzar la búsqueda.
                </p>
            )}

            {/* Escenario 1: Cargando (Texto personalizado) */}
            {cargando && <p style={{ color: "#ffcc00", fontSize: "18px", fontWeight: "bold" }}>Rastreando perfil en la red global... 📡</p>}

            {/* Escenario 2: Error */}
            {error && !cargando && <p style={{ color: "#ff6b6b", fontWeight: "bold", fontSize: "18px" }}>{error}</p>}

            {/* Escenario 3: Éxito */}
            {datosGithub && !cargando && !error && (
                <div style={{ marginTop: "20px", padding: "15px", backgroundColor: "#333", borderRadius: "10px" }}>
                    <img
                        src={datosGithub.avatar_url}
                        alt="Avatar"
                        style={{ width: "150px", borderRadius: "50%", border: "4px solid #2ea043", marginBottom: "15px" }}
                    />
                    <h3 style={{ margin: "5px 0" }}>{datosGithub.name || datosGithub.login}</h3>
                    <p style={{ color: "#aaa", fontSize: "14px" }}>@{datosGithub.login}</p>

                    <p style={{ fontStyle: "italic", margin: "15px 0" }}>
                        {datosGithub.bio || "Este usuario no tiene descripción."}
                    </p>

                    <div style={{ display: "flex", justifyContent: "space-around", borderTop: "1px solid #555", paddingTop: "15px" }}>
                        <span><strong>{datosGithub.followers}</strong> Seguidores</span>
                        <span><strong>{datosGithub.public_repos}</strong> Repositorios</span>
                    </div>

                    <a
                        href={datosGithub.html_url}
                        target="_blank"
                        rel="noreferrer"
                        style={{ display: "inline-block", marginTop: "20px", padding: "10px 20px", backgroundColor: "#1f6feb", color: "white", textDecoration: "none", borderRadius: "5px", fontWeight: "bold" }}
                    >
                        Ver en GitHub
                    </a>
                </div>
            )}
        </div>
    );
}