var orm = require("../config/orm.js");

var burger = {
  // The variables cols and vals are arrays.
  selectAll: function(cols, vals, cb) {
    orm.selectAll("burger", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("burger", objColVals, condition, function(res) {
      cb(res);
    });
  },
  insertOne: function(condition, cb) {
    orm.insertOne("burger", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burger_controllers.js).
module.exports = burger;
