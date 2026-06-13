// Archivo: App.jsx
import ListaUsuarios from "./ListaUsuarios"; // 1. Importas tu archivo de arriba

export default function App() {
    return (
        <div style={{ color: "white", padding: "50px" }}>

            {/* 2. Dibujas el componente en la pantalla */}
            <ListaUsuarios />

        </div>
    );
}