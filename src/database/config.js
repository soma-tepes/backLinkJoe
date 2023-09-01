const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: process.env.SERVICE,
  host: process.env.HOST,
  database: process.env.DB,
  username: process.env.SERVICE,
  password: process.env.PASSWORD,
  port: process.env.LOCALPORT,
  logging: false,
});

module.exports = { db };
