const controlleur =require("../models/controlleur");
const   db = require("../crud/connexion");
var express = require('express');

var router = express.Router();


router.get( "/controlleur", (req, res) =>
    db.controlleur.findAll().then( (result) => res.json(result) )
  );

  router.get( "/controlleur/:id", (req, res) =>
    db.controlleur.findByPk(req.params.id).then( (result) => res.json(result))
  );

  router.post("/controlleur", (req, res) => 
    db.controlleur.create({
      title: req.body.title,
      content: req.body.content
    }).then( (result) => res.json(result) )
  );

  router.put( "/controlleur/:id", (req, res) =>
    db.controlleur.update({
      title: req.body.title,
      content: req.body.content
    },
    {
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  router.delete( "/controlleur/:id", (req, res) =>
    db.controlleur.destroy({
      where: {
        id: req.params.id
      }
    }).then( (result) => res.json(result) )
  );

  module.exports=router;