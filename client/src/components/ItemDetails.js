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
import { useItems } from './ItemsContext';

const ItemDetails = (props) => {
  const list = useItems();
  const [updateMode, setUpdateMode] = useState(false);
  const handleUpdateButtonClick = () => {
    setUpdateMode(true); // Set updateMode to true when the button is clicked
  };
  const { itemId } = useParams();
  const filteredList = list.filter(item => item.id === parseInt(itemId));
 

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
              <img src={filteredList[0].img_src}  style={{height:"387.5px", width:"300px"}}></img>
            </div>
            </StyledBanner>
            
              <StyledBanner style={{maxWidth:"300px", height:"387.5px", maxHeight:"387.5px"}}>
            <div className="item-details-content">
              <div className="description">
                <p>Description:{filteredList[0].description}</p>
              </div>
              </div>
              </StyledBanner>
              <StyledBanner style={{width:"300px", height:"387.5px"}}>
              <div className="items-d">
                <div className="item-d">
                  <p>Closet Name: {filteredList[0].closet_id}</p>
                </div>
                <div className="item-d">
                  <p>Season: {filteredList[0].season}</p>
                </div>
                <div className="item-d">
                  <p>Category: {filteredList[0].category}</p>
                </div>
                <div className="item-d">
                  <p>BrandName: {filteredList[0].brand_name}</p>
                </div>
                <div className="item-d">
                  <p>Colour: {filteredList[0].color}</p>
                </div>
                <div className="item-d">
                  <p>Size: {filteredList[0].size}</p>
                </div>
                <div className="item-d">
                  <p>Last worn Date: {filteredList[0].last_worn_date}</p>
                </div>
                <div className="item-d">
                  <p>Purchase Date: {filteredList[0].purchase_date}</p>
                </div>
                <div className="item-d">
                  <p>Use count: {filteredList[0].use_count}</p>
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
