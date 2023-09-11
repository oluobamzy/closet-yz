import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import InventoryIcon from "@mui/icons-material/Inventory";

const Item = (props) => {
  const [itemRecycled, setItemRecycled] = useState(false);

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

  return (
    <div className="ItemContainer" style={{ position: "relative" }}>
      <Link to={`/details/${props.itemId}`}>
        <div className="Item">
          <img src={props.imageUrl} alt="Item Image" />
        </div>
      </Link>
      <div
        className="favoriteItem"
        style={{ position: "absolute", bottom: "10px", right: "10px" }}
      >
        <Link to={"/addItem"}>
          <Button style={{ backgroundColor: "#96B6C5" }}>Add to Outfit</Button>
        </Link>
        <Button
          onClick={handleAddRecycle}
          startIcon={<InventoryIcon />}
          variant="outlined"
          color="error"
        >
          Recycle
        </Button>
      </div>
    </div>
  );
};

export default Item;
