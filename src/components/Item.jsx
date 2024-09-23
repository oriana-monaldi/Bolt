import React from "react";
import Button from "./Button";
function Item({ nombre, precio, imagen }) {
  return (
    <div className="w-1/4">
      <img src={imagen} alt={nombre} className="w-48" />
      <h2 className="text-center">{nombre}</h2>
      <p className="text-center">$ {precio}</p>
      <Button />
    </div>
  );
}

export default Item;
