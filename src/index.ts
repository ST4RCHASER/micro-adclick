import webdriver, { Capabilities, WebDriver, WebElement } from "selenium-webdriver";
let By = webdriver.By;
let Key = webdriver.Key;
let chromeCapabilities: Capabilities = webdriver.Capabilities.chrome();
let chromeOptions = {};
//For load test (DON'T EDIT!!!!!)
let startHost: string = 'https://lnesys.starchaser.me';
let totalAds: number[] = [0, 0, 0, 0];
let totalRes: number[] = [0, 0, 0, 0];


//MADE WITH <3 (starchaser.me);
//APP CONFIG
let keywords: string[] = ['micropile', 'ไมโครไพล์'];
let whitelist: string[] = ['narongmicrospun'];
let SEOPumingKeywords: string[] = ['narong microspun'];
let SEOMaxiumClickingResult = 1;
let doBumpSEO = true;
let doADSClicker = true;
//CLASS CONFIG (Please do carefully!)
let adsClassName = 'Krnil';
let resultSearchClassName = 'LC20lb DKV0Md';
let searchInputClassName = 'gLFyf gsfi';
let searchButtonClassName = 'gNO89b'
//END APP CONFIG



chromeCapabilities.set('chromeOptions', chromeOptions);
let driver: webdriver.ThenableWebDriver = new webdriver.Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
let doSearch = (keyword: string) => {
    return new Promise(async (resolve) => {
        await homeSearch(keyword);
        await fakeScroll();
        let i: number = 0;
        let adLists: WebElement[] = await driver.findElements(By.className(adsClassName));
        console.log(`[Found ${adLists.length} ads]`);
        console.log(`[Staring visting websites...]`);
        totalAds[0] += adLists.length;
        for (const ads of adLists) {
            console.log(`[Visting site: ${i + 1}/${adLists.length}]`)
            let ad = await driver.findElements(By.className(adsClassName));
            let clickableElement = ad[i++];
            if (clickableElement) {
                let isWhitelist = false;
                let text = await clickableElement.getText();
                for (const white of whitelist) {
                    if (text.includes(white)) isWhitelist = true;
                }
                if (!isWhitelist) {
                    await tourWeb(clickableElement);
                    totalAds[1]++;
                    await sleep(1000);
                } else {
                    console.log(`\n${text}\n`);
                    console.log('[Skiped: has whitelist keyword!]');
                    totalAds[2]++;
                    await sleep(2000);
                }
            } else {
                console.log('[Error: on checking clickable element!]');
                totalAds[3]++;
                await sleep(2000);
            }
        }
        resolve(true);
    })
}
function tourWeb(clickableElement: WebElement) {
    return new Promise(async (r) => {
        console.log(`\n${await clickableElement.getText()}\n`);
        await clickableElement.click();
        await sleep(2000);
        await fakeScroll();
        console.log('[Backing to google...]');
        await sleep(2000);
        await driver.executeScript(`window.history.back();`);
        await sleep(2000);
        r(true);
    });
}
function fakeScroll() {
    return new Promise(async (r) => {
        console.log('[Do scrolling...]');
        for (let count = 0; count < getRandomArbitrary(1, 3); count++) {
            for (let i: number = 0; i < getRandomArbitrary(100, 2500); i++) {
                await sleep(getRandomArbitrary(0, 3));
                await driver.executeScript(`window.scrollBy(0,${getRandomArbitrary(1, 25)})`);
            }
            await sleep(getRandomArbitrary(500, 1000))
            for (let i: number = 0; i < getRandomArbitrary(100, 2500); i++) {
                await sleep(getRandomArbitrary(0, 3));
                await driver.executeScript(`window.scrollBy(0,${getRandomArbitrary(-25, -1)})`);
            }
        }
        await driver.executeScript(`window.scrollBy(0,-10000)`);
        r(true);
    })
}
let startScript = async () => {
    for (const keyword of keywords) {
        console.log('[Searching keyword: ' + keyword + ']');
        await doSearch(keyword);
        console.log('Keyword finsihed: ' + keyword + ']');
    }
}
function getRandomArbitrary(min: number, max: number) {
    return Math.random() * (max - min) + min;
}
function sleep(ms: number) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
let bumpSEO = async () => {
    return new Promise(async (resolve) => {
        for (const keyword of SEOPumingKeywords) {
            console.log('|SEO| [Searching keyword: ' + keyword + ']');
            await homeSearch(keyword);
            await fakeScroll();
            let i: number = 0;
            let resLists: WebElement[] = await driver.findElements(By.className(resultSearchClassName));
            totalRes[0] += resLists.length;
            console.log(`|SEO| [Found ${resLists.length} results]`);
            console.log(`|SEO| [Staring visting websites...]`);
            for (const res of resLists) {
                let res1 = await driver.findElements(By.className(resultSearchClassName));
                let clickableElement = res1[i++];
                if (res) {
                    if (i - 1 >= SEOMaxiumClickingResult) {
                        totalRes[2]++;
                    } else {
                        await tourWeb(clickableElement)
                        totalRes[1]++;
                    }
                } else {
                    console.log('|SEO| [Error: on checking clickable element!]');
                    totalRes[3]++;
                    await sleep(2000);
                }
            }
            console.log('|SEO| Keyword finsihed: ' + keyword + ']');
        }
        resolve(true);
    });
}
let homeSearch = async (keyword: string) => {
    return new Promise(async (resolve) => {
        let url = 'https://www.google.co.th';
        await driver.get(url);
        await sleep(1000);
        let inputList: WebElement[] = await driver.findElements(By.className(searchInputClassName));
        for (const x of inputList) {
            await x.click();
            await sleep(1000);
            await driver.switchTo().activeElement().sendKeys(keyword);
            await sleep(1000);
        }
        await driver.switchTo().activeElement().sendKeys(Key.ESCAPE);
        let elements: WebElement[] = await driver.findElements(By.className(searchButtonClassName));
        for (const element of elements) {
            let name: string = await element.getAttribute('value');
            let currentUrl: string = await driver.getCurrentUrl();
            await driver.switchTo().activeElement().sendKeys(Key.ENTER);
            break;
            // if (currentUrl == url) console.log('Button found: ' + name);
            // if (element.isEnabled() && element.isDisplayed() && name == 'ค้นหาด้วย Google' && url == currentUrl) {
            //     sleep(2000);
            //     await element.click().catch(e => { });
            //     break;
            // }
        }
        resolve(true);
    })
}
driver.get(startHost).catch(() => {
    console.log('[Start failed!]');
    return process.exit(0);
}).then(async () => {
    while (true) {
        if (doADSClicker) {
            console.log('[Starting ads click!]');
            await startScript();
            console.log(`ADClick Result -> [Total: ${totalAds[0]} | Clicked: ${totalAds[1]} | Skiped: ${totalAds[2]}] | Error: ${totalAds[3]}`);
        } else {
            console.log('[Task doADSClicker is disabled SKIPED!]');
        }
        if (doBumpSEO) {
            console.log('[Starting SEO click!]');
            await bumpSEO();
            console.log(`SEO Result -> [Total: ${totalRes[0]} | Clicked: ${totalRes[1]} | Skiped: ${totalRes[2]}] | Error: ${totalRes[3]}`);
        } else {
            console.log('[Task BumpSEO is disabled SKIPED!]');
        }
        console.log(`[All task finsihed!]`)
        driver.close();
        driver = new webdriver.Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
    }
})

