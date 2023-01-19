const sequelize = require('../db');
const { DataTypes } = require('sequelize');

const User = sequelize.define('students', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    nickname: { type: DataTypes.STRING, unique: false, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    registered: { type: DataTypes.INTEGER },
    login: { type: DataTypes.INTEGER, allowNull: false },
    status: { type: DataTypes.INTEGER, allowNull: false },
});

module.exports = User;
