"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var selenium_webdriver_1 = __importDefault(require("selenium-webdriver"));
var By = selenium_webdriver_1.default.By;
var Key = selenium_webdriver_1.default.Key;
var chromeCapabilities = selenium_webdriver_1.default.Capabilities.chrome();
var chromeOptions = {};
//For load test (DON'T EDIT!!!!!)
var startHost = 'https://lnesys.starchaser.me';
var totalAds = [0, 0, 0, 0];
var totalRes = [0, 0, 0, 0];
//MADE WITH <3 (starchaser.me);
//APP CONFIG
var keywords = ['micropile', 'ไมโครไพล์'];
var whitelist = ['narongmicrospun', 'mechotpile'];
var SEOPumingKeywords = ['narong microspun', 'starchaser.me'];
var SEOMaxiumClickingResult = 1;
var doBumpSEO = true;
var doADSClicker = true;
//CLASS CONFIG (Please do carefully!)
var adsClassName = 'Krnil';
var resultSearchClassName = 'LC20lb DKV0Md';
var searchInputClassName = 'gLFyf gsfi';
var searchButtonClassName = 'gNO89b';
//END APP CONFIG
chromeCapabilities.set('chromeOptions', chromeOptions);
var driver = new selenium_webdriver_1.default.Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
var doSearch = function (keyword) {
    return new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
        var i, adLists, _i, adLists_1, ads, ad, clickableElement, isWhitelist, text, _a, whitelist_1, white;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, homeSearch(keyword)];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, fakeScroll()];
                case 2:
                    _b.sent();
                    i = 0;
                    return [4 /*yield*/, driver.findElements(By.className(adsClassName))];
                case 3:
                    adLists = _b.sent();
                    console.log("[Found " + adLists.length + " ads]");
                    console.log("[Staring visting websites...]");
                    totalAds[0] += adLists.length;
                    _i = 0, adLists_1 = adLists;
                    _b.label = 4;
                case 4:
                    if (!(_i < adLists_1.length)) return [3 /*break*/, 15];
                    ads = adLists_1[_i];
                    console.log("[Visting site: " + (i + 1) + "/" + adLists.length + "]");
                    return [4 /*yield*/, driver.findElements(By.className(adsClassName))];
                case 5:
                    ad = _b.sent();
                    clickableElement = ad[i++];
                    if (!clickableElement) return [3 /*break*/, 12];
                    isWhitelist = false;
                    return [4 /*yield*/, clickableElement.getText()];
                case 6:
                    text = _b.sent();
                    for (_a = 0, whitelist_1 = whitelist; _a < whitelist_1.length; _a++) {
                        white = whitelist_1[_a];
                        if (text.includes(white))
                            isWhitelist = true;
                    }
                    if (!!isWhitelist) return [3 /*break*/, 9];
                    return [4 /*yield*/, tourWeb(clickableElement)];
                case 7:
                    _b.sent();
                    totalAds[1]++;
                    return [4 /*yield*/, sleep(1000)];
                case 8:
                    _b.sent();
                    return [3 /*break*/, 11];
                case 9:
                    console.log("\n" + text + "\n");
                    console.log('[Skiped: has whitelist keyword!]');
                    totalAds[2]++;
                    return [4 /*yield*/, sleep(2000)];
                case 10:
                    _b.sent();
                    _b.label = 11;
                case 11: return [3 /*break*/, 14];
                case 12:
                    console.log('[Error: on checking clickable element!]');
                    totalAds[3]++;
                    return [4 /*yield*/, sleep(2000)];
                case 13:
                    _b.sent();
                    _b.label = 14;
                case 14:
                    _i++;
                    return [3 /*break*/, 4];
                case 15:
                    resolve(true);
                    return [2 /*return*/];
            }
        });
    }); });
};
function tourWeb(clickableElement) {
    var _this = this;
    return new Promise(function (r) { return __awaiter(_this, void 0, void 0, function () {
        var _a, _b, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    _b = (_a = console).log;
                    _c = "\n";
                    return [4 /*yield*/, clickableElement.getText()];
                case 1:
                    _b.apply(_a, [_c + (_d.sent()) + "\n"]);
                    return [4 /*yield*/, clickableElement.click()];
                case 2:
                    _d.sent();
                    return [4 /*yield*/, sleep(2000)];
                case 3:
                    _d.sent();
                    return [4 /*yield*/, fakeScroll()];
                case 4:
                    _d.sent();
                    console.log('[Backing to google...]');
                    return [4 /*yield*/, sleep(2000)];
                case 5:
                    _d.sent();
                    return [4 /*yield*/, driver.executeScript("window.history.back();")];
                case 6:
                    _d.sent();
                    return [4 /*yield*/, sleep(2000)];
                case 7:
                    _d.sent();
                    r(true);
                    return [2 /*return*/];
            }
        });
    }); });
}
function fakeScroll() {
    var _this = this;
    return new Promise(function (r) { return __awaiter(_this, void 0, void 0, function () {
        var count, i, i;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    console.log('[Do scrolling...]');
                    count = 0;
                    _a.label = 1;
                case 1:
                    if (!(count < getRandomArbitrary(1, 3))) return [3 /*break*/, 13];
                    i = 0;
                    _a.label = 2;
                case 2:
                    if (!(i < getRandomArbitrary(100, 2500))) return [3 /*break*/, 6];
                    return [4 /*yield*/, sleep(getRandomArbitrary(0, 3))];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, driver.executeScript("window.scrollBy(0," + getRandomArbitrary(1, 25) + ")")];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    i++;
                    return [3 /*break*/, 2];
                case 6: return [4 /*yield*/, sleep(getRandomArbitrary(500, 1000))];
                case 7:
                    _a.sent();
                    i = 0;
                    _a.label = 8;
                case 8:
                    if (!(i < getRandomArbitrary(100, 2500))) return [3 /*break*/, 12];
                    return [4 /*yield*/, sleep(getRandomArbitrary(0, 3))];
                case 9:
                    _a.sent();
                    return [4 /*yield*/, driver.executeScript("window.scrollBy(0," + getRandomArbitrary(-25, -1) + ")")];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11:
                    i++;
                    return [3 /*break*/, 8];
                case 12:
                    count++;
                    return [3 /*break*/, 1];
                case 13: return [4 /*yield*/, driver.executeScript("window.scrollBy(0,-10000)")];
                case 14:
                    _a.sent();
                    r(true);
                    return [2 /*return*/];
            }
        });
    }); });
}
var startScript = function () { return __awaiter(void 0, void 0, void 0, function () {
    var _i, keywords_1, keyword;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _i = 0, keywords_1 = keywords;
                _a.label = 1;
            case 1:
                if (!(_i < keywords_1.length)) return [3 /*break*/, 4];
                keyword = keywords_1[_i];
                console.log('[Searching keyword: ' + keyword + ']');
                return [4 /*yield*/, doSearch(keyword)];
            case 2:
                _a.sent();
                console.log('Keyword finsihed: ' + keyword + ']');
                _a.label = 3;
            case 3:
                _i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/];
        }
    });
}); };
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}
function sleep(ms) {
    return new Promise(function (resolve) {
        setTimeout(resolve, ms);
    });
}
var bumpSEO = function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
                var _i, SEOPumingKeywords_1, keyword, i, resLists, _a, resLists_1, res, res1, clickableElement;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _i = 0, SEOPumingKeywords_1 = SEOPumingKeywords;
                            _b.label = 1;
                        case 1:
                            if (!(_i < SEOPumingKeywords_1.length)) return [3 /*break*/, 15];
                            keyword = SEOPumingKeywords_1[_i];
                            console.log('|SEO| [Searching keyword: ' + keyword + ']');
                            return [4 /*yield*/, homeSearch(keyword)];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, fakeScroll()];
                        case 3:
                            _b.sent();
                            i = 0;
                            return [4 /*yield*/, driver.findElements(By.className(resultSearchClassName))];
                        case 4:
                            resLists = _b.sent();
                            totalRes[0] += resLists.length;
                            console.log("|SEO| [Found " + resLists.length + " results]");
                            console.log("|SEO| [Staring visting websites...]");
                            _a = 0, resLists_1 = resLists;
                            _b.label = 5;
                        case 5:
                            if (!(_a < resLists_1.length)) return [3 /*break*/, 13];
                            res = resLists_1[_a];
                            return [4 /*yield*/, driver.findElements(By.className(resultSearchClassName))];
                        case 6:
                            res1 = _b.sent();
                            clickableElement = res1[i++];
                            if (!res) return [3 /*break*/, 10];
                            if (!(i - 1 >= SEOMaxiumClickingResult)) return [3 /*break*/, 7];
                            totalRes[2]++;
                            return [3 /*break*/, 9];
                        case 7: return [4 /*yield*/, tourWeb(clickableElement)];
                        case 8:
                            _b.sent();
                            totalRes[1]++;
                            _b.label = 9;
                        case 9: return [3 /*break*/, 12];
                        case 10:
                            console.log('|SEO| [Error: on checking clickable element!]');
                            totalRes[3]++;
                            return [4 /*yield*/, sleep(2000)];
                        case 11:
                            _b.sent();
                            _b.label = 12;
                        case 12:
                            _a++;
                            return [3 /*break*/, 5];
                        case 13:
                            console.log('|SEO| Keyword finsihed: ' + keyword + ']');
                            _b.label = 14;
                        case 14:
                            _i++;
                            return [3 /*break*/, 1];
                        case 15:
                            resolve(true);
                            return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
