const Bus = require('./busModel');
const Driver = require('./driverModel');
const Maintenance = require('./maintenanceModel');
const MaintenanceReport = require('./maintenanceReportModel');
const SparePart = require('./sparePartModel');

// Relación 1:N
Bus.hasMany(Driver, { foreignKey: 'busId' });
Driver.belongsTo(Bus, { foreignKey: 'busId' });

Bus.hasMany(Maintenance, { foreignKey: 'busId' });
Maintenance.belongsTo(Bus, { foreignKey: 'busId' });


Bus.hasMany(MaintenanceReport, { foreignKey: 'busId' });
MaintenanceReport.belongsTo(Bus, { foreignKey: 'busId' });

Bus.hasMany(SparePart, { foreignKey: 'busId' });
SparePart.belongsTo(Bus, { foreignKey: 'busId' });



