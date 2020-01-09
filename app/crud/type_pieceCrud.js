

const type_piece =require("../models/type_piece");
const   db = require("../crud/connexion");
var express = require('express');

var router = express.Router();
router.get("/type_piece",(req,res)=>
    db.type_piece.findAll().then( (result) => res.json(result))
);

router.post("/type_piece",(req,res)=>
    db.type_piece.create({
      libelle: req.body.libelle,
      est_renouvelable: req.body.est_renouvelable
    }).then((result)=> res.json(result))
);


router.put("/type_piece/:id",(req,res)=>
    db.type_piece.update({
      libelle: req.body.libelle,
      est_renouvelable: req.body.est_renouvelable
    },
    {
        where: {
            id: req.params.id
        }
    }).then((result)=> res.json(result))
);
router.delete("/type_piece/:id",(req,res)=>
    db.type_piece.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

module.exports=router;
