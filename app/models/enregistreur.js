/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('enregistreur', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'matricule': {
      type: DataTypes.STRING(40),
      allowNull: false,
      comment: "null"
    },
    'grade': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      comment: "null"
    },
    'info_personne': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'champs_systeme': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'enregistreur',
    timestamps:false
  });
};
