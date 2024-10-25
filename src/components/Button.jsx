import React from "react";

function Button({ children, onClick, className, type = "button", ...props }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-black text-white px-6 py-2 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
