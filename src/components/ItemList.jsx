import React, { useState, useEffect } from "react";
import Item from "./Item";
import productos from "../stock";
import "../index.css";

function ItemList({ categoria }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const traerProductos = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productos);
        }, 3000);
      });
    };

    traerProductos().then((resultados) => {
      setData(resultados);
      setLoading(false);
    });
  }, []);

   if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <span className="loader"></span>
      </div>
    );
  }

  const productosFiltrados = categoria
    ? data.filter((producto) => producto.categoria === categoria)
    : data;

  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-4 gap-6 p-6">
        {productosFiltrados.map((producto) => (
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


    </div>
  );
}

export default ItemList;
