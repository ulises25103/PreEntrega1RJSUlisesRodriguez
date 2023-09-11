import React from 'react';

const CartWidget = () => {
    return (
        <div className="cart-widget flex items-center text-blue-500">
        <ion-icon name="bag-handle-outline"></ion-icon>
        <span className="cart-item-count bg-blue-500 text-white rounded-full px-2 py-1">3</span>
        </div>
    );
};

export default CartWidget;