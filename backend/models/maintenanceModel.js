const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const Maintenance = sequelize.define('Maintenance', {

 
 
  

  motivo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },

  busId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'buses',
      key: 'id'
    }
  }


}, {
  tableName: 'maintenances',
  timestamps: false
});

module.exports = Maintenance;
