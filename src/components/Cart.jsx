import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";

function Cart() {
const { cart, removeFromCart, getTotalPrice } = useCart();

if (cart.length === 0) {
return (
    <div className="flex flex-col items-center justify-center p-8">
    <h2 className="text-2xl mb-4">Tu carrito está vacío</h2>
    <Link to="/" className="bg-black text-white px-4 py-2 rounded">
        Volver a la tienda
    </Link>
    </div>
    );
}

return (
<div className="container mx-auto p-8">
    <h2 className="text-2xl mb-4">Tu Carrito</h2>
    <div className="space-y-4">
    {cart.map((item) => (
    <div
    key={item.id}
    className="flex items-center justify-between border p-4"
    >
    <div className="flex items-center gap-4">
        <img
        src={item.imagen}
        alt={item.nombre}
        className="w-20 h-20 object-cover"
        />
        <div>
        <h3 className="font-bold">{item.nombre}</h3>
        <p>Cantidad: {item.quantity}</p>
        <p>Precio unitario: ${item.precio}</p>
        </div>
    </div>
    <div>
        <p className="font-bold">
        Subtotal: ${item.precio * item.quantity}
        </p>
        <button
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 mt-2"
        >
        Eliminar
        </button>
    </div>
    </div>
    ))}
    </div>
    <div className="text-center mt-8">
    <Link to="/">
    <button
    className="bg-white text-center w-400 rounded-2xl h-14 relative text-black text-xl font-semibold group"
    type="button"
    >
    <div
    className="bg-indigo-400 mr-6 rounded-xl h-12 w-1/4 flex items-center justify-center absolute left-1 top-[4px] group-hover:w-[300px] z-10 duration-500" // Aumenté el valor aquí
    >
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 1024"
        height="25px"
        width="25px"
    >
        <path
        d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z"
        fill="#000000"
        ></path>
        <path
        d="m237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z"
        fill="#000000"
        ></path>
    </svg>
    </div>
    <p className="translate-x-2 ml-20">Seguir comprando</p>
    </button>
    </Link>
    </div>

    <div className="mt-8 flex flex-col items-end">
    <p className="text-xl font-bold">Total: ${getTotalPrice()}</p>
    <Link
        to="/checkout"
        className="bg-black text-white px-6 py-2 rounded mt-4"
    >
        Proceder al pago
    </Link>
    </div>
</div>
);
}

export default Cart;
