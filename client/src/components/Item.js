
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import InventoryIcon from "@mui/icons-material/Inventory";
// import { useOutfit } from './outfitContext.js';
import MyButton from './MyButton.js';
import RecycleButton from './RecycleButton.js';

const Item = (props) => {
 
    const [isDeleted, setIsDeleted] = useState(false);
  
    const handleToggleDeleted = () => {
      setIsDeleted(!isDeleted);
    };

  return (
    <div className="ItemContainer" style={{ position: "relative" }}>
      <Link to={`/details/${props.itemId}`}>
        <div className="Item">
          <img src={props.imageUrl} alt="Item Image" />
        </div>
      </Link>
        <MyButton items={props}/>
        <RecycleButton items={props} isDeleted={isDeleted} onToggleDeleted={handleToggleDeleted} />
    </div>
  );
};
export default Item;
