// Archivo: HookForm.jsx
import { useForm } from "react-hook-form";

export default function HookForm() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const enviarDatos = (datos) => {
        console.log("¡Datos perfectos listos para MongoDB!", datos);
    };

    return (
        <form onSubmit={handleSubmit(enviarDatos)} style={{ padding: "20px", border: "2px solid #28a745", borderRadius: "10px" }}>
            <h3>Formulario Profesional 💼</h3>

            <div style={{ marginBottom: "15px" }}>
                <label>Producto:</label>
                <input
                    type="text"
                    placeholder="Mínimo 3 letras"
                    {...register("producto", {
                        required: "¡El producto es obligatorio!",
                        minLength: { value: 3, message: "Debe tener al menos 3 letras" }
                    })}
                    style={{ width: "100%", padding: "5px" }}
                />
                {errors.producto && <p style={{ color: "red", margin: 0 }}>{errors.producto.message}</p>}
            </div>

            <div style={{ marginBottom: "15px" }}>
                <label>Cantidad:</label>
                <input
                    type="number"
                    {...register("cantidad", {
                        required: "¡Ingresa una cantidad!",
                        min: { value: 1, message: "La cantidad mínima es 1" }
                    })}
                    style={{ width: "100%", padding: "5px" }}
                />
                {errors.cantidad && <p style={{ color: "red", margin: 0 }}>{errors.cantidad.message}</p>}
            </div>

            <button style={{ padding: "10px", width: "100%", backgroundColor: "#28a745", color: "white", border: "none", borderRadius: "5px" }}>
                Enviar Pedido
            </button>
        </form>
    );
}