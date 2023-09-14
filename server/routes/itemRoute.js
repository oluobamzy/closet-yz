const router = require("express").Router();
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

router.put("/bin/:id", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
    return; // Add a return statement to exit the function
  }

  const itemId = req.params.id; // Get the item ID from the URL params

  items
    .updateItemDelete(itemId)
    .then((data) => {
      res.json(data);
    })
    .catch((error) => {
      console.error("Error updating item:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

router.get("/today/:id", isAuthenticated, (req, res) => {});
router.put("/today/:id", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  const itemId = req.params.id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
    return; // Return early to prevent further execution
  }

  const pathRegex = /^\/items\/\d+$/;
  const source = req.path; // Assuming req.path contains the source string
  let updateFunction;
  if (pathRegex.test(source)) {
    // The source string matches the regex /^\/items\/\d+$/
    updateFunction = items.setItemsForToday;
  } else {
    // The source string does not match the regex /^\/items\/\d+$/
    updateFunction = items.removeItemsForToday;
  }

  // Use the setItemsForToday function to update the item's expiration timestamp and useCount
  items
    .setItemsForToday(itemId)
    .then((updatedItem) => {
      res.json(updatedItem ? updatedItem : {});
    })
    .catch((error) => {
      console.error("Error updating item:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

router.get("/bin", isAuthenticated, (req, res) => {
  //get all closets
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }

  items.selectItemsToDelete(userId).then((data) => {
    res.json(data ? data : []);
  });
});

router.get("/today", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;

  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
    return;
  }

  items
    .getItemsForToday(userId)
    .then((data) => {
      res.json(data ? data : []);
    })
    .catch((error) => {
      console.error("Error fetching items:", error);
      res.status(500).json({ message: "Internal server error" });
    });
});

router.get("/", isAuthenticated, (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
  items.getAllItems(userId).then((data) => {
    res.json(data ? data : []);
  });
});

router.post("/", isAuthenticated, upload.single("img_src"), (req, res) => {
  const userId = req.user[0].id;
  if (!userId) {
    res.status(401).json({ message: "Authentication required" });
  }
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
  items.deleteItem(itemId, formData).then((data) => {
    res.json(data);
  });
});

module.exports = router;
