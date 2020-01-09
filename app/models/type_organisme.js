/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_organisme', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'libelle': {
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
    tableName: 'type_organisme',
    timestamps:false
  });
};
