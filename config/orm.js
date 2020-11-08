const connection = require("./connection");
module.exports = {
    selectAll(table, cb) {
        connection.query("SELECT * from ??", [table], (err, result) => {
            if (err)
                throw err;
            cb(result);
        });
    },
    insertOne(tableName, colName, cellName) {
        connection.query(`INSERT INTO ?? (??) VALUE (?)`, [tableName, colName, cellName], (err, result) => {
            if (err)
                throw err;
        });
    },
    updateOne(table, col, val, id) {
        connection.query(`UPDATE ?? SET ?? = ? WHERE id = ?`, [table, col, val, id], function(err, result) {
            if (err) throw err;
        });
    },
};