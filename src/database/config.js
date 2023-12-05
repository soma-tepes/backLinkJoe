const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "postgres",
  host: "localhost",
  database: "eaj",
  username: "postgres",
  password: "1234",
  port:5432,
  logging: false,
});

module.exports = { db };
