import React from 'react';
import Item from './Item';
import productos from '../stock';  

function Shorts() {
const shortFiltrado = productos.filter(producto => producto.clasificacion === "Short");

return (
<div className="grid grid-cols-4 gap-4">
    {shortFiltrado.map((producto) => (
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

export default Shorts;