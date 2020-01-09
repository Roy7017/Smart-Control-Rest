/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('organisme', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'nom': {
      type: DataTypes.STRING(40),
      allowNull: true,
      comment: "null"
    },
    'contact': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'id_type': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null",
      references: {
        model: 'type_organisme',
        key: 'id'
      }
    },
    'champs_systeme': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'organisme',
    timestamps:false
  });
};
