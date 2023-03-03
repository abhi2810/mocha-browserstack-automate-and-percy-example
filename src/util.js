const { Builder, Capabilities } = require("selenium-webdriver");

module.exports.buildDriver = function () {
  return new Builder()
    .usingServer("http://localhost:4444/wd/hub")
    .withCapabilities(Capabilities.chrome())
    .build();
};
