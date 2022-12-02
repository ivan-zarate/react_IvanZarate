import React from 'react';

export const ItemsInSales = ({ sales }) => {
    return (
        <div className="contenidoCarrito">
            <h1>{sales.title}</h1>
            <p>${sales.price}</p>
            <p>{sales.cantidad}</p>
            <img className= "imagenCarrito"src={sales.image} alt={sales.title} />
        </div>
    )
}
