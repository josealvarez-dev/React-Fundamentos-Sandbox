// Archivo: ColorBoxGrid.jsx
import ColorBox from "./ColorBox";

export default function ColorBoxGrid({ colors }) {
    // Creamos un arreglo vacío y le empujamos 25 cajitas usando un bucle for tradicional
    const boxes = [];
    for (let i = 0; i < 25; i++) {
        // A cada clon le pasamos la paleta de colores. (El 'key' es obligatorio como vimos antes).
        boxes.push(<ColorBox key={i} colors={colors} />);
    }

    return (
        <div style={{ textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center", marginTop: "50px" }}>
            <h2 style={{ color: "white" }}>Tablero de Colores Mágico</h2>

            {/* El contenedor que agrupa las 25 cajas en una cuadrícula de 5x5 */}
            <div style={{
                display: "flex",
                flexWrap: "wrap",
                width: "250px", // 5 cajas de 50px de ancho = 250px
                border: "2px solid white"
            }}>
                {boxes}
            </div>
        </div>
    );
}