import React from 'react';
import  {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from "./Item";
import "./ListItem.css"; // Import your CSS file for ListItem component
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import ResponsiveAppBar from './ResponsiveAppBar'; // Import the ResponsiveAppBar
import Footer from './Footer'; // Import the Footer
import { styled } from "@mui/system";
import { Paper } from "@mui/material";



const OutfitToday = () => {

  const StyledContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: '100vh', // Use minHeight to fill the entire viewport vertically
    backgroundColor: "#F1F0E8",
    
  }));
  
  const StyledBanner = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#F1F0E8", // Background color
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  }
  ));
  const { itemId } = useParams();
  const [list, setList] = useState([]);
  
 useEffect(() => {
    fetch(`http://localhost:8080/items/today`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {setList(data);
        
      })
      .catch((err) => console.log(err));
  }, [itemId])
  
  //const filteredList = list.filter(item => item.id === parseInt(itemId));
  const image = list.map((image) => {
    return <Item key={image.id} imageUrl={image.img_src} itemId={image.id} />;
  });
 
    return (
        <div>
            <ResponsiveAppBar />
            <StyledContainer>
              <h1>Outfit Today</h1>
              <StyledBanner elevation={3}>
              <div className="list-item">{image}</div>
              </StyledBanner>
            </StyledContainer>
            <Footer />
        </div>
    );
};

export default OutfitToday;