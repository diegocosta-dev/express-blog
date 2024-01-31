import { Sequelize } from 'sequelize';
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME as string, process.env.DB_USER as string, process.env.DB_PASSWORD as string, {
  host: process.env.DB_HOST as string,
  dialect: 'mysql',
});

sequelize.authenticate().then().catch(() => {
  console.log('Unable to connect to database, check credentials')
})

export default sequelize;