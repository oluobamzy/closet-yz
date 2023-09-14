// OutfitContext.js
import React, { createContext, useContext, useState } from "react";

const RecycleContext = createContext();

export const RecycleProvider = ({ children }) => {
  const [recycleItems, setRecycleItems] = useState([]);

  const addToRecycle = (item) => {
    setRecycleItems([...recycleItems, item]);
  };

  const removeFromRecycle = (itemId) => {
    fetch(`http://localhost:8080/items/bin/${itemId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ delete: true }),
    })
      .then((response) => response.json())
      .then((updatedItem) => {
        setRecycleItems(recycleItems.filter((item) => item.id !== itemId));
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  return (
    <RecycleContext.Provider
      value={{ recycleItems, addToRecycle, removeFromRecycle }}
    >
      {children}
    </RecycleContext.Provider>
  );
};

export const useRecycle = () => {
  return useContext(RecycleContext);
};
