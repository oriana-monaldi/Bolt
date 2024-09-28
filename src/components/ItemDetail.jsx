import React from "react";
import Button from './Button';

function ItemDetail({ item }) {
	return (
		<div className="flex flex-row items-start justify-center">
			<div className="w-1/2 flex justify-end pr-4">
				<img src={item.imagen} alt={item.name} className="h-82 w-64 object-cover" />
			</div>
			<div className=" w-1/2 flex flex-col items-start pl-4">
				<h2 className="text-3xl font-bold ">{item.nombre}</h2>
				<p className="text-sm mt-4">{item.descripcion}</p>
				<p className="text-sm mt-4">Color:{item.color}</p>
				<p className="text-sm mt-2">Stock: {item.stock}</p>
				<p className="font-bold text-xl my-4">${item.precio}</p>
				<Button />
			</div>
		</div>
	);
}

export default ItemDetail;
