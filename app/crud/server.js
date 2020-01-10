const EndPointCrud = require("../crud/EndPointCrud");
const controlleurCrud = require("../crud/controlleurCrud");
const enregistreurCrud = require("../crud/enregistreurCrud");
const modeleCrud = require("../crud/modeleCrud");
const organismeCrud = require("../crud/organismeCrud");
const piece_invalideCrud = require("../crud/piece_invalideCrud");
const pieceCrud = require("../crud/pieceCrud");
const type_organismeCrud = require("../crud/type_organismeCrud");
const type_pieceCrud = require("../crud/type_pieceCrud");
const vehiculeCrud = require("../crud/vehiculeCrud");
const useCrud = require('../crud/useCrud');

const formulaires = require('../formulaires/formulaire');
const tables = require('../formulaires/routes');

const express = require("express");
const bodyParser = require("body-parser");
const db = require("../crud/connexion");
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;
const cors = require('cors');


const app = express();

const PORT = process.env.PORT || 8080;

sequelize.sync({ force: true }).then(function () {
    /**
     * Listen on provided port, on all network interfaces.
     */

    addData();
    app.listen(PORT, function () {
        console.log('Express server listening on port 8080');
    });
    app.on('error', onError);
    app.on('listening', onListening);
});

async function addData() {
    console.log('\nSaving data...\n');

    const controlleur = db.controlleur.build({
        id: 5879,
        password: 'pass',
        matricule: 'matricule'
    })

    const modele = db.modele.build({
        id: 2647
    })

    const vehicule = db.vehicule.build({
        id: 5475,
        immat: 'laehge5472'
    });

    const piece1 = db.piece.build({
        id: 4742,
        date_deliv: Date.now(),
        date_expir: Date.parse('06/13/2030')
    });

    const piece2 = db.piece.build({
        id: 4743,
        date_deliv: Date.now(),
        date_expir: Date.parse('12/01/2012')
    });

    await modele.save();

    await vehicule.save();
    vehicule.setModele(modele);
    console.log('\nVehicule saved \n');

    await piece1.save();
    piece1.setVehicule(vehicule);
    console.log('\nPiece1 saved\n');

    await piece2.save();
    piece2.setVehicule(vehicule);
    console.log('\nPiece2 saved\n');

    await controlleur.save();
    console.log('\nControlleur saved\n');
}

function onError() {

    console.log("error");
}
function onListening() {

    console.log("listening");
}
app.use(bodyParser.json());
app.use(express.static("app/public"));
app.use(cors);
app.use(EndPointCrud);
app.use(controlleurCrud);
app.use(enregistreurCrud);
app.use(modeleCrud);
app.use(organismeCrud);
app.use(piece_invalideCrud);
app.use(pieceCrud);
app.use(type_organismeCrud);
app.use(type_pieceCrud);
app.use(vehiculeCrud);
app.use(formulaires);
app.use(tables);
app.use(useCrud);

