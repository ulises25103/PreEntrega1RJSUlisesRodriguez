import React from 'react';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="container mx-auto mt-4 flex justify-center">
      <p className="text-2xl text-blue-500">{greeting}</p>
    </div>
  );
};

export default ItemListContainer;