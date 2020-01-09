
const piece =require("../models/piece");
const   db = require("../crud/connexion");
var express = require('express');

var router = express.Router();


router.get("/piece",(req,res)=>
    db.piece.findAll().then( (result) => res.json(result))
);

router.post("/piece",(req,res)=>
    db.piece.create({
      date_deliv: req.body.date_deliv,
      date_expir: req.body.date_expir,
      champs_systeme: req.body.champs_systeme
    }).then((result)=> res.json(result))
);


router.put("/piece/:id",(req,res)=>
    db.piece.update({
      date_deliv: req.body.date_deliv,
      date_expir: req.body.date_expir,
      champs_systeme: req.body.champs_systeme
    },
    {
        where: {
            id: req.params.id
        }
    }).then((result)=> res.json(result))
);
router.delete("/piece/:id",(req,res)=>
    db.piece.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

module.exports=router;
