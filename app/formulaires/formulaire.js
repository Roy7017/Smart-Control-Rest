var express = require('express');
var app = express.Router();
const mysqlUtilities = require('mysql-utilities');
const mysql = require('mysql2');
const db = require("../crud/connexion");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'controle'
});

mysqlUtilities.upgrade(connection);
mysqlUtilities.introspection(connection);

app.post("formulaire/controlleur", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": all['matricule']['Field'],
            "type": all['matricule']['Type'],
            "name": all['matricule']['Field'],
            "validator": {
                "max_lenght": 40
            }
        },
        {
            "label": "infos de la personne",
            "name": all['info_personne']['Field'],
            "type": all['info_personne']['Type']
        },
        {
            "label": "champ du systeme",
            "name": all['champs_systeme']['Field'],
            "type": all['champs_systeme']['Type']
        },
    ]
    res.JSON.parse(fields)
}
);

app.post("formulaire/modele", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": all['manque']['Field'],
            "name": all['manque']['Field'],
            "type": all['manque']['Type']
        },
        {
            "label": all['description']['Field'],
            "name": all['description']['Field'],
            "type": all['description']['Type']
        },
        {
            "label": all['categorie']['Field'],
            "name": all['categorie']['Field'],
            "type": all['categorie']['Type'],
            "validator": {
                "max_lenght": 40
            }
        },
        {
            "label": all['champs_systeme']['Field'],
            "name": all['champs_systeme']['Field'],
            "type": all['champs_systeme']['Type']
        }
    ]
    res.JSON.parse(fields)
}
);

app.post("formulaire/vehicule", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": "immatriculation",
            "type": all['immat']['Type'],
            "name": all['immat']['Field'],
            "validator": {
                "max_lenght": 40
            }
        },
        {
            "label": "identifiant du modele",
            "name": all['id_model']['Field'],
            "type": all['id_model']['Type']
        },
        {
            "label": all['champs_systeme']['Field'],
            "name": all['champs_systeme']['Field'],
            "type": all['champs_systeme']['Type']
        },
    ]
    res.JSON.parse(fields)
}
);

app.post("formulaire/enregistreur", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": all['matricule']['Field'],
            "type": all['matricule']['Type'],
            "name": all['matricule']['Field'],
            "validator": {
                "max_lenght": 40
            }
        },
        {
            "label": all['grade']['Field'],
            "name": all['grade']['Field'],
            "type": all['grade']['Type']
        },
        {
            "label": "infos de la personne",
            "name": all['info_personne']['Field'],
            "type": all['info_personne']['Type']
        },
        {
            "label": all['champs_systeme']['Field'],
            "name": all['champs_systeme']['Field'],
            "type": all['champs_systeme']['Type']
        }
    ]
    res.JSON.parse(fields)
}
);

app.post("formulaire/type_organisme", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": all['libelle']['Field'],
            "type": all['libelle']['Type'],
            "name": all['libelle']['Field'],
            "validator": {
                "max_lenght": 40
            }
        },
        {
            "label": all['champs_systeme']['Field'],
            "name": all['champs_systeme']['Field'],
            "type": all['champs_systeme']['Type']
        },
    ]
    res.JSON.parse(fields)
}
);

app.post("formulaire/type_piece", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": all['libelle']['Field'],
            "name": all['libelle']['Field'],
            "type": all['libelle']['Type']
        },
        {
            "label": "est-il renouvelable",
            "name": all['est_renouvelable']['Field'],
            "type": all['est_renouvelable']['Type']
        }
    ]
    res.JSON.parse(fields)
}
);

app.post("formulaire/organisme", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": all['nom']['Field'],
            "name": all['nom']['Field'],
            "type": all['nom']['Type'],
            "validator": {
                "max_lenght": 40
            }
        },
        {
            "label": all['contact']['Field'],
            "name": all['contact']['Field'],
            "type": all['contact']['Type']
        },
        {
            "label": "type",
            "name": all['id_type']['Field'],
            "type": all['id_type']['Type']
        },
        {
            "label": all['champs_systeme']['Field'],
            "name": all['champs_systeme']['Field'],
            "type": all['champs_systeme']['Type']
        }
    ]
    res.JSON.parse(fields)
}
);

app.post("formulaire/piece", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": "vehicule",
            "name": all['id_vehicule']['Field'],
            "type": all['id_vehicule']['Type']
        },
        {
            "label": "provenance",
            "name": all['id_provenance']['Field'],
            "type": all['id_provenance']['Type']
        },
        {
            "label": "type",
            "name": all['id_type']['Field'],
            "type": all['id_type']['Type']
        },
        {
            "label": "date de delivrance",
            "name": all['date_deliv']['Field'],
            "type": all['date_deliv']['Type']
        },
        {
            "label": "date d'expiration",
            "name": all['date_expir']['Field'],
            "type": all['date_expir']['Type']
        },
        {
            "label": all['champs_systeme']['Field'],
            "name": all['champs_systeme']['Field'],
            "type": all['champs_systeme']['Type']
        }
    ]
    res.JSON.parse(fields)
}
);

app.post("formulaire/piece_invalide", function (req, res) {
    all = JSON.stringify(fields('controlleur', (err, fields) => {
        if (err) { }
        else { callback(fields); }
    }))
    fields = [
        {
            "label": "controlleur",
            "name": all['id_controlleur']['Field'],
            "type": all['id_controlleur']['Type']
        },
        {
            "label": all['champs_systeme']['Field'],
            "name": all['champs_systeme']['Field'],
            "type": all['champs_systeme']['Type']
        },
    ]
    res.JSON.parse(fields)
}
);

module.exports = app;