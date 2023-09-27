const { Given, Then, When, Before, After } = require('@cucumber/cucumber');
const assert = require('assert');
const webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver'); // Importe a função until

// SETUP CHROME DRIVER
var chrome = require('selenium-webdriver/chrome');
const chromedriver = require('chromedriver');
var options = new chrome.Options().headless();

let driver = new webdriver.Builder()
    .forBrowser('chrome')
    .withCapabilities(webdriver.Capabilities.chrome())
    .setChromeOptions(options)
    .build();

Given('visite a tela de cadastro', { timeout: 15 * 20000 }, async () => {
    await driver.get("http://publicazo.insprak.com/sign_up");
});

When('Preencho dados cadastrais', async () => {
    await driver.get("http://publicazo.insprak.com/sign_up"); 

    // Aguarde a página carregar completamente
    await driver.wait(until.urlIs("http://publicazo.insprak.com/sign_up"), 30000);

    // Aguarde até que o elemento "user_fullname" esteja disponível
    await driver.wait(until.elementLocated(By.id("user_fullname")), 30000);
    
    // Agora você pode interagir com o elemento
    await driver.findElement(By.id("user_fullname")).sendKeys("mercia souza");
    await driver.findElement(By.id("user_email")).sendKeys("mell.sol@hotmail.com");
    await driver.findElement(By.id("user_password")).sendKeys("123456");
    await driver.findElement(By.id("user_password_confirmation")).sendKeys("123456");
    await driver.findElement(By.className("btn-normal")).click();
});
Then('Tenho acesso a pagina', async () => {
    // Adicione código aqui para verificar se você está na página correta
    const currentUrl = await driver.getCurrentUrl();
    //assert.strictEqual(currentUrl, "http://publicazo.insprak.com/"); // Verifique se a URL é a correta
    await driver.wait(until.urlIs("http://publicazo.insprak.com/"), 15000); // Aumente o valor /do tempo de espera, se necessário
    // Você também pode adicionar mais verificações, se necessário
    
    console.log("URL atual:", currentUrl);
    assert.strictEqual(currentUrl, "http://publicazo.insprak.com/");
    // Encerre o driver após as verificações
    await driver.quit();
});