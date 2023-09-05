import "./ItemDetails.css";
import { useState } from "react";
import ItemDetailsUpdate from "./ItemDetailsUpdate";
import "./ItemDetailsUpdate.css";
import { useParams } from 'react-router-dom';
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

const ItemDetails = (props) => {
  const [updateMode, setUpdateMode] = useState(false);
  const handleUpdateButtonClick = () => {
    setUpdateMode(true); // Set updateMode to true when the button is clicked
  };
  const { itemId } = useParams();
  
  const StyledContainer = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
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
    height: "50%",
  }
  ));
  return (
    <div className="item-details">
      <ResponsiveAppBar />
      <StyledContainer>
        
      {updateMode === false && (
        <div>
          <h1>Item Details</h1>
          <div className="itemBody">
            <StyledBanner>
            <div className="item-details-img" style={{width:"100%"}}>
              <img src="https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1" alt="item" style={{height:"387.5px", width:"300px"}}></img>
            </div>
            </StyledBanner>
            
              <StyledBanner style={{maxWidth:"300px", height:"387.5px", maxHeight:"387.5px"}}>
            <div className="item-details-content">
              <div className="description">
                <p>Description: A shirt is a versatile garment, typically made of various fabrics, designed to cover the upper body. It comes in a myriad of styles, colors, and patterns to suit diverse occasions and personal preferences. A staple of everyday fashion, shirts can be short-sleeved or long-sleeved, with collars or without, and often feature buttons or snaps down the front. They can be formal or casual, fitting snugly or loosely. Shirts are essential in both professional settings, where they exude elegance, and casual settings, where they offer comfort and style. Their adaptability makes them a wardrobe must-have, suitable for everything from business meetings to leisurely outings.</p>
              </div>
              </div>
              </StyledBanner>
              <StyledBanner style={{width:"300px", height:"387.5px"}}>
              <div className="items-d">
                <div className="item-d">
                  <p>Closet Name: Closet A</p>
                </div>
                <div className="item-d">
                  <p>Season : Winter</p>
                </div>
                <div className="item-d">
                  <p>Category : Shirt</p>
                </div>
                <div className="item-d">
                  <p>BrandName : Calvin Klein</p>
                </div>
                <div className="item-d">
                  <p>Colour : Green</p>
                </div>
                <div className="item-d">
                  <p>Size : Medium</p>
                </div>
                <div className="item-d">
                  <p>Last worn Date : 2023/09/12</p>
                </div>
                <div className="item-d">
                  <p>Purchase Date : 2022/04/01</p>
                </div>
                <div className="item-d">
                  <p>Use count : 120</p>
                </div>
              </div>
              </StyledBanner>
          </div>

          <div className="item-btns">
            <Button className="btn btn-primary">Add to outfit</Button>
            <Button
              className="btn btn-primary"
              onClick={handleUpdateButtonClick}
            >
              Update Item
            </Button>
            <Button className="btn btn-danger">Sell / Donate</Button>
          </div>
        </div>
      )}
      {updateMode === true && <ItemDetailsUpdate />}
      
      </StyledContainer>
      <Footer />
    </div>
  );
};
export default ItemDetails;
