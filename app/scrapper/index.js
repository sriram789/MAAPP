import puppeteer from 'puppeteer-extra';
import { executablePath } from 'puppeteer';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';

export const webAutomate = async (url, callback = () => {}) => {
    puppeteer.use(StealthPlugin());
    const browser = await puppeteer.launch({
        executablePath: executablePath(),
        headless: false,
        devtools: true,
    });

    const page = await browser.newPage();
    await page.setViewport({ height: 1100, width: 1700 });
    await page.setJavaScriptEnabled(true);
    await page.setCacheEnabled(true);
    await page.goto(url);

    await callback(page);

    await browser.close();
};
