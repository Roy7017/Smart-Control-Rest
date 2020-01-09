const modele =require("../models/modele");
const   db = require("../crud/connexion");
var express = require('express');

var router = express.Router();
router.get("/modele",(req,res)=>
    db.modele.findAll().then( (result) => res.json(result))
);

router.post("/modele",(req,res)=>
    db.modele.create({
      manque: req.body.manque,
      description: req.body.description,
      categorie: req.body.categorie,
      champs_systeme: req.body.champs_systeme
    }).then((result)=> res.json(result))
);


router.put("/modele/:id",(req,res)=>
    db.modele.update({
      manque: req.body.manque,
      description: req.body.description,
      categorie: req.body.categorie,
      champs_systeme: req.body.champs_systeme
    },
    {
        where: {
            id: req.params.id
        }
    }).then((result)=> res.json(result))
);
router.delete("/modele/:id",(req,res)=>
    db.modele.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

module.exports=router;
