const mysql = require("mysql");
const query = process.env.JAWSDB_URL || {
  host: "localhost",
  port: 3306,
  user: "test_user",
  password: "password",
  database: "burgers_db"
}
module.exports = mysql.createConnection(query);

