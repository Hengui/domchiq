import React from 'react';

export default function ItemDetail({ item }) {
  return (
    <div className="item-detail">
      <h3>Camisa Oversized{item.title}</h3>
      <p>{item.description}</p>
      <p>Price: 65,00 ${item.price}</p>
      <img src={item.pictureUrl} alt={item.title} />
    </div>
  );
}
