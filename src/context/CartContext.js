import { createContext, useState } from "react";


// 1. crear contexto
export const CartContext = createContext()

// 2. crear provider
export function CartProvider ({ children }){
    const [cart, setCart] = useState([])

    const addToCart = product => {
        const productInCartIndex = cart.findIndex(item => item.id === product.id )
        if (productInCartIndex >= 0) {
            const newCart = structuredClone(cart)
            newCart[productInCartIndex].quantity += 1
            return setCart(newCart)
        }

        setCart(prevState =>([
            ...prevState, 
            {
                ...product, 
                quantity: 1
            }
        ]))
        console.log(product)
    }

    const removeFromCart = product => {
        setCart(prevState => cart.filter(item=> item.id !== product.id))
    }

    const clearCart = ()=>{
        setCart([])
    }  

    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return(
        <CartContext.Provider value={{
            cart,
            addToCart,
            clearCart,
            removeFromCart,
            checkProductInCart
        }}>
            {children}
        </CartContext.Provider>
    )


    }