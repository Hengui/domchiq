import React, { useEffect, useState } from 'react';
import Domchiq from '../../components/Domchiq';
import ItemCard from '../../components/ItemCard';
import { useSearchParams } from 'react-router-dom';
import db from '../../services/firebase';
import { allProducts } from '../../mock/products';
import { collection, getDocs } from "firebase/firestore"; 

function Inicio() {
  const [products, setProducts] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  console.log(searchParams.get('search'));

  function searchProducts(query) {
      const queryLowerCase = query.toLowerCase();
  
      const filteredProducts = allProducts.filter(product => {
          const productNameLowerCase = product.name.toLowerCase();
          return productNameLowerCase.includes(queryLowerCase);
      });
  
      return filteredProducts;
  }

  useEffect(() => {
    setProducts(allProducts);
  }, []);

  useEffect(() => {
    const ItemCollection = collection(db, "produtos");
    getDocs(ItemCollection).then((snapshot) => {
      setProducts(snapshot.docs.map((doc) => ({ ...doc.data() })));
    }).catch((error) => {
      console.error("Error fetching documents: ", error);
    });
  }, []);

  useEffect(() => {
    console.log(searchParams.get('search'))
    if(searchParams.get('search')) {
        setProducts(searchProducts(searchParams.get('search')))
    } else {
        setProducts(allProducts)
    }
  }, [searchParams.get('search')])

  return (
    <div className='py-5 px-40'>
      {/* info */}
      <Domchiq />
      {/* Card */}
      <div className='flex gap-5 flex-wrap justify-center mt-10'>
        {products.map((item, index) => (
          <ItemCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
}

export default Inicio;
