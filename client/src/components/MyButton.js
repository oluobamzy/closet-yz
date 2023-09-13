import React from 'react';
import { useLocation } from 'react-router-dom';
import { useOutfit } from './outfitContext.js';
import { useState, useEffect } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MyButton = (props) => {
  //myButton to only navigate and change text of the button
   const location = useLocation();
  const { outfitItems, addToOutfit, removeFromOutfit } = useOutfit();
  const isAddedToOutfit = outfitItems.some(item => item.id === props.itemId);
  // const itemId = props.itemId;
  // Check the current pathname to determine the behavior of the button
  const isItemPage = location.pathname === '/items';
  const isBinPage = location.pathname === '/bin';
  const isTodayPage = location.pathname === '/today';
  const buttonText = isItemPage ? 'Add to Outfit' : isBinPage ? 'Restore' : isTodayPage? 'Remove' : "";
  console.log("MYButton============>props.item", props.items.itemId)
  const [addButton, setAddButton] = useState(true);

  const itemId = props.items.itemId;
  const imageUrl = props.items.imageUrl;
  
  const updateItem = (itemId) => {
    
    fetch(`http://localhost:8080/items/today/${itemId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((updatedItem) => {
        console.log("Item updated:", updatedItem);
        // You can update the state or perform other actions as needed
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };
  
  const toggleItemStatus = () => {
    if (isAddedToOutfit) {
      removeFromOutfit(itemId);

      console.log("Going to add outfit")
      window.location.href = '/items'
    } else {
      addToOutfit(imageUrl);
      console.log("Going to items")
      //window.location.href = '/today'
    }
    
  };

  

  const handleAddToOutfit = () => {
          updateItem(itemId);
          toggleItemStatus();
  };
  
  
  // Define the click handler based on the current route
  // const handleClick = () => {
  //   if (isItemPage) {
  //       console.log("Going to add outfit")
  //       window.location.href = '/today'
  //   } else {
  //       console.log("Going to items")
  //       window.location.href = '/items'
  //     // Navigate to the 'home' route if on the about page
  //     // Example using history:
  //     // history.push('/');
  //   }
  // };

  

  return (
    <div>
    <button onClick={handleAddToOutfit} >
      {buttonText}
    </button>
    {/* {isAddedToOutfit && (
      <FavoriteIcon color="error" /> 
    )} */}
    </div>
  );
};

export default MyButton;

