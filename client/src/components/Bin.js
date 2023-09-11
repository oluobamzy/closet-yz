import Item from "./Item";
import CabinIcon from "@mui/icons-material/Cabin";
import "./Bin.css";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Footer from "./Footer";
import React, { useState, useEffect } from "react";

const Bin = () => {
  const [binItems, setBinItems] = useState([]);

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

  const StyledContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // Use minHeight to fill the entire viewport vertically
    backgroundColor: "#F1F0E8",
  }));

  const StyledBanner = styled(Paper)(({ theme }) => ({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    padding: theme.spacing(2),
    backgroundColor: "#F1F0E8", // Background color
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
    height: "50%",
  }));

  // const imageUrlList = [
  //   {
  //     id: 1,
  //     url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
  //   },
  //   {
  //     id: 2,
  //     url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
  //   },
  //   {
  //     id: 3,
  //     url: "https://th.bing.com/th/id/OIP.t3YAUGbDG8BMGJo7Wq84MAHaJo?pid=ImgDet&rs=1",
  //   },
  // ];

  const items = binItems.map((item, index) => {
    return <Item key={index} imageUrl={item.img_src} itemId={item.id} />;
  });

  return (
    <div className="bin list">
      <ResponsiveAppBar position="static" />
      <StyledContainer>
        <div className="header">
          <CabinIcon className="cabinIcon" />
          <h1>Bin</h1>
        </div>
        <div className="list-item">{items}</div>
      </StyledContainer>
      <Footer />
    </div>
  );
};
export default Bin;
