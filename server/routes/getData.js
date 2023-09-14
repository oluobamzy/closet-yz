// Import the necessary modules
const express = require("express");
const fetch = require("node-fetch"); // Assuming you have fetch installed

// Create a middleware function for weatherRoute
const weatherMiddleware = (req, res, next) => {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=Toronto&appid=0969a1d30a248f9daa062e0af9c7b104",
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
    .then((response) => response.json())
    .then((data) => {
      req.weatherData = data; // Attach the weather data to the request object
      next(); // Call next to continue processing the request
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "An error occurred" });
    });
};

// Create a router for weatherRoute
const weatherRoute = express.Router();

// Define a route handler for "/weather"
weatherRoute.get("/", weatherMiddleware, (req, res) => {
  res.json(req.weatherData); // Respond with the weather data from the request object
});

// Export the weatherRoute router
module.exports = weatherRoute;
