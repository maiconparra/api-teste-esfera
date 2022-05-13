require('dotenv').config();

module.exports = {
    username: process.env.USERDATABASE,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    host: process.env.HOST,
    port: process.env.DATABASEPORT,
    dialect: process.env.DIALECT
};