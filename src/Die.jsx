// Archivo: Die.jsx (Reemplaza todo con esto)

// 🔴 NUEVO: El obrero recibe el número (val) y la instrucción (hacerClick)
export default function Die({ val, hacerClick }) {
    return (
        <div
            onClick={hacerClick} // 🔴 NUEVO: ¡Ejecuta la instrucción al hacer click!
            style={{
                backgroundColor: "white",
                color: "black",
                width: "60px",
                height: "60px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                fontSize: "30px",
                fontWeight: "bold",
                margin: "10px",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.3)",
                cursor: "pointer" // Hace que el mouse se vuelva una "manito"
            }}>
            {val}
        </div>
    );
}