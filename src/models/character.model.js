import { DataTypes } from "sequelize";
import sequelize from "../config/database";

const character = sequelize.define('character',{
    name:{
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    ki:{
        type: DataTypes.INTEGER(18),
        allowNull: false,
    },
    race:{
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    gender: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },
    destription: {
        type: DataTypes.STRING,
        allowNull: true,
    }
});
await character.sync();
export default character