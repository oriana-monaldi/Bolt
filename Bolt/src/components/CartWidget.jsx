import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';

function CartWidget() {
  return (
    <div>
    <FontAwesomeIcon icon={faCartShopping} className="text-xl m-4" />    
    </div>

)
}

export default CartWidget