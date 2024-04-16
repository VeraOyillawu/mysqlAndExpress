const mySql = require("mysql")
require("dotenv").config()

const connDb = mySql.createPool({
    connectionLimit: 10,
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME
})

if (connDb) {
    console.log("Database connected");
} else {
    console.log("Unable to connect to database");
}

module.exports = connDb
