import React from 'react';
import { Link } from 'react-router-dom';
import CartWidget from './cartwidget.js';
import Categorias from './categorias';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center text-white">
          <Link to="/" className="brand text-2xl font-bold cursor-pointer transform transition-transform hover:scale-105">miTienda</Link>
          <div className="categories space-x-4">
              <Categorias />
          </div>
          <CartWidget />
        </div>
      </nav>
    );
};

export default Navbar;