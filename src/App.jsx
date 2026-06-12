// Archivo: App.jsx
import ShoppingList from "./ShoppingList";

export default function App() {
    return (
        <div style={{ color: "white", padding: "50px" }}>
            {/* Dibujamos toda la aplicación de la lista de compras */}
            <ShoppingList />
        </div>
    );
}