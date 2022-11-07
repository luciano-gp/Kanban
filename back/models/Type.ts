import { DataTypes, Model } from 'sequelize';
import { Task } from './Task';
import db from '../db';

export class Type extends Model { }

Type.init({
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false,
    sequelize: db,
    tableName: 'types',
    modelName: 'Type'
});

Type.hasMany(Task);
Task.belongsTo(Type);