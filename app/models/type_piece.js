/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('type_piece', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'libelle': {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      comment: "null"
    },
    'est_renouvelable': {
      type: DataTypes.INTEGER(1),
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'type_piece',
    timestamps:false
  });
};
