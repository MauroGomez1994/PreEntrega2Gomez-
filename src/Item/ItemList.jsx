import React from 'react';
import Item from './Item';

const ItemList = ({ items }) => {
  return (
    <div>
      <h2>Item List</h2>
      {items.map((item, index) => (
        <Item key={index} name={item.name} price={item.price} />
      ))}
    </div>
  );
};

export default ItemList;
