import React from "react";
import Button from './Button'

function ItemDetail({item}) {
	return (
		<div className="flex flex-col items-center">
			<div className="flex h-64 w-64 items-center">
				<img src={item.imagen} alt={item.name} className="" />
			</div>
			<h2 className="text-2xl font-bold">{item.nombre}</h2>
			<p>{item.descripcion}</p>
			<p>Price: ${item.precio}</p>
			<p>Stock: {item.stock}</p>
            <Button/>
		</div>
	);
}

export default ItemDetail;