import React from "react";
import "./Home.css";
import { Container, Grid, Typography, Button, Paper } from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Banner from "./Banner";
import Footer from "./Footer";
import { styled } from "@mui/system";

const StyledBanner = styled(Paper)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: theme.spacing(2),
  backgroundColor: "#F1F0E8", // Background color
  marginBottom: theme.spacing(4),
  marginTop: theme.spacing(4),
}));

const Home = ({ navigateToLogin }) => {
  return (
    // <StyledContainer>
    <div className="newContainer">
      <ResponsiveAppBar className="nav" />
      <Banner />
      <StyledBanner>
        <Grid
          container
          className="infoContainer"
          sx={{ display: "flex", flexDirection: "row" }}
        >
          <Grid
            item
            xs={12}
            md={6}
            className="info"
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "32px",
            }}
          >
            <img
              src="https://cdn.retouchme.com/blogs/139-1657557007.jpg"
              alt="Step 1"
              className="infoImage"
              style={{
                width: "300px",
                height: "auto",
                maxWidth: "300px",
                borderRadius: "8px",
                marginRight: "10px",
              }}
            />
          </Grid>

          <Grid item xs={12} md={6} className="info">
            <div className="infographContainer">
              <div className="infographStep">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px", // Update this line
                  }}
                >
                  1
                </div>
                <Typography variant="h6">Create a Closet</Typography>
              </div>
              <div className="infographStep">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px", // Update this line
                  }}
                >
                  2
                </div>
                <Typography variant="h6">Take a Photo of the Item</Typography>
              </div>
              <div className="infographStep">
                <div
                  style={{
                    width: "40px",
                    height: "40px",
                    backgroundColor: "red",
                    color: "white",
                    borderRadius: "50%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginRight: "8px", // Update this line
                  }}
                >
                  3
                </div>
                <Typography variant="h6">
                  Add the Item to Closet and See the Dashboard
                </Typography>
              </div>
            </div>
          </Grid>
        </Grid>
      </StyledBanner>
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={navigateToLogin}
        className="joinButton"
        style={{ marginBottom: "30px" }}
      >
        Join Now
      </Button>
      <Footer />
    </div>
  );
};

export default Home;
