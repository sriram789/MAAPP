import { webAutomate } from '../index.js';
import { purchaseCourse } from '../udemy/index.js';

const COURSEVANIA_URL = 'https://coursevania.com/courses/html-5pythondjango-and-flask-framework-full-stack-course/';

const getUdemyUrl = async (page) => {
    const udemyCourseLink = await page.evaluate(() => {
        const PATH_SELECTOR = '.stm_lms_udemy__affiliate_btn a';
        return document.querySelectorAll(PATH_SELECTOR)[0].href;
    });
    purchaseCourse(udemyCourseLink);
}

export const triggerUdemyLinkExtraction = (url) => {
    webAutomate(
        url,
        getUdemyUrl
    );
}