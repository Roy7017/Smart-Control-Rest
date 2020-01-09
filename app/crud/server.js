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

const formulaires = require('../formulaires/formulaire');
const tables = require('../formulaires/routes');

const express = require("express");
const bodyParser = require("body-parser");
const db = require("../crud/connexion");
const sequelize = db.sequelize;
const Sequelize = db.Sequelize;


const app = express();

const PORT = process.env.PORT || 8080;

sequelize.sync({ force: true }).then(function () {
    /**
     * Listen on provided port, on all network interfaces.
     */
    app.listen(PORT, function () {
        console.log('Express server listening on port 8080');
    });
    app.on('error', onError);
    app.on('listening', onListening);
});


function onError() {

    console.log("error");
}
function onListening() {

    console.log("listening");
}
app.use(bodyParser.json());
app.use(express.static("app/public"));
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

