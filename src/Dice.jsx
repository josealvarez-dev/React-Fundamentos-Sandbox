// Archivo: Dice.jsx (Reemplaza todo con esto)
import Die from "./Die";

// 🔴 NUEVO: El supervisor recibe el arreglo (dice) y la función (funcionReTirar)
export default function Dice({ dice, funcionReTirar }) {
    return (
        <div style={{ display: "flex", justifyContent: "center" }}>

            {dice.map((v, i) => (
                // 🔴 NUEVO: Le pasa el valor, y le pasa la función EXACTA que debe ejecutar al hacer click
                <Die key={i} val={v} hacerClick={() => funcionReTirar(i)} />
            ))}

        </div>
    );
}