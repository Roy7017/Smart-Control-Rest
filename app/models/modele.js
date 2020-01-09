/* jshint indent: 2 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('modele', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      comment: "null"
    },
    'marque': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'description': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    },
    'categorie': {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "null"
    },
    'champs_systeme': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'modele',
    timestamps: false
  });
};
