const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Driver = sequelize.define('Driver', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: false
  },
  unidad: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'drivers',
  timestamps: false
});

module.exports = Driver;
