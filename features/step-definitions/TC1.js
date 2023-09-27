const { Given, Then, When } = require('@cucumber/cucumber');
const assert = require('assert');
const webdriver = require('selenium-webdriver');

// SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
const { By } = require('selenium-webdriver');
var options = new chrome.Options().headless();

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

Given('que visito a página inicial do site', { timeout: 15 * 1000 }, async () => {
    await driver.get("http://publicazo.insprak.com/");
});

When('procuro por vaga de emprego', async () => {
    await driver.findElement(By.id("search")).sendKeys("teste");
    await driver.findElement(By.name("commit")).click();
});

Then('encontro vaga de emprego', async () => {
    const jobTitle = await driver.findElement(By.css(".col-md-4:nth-child(1) a")).getText();
    assert.strictEqual(jobTitle, "Aulas de Teste de Software");

    // Encerre o driver após as verificações
    await driver.quit();
});

Then('Eu deveria estar na página http:\&#x2F;\&#x2F;publicazo.insprak.com\&#x2F;services\&#x2F;{int}', (int) => {
  // Write code here that turns the phrase above into concrete actions
})

Then('Eu deveria estar na página http:\&#x2F;\&#x2F;publicazo.insprak.com\&#x2F;services\&#x2F;{int}', (int) => {
  // Write code here that turns the phrase above into concrete actions
})





  