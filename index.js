import { App } from './app/index.js';
import * as dotenv from 'dotenv';

export const SaveEnvVariables = () => {
    dotenv.config({ path: ".app.env"});
};

SaveEnvVariables();
App();