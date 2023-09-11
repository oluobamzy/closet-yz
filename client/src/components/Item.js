
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import InventoryIcon from "@mui/icons-material/Inventory";
import { useOutfit } from './outfitContext.js';

const Item = (props) => {
  
  const { outfitItems, addToOutfit, removeFromOutfit } = useOutfit();
  const isAddedToOutfit = outfitItems.some(item => item.id === props.itemId);
  const [itemRecycled, setItemRecycled] = useState(false);

  const toggleItemStatus = () => {
    if (isAddedToOutfit) {
      removeFromOutfit(props.itemId);
    } else {
      addToOutfit(props.imageUrl);
    }
  };
  const handleAddRecycle = () => {
    const itemId = props.itemId;
    console.log("props.itemId------", props.itemId);

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
        setItemRecycled(true);
      })
      .catch((error) => {
        console.error("Error Item not set to delete:", error);
        // Handle error
      });
  };

  useEffect(() => {
    if (itemRecycled) {
      // You can perform additional actions here if needed
      // For example, you can redirect to a different page or show a success message
      // Refresh the page
      window.location.reload();
    }
  }, [itemRecycled]);

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
    <div className="ItemContainer" style={{ position: "relative" }}>
      <Link to={`/details/${props.itemId}`}>
        <div className="Item">
          <img src={props.imageUrl} alt="Item Image" />
        </div>
      </Link>
      {/* <div
        className="favoriteItem"
        style={{ position: "absolute", bottom: "10px", right: "10px" }}
      > */}
        {/* <Link to={"/addItem"}>
          <Button style={{ backgroundColor: "#96B6C5" }}>Add to Outfit</Button>
      <div className="favoriteItem" style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
        </div>
        </Link> */}
        <Link to={`/today`}>
          <Button style={{ backgroundColor: "#96B6C5" }} onClick={handleAddToOutfit}>{isAddedToOutfit ? "Delete Item" : "Add to Outfit"}</Button>
        </Link>
        <Button
          onClick={handleAddRecycle}
          startIcon={<InventoryIcon />}
          variant="outlined"
          color="error"
        >
          Recycle
        </Button>
      {/* </div> */}
    </div>
  );
};
export default Item;
