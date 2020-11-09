const orm = require("../config/orm");
module.exports = {
    getBurgers() {
        return orm.selectAll('burgers');
    },
    addBurger(name) {
        orm.insertOne('burgers', 'burger_name', name)
    },
    updateBurger(id, val) {
        orm.updateOne('burgers', 'devoured', val, id);
    }
};
