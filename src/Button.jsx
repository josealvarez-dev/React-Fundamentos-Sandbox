// Archivo: Button.jsx
export default function Button({ hacerClick, label }) {
    return (
        <button
            onClick={hacerClick}
            style={{
                marginTop: "20px", padding: "10px 20px", fontSize: "18px",
                cursor: "pointer", backgroundColor: "#007bff",
                color: "white", border: "none", borderRadius: "5px"
            }}
        >
            {label}
        </button>
    );
}