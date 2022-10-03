import React from 'react'
import '../css/style.css';

const ItemListContainer = ({ greeting }) => {
    return (
        <>
            <div className='contenedor'>
                <h1 className='introduccion'>¡Bienvenido {greeting}!</h1>
            </div>
        </>
    )
}

export default ItemListContainer
