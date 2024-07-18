import React, { useEffect, useState } from 'react';
import Domchiq from '../../components/Domchiq';
import ItemCard from '../../components/ItemCard';
import CamisaOversizedBranca from '../../images/CamisaOversizedBranca.webp';
import CamisaOversizedPreta from '../../images/CamisaOversizedPreta.webp';
import PoliesterBranca from '../../images/PoliesterBranca.webp';
import PoliesterPreta from '../../images/PoliesterPreta.webp';
import AlgodaoPimaBranca from '../../images/AlgodaoPimaBranca.webp';
import AlgodaoPimaPreta from '../../images/AlgodaoPimaPreta.webp';
import { useSearchParams } from 'react-router-dom';


const allProducts = [
  {
    id: 1,
    type: 'Camiseta',
    name: 'Camiseta Oversized - Branca',
    description: 'Tecido: 100% algodão - Fio 30.1 penteado - Gramatura de 180g - Gola redonda com ribana canelada.',
    price: 49.90,
    imageUrl: CamisaOversizedBranca,
    quantityAvaiable: 99,
  },
  {
    id: 2,
    type: 'Camiseta',
    name: 'Camiseta Oversized - Preta',
    description: 'Tecido: 100% algodão - Fio 30.1 penteado - Gola redonda com ribana canelada.',
    price: 49.90,
    imageUrl: CamisaOversizedPreta,
    quantityAvaiable: 99,
  },
  {
    id: 3,
    type: 'Camiseta',
    name: 'Camiseta Poliéster - Branca',
    description: 'Tecido: 100% Poliéster - Gola redonda com ribana',
    price: 29.90,
    imageUrl: PoliesterBranca,
    quantityAvaiable: 99,
  },
  {
    id: 4,
    type: 'Camiseta',
    name: 'Camiseta Poliéster - Preta',
    description: 'Tecido: 100% Poliéster - Gola redonda com ribana.',
    price: 29.90,
    imageUrl: PoliesterPreta,
    quantityAvaiable: 99,
  },
  {
    id: 5,
    type: 'Camiseta',
    name: 'Camiseta Algodão Pima - Branca',
    description: 'Tecido: 100% Algodão Pima -  Gola Redonda.',
    price: 139.90,
    imageUrl: AlgodaoPimaBranca,
    quantityAvaiable: 99,
  },
  {
    id: 6,
    type: 'Camiseta',
    name: 'Camiseta Algodão Pima - Preta',
    description: 'Tecido: 100% Algodão Pima -  Gola Redonda.',
    price: 139.90,
    imageUrl: AlgodaoPimaPreta,
    quantityAvaiable: 99,
  },
];

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
