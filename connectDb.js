const Sequelize = require('sequelize');

const databaseName = process.env.MYSQL_DB_DATABASE
const dbUser = process.env.MYSQL_DB_USER
const password = process.env.MYSQL_DB_PASSWORD

const sequelize = new Sequelize(databaseName, dbUser, password, {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;
