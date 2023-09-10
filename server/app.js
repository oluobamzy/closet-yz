// declarations
require("dotenv").config();
const { ENVIROMENT, PORT } = process.env;
const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
//const cookieSession = require("cookie-session");
const passport = require("passport");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const flash = require("express-flash");
const { initializePassport } = require("./db/Queries/passport");
const multer = require("multer");

// routes import
const itemRoute = require("./routes/itemRoute");
const usersRoute = require("./routes/usersRoute");

const closetRoute = require("./routes/closetRoute");

const app = express();

// cookie session setup
// app.use(
//   cookieSession({name:"session", keys:["openreplay"], maxAge: 24 * 60 * 60 * 100,})
// );
app.use(
  session({
    secret: "secretcode",
    resave: true,
    saveUninitialized: true,
  })
);

// middleware setup
app.use(morgan(ENVIROMENT));
app.use(bodyParser.json());
const corsOptions = {
  origin: "http://localhost:3000", // Allow requests only from this origin
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true, // Allow cookies and authentication headers
};
app.use(cors(corsOptions)); // Use the cors middleware
app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Initialize Passport configuration
initializePassport(passport);

app.use("/items", itemRoute);
app.use("/api/users", usersRoute);
app.use("/api/closets", closetRoute);
app.use("/auth", usersRoute);
app.use("/images", express.static("images"));
// Inside a protected route
app.get("/profile", passport.authenticate("local"), (req, res) => {
  // Handle the authenticated user's request
});

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
