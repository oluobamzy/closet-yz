import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import { useState } from 'react';
import { useOutfit } from './outfitContext.js';

const Item = (props) => {
  
  const { outfitItems, addToOutfit, removeFromOutfit } = useOutfit();
  const isAddedToOutfit = outfitItems.some(item => item.id === props.itemId);

  const toggleItemStatus = () => {
    if (isAddedToOutfit) {
      removeFromOutfit(props.itemId);
    } else {
      addToOutfit(props.imageUrl);
    }
  };


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
  const handleAddToOutfit = () => {
         updateItem(props.itemId);
          toggleItemStatus();
  };
     

  return (
    <div className="ItemContainer" style={{ position: 'relative' }}>
      <Link to={`/details/${props.itemId}`}>
        <div className="Item">
          <img src={props.imageUrl} alt="Item Image" />
        </div>
      </Link>
      <div className="favoriteItem" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        <Link to={`/today`}>
          <Button style={{ backgroundColor: "#96B6C5" }} onClick={handleAddToOutfit}>{isAddedToOutfit ? "Delete Item" : "Add to Outfit"}</Button>
        </Link>
      </div>
    </div>
  );
}

export default Item;
