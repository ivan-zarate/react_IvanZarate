import React, { useState, useEffect } from 'react'
import '../../Componentes/css/style.css';
import { ItemList } from '../ItemList/ItemList';
import { useParams } from 'react-router-dom';
import BounceLoader from "react-spinners/BounceLoader";
import { getDocs, collection, query, where } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemListContainer = ({ greeting }) => {

    const [products, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const productCollection = collection(db, 'productos');
        const q = query(productCollection, where('category', '==', `${id}`));
        getDocs(id ? q : productCollection)
            .then((result) => {
                const list = result.docs.map((item) => {
                    return {
                        ...item.data(),
                        id: item.id,
                    };
                });
                console.log(list);
                setProductos(list);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(setLoading(false));
    }, [id]);

    return (
        <>
            <div className='contenedor'>
                <h1 className='introduccion'>¡ {greeting} !</h1>
            </div>
            <div className='promociones'>
                {
                    <>
                        {loading ? <BounceLoader className='loading' color={'#36d7b7'} loading={loading} size={100} /> : <ItemList listaProductos={products} />}
                    </>}
            </div>
        </>
    )
}


