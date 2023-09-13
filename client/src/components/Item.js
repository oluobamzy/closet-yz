
import { Link } from 'react-router-dom';
import Checkbox from '@mui/material/Checkbox';
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import InventoryIcon from "@mui/icons-material/Inventory";
// import { useOutfit } from './outfitContext.js';
import MyButton from './MyButton.js';
import RecycleButton from './RecycleButton.js';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Item = (props) => {

 
    const [isDeleted, setIsDeleted] = useState(false);
  
    const handleToggleDeleted = () => {
      setIsDeleted(!isDeleted);
    };
//isDeleted={isDeleted} onToggleDeleted={handleToggleDeleted} 
  return (
    <Card sx={{ maxWidth: 345 }}>
    {/* <CardMedia
      sx={{ height: 140 }}
      image="/static/images/cards/contemplative-reptile.jpg"
      title="green iguana"
      
    /> */}
    <CardContent>
      <Link to={`/details/${props.itemId}`}>
          <img src={props.imageUrl} alt="Item Image" />
      </Link>
      </CardContent>
      <CardActions>
        <MyButton items={props}/>
        <RecycleButton items={props} />
        </CardActions>
    </Card>
  );
};
export default Item;
