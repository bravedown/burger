const burger = require("../models/burger");
const express = require("express");
const router = express.Router();

router.get("/", function(req, res) {
    burger.getBurgers().then(result => {
        res.render("index", {burgers: result});
    }).catch(err => console.log(err));
});
  
router.post("/api/burgers", function(req, res) {
    let {burgerName} = req.body;
    burger.addBurger(burgerName);
    res.status(200).end();
});
  
router.put("/api/burgers/:id", function(req, res) {  
    let newState = req.body.devoured === 'true' ? 1 : 0;
    burger.updateBurger(req.params.id, newState);
    res.status(200).end();
});

module.exports = router;