require("dotenv").config();
const mysql = require("mysql2");

const dbConnection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_NAME,
});

dbConnection.connect((err) => {
  if (err) {
    console.log("database is down");
  } else {
    return;
  }
});

module.exports = dbConnection;
