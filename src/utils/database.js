// es par gestionar la conexion a la base de datos
// sequilize init ===> config este archivo nos generaba esta conexion
// ahora lo realizamos manualmente

const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize({
    database: process.env.DB_NAME || 'todo',
    username: process.env.DB_USERNAME || 'postgress',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 5432,
    password: process.env.DB_PASSWORD || 'ADMIN',
    dialect: "postgres",
});


module.exports = db;