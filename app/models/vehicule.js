/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vehicule', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'immat': {
      type: DataTypes.STRING(40),
      allowNull: false,
      comment: "null"
    },
    'id_model': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      comment: "null",
      references: {
        model: 'modele',
        key: 'id'
      }
    },
    'champs_systeme': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'vehicule',
    timestamps:false
  });
};
