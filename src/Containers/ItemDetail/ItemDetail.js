import React, { useState, useContext } from 'react';
import ItemCount from "../../Componentes/ItemCount/ItemCount.js"
import { Link } from "react-router-dom";
import { Context } from "../../Context/CustomContext";

export const ItemDetail = ({ product }) => {
  const [isPressedButton, setIsPressedButton] = useState(false);
  const { cart, addItem, isInCart } = useContext(Context);
  let stock=0;
  if (isInCart(product.id)) {
    const found = cart.find(item => item.id === product.id);
    stock = product.stock - found.cantidad;
  } else {
    stock = product.stock;
  }

  const onAdd = (count) => {
    setIsPressedButton(true);
    addItem(product, count);
  };
  return (
    <article className='producto'>
      <img src={product.image} alt={product.title} />
      <div className='texto'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h4>$ {product.price}</h4>
      
      {!isPressedButton ? (
        <ItemCount stock={stock} initial={1} onAdd={onAdd} />
      ) : (
        <Link to="/cart">
          <button className="finalizarCompraDetail">Finalizar Compra</button>
        </Link>
      )}
      </div>
    </article>
  )
}