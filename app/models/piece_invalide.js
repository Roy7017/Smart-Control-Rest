/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('piece_invalide', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'id_controlleur': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null",
      references: {
        model: 'controlleur',
        key: 'id'
      }
    },
    'champs_systeme': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'piece_invalide',
    timestamps:false
  });
};
