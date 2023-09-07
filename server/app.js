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

// routes import
const itemRoute = require("./routes/itemRoute");
const usersRoute = require("./routes/usersRoute");
const uploadRoute = require("./routes/uploadImageRoute");
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
app.use(cors({
 origin: "http://localhost:3000",
  credentials: true,
})); // Use the cors middleware
app.use(cookieParser("secretcode"));

app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// Initialize Passport configuration
initializePassport(passport);

app.use("/api/items", itemRoute);
app.use("/api", usersRoute);
app.use("/api/upload", uploadRoute);
app.use("/api/closets", closetRoute);

app.get("/", (req, res) => {
  res.json({ greetings: "hello world" });
});

app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));
