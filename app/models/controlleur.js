/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('controlleur', {
    'id': {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'password': {
      type: DataTypes.STRING(40),
      allowNull: false,
      comment: "null"
    },
    'matricule': {
      type: DataTypes.STRING(40),
      allowNull: false,
      comment: "null",
      unique: true
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
    tableName: 'controlleur',
    timestamps: false
  });
};
