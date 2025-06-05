const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


const sequelize = require('./config/sequelize'); // conexión a PostgreSQL
require('./models/associations');

require('./models/busModel');
require('./models/driverModel');
require('./models/maintenanceModel');
require('./models/sparePartModel');
require('./models/maintenanceReportModel'); 
require('./models/associations');

dotenv.config();
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const app = express();

app.use(cors());
app.use(express.json());



//  Rutas para autobuses
const busRoutes = require('./routes/busRoutes');
app.use('/api/buses', busRoutes);

//Rutas para conductores
const driverRoutes = require('./routes/driverRoutes');
app.use('/api/drivers', driverRoutes);

//Rutas para repuestos
const sparePartRoutes = require('./routes/sparePartRoutes');
app.use('/api/repuestos', sparePartRoutes);

//Rutas para mantenimientos
const maintenanceRoutes = require('./routes/maintenanceRoutes');
app.use('/api/mantenimientos', maintenanceRoutes);

//Rutas para reportes de mantenimientos
const maintenanceReportRoutes = require('./routes/maintenanceReportRoutes');
app.use('/api/reportes', maintenanceReportRoutes);

//Rutas para graficos
const statsRoutes = require('./routes/statsRoutes');
app.use('/api', statsRoutes);

// Rutas existentes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);


// Sincronizar DB

sequelize.sync({alter: true}).then(() => {
  console.log('📦 Base de datos sincronizada correctamente');
}).catch(err => {
  console.error('❌ Error al sincronizar la base de datos:', err);
});

module.exports = app;

