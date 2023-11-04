import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { DataContext } from '../context/DataContext.js';
import Cart from './cart.js';
import CartWidget from './cartwidget.js';
import Categorias from './categorias';

const Navbar = () => {


    return (
        <nav className="bg-black p-4 sticky z-1 top-0 flex justify-between  ">
        <div className="container mx-auto  flex items-center text-white ">
          <Link to="/" className="text-2xl font-bold cursor-pointer transform transition-transform hover:scale-105 "><span className='text-blue-500'>mi</span>Tienda</Link>
          <div className="flex justify-center items-center flex-grow">
              <Categorias />
          </div>
          <div className=''>
            <Cart/>
          </div>
          
        </div>
      </nav>
    );
};

export default Navbar;