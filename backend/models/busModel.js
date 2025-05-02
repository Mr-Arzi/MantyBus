const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Bus = sequelize.define('Bus', {
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
});

module.exports = Bus;
