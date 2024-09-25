import React, { useState, useEffect } from 'react';
import Item from './Item';  
import productos from '../stock';  

function ItemList() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const traerProductos = () => {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(productos);
                }, 3000);
            });
        };

        traerProductos().then(resultados => {
            setData(resultados);
            setLoading(false);
        });
    }, []);

    if (loading) {
        return <h2 className='text-center text-2xl'>Cargando...</h2>;
    }

    return (
        <div className="grid grid-cols-4 gap-4">
            {data.map((producto) => (
                <Item
                    key={producto.id}
                    id={producto.id}  
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
