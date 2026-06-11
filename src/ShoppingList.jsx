// Archivo: ShoppingList.jsx

export default function ShoppingList({ items }) {
    return (
        <div>
            <h1>🛒 Mi Lista de Compras</h1>
            <ul>
                {items.map((producto) => (

                    // LA MAGIA: Le asignamos la llave única aquí
                    <li key={producto.id}>
                        {producto.articulo} - Cantidad: {producto.cantidad}
                    </li>

                ))}
            </ul>
        </div>
    );
}