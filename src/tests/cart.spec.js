var assert = require("assert");
const { By, until } = require("selenium-webdriver");
const { buildDriver } = require("../util");
const percySnapshot = require("@percy/selenium-webdriver");

describe("Cart Functionality", async function () {
  var driver;

  before(function () {
    driver = buildDriver();
  });

  it("can add items to cart", async function () {
    await driver.get("https://bstackdemo.com/");
    await driver.wait(until.titleMatches(/StackDemo/i), 10000);
    await percySnapshot(driver, "Home Page", { widths: [365, 768, 1280] });
    // locating product on webpage and getting name of the product
    await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/p')));
    let productText = await driver
      .findElement(By.xpath('//*[@id="1"]/p'))
      .getText();
    // clicking the 'Add to cart' button
    await driver.wait(until.elementLocated(By.xpath('//*[@id="1"]/div[4]')));
    await driver.findElement(By.xpath('//*[@id="1"]/div[4]')).click();
    // waiting until the Cart pane has been displayed on the webpage
    await driver.wait(
      until.elementLocated(By.className("float-cart__content"))
    );
    await driver.findElement(By.className("float-cart__content"));
    // locating product in cart and getting name of the product in cart
    await driver.wait(
      until.elementLocated(
        By.xpath(
          '//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'
        )
      )
    );
    let productCartText = await driver
      .findElement(
        By.xpath(
          '//*[@id="__next"]/div/div/div[2]/div[2]/div[2]/div/div[3]/p[1]'
        )
      )
      .getText();

    await percySnapshot(driver, "Cart Page", { widths: [365, 768, 1280] });
    // checking whether product has been added to cart by comparing product name
    assert(productText === productCartText);
  });

  after(async function () {
    await driver.quit();
  });
});
