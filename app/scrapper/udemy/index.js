import { webAutomate } from '../index.js';
import { sendSelfMessage } from '../../controllers/message.js';

const initiatePurchase = async (client, page, url) => {
    await page.waitForSelector('[data-purpose="purchase-section"]')
       .then(async () => {
            const buttonData = await page.evaluate(() => {
                const purchaseDivList = document.querySelectorAll('[data-purpose="purchase-section"]');
                const lastPurchaseDiv = purchaseDivList[purchaseDivList.length - 1];
                return lastPurchaseDiv.querySelector('.buy-button button span').innerText;
            });

            if (buttonData == 'Enroll now') {
                console.log(`Going to enroll for url ${url}`);
                //await page.click('[data-purpose="purchase-section"] .buy-button button');
            }
            //await page.screenshot({ path: "udemyPage.png", fullPage: true });
       });
    //sendSelfMessage(client, `Course ${url} purchased successfully`)
}

export const purchaseCourse = (client, url) => {
    console.log(`Purchase initiated for ${url}`);

    webAutomate(
        url,
        async (page) => await initiatePurchase(client, page, url)
    );
}
