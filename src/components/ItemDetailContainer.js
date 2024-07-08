import React, { useState, useEffect } from 'react';

const getItem = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: 1,
        title: 'Camisa Oversizes',
        description: '#',
        price: 65.00,
        pictureUrl: '#',
      });
    }, 2000);
  });
};

export default function ItemDetailContainer() {
  const [item, setItem] = useState(null);

  useEffect(() => {
    getItem().then((result) => {
      setItem(result);
    });
  }, []);

  if (!item) {
    return <p>Loading...</p>;
  }

  return (
    <div className="item-detail-container">
    </div>
  );
}
