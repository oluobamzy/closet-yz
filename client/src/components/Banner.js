import React from "react";
import { Paper, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledBanner = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "#F1F0E8", // Background color
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4),
  "& img": {
    width: "100%",
    maxWidth: "100%", // Adjust the width as needed
    height: "auto",
    borderRadius: "8px", // Add border radius if desired
  },
  "& h1": {
    marginTop: theme.spacing(2),
    fontSize: "24px", // Adjust the font size as needed
    
  },
}));

const Banner = () => {
  return (
    <StyledBanner elevation={3}>
      <img
        src="https://closetbutler.com/cmsAdmin/uploads/closet-butler-nj-walk-in-closets-banner_001.png"
        alt="Banner"
      />
      <Typography variant="h4" style={{color:"#96B6C5",fontWeight:"bolder"}}>Your closet in one place</Typography>
    </StyledBanner>
  );
};

export default Banner;
