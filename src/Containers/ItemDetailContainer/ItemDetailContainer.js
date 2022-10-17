import React, { useState, useEffect } from 'react'
import '../../Componentes/css/style.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import BounceLoader from "react-spinners/BounceLoader";
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  const URL_BASE = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {
    const getProduct = async () => {
      try {
          const res = await fetch(URL_BASE);
          const data = await res.json();
          console.log(data);
          setProduct(data);
      } catch {
        console.log("Error");
      } finally {
        setLoading(false);
      }
    };
    getProduct();
  }, );

  return (
    <>
        {
          <>
            {loading ? <BounceLoader className='loading2' color={'#36d7b7'} loading={loading} size={100}/> : <ItemDetail product={product} />}
          </>}
      
    </>
  )
}