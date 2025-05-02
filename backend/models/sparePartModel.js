const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const SparePart = sequelize.define('SparePart', {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  unidad: {
    type: DataTypes.STRING,
    allowNull: false
  },
  codigo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  cantidad: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  vida: {
    type: DataTypes.STRING,
    allowNull: true
  }
}, {
  tableName: 'spare_parts',
  timestamps: false
});

module.exports = SparePart;
