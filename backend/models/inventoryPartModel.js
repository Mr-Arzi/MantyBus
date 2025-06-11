// backend/models/inventoryPartModel.js

const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const InventoryPart = sequelize.define('InventoryPart', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidad_disponible: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0
  },
  fecha_ingreso: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  ubicacion: {
    type: DataTypes.STRING,
    allowNull: true
  },

}, {
  tableName: 'inventory_parts',
  timestamps: false
});

module.exports = InventoryPart;
