import { getDocs, collection} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import React, { useState, useEffect } from 'react';
import '../../Componentes/css/style.css';
import { SalesList } from '../SalesList/SalesList';
import BounceLoader from "react-spinners/BounceLoader";
import { useParams } from 'react-router-dom';

export const SalesListContainer = () =>{
    const [sales, setSales] = useState([]);
    const [loading, setLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        const salesCollection = collection(db, 'ventas');
        getDocs(salesCollection)
            .then((result) => {
                const list = result.docs.map((sale) => {
                    return {
                        ...sale.data(),
                        id: sale.id,
                    };
                });
                setSales(list);
                console.log("Ventas", list);
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(setLoading(false));
    }, [id]);

    return (
        <>
            <div className='contenedor'>
                <h1 className='introduccion'> Compras realizadas </h1>
            </div>
            <div className='listadoVentas'>
                <p>CODIGO</p>
                <p>TOTAL</p>
                <p>ARTICULO</p>
                <p>PRECIO</p>
                <p>CANTIDAD</p>
            </div>
            <div className='comprasRealizadas'>
                {
                    <>
                        {loading ? <BounceLoader className='loading' color={'#36d7b7'} loading={loading} size={100} /> : <SalesList listaVentas={sales} />}
                    </>}
            </div>
        </>
    )

}