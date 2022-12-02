import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import { Context } from "../../Context/CartContext";

export const ItemsInCart = ({ product }) => {
    const { deleteItem } = useContext(Context);
    return (
        <div className="contenidoCarrito">
            <Link to={'/producto/' + product.id}><img className="imagenCarrito" src={product.image} alt={product.title} /></Link>
            <h1>{product.title}</h1>
            <p>${product.price}</p>
            <p>{product.cantidad}</p>
            <DeleteIcon fontSize="" className="DeleteIcon" onClick={() => deleteItem(product.id)} />
        </div>
    )
}

