const conn = require('../config/conn');
const { DataTypes } = require("sequelize");

const catModel = conn.define('cat', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    breed: DataTypes.STRING
});

module.exports = catModel;