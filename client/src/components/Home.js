import React from "react";
import "./Home.css";
import { Container, Grid, Typography, Button , Paper} from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Banner from "./Banner";
import Footer from "./Footer";
import { styled } from "@mui/system";


// const StyledContainer = styled(Container)(({ theme }) => ({
//   // display: "flex",
//   // flexDirection: "column",
//   // alignItems: "center",
//   // justifyContent: "center",
//   // minHeight: "100vh",
//   // backgroundColor: "#F1F0E8",
//   // width: "100%",
//    maxWidth: "100%",
//   "& .infoContainer": {
//     marginTop: theme.spacing(4),
//   },
//   "& .info": {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: theme.spacing(4),
//   },
//   "& .infoImage": {
//     width: "100%",
//     maxWidth: "300px",
//     borderRadius: "8px",
//     marginRight: theme.spacing(2),
//   },
//   "& .joinButton": {
//     marginTop: theme.spacing(4),
//   },
//   "& .infographContainer": {
//     backgroundColor: "white",
//     border: "2px solid red",
//     padding: theme.spacing(2),
//     borderRadius: "8px",
//     marginTop: theme.spacing(4),
//   },
//   "& .infographStep": {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: theme.spacing(2),
//   },
//   "& .nav": {
//     marginBottom: "100px",
//   }
// }));
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

const Home = ({ navigateToLogin }) => {
  return (
    // <StyledContainer>
    <div className="newContainer">

      <ResponsiveAppBar className="nav" />

      {/* <Container> */}
        <Banner />
        <StyledBanner >
        <Grid container className="infoContainer" sx={{ display: "flex", flexDirection: "row" }}>
          <Grid item xs={12} md={6} className="info" sx={{
            display: "flex",
            alignItems: "center",
            marginBottom: "32px",
          }} >
            <img
              src="https://cdn.retouchme.com/blogs/139-1657557007.jpg"
              alt="Step 1"
              className="infoImage"
              style={{
                width: "300px",
                height: "auto",
                maxWidth: "300px",
                borderRadius: "8px",
                marginRight: "10px"
              }} />
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
                <Typography variant="h6">Add the Item to Closet and See the Dashboard</Typography>
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
          style={{marginBottom:"30px"}}
        >
          Join Now
        </Button>

{/* 
      </Container> */}
      <Footer />
      {/* </StyledContainer> */}
    </div>
  );
};

export default Home;
