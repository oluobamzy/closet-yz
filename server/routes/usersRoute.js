const router = require("express").Router();
//const users = require("../db/Queries/users");
const users = require("../db/Queries/users");


router.get("/:id", (req, res) => {
  const { id } = req.params;
  users.getUserById(id).then((data) => {
    res.json(data);
  });
})
router.get("/", (req, res) => {
  users.getAllUsers().then((data) => { 
    console.log(data);
    res.json(data);
   });
});


module.exports = router;