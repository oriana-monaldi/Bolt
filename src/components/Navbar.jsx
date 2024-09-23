import React from 'react'
import logo from '/assets/logo.jpg';
import CartWidget from './CartWidget'

function Navbar() {
  return (
    <div>
      <div className='flex items-center justify-between bg-white'>
        <a href='#'><img className='w-12 m-4' src={logo} alt="Logo"/></a>
          <ul className='flex justify-center'>
            <a className='m-2 text-black' href="#"><li>Shop</li></a>
            <a className='m-2 text-black' href="#"><li>Sale</li></a>
            <a className='m-2 text-black' href="#"><li>Contacto</li></a>
          </ul>
        <CartWidget/>
      </div>
    </div>

  )
}

export default Navbar