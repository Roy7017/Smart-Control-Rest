
const enregistreur =require("../models/enregistreur");

var express = require('express');
const   db = require("../crud/connexion");
var router = express.Router();
router.get("/enregistreur",(req,res)=>
    db.enregistreur.findAll().then( (result) => res.json(result))
);

router.post("/enregistreur",(req,res)=>
    db.enregistreur.create({
        matricule: req.body.matricule,
        grade: req.body.grade,
        info_personne: req.body.info_personne,
        champs_systeme: req.body.champs_systeme
    }).then((result)=> res.json(result))
);


router.put("/enregistreur/:id",(req,res)=>
    db.enregistreur.update({
      matricule: req.body.matricule,
      grade: req.body.grade,
      info_personne: req.body.info_personne,
      champs_systeme: req.body.champs_systeme
    },
    {
        where: {
            id: req.params.id
        }
    }).then((result)=> res.json(result))
);
router.delete("/enregistreur/:id",(req,res)=>
    db.enregistreur.destroy({
        where: {
            id: req.params.id
        }
    }).then((result) => res.json(result))
);

module.exports=router;