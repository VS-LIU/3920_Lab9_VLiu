require('dotenv').config(); 

const dbConfigLocal = 
`mysql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.en v.DB_HOST}/${process.env.DB_NAME}`; 

var databaseConnectionString = dbConfigLocal; 

module.exports = databaseConnectionString; 