import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Item({ id, nombre, precio, imagen }) { 
  const navigate = useNavigate();

  const manejadorDeClick = () => {
      navigate(`/producto/${id}`);
  };

  return (
    <Link to={`/producto/${id}`} onClick={manejadorDeClick}>
      <div className="w-80 h-96 flex flex-col items-center justify-center border border-black m-4">
        <img src={imagen} alt={nombre} className="w-40 flex item-center justify-center" />
        <h2 className="text-center">{nombre}</h2>
        <p className="text-center">$ {precio}</p>
      </div>
    </Link>
  );
}

export default Item;
