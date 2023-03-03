var assert = require("assert");
const { By, until } = require("selenium-webdriver");
const { buildDriver } = require("../util");
const percySnapshot = require("@percy/selenium-webdriver");

describe("Login Functionality", async function () {
  var driver;

  before(function () {
    driver = buildDriver();
  });

  it("can login successfully", async function () {
    await driver.get("https://bstackdemo.com/signin");
    await driver.wait(until.titleMatches(/StackDemo/i), 10000);

    await percySnapshot(driver, "Signin Page", { widths: [365, 768, 1280] });

    // entering username and password and signing in
    await driver.findElement(By.id("username")).click();
    await driver.findElement(By.id("react-select-2-option-0-0")).click();
    await driver.findElement(By.id("password")).click();
    await driver.findElement(By.id("react-select-3-option-0-0")).click();
    await driver.findElement(By.id("login-btn")).click();

    await driver.wait(until.elementLocated(By.className("username")));

    var user = await driver.findElement(By.className("username")).getText();

    await percySnapshot(driver, "Loggedin Home Page", {
      widths: [365, 768, 1280],
    });

    assert(user === "demouser");
  });

  after(async function () {
    await driver.quit();
  });
});
