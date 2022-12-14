import React, { useState, createContext } from 'react';
import { useEffect } from 'react';

export const Context = createContext();

export const CustomProvider = ({ children }) => {
    
    const [cart, setCart] = useState([]);
    const [qty, setQty] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setQty(cart.reduce((total, item) => total + item.cantidad, 0))
        setTotal(cart.reduce((total, item) => total + (item.cantidad * item.price), 0))
        
    }, [cart])
    
    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            const modificado = cart.map((producto) => {
                if (producto.id === item.id) {
                    producto.cantidad += cantidad;
                }
                return producto;
            });
            setCart(modificado);
            
        } else {
            setCart([...cart, { ...item, cantidad }]);
            localStorage.setItem('cart', JSON.stringify(cart))
        }
        setQty(qty + cantidad);
        setTotal(total + (item.price * cantidad));
        
    };

    const deleteItem = (id) => {
        const found = cart.find(producto => producto.id === id);
        setCart(cart.filter((item) => item.id !== id));
        setQty(qty - found.cantidad)
        setTotal(total - (found.price * found.cantidad))
    };

    const isInCart = (id) => cart.some((item) => item.id === id);

    const clear = () => {
        setCart([]);
        setQty(0);
        setTotal(0);
    };

    return (
        <Context.Provider value={{ cart, qty, total, addItem, deleteItem, clear, isInCart }}>
            {children}
        </Context.Provider>
    );
};

