import React from "react";
import { Link } from "react-router-dom";

function Button() {
  return (
    <div className="bg-black text-xl text-white w-30 h-8 text-center rounded-md">
      <Link to="#" className="p-2">
        Comprar
      </Link>
    </div>
  );
}

export default Button;
