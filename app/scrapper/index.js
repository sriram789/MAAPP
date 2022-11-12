import puppeteer from 'puppeteer';

export const webAutomate = async (url, callback = () => {}) => {
    const browser = await puppeteer.launch({
        headless: false,
    });

    const page = await browser.newPage();
    await page.setJavaScriptEnabled(true);
    await page.goto(url);

    await callback(page);

    await browser.close();
};
