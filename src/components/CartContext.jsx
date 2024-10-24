import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [cart, setCart] = useState([]);

const addToCart = (item, quantity) => {
const existingItem = cart.find((cartItem) => cartItem.id === item.id);

if (existingItem) {
    setCart(
    cart.map((cartItem) =>
        cartItem.id === item.id
        ? { ...cartItem, quantity: cartItem.quantity + quantity }
        : cartItem,
    ),
    );
    } else {
        setCart([...cart, { ...item, quantity }]);
    }
};

const removeFromCart = (itemId) => {
    setCart(cart.filter((item) => item.id !== itemId));
};

const clearCart = () => {
    setCart([]);
};

const getTotalQuantity = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
};

const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.precio * item.quantity, 0);
};

return (
    <CartContext.Provider
        value={{
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        getTotalQuantity,
        getTotalPrice,
        }}
    >
        {children}
    </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
