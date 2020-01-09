
const vehicule =require("../models/vehicule");
const   db = require("../crud/connexion");
var express = require('express');

var router = express.Router();
router.get("/vehicule",(req,res)=>
    db.vehicule.findAll().then( (result) => res.json(result))
);

router.post("/vehicule",(req,res)=>
    db.vehicule.create({
      immat: req.body.immat,
      champs_systeme: req.body.champs_systeme
    }).then((result)=> res.json(result))
);


router.put("/vehicule/:id",(req,res)=>
    db.vehicule.update({
      immat: req.body.immat,
      champs_systeme: req.body.champs_systeme
    },
    {
        where: {
            id: req.params.id
        }
    }).then((result)=> res.json(result))
);
router.delete("/vehicule/:id",(req,res)=>
    db.vehicule.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

module.exports=router;
