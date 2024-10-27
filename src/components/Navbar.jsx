import React, { useState } from 'react';
import logo from '/assets/logo.jpg';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="bg-white text-black shadow-lg">
      <div className='container mx-auto flex items-center justify-between px-4 py-3'>
        <Link to='/' className="flex items-center">
          <img 
            className='w-12 h-12 rounded-full object-cover' 
            src={logo} 
            alt="Logo" 
          />
          <span className="ml-2 text-2xl font-bold">OLT</span>
        </Link>
        
        <div className="relative">
          <button 
            onClick={() => setDropdownOpen(!dropdownOpen)} 
            className="focus:outline-none"
          >
            <span className="text-lg">Categorías</span>
            <svg 
              className={`w-5 h-5 inline ml-2 transition-transform ${dropdownOpen ? 'transform rotate-180' : ''}`} 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {dropdownOpen && (
            <ul className="absolute right-0 mt-2 w-48 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
              <li>
                <Link 
                  to="/Remeras" 
                  className="block px-4 py-2 text-black hover:bg-indigo-100 transition-colors duration-200"
                  onClick={() => setDropdownOpen(false)} // Close dropdown on click
                >
                  Remeras
                </Link>
              </li>
              <li>
                <Link 
                  to="/Shorts" 
                  className="block px-4 py-2 text-black hover:bg-indigo-100 transition-colors duration-200"
                  onClick={() => setDropdownOpen(false)} // Close dropdown on click
                >
                  Shorts
                </Link>
              </li>
              <li>
                <Link 
                  to="/Pantalones" 
                  className="block px-4 py-2 text-black hover:bg-indigo-100 transition-colors duration-200"
                  onClick={() => setDropdownOpen(false)} // Close dropdown on click
                >
                  Pantalones
                </Link>
              </li>
            </ul>
          )}
        </div>

        <div className="flex items-center">
          <CartWidget />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
