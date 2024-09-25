import React from 'react';
import Item from './Item';
import productos from '../stock';  

function Remeras() {
const remerasFiltradas = productos.filter(producto => producto.clasificacion === "Remera");

return (
<div className="grid grid-cols-4 gap-4">
    {remerasFiltradas.map((producto) => (
    <Item
        key={producto.id}
        nombre={producto.nombre}
        stock={producto.stock}
        precio={producto.precio}
        color={producto.color}
        imagen={producto.imagen}
        descripcion={producto.descripcion}
    />
    ))}
</div>
);
}

export default Remeras;
