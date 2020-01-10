const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

// parametre de connection
var database = 'controle';
var username = "root";
var password = "";
const sequelize = new Sequelize(database, username, password, {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
});

const controlleur = require("../models/controlleur")(sequelize, DataTypes);
const enregistreur = require("../models/enregistreur")(sequelize, DataTypes);
const modele = require("../models/modele")(sequelize, DataTypes);
const organisme = require("../models/organisme")(sequelize, DataTypes);
const piece_invalide = require("../models/piece_invalide")(sequelize, DataTypes);
const piece = require("../models/piece")(sequelize, DataTypes);
const type_organisme = require("../models/type_organisme")(sequelize, DataTypes);
const type_piece = require("../models/type_piece")(sequelize, DataTypes);
const vehicule = require("../models/vehicule")(sequelize, DataTypes);


modele.hasMany(vehicule, { foreignKey: 'id_model' });
vehicule.belongsTo(modele, { foreignKey: 'id_model' });

type_organisme.hasMany(organisme, { foreignKey: 'id_type' });
organisme.belongsTo(type_organisme, { foreignKey: 'id_type' });

type_piece.hasMany(piece, { foreignKey: 'id_type' });
piece.belongsTo(type_piece, { foreignKey: 'id_type' });

vehicule.hasMany(piece, { foreignKey: 'id_vehicule' });
piece.belongsTo(vehicule, { foreignKey: 'id_vehicule' });

organisme.hasMany(piece, { foreignKey: 'id_provenance' });
piece.belongsTo(organisme, { foreignKey: 'id_provenance' });

controlleur.hasMany(piece_invalide, { foreignKey: 'id_controlleur' });

sequelize
  .authenticate()
  .then(() => {
    console.log('connexion etablie.');
  })
  .catch(err => {
    console.error('erreur lors de ma connexion :', err);
  });

module.exports = {
  Sequelize,
  sequelize,
  piece,
  piece_invalide,
  type_organisme,
  vehicule,
  type_piece,
  organisme,
  modele,
  enregistreur,
  controlleur
}

  //sequelize.close();