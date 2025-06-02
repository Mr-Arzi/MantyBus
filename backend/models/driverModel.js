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



 busId: {
  type: DataTypes.INTEGER,
  allowNull: false,
  references: {
    model: 'buses',
    key: 'id'
  }
}
}, {
  tableName: 'drivers',
  timestamps: false
});

module.exports = Driver;
