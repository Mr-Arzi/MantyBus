
const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');


const Reporte = sequelize.define('Reporte', {

  tipo_mantenimiento: {
    type: DataTypes.STRING,
    
  },
  fecha_registro: {
    type: DataTypes.DATE,
    
  },
  

},
{
  tableName: 'maintenance_reports',
  timestamps: false
}
);

module.exports = Reporte;