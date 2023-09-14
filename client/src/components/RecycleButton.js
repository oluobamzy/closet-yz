import React from "react";
import { useLocation } from "react-router-dom";
import { useRecycle } from "./RecycleContext";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const RecycleButton = (props) => {
  const location = useLocation();
  const { recycleItems, addToRecycle, removeFromRecycle } = useRecycle();
  const isAddedToRecycle = recycleItems.some(
    (item) => item.id === props.items.itemId
  );
  const isItemPage = location.pathname === "/items";
  const isBinPage = location.pathname === "/bin";
  const isTodayPage = location.pathname === "/today";
  const buttonText = isItemPage ? "Recycle" : isBinPage ? "Delete" : "Delete";

  const itemId = props.items.itemId;
  const imageUrl = props.items.imageUrl;

  const handleAddRecycle = () => {
    const itemId = props.items.itemId;

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
        addToRecycle(itemId);
      })
      .catch((error) => {
        console.error("Error Item not set to delete:", error);
      });
  };

  useEffect(() => {
    if (isAddedToRecycle) {
      // Refresh the page
      window.location.reload();
    }
  }, [isAddedToRecycle]);

  const toggleItemStatus = () => {
    if (isAddedToRecycle) {
      removeFromRecycle(itemId);
      window.location.href = "/items";
    } else {
      addToRecycle(imageUrl);
      window.location.href = "/bin";
    }
  };

  const handleAddToRecycle = () => {
    handleAddRecycle();
    toggleItemStatus();
  };

  return (
    <Button
      size="small"
      color="primary"
      onClick={handleAddToRecycle}
      variant="outlined"
    >
      {buttonText}
    </Button>
  );
};

export default RecycleButton;
