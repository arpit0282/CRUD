import { Sequelize } from "sequelize";
import dotenv from "./dotenv";


const sequelize = new Sequelize(
    dotenv.db_name,
    dotenv.db_user,
    dotenv.db_password,
    {
        host: dotenv.db_host,
        dialect:"mysql"
    }
);

export default sequelize;