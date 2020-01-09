/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('piece', {
    'id': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      primaryKey: true,
      comment: "null",
      autoIncrement: true
    },
    'id_vehicule': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null",
      references: {
        model: 'vehicule',
        key: 'id'
      }
    },
    'id_provenance': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null",
      references: {
        model: 'organisme',
        key: 'id'
      }
    },
    'id_type': {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true,
      comment: "null",
      references: {
        model: 'type_piece',
        key: 'id'
      }
    },
    'date_deliv': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'date_expir': {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "null"
    },
    'champs_systeme': {
      type: DataTypes.TEXT,
      allowNull: true,
      comment: "null"
    }
  }, {
    tableName: 'piece',
    timestamps:false
  });
};
