
import React, { useState } from "react";
import swal from "sweetalert";
import { useCart } from "./CartContext";

const ItemCount = ({ stock, onAdd, itemId }) => {
    const { getItemQuantity } = useCart();
    const [count, setCount] = useState(1);

    const increment = () => {
        const currentQuantityInCart = getItemQuantity(itemId);
        if (count + currentQuantityInCart < stock) {
            setCount(count + 1);
        }
    };

    const decrement = () => {
        if (count > 1) setCount(count - 1);
    };

    const handleAddToCart = () => {
        const currentQuantityInCart = getItemQuantity(itemId);
        
        if (currentQuantityInCart + count > stock) {
            swal({
                title: "¡Cantidad excedida!",
                text: `Solo quedan ${stock - currentQuantityInCart} unidades disponibles de este producto.`,
                icon: "warning",
                button: "Entendido",
            });
            return;
        }

        onAdd(count);
        swal({
            title: "¡Producto añadido al carrito!",
            text: `Has añadido ${count} unidades al carrito.`,
            icon: "success",
            timer: 2000,
            buttons: false,
        });
    };

    return (
        <div className="flex items-center justify-between mt-4 w-full">
            <div className="flex items-center">
                <button
                    onClick={decrement}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-l-md"
                >
                    -
                </button>
                <span className="px-4 py-2 border-t border-b border-gray-300">{count}</span>
                <button
                    onClick={increment}
                    className="px-4 py-2 bg-indigo-600 text-white rounded-r-md"
                >
                    +
                </button>
            </div>
            <button
                onClick={handleAddToCart}
                className={`ml-4 px-6 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md ${
                    stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={stock === 0}
            >
                Agregar al carrito
            </button>
        </div>
    );
};

export default ItemCount;