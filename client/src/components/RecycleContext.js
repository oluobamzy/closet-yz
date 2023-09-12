// RecycleContext.js
import React, { createContext, useContext, useState } from 'react';

const RecycleContext = createContext();

export const RecycleProvider = ({ children }) => {
  const [recycleItems, setRecycleItems] = useState([]);

  const addToRecycle = (item) => {
    setRecycleItems([...recycleItems, item]);
  };

  const removeFromRecycle = (itemId) => {
    setRecycleItems(recycleItems.filter(item => item.id !== itemId));
  };

  return (
    <RecycleContext.Provider value={{ recycleItems, addToRecycle, removeFromRecycle }}>
      {children}
    </RecycleContext.Provider>
  );
};

export const useRecycle = () => {
  return useContext(RecycleContext);
};
