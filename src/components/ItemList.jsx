import React from 'react';
import Item from './Item';
import productos from '../stock';  

function ItemList() {
return (
<div>
    {productos.map((producto) => (
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

export default ItemList;
