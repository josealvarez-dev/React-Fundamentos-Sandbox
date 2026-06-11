// Archivo: PropertyList.jsx
import Property from "./Property";

export default function PropertyList({ propiedades }) {
    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
            {propiedades.map((cuarto) => (
                // ¡Aquí está nuestro DNI obligatorio!
                <Property
                    key={cuarto.id}
                    nombre={cuarto.nombre}
                    rating={cuarto.rating}
                    precio={cuarto.precio}
                />
            ))}
        </div>
    );
}