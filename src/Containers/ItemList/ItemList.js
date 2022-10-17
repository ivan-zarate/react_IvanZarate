import React from 'react';
import { Item } from '../Item/Item.js';

export const ItemList = ({ listaProductos }) => {

  return (
    <>
      {listaProductos.map((producto) =>  
              <Item key={producto.id} product={producto}/>
        )}
    </>
  )
}
