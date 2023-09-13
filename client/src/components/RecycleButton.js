import React from "react";
import { useLocation } from "react-router-dom";
import { useRecycle } from "./RecycleContext";
import { useState, useEffect } from "react";
import Button from "@mui/material/Button";

const RecycleButton = (props) => {
  //myButton to only navigate and change text of the button
  const location = useLocation();
  const { recycleItems, addToRecycle, removeFromRecycle } = useRecycle();
  const isAddedToRecycle = recycleItems.some(
    (item) => item.id === props.items.itemId
  );
  // const itemId = props.itemId;
  // Check the current pathname to determine the behavior of the button
  const isItemPage = location.pathname === "/items";
  const isBinPage = location.pathname === "/bin";
  const isTodayPage = location.pathname === "/today";
  const buttonText = isItemPage ? "Recycle" : isBinPage ? "Delete" : "Delete";
  console.log("Recycle button============>props.item", props.items.itemId);

  const itemId = props.items.itemId;
  const imageUrl = props.items.imageUrl;

  const handleAddRecycle = () => {
    const itemId = props.items.itemId;
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
        addToRecycle(itemId);
      })
      .catch((error) => {
        console.error("Error Item not set to delete:", error);
        // Handle error
      });
  };

  useEffect(() => {
    if (isAddedToRecycle) {
      // You can perform additional actions here if needed
      // For example, you can redirect to a different page or show a success message
      // Refresh the page
      window.location.reload();
    }
  }, [isAddedToRecycle]);

  const toggleItemStatus = () => {
    if (isAddedToRecycle) {
      // removeFromOutfit(itemId);
      removeFromRecycle(itemId);
      window.location.href = "/items";
    } else {
      // addToOutfit(imageUrl);
      addToRecycle(imageUrl);

      console.log("-----handleRemoveRecycle----");
      window.location.href = "/bin";
    }
  };

  const handleAddToRecycle = () => {
    //  updateItem(itemId);
    handleAddRecycle();
    toggleItemStatus();
  };

  return (
    <Button
      // startIcon={<InventoryIcon />}
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
