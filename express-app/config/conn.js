
const Sequelize = require('sequelize');
const conn = new Sequelize(process.env.db, process.env.user, process.env.password, {
    host: process.env.host,
    dialect: process.env.dialect
});

module.exports = conn;