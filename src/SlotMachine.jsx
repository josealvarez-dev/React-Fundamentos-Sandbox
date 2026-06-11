// Archivo: SlotMachine.jsx

// 1. Recibimos 3 Props: val1, val2 y val3 (que serán nuestros emojis)
export default function SlotMachine({ val1, val2, val3 }) {
  
  // 2. EL CEREBRO (Lógica Backend en el Frontend)
  // Comparamos si el primero es igual al segundo Y el segundo es igual al tercero.
  // Esto nos da un booleano: true (si los 3 son iguales) o false (si hay alguno distinto).
  const esGanador = (val1 === val2) && (val2 === val3);

  // 3. ESTILOS DINÁMICOS (Clase 636)
  // Si esGanador es true, pintamos de verde. Si es false, pintamos de rojo.
  const colorMensaje = esGanador ? "#28a745" : "#dc3545";

  // 4. LA VISTA (El Cuerpo)
  return (
    <div style={{ 
      border: "3px solid #333", 
      padding: "20px", 
      margin: "20px auto", 
      width: "300px", 
      textAlign: "center",
      backgroundColor: "#1a1a1a",
      borderRadius: "15px"
    }}>
      {/* Mostramos los 3 emojis en grande */}
      <h2 style={{ fontSize: "50px", margin: "10px" }}>
        {val1} {val2} {val3}
      </h2>
      
      {/* Mostramos el mensaje dinámico con su color dinámico */}
      <h3 style={{ color: colorMensaje }}>
        {esGanador ? "¡Felicidades, ganaste! 🤑" : "Perdiste, intenta de nuevo 😭"}
      </h3>
      
      {/* Un pequeño extra: Solo si esGanador es verdadero, mostramos un sub-mensaje (Clase 634) */}
      {esGanador && <p style={{ color: "gold" }}>¡Llevas el Jackpot!</p>}
    </div>
  );
}