const db = require('../utils/database');
const { DataTypes } = require("sequelize");
const Users = require("./users.models");

const Tasks = db.define('tasks', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },
    isComplete: {
        type: DataTypes.BOOLEAN,
        field: "is_complete",
        defaultValue: false
    },    
    userId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            key: "id",
            model: Users,
        },
        field: "user_id"
    }
    // userId: {
    //     type: DataTypes.INTEGER,
    //     field: "user_id",
    //     allowNull: false,
    // },    
    // createdAt: {
    //     type: DataTypes.DATE,
    //     field: "created_at",
    //     allowNull: false
    // },
    // updatedAt: {
    //     type: DataTypes.DATE,
    //     field: "updated_at",
    //     allowNull: false       
    // }
});

module.exports = Tasks;