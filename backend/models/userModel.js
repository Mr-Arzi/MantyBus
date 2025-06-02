const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  username: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  role: {
    type: DataTypes.STRING,
    defaultValue: 'usuario'
  }
}, {
  tableName: 'users',
  timestamps: false
});

module.exports = {
  User,
  getAllUsers: async () => await User.findAll(),
  getUserByUsername: async (username) => await User.findOne({ where: { username } }),
  createUser: async (username, password, role = 'usuario') => {
    return await User.create({ username, password, role });
  }
};
