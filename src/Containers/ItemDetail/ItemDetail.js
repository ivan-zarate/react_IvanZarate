import React from 'react';


export const ItemDetail = ({ product }) => {

  return (
    <article className='producto'>
      <img src={product.image} alt={product.title} />
      <div className='texto'>
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <h4>$ {product.price}</h4>
      </div>
    </article>
  )
}