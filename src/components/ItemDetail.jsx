import React from "react";
import { useCart } from "./CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    const { addToCart } = useCart();

    const handleAdd = (quantity) => {
        addToCart(item, quantity);
    };

    return (
        <div className="max-w-6xl mx-auto p-8 bg-white rounded-lg shadow-lg flex flex-col md:flex-row items-start">
            <div className="md:w-1/2 flex justify-center mb-4 md:mb-0">
                <img
                    src={item.imagen}
                    alt={item.nombre}
                    className="h-96 w-full object-cover rounded-lg shadow-md"
                />
            </div>
            <div className="md:w-1/2 flex flex-col items-start pl-6">
                <h2 className="text-5xl font-bold text-gray-800 mb-6">{item.nombre}</h2>
                <p className="text-lg text-gray-600 mb-8">{item.descripcion}</p>
                <div className="text-lg text-gray-700 mb-4">
                    <p>Color: <span className="font-semibold">{item.color}</span></p>
                    <p>Stock: <span className="font-semibold">{item.stock}</span></p>
                </div>
                <p className="font-bold text-4xl text-gray-900 my-4">${item.precio}</p>
                <ItemCount stock={item.stock} onAdd={handleAdd} itemId={item.id} />
            </div>
        </div>
    );
};

export default ItemDetail;