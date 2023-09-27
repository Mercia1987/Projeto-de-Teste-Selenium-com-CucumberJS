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

Given('Eu visito a tela inicial do publicazo', { timeout: 15 * 1000 }, async () => {
        await driver.get("http://publicazo.insprak.com/");
});

When('Eu procuro por teste', async () => {
    await driver.findElement(By.id("search")).sendKeys("teste"); // Digita "teste" no campo de pesquisa
    await driver.findElement(By.name("commit")).click(); // Clica no botão "Pesquisar"
});

Then('Eu deveria estar na página', async () => {
    const currentUrl = await driver.getCurrentUrl();
   
    // Encerre o driver após as verificações
});  