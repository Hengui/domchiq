import React from 'react';

export default function Item({ item }) {
  return (
    <div className="item">
      <h3>Camisa Oversized{item.title}</h3>
      <p>Price: 65,00 ${item.price}</p>
      <img src={item.pictureUrl} alt={item.title} />
    </div>
  );
}
