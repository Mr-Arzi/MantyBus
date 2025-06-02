const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Bus = sequelize.define('Bus', {
  id:{type: DataTypes.INTEGER, primaryKey:true, autoIncrement:true},

  unidad: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  kmInicial: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  kmFinal: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  numViajes: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  vida: {
    type: DataTypes.STRING,
    defaultValue: 'Activa'
  }

},
{
  tableName: 'buses',
  timestamps: false
}
);

module.exports = Bus;
