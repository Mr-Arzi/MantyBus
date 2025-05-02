const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
//const sequelize = require('./config/db'); // conexión a PostgreSQL
const sequelize = require('./config/sequelize'); // conexión a PostgreSQL

dotenv.config();
console.log('DATABASE_URL:', process.env.DATABASE_URL);

const app = express();

app.use(cors());
app.use(express.json());

// Rutas existentes
const userRoutes = require('./routes/userRoutes');
app.use('/api', userRoutes);

//  Rutas para autobuses
const busRoutes = require('./routes/busRoutes');
app.use('/api/buses', busRoutes);

//Rutas para conductores
const driverRoutes = require('./routes/driverRoutes');
app.use('/api/drivers', driverRoutes);

//Rutas para repuestos
const sparePartRoutes = require('./routes/sparePartRoutes');
app.use('/api/repuestos', sparePartRoutes);



// Sincronizar DB
sequelize.sync().then(() => {
  console.log('📦 Base de datos sincronizada correctamente');
}).catch(err => {
  console.error('❌ Error al sincronizar la base de datos:', err);
});

module.exports = app;