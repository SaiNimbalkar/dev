const { Builder, By, until } = require('selenium-webdriver');

(async function testApp() {

    // Launch Chrome browser
    let driver = await new Builder().forBrowser('chrome').build();

    try {
        // Open your local HTML file (IMPORTANT: correct path)
        await driver.get('file:///C:/Users/hp/Downloads/devops/file%202/pr-5/app/index.html');

        // Maximize window (optional)
        await driver.manage().window().maximize();

        // Enter values
        await driver.findElement(By.id('num1')).sendKeys('10');
        await driver.findElement(By.id('num2')).sendKeys('20');

        // Click Add button (UPDATED ID)
        await driver.findElement(By.id('addBtn')).click();

        // Wait for result to update
        await driver.sleep(1500);

        // Get result text
        let resultText = await driver.findElement(By.id('result')).getText();

        console.log("Output:", resultText);

        // Validate output
        if (resultText === "Result: 30") {
            console.log("Test Passed");
        } else {
            console.log("Test Failed");
        }

    } catch (error) {
        console.log("Error occurred:", error);
    } finally {
        // Close browser
        await driver.quit();
    }

})();