var homeSearch = function (keyword) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve) { return __awaiter(void 0, void 0, void 0, function () {
                var url, inputList, _i, inputList_1, x, elements, _a, elements_1, element, name_1, currentUrl;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            url = 'https://www.google.co.th';
                            return [4 /*yield*/, driver.get(url)];
                        case 1:
                            _b.sent();
                            return [4 /*yield*/, sleep(1000)];
                        case 2:
                            _b.sent();
                            return [4 /*yield*/, driver.findElements(By.className(searchInputClassName))];
                        case 3:
                            inputList = _b.sent();
                            _i = 0, inputList_1 = inputList;
                            _b.label = 4;
                        case 4:
                            if (!(_i < inputList_1.length)) return [3 /*break*/, 10];
                            x = inputList_1[_i];
                            return [4 /*yield*/, x.click()];
                        case 5:
                            _b.sent();
                            return [4 /*yield*/, sleep(1000)];
                        case 6:
                            _b.sent();
                            return [4 /*yield*/, driver.switchTo().activeElement().sendKeys(keyword)];
                        case 7:
                            _b.sent();
                            return [4 /*yield*/, sleep(1000)];
                        case 8:
                            _b.sent();
                            _b.label = 9;
                        case 9:
                            _i++;
                            return [3 /*break*/, 4];
                        case 10: return [4 /*yield*/, driver.switchTo().activeElement().sendKeys(Key.ESCAPE)];
                        case 11:
                            _b.sent();
                            return [4 /*yield*/, driver.findElements(By.className(searchButtonClassName))];
                        case 12:
                            elements = _b.sent();
                            _a = 0, elements_1 = elements;
                            _b.label = 13;
                        case 13:
                            if (!(_a < elements_1.length)) return [3 /*break*/, 18];
                            element = elements_1[_a];
                            return [4 /*yield*/, element.getAttribute('value')];
                        case 14:
                            name_1 = _b.sent();
                            return [4 /*yield*/, driver.getCurrentUrl()];
                        case 15:
                            currentUrl = _b.sent();
                            return [4 /*yield*/, driver.switchTo().activeElement().sendKeys(Key.ENTER)];
                        case 16:
                            _b.sent();
                            return [3 /*break*/, 18];
                        case 17:
                            _a++;
                            return [3 /*break*/, 13];
                        case 18:
                            resolve(true);
                            return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
driver.get(startHost).catch(function () {
    console.log('[Start failed!]');
    return process.exit(0);
}).then(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                if (!true) return [3 /*break*/, 7];
                if (!doADSClicker) return [3 /*break*/, 2];
                console.log('[Starting ads click!]');
                return [4 /*yield*/, startScript()];
            case 1:
                _a.sent();
                console.log("ADClick Result -> [Total: " + totalAds[0] + " | Clicked: " + totalAds[1] + " | Skiped: " + totalAds[2] + "] | Error: " + totalAds[3]);
                return [3 /*break*/, 3];
            case 2:
                console.log('[Task doADSClicker is disabled SKIPED!]');
                _a.label = 3;
            case 3:
                if (!doBumpSEO) return [3 /*break*/, 5];
                console.log('[Starting SEO click!]');
                return [4 /*yield*/, bumpSEO()];
            case 4:
                _a.sent();
                console.log("SEO Result -> [Total: " + totalRes[0] + " | Clicked: " + totalRes[1] + " | Skiped: " + totalRes[2] + "] | Error: " + totalRes[3]);
                return [3 /*break*/, 6];
            case 5:
                console.log('[Task BumpSEO is disabled SKIPED!]');
                _a.label = 6;
            case 6:
                console.log("[All task finsihed!]");
                driver.close();
                driver = new selenium_webdriver_1.default.Builder().forBrowser('chrome').withCapabilities(chromeCapabilities).build();
                return [3 /*break*/, 0];
            case 7: return [2 /*return*/];
        }
    });
}); });
//# sourceMappingURL=index.js.map