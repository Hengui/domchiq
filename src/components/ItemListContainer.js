import React from 'react';

export default function ItemListContainer({ greeting }) {
  return (
    <div className="item-list-container">
      <p>{greeting}</p>
    </div>
  );
}
