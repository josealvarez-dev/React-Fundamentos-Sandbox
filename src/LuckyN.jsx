// Archivo: LuckyN.jsx
import { useState } from "react";
import Dice from "./Dice";
import Button from "./Button";

// --- FUNCIONES AYUDANTES (Las que se habían borrado) ---
const tirarDado = () => Math.floor(Math.random() * 6) + 1;

const obtenerTiros = (cantidad) => {
    const tiros = [];
    for (let i = 0; i < cantidad; i++) {
        tiros.push(tirarDado());
    }
    return tiros;
};

const sumarArreglo = (arreglo) => {
    return arreglo.reduce((total, num) => total + num, 0);
};
// --------------------------------------------------------

export default function LuckyN({ numDice = 2, goal = 7 }) {
    // 1. EL ESTADO
    const [dados, setDados] = useState(obtenerTiros(numDice));

    // 2. LA LÓGICA
    const esGanador = sumarArreglo(dados) === goal;

    // 3. EVENTO: Tirar todos los dados
    const tirarDeNuevo = () => {
        setDados(obtenerTiros(numDice));
    };

    // 4. EVENTO: Tirar un solo dado (Clase 674)
    const reTirarUnDado = (indiceDado) => {
        setDados(dados.map((dadoViejo, i) => {
            if (i === indiceDado) {
                return tirarDado();
            }
            return dadoViejo; // Los demás se quedan igual
        }));
    };

    return (
        <main style={{ border: "2px solid #ffcc00", padding: "30px", textAlign: "center", borderRadius: "10px", width: "400px" }}>
            <h2>Juego: Lucky {goal} 🍀</h2>

            {/* Le pasamos el arreglo y la función de un solo dado */}
            <Dice dice={dados} funcionReTirar={reTirarUnDado} />

            {esGanador && <h3 style={{ color: "#28a745", fontSize: "28px" }}>¡GANASTE! 🎉</h3>}

            {/* Le pasamos la función de tirar todos al botón */}
            <Button hacerClick={tirarDeNuevo} label="Tirar Dados 🎲" />
        </main>
    );
}