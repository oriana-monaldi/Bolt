import React from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer() {
  const { categoria } = useParams();

  return (
    <div>
      <ItemList categoria={categoria} />
    </div>
  );
}

export default ItemListContainer;
