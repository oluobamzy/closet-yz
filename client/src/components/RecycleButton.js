import React from 'react';
import { useLocation } from 'react-router-dom';
import { useRecycle } from './RecycleContext';
import { useState, useEffect } from 'react';

const RecycleButton = (props) => {
  //myButton to only navigate and change text of the button
   const location = useLocation();
  const { recycleItems, addToRecycle, removeFromRecycle } = useRecycle();
  const isAddedToRecycle = recycleItems.some(item => item.id === props.itemId);
  // const itemId = props.itemId;
  // Check the current pathname to determine the behavior of the button
  const isItemPage = location.pathname === '/items';
  const isBinPage = location.pathname === '/bin';
  const isTodayPage = location.pathname === '/today';
  const buttonText = isItemPage ? 'Recycle' : isBinPage ? 'Delete' : ""
  console.log("Recycle button============>props.item", props.items.itemId)
  
  const itemId = props.items.itemId;
  const imageUrl = props.items.imageUrl;

  const handleAddRecycle = () => {
    console.log("props.itemId------", itemId);

    // Send a request to the server to delete the item using props.itemId
    // You can use the fetch API or Axios for this

    fetch(`http://localhost:8080/items/bin/${itemId}`, {
      method: "PUT", // Use the appropriate HTTP method for deletion
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ delete: true }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error Item not set to delete:", error);
        // Handle error
      });
  };

  const handleRemoveRecycle = (itemId) => {
    // Send a request to the server to unmark the item for deletion
    fetch(`http://localhost:8080/items/bin/${itemId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ delete: false }), // Set delete to false
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
      })
      .catch((error) => {
        console.error("Error Item not set to delete:", error);
        // Handle error
      });
  };
  

  const toggleItemStatus = () => {
    if (isAddedToRecycle) {
      // removeFromOutfit(itemId);
      removeFromRecycle(itemId)
      handleAddRecycle()
      console.log("-----handleAddRecycle----")
        window.location.href = '/bin'
    } else {
      // addToOutfit(imageUrl);
      addToRecycle(imageUrl)
      handleRemoveRecycle();
      console.log("-----handleRemoveRecycle----")
        window.location.href = '/items'
    }
    
  };
  
  const handleAddToRecycle = () => {
        //  updateItem(itemId);
        handleAddRecycle(itemId);
          toggleItemStatus();
  };



  return (
    <button onClick={toggleItemStatus} >
      {buttonText}
    </button>
  );
};

export default RecycleButton;

