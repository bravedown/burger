const orm = require("../config/orm");

module.exports = {
    getBurgers() {
        return orm.selectAll('burgers');
    },
    addBurger(name) {
        orm.insertOne('burgers', 'burger_name', name)
    },
    devourBurger(name) {
        orm.updateOne('burgers', 'devoured', 'burger_name', 1, name);
    }
};
