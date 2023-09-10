const router = require("express").Router();
const passport = require("passport");
const bcrypt = require("bcrypt");

//const users = require("../db/Queries/users");
const items = require("../db/Queries/item");
const multer = require("multer");
const upload = multer({ dest: "images/" });
const access = require("../db/Queries/access");

const isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ message: "Authentication required" });
};

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   items.getItemById(id).then((data) => {
//     res.json(data);
//   });
// });
router.get("/today", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  console.log("userId===================> itemsRouteForToday", userId);
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
    console.log("userId=================== but not authorized>", userId);
  }
  items.getTodayItems(userId).then((data) => {
    console.log("getTodayItems-----------", data);
    res.json(data ? data : []);
  });
});

router.post("/today", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  console.log("userId===================> itemsRouteForToday", userId);
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
    console.log("userId=================== but not authorized>", userId);
  }
  items.AddItemsToday(userId).then((data) => {
    console.log("getTodayItems-----------", data);
    res.json(data ? data : []);
  });
});
router.get("/", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  console.log("userId===================> itemsRoute", userId);
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
    console.log("userId=================== but not authorized>", userId);
  }
  items.getAllItems(userId).then((data) => {
    console.log("getAllItems-----------", data);
    res.json(data ? data : []);
  });
});
router.post("/", isAuthenticated, upload.single("img_src"), (req, res) => {
  //const item = req.body;
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  // console.log("closet_id---------->", closet_id);
  const result = access.grantAccess(userId);
  if (result.length === 0) {
    res.status(401).json({ message: "You need to create a closet" });
  }

  const img_src = req.body.img_src;
  const {
    item_name,
    category,
    subcategory,
    color,
    purchase_date,
    description,
    season,
    closet_id,
    last_worn_date,
    size,
    brand_name,
  } = req.body;

  const item = {
    item_name,
    category,
    subcategory,
    color,
    purchase_date,
    img_src,
    description,
    season,
    closet_id,
    last_worn_date,
    size,
    brand_name,
  };

  items.addItem(item).then((data) => {
    res.send(data);
    console.log("ITEM ROUTE Request Body:", req.body);
  });
});
router.put("/:id", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }

  const item = req.body;
  items.updateItem(item).then((data) => {
    res.json(data);
  });
});
router.delete("/", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  items.deleteItem(id).then((data) => {
    res.json(data);
  });
});

router.get("/bin", isAuthenticated, (req, res) => {
  //get all closets
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }

  items.selectItemsToDelete(userId).then((data) => {
    console.log("getAllItems-----------", data);
    res.json(data ? data : []);
  });
});

router.post("/bin", isAuthenticated, (req, res) => {
  console.log("ItemRoutePostBinUserIdPOST---------->", req.user[0].id);
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  console.log("ItemRoutePostBinUserIdPOST2---------->", req.body);
  const { itemData } = req.body;
  console.log("ItemRoutePostBinUserIdPOST3---------->", itemData);

  const users_id = userId;
  const id = {
    users_id,
  };
  console.log("ItemRoutePostBinCloset---------->", id);
  items.updateItemDelete(id).then((data) => {
    console.log("ItemRoutePostBinDataAddcloset---------->", data);
    res.json(data);
  });
});

module.exports = router;
