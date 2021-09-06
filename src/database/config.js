const mysql = require("mysql2");
const db = require("../db");

const connectionDB = mysql.createPool(db);

const verifyDb = () =>
  connectionDB.getConnection((err, conection) => {
    if (err) {
      console.log(err);
      throw err;
    }
    if (conection) conection.release();
    return console.log("DB is Connected");
  });

module.exports = { db: connectionDB.promise(), verifyDb };
