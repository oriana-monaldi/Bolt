import React from 'react';
import logo from '/assets/logo.jpg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <div className='flex items-center justify-between bg-white'>
        <Link to='/'><img className='w-12 m-4' src={logo} alt="Logo" /></Link>
        <ul className='flex justify-center'>
          <li className='m-2 text-black'>
            <Link to="/Remeras">Remeras</Link>
          </li>
          <li className='m-2 text-black'>
            <Link to="/Shorts">Shorts</Link>
          </li>
          <li className='m-2 text-black'>
            <Link to="/Pantalones">Pantalones</Link>
          </li>
        </ul>
        <CartWidget />
      </div>
    </div>
  );
}

export default Navbar;
