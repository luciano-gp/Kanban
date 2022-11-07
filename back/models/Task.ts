import { DataTypes, Model } from 'sequelize';
import db from '../db';

export class Task extends Model { }

Task.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    create: {
        type: DataTypes.DATE,
        allowNull: false
    },
    expire: {
        type: DataTypes.DATE,
        allowNull: false
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    },
    situation: {
        type: DataTypes.STRING,
        allowNull: false
    },
    priority: {
        type: DataTypes.INTEGER,
        allowNull: false
    },

}, {
    timestamps: false,
    sequelize: db,
    tableName: 'tasks',
    modelName: 'Task'
});