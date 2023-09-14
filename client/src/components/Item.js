import { Link } from "react-router-dom";
import Checkbox from "@mui/material/Checkbox";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import InventoryIcon from "@mui/icons-material/Inventory";
// import { useOutfit } from './outfitContext.js';
import MyButton from "./MyButton.js";
import RecycleButton from "./RecycleButton.js";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const Item = (props) => {
  const [isDeleted, setIsDeleted] = useState(false);

  const handleToggleDeleted = () => {
    setIsDeleted(!isDeleted);
  };

  return (
    <Card
      sx={{ maxWidth: 290, minWidth: 290, border: "1px solid #ADC4CE" }}
      style={{ backgroundColor: "#F1F0E8" }}
    >
      <Link to={`/details/${props.itemId}`}>
        <CardMedia
          component="img"
          alt="Item Image"
          height="270"
          src={props.imageUrl}
        />
      </Link>

      <CardActions>
        <MyButton items={props} />
        <RecycleButton items={props} />
      </CardActions>
    </Card>
  );
};
export default Item;
