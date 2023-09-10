const router = require("express").Router();
const closets = require("../db/Queries/closet");
const access = require("../db/Queries/access");
const passport = require("passport");
const bcrypt = require("bcrypt");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Authentication required" });
};
router.get("/:id", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  console.log("ClosetRouteUserId---------->", userId);
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  const id = req.params.id;
  closets.getClosetById(id).then((data) => {
    console.log("ClosetRouteDataGetClosetById---------->", data);
    res.json(data);
  });
});
router.get("/", isAuthenticated, (req, res) => {
  //get all closets
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }

  closets.getAllClosets(userId).then((data) => {
    console.log("ClosetRouteDataGetAllClosets---------->", data);
    res.json(data? data : []);
  });
});
router.post("/", isAuthenticated, (req, res) => {
  //add a closet
  console.log("ClosetRouteUserIdPOST---------->", req.user[0].id);
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  console.log("ClosetRouteUserIdPOST2---------->", req.body);
  const { itemData } = req.body;
  console.log("ClosetRouteUserIdPOST3---------->", itemData);
  const { closet_name, description } = itemData;
  console.log("ClosetRouteUserIdPOST4---------->", closet_name, description);

  const users_id = userId;
  const closet = {
    closet_name,
    users_id,
    description,
  };
  console.log("ClosetRouteCloset---------->", closet);
  closets.addCloset(closet).then((data) => {
    console.log("ClosetRouteDataAddcloset---------->", data);
    res.json(data);
    const closet_id = data[0].id;
    console.log("ClosetRouteClosetId---------->", closet_id);

    access.addToAccess(userId, closet_id);
  });
});

module.exports = router;
