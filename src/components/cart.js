import React, { useContext, useId, useState } from "react";
import { DataContext } from "../context/DataContext";
import {AddToCartIcon, RemoveFromCartIcon, ClearCartIcon, CartIcon } from './icons'
import './Cart.css'
import { useCart } from "./useCart";


function CartItem({ imagen, precio, nombre, quantity, addToCart, removeFromCart }){
    return (
    <li>
    <img
      src={imagen}
      alt={nombre}
      className="w-full object-cover"
    />
    <div>
      <strong>{nombre}</strong> ${precio}
    </div>

    <footer>
      <small>
        Qty: {quantity}
      </small>
      <button onClick={addToCart} className=" bg-green-600 hover:bg-green-800 rounded">+</button>
      <button onClick={removeFromCart} className=" bg-red-600 hover:bg-red-800 rounded ">-</button>
    </footer>
  </li>
  )
}

export function Cart() {
    const cartCheckboxId = useId()
    const { cart, clearCart, addToCart,removeFromCart } = useCart()


    return(
        <>        

        <label className='cart-button flex items-center text-center cursor-pointer transform transition-transform hover:scale-125 gap-3' htmlFor={cartCheckboxId}>
            <CartIcon />
        </label>
        <input id={cartCheckboxId} type='checkbox' hidden />

        <aside className='cart'>        
        <button onClick={clearCart}>
            <ClearCartIcon />
        </button>
        <ul>
            {cart.map(product => (
            <CartItem
                key={product.id}
                addToCart={() => addToCart(product)}
                {...product}
                removeFromCart={() => removeFromCart(product)}
                {...product}
            />
            ))}
        </ul>


        </aside>
</>
    )
    
    }

export default Cart;