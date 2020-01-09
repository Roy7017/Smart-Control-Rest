

const organisme =require("../models/organisme");
const   db = require("../crud/connexion");
var express = require('express');

var router = express.Router();
router.get("/organisme",(req,res)=>
    db.organisme.findAll().then( (result) => res.json(result))
);

router.post("/organisme",(req,res)=>
    db.organisme.create({
      nom: req.body.nom,
      contact: req.body.contact,
      champs_systeme: req.body.champs_systeme
    }).then((result)=> res.json(result))
);


router.put("/organisme/:id",(req,res)=>
    db.organisme.update({
      nom: req.body.nom,
      contact: req.body.contact,
      champs_systeme: req.body.champs_systeme
    },
    {
        where: {
            id: req.params.id
        }
    }).then((result)=> res.json(result))
);
router.delete("/organisme/:id",(req,res)=>
    db.organisme.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

module.exports=router;
