import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget.js';
import Categorias from './categorias';

const Navbar = () => {
    return (
        <nav className="bg-black p-4 sticky z-1 top-0  ">
        <div className="container mx-auto flex justify-between items-center text-white">
          <Link to="/" className="text-2xl font-bold cursor-pointer transform transition-transform hover:scale-105 "><span className='text-blue-500'>mi</span>Tienda</Link>
          <div className="categories space-x-4">
              <Categorias />
          </div>
          <CartWidget />
        </div>
      </nav>
    );
};

export default Navbar;