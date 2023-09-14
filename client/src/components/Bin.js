import Item from "./Item";
import CabinIcon from "@mui/icons-material/Cabin";
import "./Bin.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";
import TopBar from "./TopBar";
import { Button } from "@mui/material";

const Bin = (props) => {
  const [binItems, setBinItems] = useState([]);
  // const [deleteBinItems, setDeleteBinItems] = useState([]);
  useEffect(() => {
    // Fetch data when the component mounts
    fetch(`http://localhost:8080/items/bin`, {
      method: "GET",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json(); // Parse the response body as JSON
      })
      .then((data) => {
        console.log("Items marked for deletion:", data);
        // Set the fetched data to the state
        setBinItems(data);
        
      })
      .catch((error) => {
        console.error("Error fetching items for deletion:", error);
        // Handle errors here
      });
  }, []);
  console.log("props==========>", props.children);
  const StyledContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#F1F0E8",
  }));

  const handleDeleteBinItems = () => {
    setBinItems([]);
  }
  // const handleDeleteBinItems = () => {
    
  //     // Fetch data when the component mounts
  //     fetch(`http://localhost:8080/items/bin`, {
  //       method: "DELETE",
  //       credentials: "include",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //       .then((response) => {
  //         if (!response.ok) {
  //           throw new Error("Network response was not ok");
  //         }
  //         return response.json(); // Parse the response body as JSON
  //       })
  //       .then((data) => {
  //         console.log("Bin iteems deleted:", data);
  //         // Set the fetched data to the state
  //          setBinItems(data);
          
  //       })
  //       .catch((error) => {
  //         console.error("Error fetching items for deletion:", error);
  //         // Handle errors here
  //       });
   
  // };

  const items = binItems.map((item, index) => {
    return <Item key={index} imageUrl={item.img_src} itemId={item.id} />;
  });

  return (
    <div className="bin list">
      <ResponsiveAppBar position="static" />
      <TopBar />
      <StyledContainer>
        <div className="header">
          <CabinIcon className="cabinIcon" />
          <h1>Bin</h1>
        </div>
        <div className="list-item">{items}</div>
        <div style={{marginTop:"50px"}}>
          <Button className="DeleteBinItems" variant="contained" onClick={handleDeleteBinItems}>
            Delete All
          </Button>
        </div>
      </StyledContainer>
      <Footer />
    </div>
  );
};
export default Bin;
