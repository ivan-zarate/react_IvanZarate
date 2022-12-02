import React from 'react';
import { ItemsInSales } from "../ItemsInSales/ItemsInSales"

export const Sales = ({ sale }) => {
 
    return (
        <>  
            <div className="contenidoCarrito">
                <p>{sale.id}</p>
                <p>${sale.total}</p>
                {sale.items.map((cart) =>
                    <ItemsInSales key={cart.id} sales={cart} />
                )}
            </div>
        </>
    )
}