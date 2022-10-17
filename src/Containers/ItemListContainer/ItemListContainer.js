import React, { useState, useEffect } from 'react'
import '../../Componentes/css/style.css';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";

export const ItemListContainer = ({ greeting }) => {

    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    const URL_BASE = 'https://fakestoreapi.com/products';
    const URL_CAT = `${URL_BASE}/category/${id}`;

    useEffect(() => {
        const getProducts = async () => {
            try {
                    const res = await fetch(id ? URL_CAT : URL_BASE);
                    const data = await res.json();
                console.log(data);
                setProductos(data);
                
            } catch {
                console.log("Error");
            } finally {
                setLoading(false);
            }
        };
        getProducts();
    }, [id]);

    return (
        <>
            <div className='contenedor'>
                <h1 className='introduccion'>¡ {greeting} !</h1>
            </div>
            <div className='promociones'>
                {
                    <>
                        {loading ? <BounceLoader className='loading' color={'#36d7b7'} loading={loading} size={100}/> : <ItemList listaProductos={productos} />}
                    </>}
            </div>
        </>
    )
}


