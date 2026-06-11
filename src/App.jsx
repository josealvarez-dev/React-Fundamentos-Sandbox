// Archivo: App.jsx
import LuckyN from "./LuckyN";

export default function App() {
    return (
        <div style={{ color: "white", padding: "50px", display: "flex", justifyContent: "center" }}>

            {/* Queremos jugar con 2 dados, y ganar si suman 7 */}
            <LuckyN numDice={2} goal={7} />

        </div>
    );
}