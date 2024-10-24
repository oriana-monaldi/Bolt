import React from 'react';
import logo from '/assets/logo.jpg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className=" text-black shadow-lg">
      <div className='container mx-auto flex items-center justify-between px-4 py-3'>        <Link to='/' className="flex items-center">
          <img 
            className='w-12 h-12 rounded-full object-cover' 
            src={logo} 
            alt="Logo" 
          />
        </Link>
        <ul className='flex items-center space-x-8'>
          <li>
            <Link 
              to="/Remeras" 
              className="hover:text-indigo-400 transition-colors duration-200 text-lg"
            >
              Remeras
            </Link>
          </li>
          <li>
            <Link 
              to="/Shorts" 
              className="hover:text-indigo-400 transition-colors duration-200 text-lg"
            >
              Shorts
            </Link>
          </li>
          <li>
            <Link 
              to="/Pantalones" 
              className="hover:text-indigo-400 transition-colors duration-200 text-lg"
            >
              Pantalones
            </Link>
          </li>
        </ul>

        <div className="flex items-center">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;