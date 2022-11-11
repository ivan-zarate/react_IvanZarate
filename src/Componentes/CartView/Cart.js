import React, { useContext } from "react";
import '../css/style.css';
import { Context } from "../../Context/CustomContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { db } from "../../firebase/firebase";
import { collection, addDoc, serverTimestamp, doc, updateDoc } from "firebase/firestore";
import { useState } from "react";


export const Cart = () => {
  const { cart, total, clear, deleteItem } = useContext(Context);
  const [email, setEmail]=useState('');
  const [password, setPassword]=useState('');
  const comprador = {
   
  };
  // const guardarCarrito =()=>{
  //   const storage= window.localStorage.setItem('Cart', cart);
  //   console.log(storage);
  // }
  // guardarCarrito();
  // const traerCarrito =()=>{
  //   window.localStorage.getItem('cart');
  // }
  // traerCarrito();
  const finalizarCompra = () => {
    const ventasCollection = collection(db, "ventas");
    addDoc(ventasCollection, {
      comprador,
      items: cart,
      total,
      date: serverTimestamp()
    })
      .then(result => {
        console.log(result.id);
      })
      .catch(e => {
        console.log(e);
      });
    cart.forEach(productInCart => {
      let stock = productInCart.stock - productInCart.cantidad;
      const updateStock = doc(db, "productos", productInCart.id);
      updateDoc(updateStock, { stock });
      console.log("Venta " + productInCart.id);
    });
    clear();
  }

  return (
    <>
    <form onSubmit={e=>{
    e.preventDefault()
    }}>
      <input type='text' name='email' placeholder="email" value={email} onChange={e=> setEmail(e.target.value)}></input>
      {localStorage.setItem('Email', email)}
      <input type='password' name='password' placeholder="Contraseña" value={password} onChange={e=> setPassword(e.target.value)}></input>
      {localStorage.setItem('Password', password)}
      <button type="submit">Iniciar Sesion</button>
    </form>
      {cart.length === 0 ? (
        <>
        <div className="sinProductos">
          <h1>
            No agregaste productos aun, puedes ir <Link to="/">ACA</Link>
          </h1>
          <h2>Gracias por tu visita</h2>
        </div>
        </>
      ) : (
        <>
          {cart.map((producto) => (
            <>
              <div className="contenidoCarrito">
                <img className="imagenCarrito" src={producto.image} alt={producto.title} />
                <h1 key={producto.id}>{producto.title}</h1>
                <DeleteIcon fontSize="" className="DeleteIcon" onClick={()=>deleteItem(producto.id)}/>
              </div>
            </>
          ))}
          <button className="finalizarCompra" onClick={finalizarCompra}>Finalizar compra</button>
        </>
      )}
    </>
  );
};