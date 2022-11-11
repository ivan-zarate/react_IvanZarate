import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [count, setCount] = useState(initial);

  const subtract = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  const add = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  return (
    <div className="contadorProductos">
      <button className="masOMenos" onClick={subtract}>-</button>
      <h2>{count}</h2>
      <button className="masOMenos" onClick={add}>+</button>
      <button className="finalizarCompra" disabled={stock === 0} onClick={()=>onAdd(count)}>
        <span >{stock === 0 ? 'No tenemos stock' : 'Agregar al carrito'}</span>
      </button>
    </div>
  );
};

export default ItemCount;