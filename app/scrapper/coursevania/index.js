import { webAutomate } from '../index.js';
import { purchaseCourse } from '../udemy/index.js';
import { sendSelfMessage } from '../../controllers/message.js';

const getUdemyUrl = async (client, page) => {
    const udemyCourseLink = await page.evaluate(() => {
        const PATH_SELECTOR = '.stm_lms_udemy__affiliate_btn a';
        return document.querySelectorAll(PATH_SELECTOR)[0].href;
    });
    purchaseCourse(client, udemyCourseLink);
    sendSelfMessage(client, udemyCourseLink);
}

export const triggerUdemyLinkExtraction = (client, url) => {
    console.log(`Udemy link extraction process started for URL : ${url}`);

    webAutomate(
        url,
        (page) => getUdemyUrl(client, page)
    );
}