import React, { useContext, useState } from "react";
import '../css/style.css';
import { Context } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { ItemsInCart } from "../ItemsInCart/ItemsInCart"


export const Cart = () => {
  const { cart, total, clear } = useContext(Context);
  const [venta, setVenta] = useState();
  let comprador = {
    email: localStorage.getItem('email'),
    password: localStorage.getItem('password'),
  };
  const finalizarCompra = () => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      comprador,
      items: cart,
      total,
      date: serverTimestamp()
    })
      .then(result => {
        setVenta(result.id);
      })
      .catch(e => {
        console.log(e);
      });
    cart.forEach(productInCart => {
      let stock = productInCart.stock - productInCart.cantidad;
      const updateStock = doc(db, "productos", productInCart.id);
      updateDoc(updateStock, { stock });
    });
    clear();
  }

  return (
    <>
      {cart.length === 0 ? (
        <>
          {venta === undefined ? (
            <div className="sinProductos">
              <h1>
                No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
              </h1>
              <h2>Gracias por tu visita</h2>
            </div>
          ) : (
            <>
              <div className="sinProductos">
                <h1>¡Gracias por su compra!</h1>
                <p>Su codigo de compra es {venta}</p>
                <p>Para ver mas productos puede ingresar <Link to="/">ACA</Link></p>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          {cart.map((producto) =>
            <ItemsInCart key={producto.id} product={producto} />
          )}
          <p>Total a pagar: ${total}</p>
          <button className="finalizarCompra" onClick={finalizarCompra}>Finalizar compra</button>
        </>
      )}
    </>
  );
};


