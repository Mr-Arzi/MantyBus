const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const Bus = require('./busModel'); 


/* Este fragmento de código define un modelo Sequelize para una entidad `MaintenanceReport` 
en una aplicación Node.js que usa el ORM Sequelize. Analicemos las partes importantes de este código: */
const MaintenanceReport = sequelize.define('MaintenanceReport', {


  busId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Bus,  
      key: 'id'
    }
  },

  fecha_registro: {
    type: DataTypes.DATEONLY,
    allowNull: false
  },
  responsable: {
    type: DataTypes.STRING,
    allowNull: false
  },
  tipo_mantenimiento: {
    type: DataTypes.STRING,
    allowNull: false
  },
  verificado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  },

  kilometraje_actual: DataTypes.INTEGER,

  sintomas: DataTypes.TEXT,

  condiciones: DataTypes.TEXT,

  tiempo_reparacion: DataTypes.STRING,

  repuestos_usados: DataTypes.TEXT,

  reparaciones_realizadas: DataTypes.TEXT,

  aprobacion_supervisor: DataTypes.STRING,

  proximo_mantenimiento: DataTypes.DATEONLY,

  resultados_pruebas: DataTypes.TEXT,


  
}, {
  tableName: 'maintenance_reports',
  timestamps: false
});

module.exports = MaintenanceReport;
