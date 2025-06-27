import { HostNotFoundError, Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

const sequelize = new sequelize (
    process.env.BD_NAME,
    process.env.BD_USER,
    process.env.BD_PASSWORD,
    {
    host:process.env.BD_HOST,
    dialect:process.env.BD_DIALECT,
    }

);

export const initBD = async () => {
    try{
        await sequelize.autenticate();
        console.log('Conectado correctamente');
        await sequelize.sync();
    } catch (error){
        console.error('Hubo un problema al conectar:', error)
    }
}

export default sequelize;
