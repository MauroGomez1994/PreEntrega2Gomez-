import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
   
    const fetchData = async () => {
     
      await new Promise((resolve) => setTimeout(resolve, 1000));
      
      const Items = [
        { name: 'Ladrillo', price: 10 },
        { name: 'Cemento', price: 20 },
        { name: 'Madera', price: 30 },
      ];
      
      setItems(exampleItems);
    };
    
    fetchData();
  }, []);

  return (
    <div>
      <h1>Item List Container</h1>
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
