
const piece_invalide =require("../models/piece_invalide");
const   db = require("../crud/connexion");
var express = require('express');

var router = express.Router();
router.get("/piece_invalide",(req,res)=>
    db.piece_invalide.findAll().then( (result) => res.json(result))
);

router.post("/piece_invalide",(req,res)=>
    db.piece_invalide.create({
      champs_systeme: req.body.champs_systeme
    }).then((result)=> res.json(result))
);


router.put("/piece_invalide/:id",(req,res)=>
    db.piece_invalide.update({
      champs_systeme: req.body.champs_systeme
    },
    {
        where: {
            id: req.params.id
        }
    }).then((result)=> res.json(result))
);
router.delete("/piece_invalide/:id",(req,res)=>
    db.piece_invalide.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

module.exports=router;
