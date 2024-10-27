import React, { useState } from "react";
import { useCart } from "./CartContext";
import swal from "sweetalert";

function ItemCount({ stock, onAdd }) {
  const [count, setCount] = useState(1);

  const increment = () => {
    if (count < stock) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 1) setCount(count - 1);
  };

  const handleSubmit = () => {
    swal({
      title: "¡Se ha añadido al carrito correctamente!",
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
        onClick={() => {
          onAdd(count);
          handleSubmit();
        }}
        className={`ml-4 px-6 py-2 text-sm font-medium text-white bg-indigo-500 rounded-md ${stock === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
        disabled={stock === 0}
      >
        Agregar al carrito
      </button>
    </div>
  );
}

function ItemDetail({ item }) {
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
        <ItemCount stock={item.stock} onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default ItemDetail;
