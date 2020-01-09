

const type_organisme =require("../models/type_organisme");
const   db = require("../crud/connexion");
var express = require('express');

var router = express.Router();
router.get("/type_organisme",(req,res)=>
    db.type_organisme.findAll().then( (result) => res.json(result))
);

router.post("/type_organisme",(req,res)=>
    db.type_organisme.create({
      libelle: req.body.libelle,
      champs_systeme: req.body.champs_systeme
    }).then((result)=> res.json(result))
);


router.put("/type_organisme/:id",(req,res)=>
    db.type_organisme.update({
      libelle: req.body.libelle,
      champs_systeme: req.body.champs_systeme
    },
    {
        where: {
            id: req.params.id
        }
    }).then((result)=> res.json(result))
);
router.delete("/type_organisme/:id",(req,res)=>
    db.type_organisme.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

module.exports=router;
