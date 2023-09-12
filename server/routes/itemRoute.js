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
router.get("/today/:id", isAuthenticated, (req, res) => {});
router.put("/today/:id", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  const itemId = req.params.id;
  console.log("userId===================> itemsRouteForToday", userId);
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
    console.log("userId=================== but not authorized>", userId);
    return; // Return early to prevent further execution
  }
  
const pathRegex = /^\/items\/\d+$/;
const source = req.path; // Assuming req.path contains the source string
let updateFunction;
if (pathRegex.test(source)) {
  // The source string matches the regex /^\/items\/\d+$/
  updateFunction = items.setItemsForToday;
  console.log('Matched: ' + source);
} else {
  // The source string does not match the regex /^\/items\/\d+$/
  updateFunction = items.removeItemsForToday;
  console.log('Not Matched: ' + source);
}

  // Use the setItemsForToday function to update the item's expiration timestamp and useCount
  items
    .setItemsForToday(itemId)
    .then((updatedItem) => {
      console.log("Item updated:", updatedItem);
      // Send the response here when the item is successfully updated
      res.json(updatedItem ? updatedItem : {});
    })
    .catch((error) => {
      console.error("Error updating item:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

router.get("/today", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  console.log("userId===================> itemsRouteForToday", userId);

  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
    console.log("userId=================== but not authorized>", userId);
    return;
  }

  // Use the getTodayItems function to retrieve items updated today
  items
    .getItemsForToday(userId)
    .then((data) => {
      console.log("getTodayItems-----------", data);
      res.json(data ? data : []);
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal server error" });
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
  console.log(
    "-------------------RequestBodyForUpdateReqBody-------------------------",
    req.body
  );
  items.updateItem(item).then((data) => {
    res.json(data);
  });
});
router.delete("/", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  items.deleteItem(itemId, formData).then((data) => {
    res.json(data);
  });
});

module.exports = router;
