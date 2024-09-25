import React from "react";
import { Link } from "react-router-dom";

function Item({ nombre, precio, imagen }) {
  return (
    <Link>
    <div className="w-80 h-96 flex flex-col items-center justify-center">
      <img src={imagen} alt={nombre} className="w-40 flex item-center justify-center" />
      <h2 className="text-center">{nombre}</h2>
      <p className="text-center">$ {precio}</p>
    </div>
    </Link>
  );
}

export default Item;
