const router = require("express").Router();
//const users = require("../db/Queries/users");
const items = require("../db/Queries/item");


router.get("/:id", (req, res) => {
  const { id } = req.params;
  items.getItemById(id).then((data) => {
    res.json(data);
  });
})
router.get("/", (req, res) => {
  items.getAllItems().then((data) => { 
    console.log(data);
    res.json(data);
   });
});
router.post("/", (req, res) => {
  const item = req.body;
  items.addItem(item).then((data) => {
    res.json(data);
  });
});
router.put("/:id", (req, res) => {
    const { id } = req.params;
    const item = req.body;
    items.updateItem(id, item).then((data) => {
        res.json(data);
    });
});
router.delete('/', (req, res) => {
    items.deleteAllItems().then((data) => {
        res.json(data);
    });
});


module.exports = router;
