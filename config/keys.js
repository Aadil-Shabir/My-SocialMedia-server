if (process.env.NODE_ENV !== "production") {
  module.exports = require("./configDev");
} else {
  module.exports = require("./configProd");
}
