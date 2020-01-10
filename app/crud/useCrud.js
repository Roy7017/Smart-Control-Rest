const controlleur = require("../models/controlleur");
const db = require("../crud/connexion");
var express = require('express');

var router = express.Router();

router.post('/controller/login', (req, res) => {
    db.controlleur.findOne(
        {
            where: {
                matricule: req.body.matricule,
                password: req.body.password
            }
        }).then((controlleur) => {
            if (control) {
                /**
                 * Modifier pour avoir le token
                 */
                res.status(200).json(controlleur);
            } else {
                res.status(400).send({ err: "Aucun user de ce matricule" });
            }
        }).catch((err) => {
            res.send({ err: err })
        })
})

router.get('/controller/accueil', (req, res) => {
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

//Controler une vehicule
router.post('/controller/controle/:mat', (req, res) => {
    const array = [];
    console.log('getting pieces');
    db.vehicule.findOne({ where: { immat: req.body.matricule } }).then(vehicule => {
        vehicule.getPieces().then(pieces => {
            pieces.forEach(piece => {
                if (Date.now() > Date.parse(piece.date_expir)) {
                    array.push({ erreur: 'Date d\'expiration depasse', piece });
                }
            });
            res.json(array);
        });
    });


})

module.exports = router;