const router = require("express").Router();
const closets = require("../db/Queries/closet");
const access = require("../db/Queries/access");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Authentication required" });
};
router.get("/:id", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  const id = req.params.id;
  closets.getClosetById(id).then((data) => {
    res.json(data);
  });
});

router.get("/", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }

  closets.getAllClosets(userId).then((data) => {
    res.json(data ? data : []);
  });
});

router.post("/", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  const { itemData } = req.body;
  const { closet_name, description } = itemData;
  const users_id = userId;
  const closet = {
    closet_name,
    users_id,
    description,
  };
  closets.addCloset(closet).then((data) => {
    res.json(data);
    const closet_id = data[0].id;
    access.addToAccess(userId, closet_id);
  });
});

module.exports = router;
