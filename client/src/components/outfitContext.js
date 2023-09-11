// OutfitContext.js
import React, { createContext, useContext, useState } from 'react';

const OutfitContext = createContext();

export const OutfitProvider = ({ children }) => {
  const [outfitItems, setOutfitItems] = useState([]);

  const addToOutfit = (item) => {
    setOutfitItems([...outfitItems, item]);
  };

  const removeFromOutfit = (itemId) => {
    setOutfitItems(outfitItems.filter(item => item.id !== itemId));
  };

  return (
    <OutfitContext.Provider value={{ outfitItems, addToOutfit, removeFromOutfit }}>
      {children}
    </OutfitContext.Provider>
  );
};

export const useOutfit = () => {
  return useContext(OutfitContext);
};
