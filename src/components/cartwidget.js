import React from 'react';
import { Link } from 'react-router-dom';

const CartWidget = (num) => {
    return (
        <div className="cart-widget flex items-center text-blue-500 cursor-pointer transform transition-transform hover:scale-125">
        <Link to="/cart" className="text-2xl cart-item-count bg-blue-500 text-white rounded-full px-2 py-1">
            <ion-icon name="bag-handle-outline"></ion-icon>
            </Link>
        </div>
    );
};

export default CartWidget;