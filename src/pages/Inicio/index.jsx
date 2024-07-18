import React, { useEffect, useState } from 'react';
import Domchiq from '../../components/Domchiq';
import ItemCard from '../../components/ItemCard';
import CamisaOversizedBranca from '../../images/CamisaOversizedBranca.webp';
import CamisaOversizedPreta from '../../images/CamisaOversizedPreta.webp';
import PoliesterBranca from '../../images/PoliesterBranca.webp';
import PoliesterPreta from '../../images/PoliesterPreta.webp';
import AlgodaoPimaBranca from '../../images/AlgodaoPimaBranca.webp';
import AlgodaoPimaPreta from '../../images/AlgodaoPimaPreta.webp';

const allProducts = [
  {
    id: 1,
    type: 'Camiseta',
    name: 'Camiseta Oversized - Branca',
    description: 'Tecido: 100% algodão - Fio 30.1 penteado - Gramatura de 180g - Gola redonda com ribana canelada.',
    price: 49.90,
    imageUrl: CamisaOversizedBranca,
  },
  {
    id: 2,
    type: 'Camiseta',
    name: 'Camiseta Oversized - Preta',
    description: 'Tecido: 100% algodão - Fio 30.1 penteado - Gola redonda com ribana canelada.',
    price: 49.90,
    imageUrl: CamisaOversizedPreta,
  },
  {
    id: 3,
    type: 'Camiseta',
    name: 'Camiseta Poliéster - Branca',
    description: 'Tecido: 100% Poliéster - Gola redonda com ribana',
    price: 29.90,
    imageUrl: PoliesterBranca,
  },
  {
    id: 4,
    type: 'Camiseta',
    name: 'Camiseta Poliéster - Preta',
    description: 'Tecido: 100% Poliéster - Gola redonda com ribana.',
    price: 29.90,
    imageUrl: PoliesterPreta,
  },
  {
    id: 5,
    type: 'Camiseta',
    name: 'Camiseta Algodão Pima - Branca',
    description: 'Tecido: 100% Algodão Pima -  Gola Redonda.',
    price: 139.90,
    imageUrl: AlgodaoPimaBranca,
  },
  {
    id: 6,
    type: 'Camiseta',
    name: 'Camiseta Algodão Pima - Preta',
    description: 'Tecido: 100% Algodão Pima -  Gola Redonda.',
    price: 139.90,
    imageUrl: AlgodaoPimaPreta,
  },
];

function Inicio() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(allProducts);
  }, []);

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
