import React from 'react';
import { Sales } from '../Sales/Sales';

export const SalesList = ({ listaVentas }) => {

  return (
    <>
      {listaVentas.map((venta) =>  
              <Sales key={venta.id} sale={venta}/>
        )}
    </>
  )
}