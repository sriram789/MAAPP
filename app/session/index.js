import { TelegramClient } from 'telegram'
import { StringSession }  from 'telegram/sessions/index.js'
import input from 'input';
import { checkEmpty } from '../utils/stringUtils.js';

let clientSession = null;

export const getSession = async () => {
    if (checkEmpty(process.env.TELEGRAM_SESSION)) {
        clientSession = await createNewSession();
    }

    return clientSession;
}

export const getClient = async () => {
    if (clientSession == null) {
        clientSession = await getSession();
        if (clientSession == null) {
            clientSession = await createNewSession();
        }
    }

    return clientSession;
}

export const createNewSession = async () => {
    console.log('creating new session......');
    const client = new TelegramClient(
        new StringSession(''),
        Number(process.env.TELEGRAM_API_ID),
        process.env.TELEGRAM_API_HASH,
        { 
            connectionRetries: 5
        }
    );
    await client.start({
        phoneNumber: process.env.TELEGRAM_PHONE_NUMBER,
        password: async () => await input.text('password?'),
        phoneCode: async () => await input.text('Code ?'),
        onError: (err) => console.log(err),
    });

    console.log('New session created ...');
    process.env.TELEGRAM_SESSION = client.session.save();
    return client;
}