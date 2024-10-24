import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

function CartWidget() {
  const { getTotalQuantity } = useCart();
  const quantity = getTotalQuantity();

  return (
    <div className='flex items-center'>
      <Link to="/cart" className="relative">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="icon icon-tabler icon-tabler-shopping-cart" 
          width="28" 
          height="28" 
          viewBox="0 0 24 24" 
          strokeWidth="1.5" 
          stroke="white" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <path d="M17 17h-11v-14h-2" />
          <path d="M6 5l14 1l-1 7h-13" />
        </svg>
        {quantity > 0 && (
          <div className='absolute -top-2 -right-2 bg-white text-black rounded-full h-5 w-5 flex items-center justify-center text-xs font-bold'>
            {quantity}
          </div>
        )}
      </Link>
    </div>
  );
}

export default CartWidget;