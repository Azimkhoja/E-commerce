const { isValidObjectId } = require("mongoose");

module.exports = function (id) {
  return isValidObjectId(id);
};
