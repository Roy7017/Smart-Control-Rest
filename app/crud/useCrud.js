const controlleur = require("../models/controlleur");
const db = require("../crud/connexion");
var express = require('express');

var router = express.Router();

router.post('/loginToken', (req, res) => {
    db.controlleur.findAll(
        {
            where: {
                matricule: req.body.matricule
            }
        }).then((control) => {
            if (control) {
                /**
                 * Modifier pour avoir le token
                 */
                res.send({ token: req.token, user: control })
            } else {
                res.send({ err: "Aucun user de ce matricule" })
            }
        }).catch((err) => {
            res.send({ err: err })
        })
})

router.get('/accueil', (req, res) => {
    if (req.body.token === req.token) {
        db.controlleur.findAll()
            .then((control) => {
                res.send({ user: control })
            }).catch((err) => {
                res.send({ err: err })
            })
    } else {
        res.send({ err: "Vous n'êtes pas connectés" })
    }
})

/**
 * Manque d'informations sur les postes
 */
router.get('/control', (req, res) => {

})

router.post('/user/:id', (req, res) => {
    db.controlleur.update({
        $set: req.body
    },
        {
            where: {
                id: req.params.id
            }
        }).then((result) => res.json(result))
})

router.post('/user/:id/password', (req, res) => {
    db.controlleur.update({
        $set: req.body
    },
        {
            where: {
                id: req.params.id,
                email: req.body.email
            }
        }).then((result) => res.json(result))
})

router.post('/user/:id/codeVerif', (req, res) => {
    db.controlleur.update({
        $set: req.body
    },
        {
            where: {
                id: req.params.id,
                password: req.body.password
            }
        }).then((result) => res.json(result))
        .catch((err)=> {
            res.json({err: err})
        })
})