import React, { useState, useEffect } from "react";
import Item from "./Item";
import { db } from "../firebase/firebase"; 
import { collection, getDocs } from "firebase/firestore";
import "../index.css";

function ItemList({ categoria }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Item"));
        const productsArray = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setData(productsArray);
      } catch (error) {
        console.error("Error fetcheando productos: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
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
