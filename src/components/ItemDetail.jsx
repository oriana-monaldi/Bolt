import React, { useState } from "react";
import { useCart } from "./CartContext";

function ItemCount({ stock, onAdd }) {

const [count, setCount] = useState(1);

const increment = () => {
	if (count < stock) setCount(count + 1);
};

const decrement = () => {
	if (count > 1) setCount(count - 1);
};

return (
	<div className="flex flex-col items-center gap-2">
		<div className="flex items-center gap-4">
		<button onClick={decrement} className="px-3 py-1 bg-gray-200 rounded">
			-
		</button>
		<span>{count}</span>
		<button onClick={increment} className="px-3 py-1 bg-gray-200 rounded">
			+
		</button>
		</div>
		<button
		onClick={() => onAdd(count)}
		className="w-full px-8 py-2 m-6 text-sm font-medium text-white bg-indigo-400 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-300"
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
<div className="flex flex-row items-start justify-center">
	<div className="w-1/2 flex justify-end pr-4">
	<img
		src={item.imagen}
		alt={item.name}
		className="h-82 w-64 object-cover"
	/>
	</div>
	<div className="w-1/2 flex flex-col items-start pl-4">
	<h2 className="text-3xl font-bold">{item.nombre}</h2>
	<p className="text-lg mt-4">{item.descripcion}</p>
	<p className="text-lg mt-6">Color: {item.color}</p>
	<p className="text-lg mt-6">Stock: {item.stock}</p>
	<p className="font-bold text-2xl my-4">${item.precio}</p>
	<ItemCount stock={item.stock} onAdd={handleAdd} />
	</div>
</div>
);
}

export default ItemDetail;
