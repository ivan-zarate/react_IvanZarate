import React from 'react';
import {Link} from 'react-router-dom'

export const Item = ({product}) => {
  // const unProducto={id:0, ruta:"producto/id"}
  return (
        <div className="listaProductos">
                <img src={product.image} alt={product.title} />
                <span>$ {product.price}</span>
                <h5>{product.title}</h5>
                <Link to={'/producto/' + product.id} className='detalles'><button type="button">Details</button>  </Link>
              </div>
  )
}
