import React from 'react'
import CartWidget from './CartWidget'
import logo from '../assets/logo.jpg';

function navbar() {
  return (
    <div className='flex items-center justify-between'>
      <a><img className='w-12 m-4' src={logo} alt="Logo"/></a>
        <ul className='flex justify-center '>
          <a className='m-2 ' href="#"><li>Shop</li></a>
          <a className='m-2 ' href="#"><li>Sale</li></a>
          <a className='m-2 ' href="#"><li>Contacto</li></a>
        </ul>
        <CartWidget/>
    </div>
    

  )
}

export default navbar