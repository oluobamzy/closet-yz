const router = require("express").Router();
//const users = require("../db/Queries/users");
const items = require("../db/Queries/item");

router.get("/", (req, res) => {
  items.getAllItems().then((data) => { 
    console.log(data);
    res.json(data);
   });
});


module.exports = router;
