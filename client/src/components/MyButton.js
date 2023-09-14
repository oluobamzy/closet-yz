import React from "react";
import { useLocation } from "react-router-dom";
import { useOutfit } from "./outfitContext.js";
import { useState, useEffect } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Button from "@mui/material/Button";

const MyButton = (props) => {
  const location = useLocation();
  const { outfitItems, addToOutfit, removeFromOutfit } = useOutfit();
  const isAddedToOutfit = outfitItems.some((item) => item.id === props.itemId);
  const isItemPage = location.pathname === "/items";
  const isBinPage = location.pathname === "/bin";
  const isTodayPage = location.pathname === "/today";

  const buttonText = isItemPage
    ? "Add to Outfit"
    : isBinPage
    ? "Restore"
    : isTodayPage
    ? "Remove"
    : "";
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
        // You can update the state or perform other actions as needed
      })
      .catch((error) => {
        console.error("Error updating item:", error);
      });
  };

  const toggleItemStatus = () => {
    if (isAddedToOutfit) {
      removeFromOutfit(itemId);
      window.location.href = "/items";
    } else {
      addToOutfit(imageUrl);
    }
  };

  const handleAddToOutfit = () => {
    updateItem(itemId);
    toggleItemStatus();
  };

  return (
    <div>
      <Button
        size="small"
        color="primary"
        onClick={handleAddToOutfit}
        variant="outlined"
      >
        {buttonText}
      </Button>
    </div>
  );
};

export default MyButton;
