const Sequelize = require('sequelize')
const dotenv = require('dotenv')
//definir un objecto de conexion:
dotenv.config({ path: './config_env/config.env'})
const sequelize = new Sequelize(
    process.env.DATABASE_NAME,
    process.env.DATABASE_USER,
    process.env.DATABASE_PASSWORD,
    
    {
        host:process.env.DATABASE_HOST,
        dialect:process.env.DATABASE_DIALECT,
    }
)
//console.log(sequelize)
module.exports = sequelize