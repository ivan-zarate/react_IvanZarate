import React, { useContext } from "react";
import '../css/style.css';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Context } from '../../Context/CartContext';

const CartWidget = () => {
    const { qty } = useContext(Context);
    return (
        <>
            <div className="totalCart">
                
                <ShoppingCartIcon fontSize="" className="cartImg" />
                <p>{qty}</p>
            </div>
        </>
    );
}

export default CartWidget