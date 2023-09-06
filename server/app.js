// declarations
require("dotenv").config();
const { ENVIROMENT, PORT } = process.env;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware

// routes import
const itemRoute = require("./routes/itemRoute");
const usersRoute = require("./routes/usersRoute");

const app = express();

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
app.use(cors()); // Use the cors middleware
app.use("/api/items", itemRoute);
app.use("/api/users", usersRoute);

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
