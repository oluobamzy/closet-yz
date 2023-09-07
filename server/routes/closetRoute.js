const router = require("express").Router();
const closet = require("../db/Queries/closet");

router.get("/", (req, res) => {//get all closets
  closet.getAllClosets().then((data) => { 
    console.log(data);
    res.json(data);
   });
})
router.post("/:id", (req, res) => {//add a closet
    const {closet_name} = req.body;
    const user_id = req.params.id;
    const closet = {
      closet_name,
      user_id
    };
  closet.addCloset(closet).then((data) => {
    res.json(data);
  });
})

module.exports = router;