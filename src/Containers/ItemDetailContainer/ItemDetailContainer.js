import React, { useState, useEffect } from 'react';
import '../../Componentes/css/style.css';
import { ItemDetail } from '../ItemDetail/ItemDetail';
import BounceLoader from "react-spinners/BounceLoader";
import { useParams } from 'react-router-dom';
import { getDoc, collection, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

export const ItemDetailContainer = () => {

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    const productCollection = collection(db, 'productos');
    const refDoc = doc(productCollection, id);

    getDoc(refDoc)
      .then((result) => {
        setProduct({
          id: result.id,
          ...result.data()
        });

      })
      .catch((error) => {
        console.log(error);
      })
      .finally(setLoading(false));
  }, [id]);

  return (
    <>
      {
        <>
          {loading ? <BounceLoader className='loading2' color={'#36d7b7'} loading={loading} size={100} /> : <ItemDetail product={product} />}
        </>}

    </>
  )
}