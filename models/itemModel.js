const { DataTypes } = require('sequelize');
const sequelize = require('../db');

const Item = sequelize.define(
    'Item',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING(255),
            allowNull: false,
            validate: {
                notEmpty: { msg: 'Name cannot be empty' },
                len: {
                    args: [3, 255], // Minimum 3, Maximum 255 characters
                    msg: 'Name must be between 3 and 255 characters',
                },
            },
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },

    },
    {
        tableName: 'items',
        timestamps: true,
    }
);

module.exports = Item;