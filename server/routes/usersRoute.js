// userRoutes.js
const express = require("express");
const passport = require("passport");
const router = express.Router();
const bcrypt = require("bcrypt");
const users = require("../db/Queries/users"); // Import your user-related queries
const dashboard = require("../db/Queries/dashboard");

// User registration route
router.get("/register", (req, res) => {});
router.post("/register", async (req, res) => {
  const { username, first_name, last_name, password, email } = req.body;

  try {
    // Hash the password before saving it to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = {
      username,
      first_name,
      last_name,
      password: hashedPassword,
      email,
    };
    await users.addUser(user); // Assuming addUser returns a Promise
    res.json({ message: "User registered successfully" });
  } catch (error) {
    console.error(error);
    res.status(400).json({ error: "Registration failed" });
  }
});

// Login route using Passport's authenticate middleware
router.get("/login", (req, res) => {});
router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Authentication required" });
};

router.get("/dashboard", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  dashboard.loadDashboard(userId).then((data) => {
    res.json(data);
  });
});
// Logout route
router.get("/logout", (req, res) => {
  req.logout(function (err) {
    if (err) {
      return next(err);
    }
    res.redirect("/");
  });
});
router.get("/:id", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  users.getUserById(userId).then((data) => {
    res.json(data);
  });
});
router.get("/", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  users.getAllUsers().then((data) => {
    res.json(data);
  });
});
// router.post("/", (req, res) => {
//   const user = req.body;
//   users.addUser(user).then((data) => {
//     res.json(data);
//   });
// });
router.delete("/", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  users.deleteUser(userId).then((data) => {
    res.json(data);
  });
});

module.exports = router;
