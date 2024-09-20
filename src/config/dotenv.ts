import dotenv from 'dotenv';

dotenv.config();

export default {
    db_host : process.env.db_host || 'localhost',
    db_user : process.env.db_user || 'root',
    db_password : process.env.db_password || 'password',
    db_name : process.env.db_name || 'yourDatabase',
    port : process.env.port || 3000,
};