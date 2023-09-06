const { DataTypes } = require("sequelize");
const { db } = require("../database/config");

const Artitle = db.define("artitles", {
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  titlearticle: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  img: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.ENUM("active", "disabled"),
    allowNull: false,
    defaultValue: "active",
  },
});

module.exports = Artitle;
