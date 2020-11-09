const connection = require("./connection");
module.exports = {
    selectAll(table) {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * from ??", [table], (err, result) => {
                if (err) return reject(err);
                resolve(result);
            });
        });
    },
    insertOne(tableName, colName, cellName) {
        connection.query(`INSERT INTO ?? (??) VALUE (?)`, [tableName, colName, cellName], (err, result) => {
            if (err) throw err;
        });
    },
    updateOne(table, updatedCol, referenceCol, newVal, referenceVal) {
        connection.query(`UPDATE ?? SET ?? = ? WHERE ?? = ?`, [table, updatedCol, newVal, referenceCol, referenceVal], function(err, result) {
            if (err) throw err;
        });
    },
};