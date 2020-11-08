const connection = require("./connection");
module.exports = {
    selectAll(cb) {
        connection.query("SELECT * from burgers", [], (err, result) => {
            if (err)
                throw err;
            cb(result);
        });
    },
    insertOne() {

    },
    updateOne() {

    },
};