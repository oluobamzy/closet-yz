import React from "react";
import Item from "./Item";
import "./ListItem.css"; // Import your CSS file for ListItem component
import TopBar from "./TopBar";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import ResponsiveAppBar from "./ResponsiveAppBar"; // Import the ResponsiveAppBar
import Footer from "./Footer"; // Import the Footer
import { styled } from "@mui/system";
import { Paper } from "@mui/material";
import { useItems } from "./ItemsContext";

const ListItem = () => {
  const list = useItems();
  const StyledContainer = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    minHeight: "100vh", // Use minHeight to fill the entire viewport vertically
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
  }));

  const image = list.map((image) => {
    return <Item key={image.id} imageUrl={image.img_src} itemId={image.id} />;
  });

  return (
    <div className="list">
      <ResponsiveAppBar />
      <StyledContainer>
        <TopBar />
        <StyledBanner elevation={3}>
          <div className="list-item">{image}</div>
          <div className="btn-closet">
            <Link to={"/addItem"}>
              <Button
                style={{ backgroundColor: "#96B6C5", marginRight: "5PX" }}
              >
                Add to Closet
              </Button>
            </Link>
          </div>
        </StyledBanner>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default ListItem;
