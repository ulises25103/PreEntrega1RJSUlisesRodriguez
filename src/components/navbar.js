// Navbar.js
import React from 'react';
import CartWidget from './cartwidget.js';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 p-4">
        <div className="container mx-auto flex justify-between items-center text-white">
          <div className="brand text-2xl font-bold">Mi Tienda</div>
          <div className="categories space-x-4">
            <a href="#" className="text-white hover:underline">Categoría 1</a>
            <a href="#" className="text-white hover:underline">Categoría 2</a>
            <a href="#" className="text-white hover:underline">Categoría 3</a>
          </div>
          <CartWidget />
        </div>
      </nav>
    );
};

export default Navbar;