const { DataTypes } = require('sequelize')
const { db } = require('../database/config')
const Title = db.define('titles',{

    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey:true,
        allowNull:false
    },
    title:{
        type: DataTypes.STRING,
        allowNull:false
    },
    status:{
        type: DataTypes.ENUM('active','disabled'),
        defaultValue:'active',
        allowNull:false
    }
    
})

module.exports = Title