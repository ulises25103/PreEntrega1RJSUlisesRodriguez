import React from 'react';
import { Link } from 'react-router-dom';


const CartWidget = () => {

    return (
        <div className="cart-widget flex items-center text-blue-500 cursor-pointer transform transition-transform hover:scale-125 gap-3">
            <ion-icon name="bag-handle-outline"></ion-icon>
        </div>
    );
};

export default CartWidget;