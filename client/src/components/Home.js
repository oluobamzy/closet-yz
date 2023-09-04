import React from "react";
import "./Home.css";
import "./Footer.css";
import "./Banner.css";
import Footer from "./Footer";
import Banner from "./Banner";
import ResponsiveAppBar from "./ResponsiveAppBar";
import { Button } from "@mui/material";



const Home = ({navigateToLogin}) => {

  return (
    <div className="HomeContainer">
     <ResponsiveAppBar />
      <Banner />

      <div className="InfoContainer">
        <div className="Info">
          <img
            src="https://cdn.retouchme.com/blogs/139-1657557007.jpg"
            alt="Step 1"
          />
          <p>Step 1:</p>
        </div>

        <div className="Info">
          <p>Step 2:</p>
          <h3>Fill out info about your item</h3>
        </div>
      </div>
      <Button variant="contained" onClick={navigateToLogin}>
        Join Now
      </Button>
      <Footer />
    </div>
  );
};

export default Home;
