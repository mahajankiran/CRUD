const express = require("express");
const Alien = require("../models/alien");

const router = express.Router();

//To get  all thedocuments in   alien database
router.get("/", async (req, res) => {
  try {
      const aliens = await Alien.find();
      res.json(aliens);
  } catch (err) {
    res.send("Error:" + err);
  }
   
});

//To get a single alien 
router.get("/:id", async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        res.json(alien);
    } catch (err) {
      res.send("Error:" + err);
    }
     
  });

  //To post the information of an alien in database
router.post('/', async(req,res)=>{
    const alien= new Alien({
        name:req.body.name,
        tech:req.body.tech,
        sub:req.body.sub
    })

    try{
        const a1 = await alien.save();
        res.json(a1);
    }catch(err){
        res.send('Error'+err)
    }

})


//To update any one of the aliens sub part
router.patch("/:id", async (req, res) => {
    try {
        const alien = await Alien.findById(req.params.id);
        alien.sub = req.body.sub;
        const a1 = await alien.save();
        res.json(a1);
    } catch (err) {
      res.send("Error:" + err);
    }
     
  });


module.exports = router;
