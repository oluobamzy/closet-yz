// OutfitContext.js
import React, { createContext, useContext, useState } from 'react';

const OutfitContext = createContext();

export const OutfitProvider = ({ children }) => {
  const [outfitItems, setOutfitItems] = useState([]);

  const addToOutfit = (item) => {
    setOutfitItems([...outfitItems, item]);
  };

  const removeFromOutfit = (itemId) => {
    
      
      fetch(`http://localhost:8080/items/today/${itemId}`, {
        method: "PUT",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((updatedItem) => {
          setOutfitItems(outfitItems.filter(item => item.id !== itemId));
          console.log("Item updated:", updatedItem);
          // You can update the state or perform other actions as needed
        })
        .catch((error) => {
          console.error("Error updating item:", error);
        });
    
    

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
