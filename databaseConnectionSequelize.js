require('dotenv').config(); 

// const dbConfigLocal = 
// `mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`; 

const dbConfigLocal = `mysql://${encodeURIComponent(process.env.DB_USER)}:${encodeURIComponent(process.env.DB_PASSWORD)}@${encodeURIComponent(process.env.DB_HOST)}:${encodeURIComponent(process.env.DB_PORT)}/${encodeURIComponent(process.env.DB_NAME)}`;
var databaseConnectionString = dbConfigLocal; 

module.exports = databaseConnectionString; 