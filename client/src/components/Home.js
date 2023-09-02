import React from "react";
import "./Home.css";
import "./NavBar.css";
import "./Footer.css";
import "./Banner.css";
import Navbar from "./NavBar";
import Footer from "./Footer";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="HomeContainer">
      <Navbar />
      <Banner />

      <div className="InfoContainer">
        <div className="Info">
          <img
            src="https://cdn.retouchme.com/blogs/139-1657557007.jpg"
            alt="Info Image 1"
          />
          <p>Step 1:</p>
        </div>

        <div className="Info">
          <p>Step 2:</p>
          <h3>Fill out info about your item</h3>
        </div>
      </div>

      <button>Join Now</button>

      <Footer />
    </div>
  );
};

export default Home;
