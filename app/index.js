import { getClient } from './session/index.js';
import { NewMessage } from 'telegram/events/index.js'; 
import { newMessageEventHandler } from './eventHandlers/newMessage.js';

export const App = async () => {
    const client = await getClient();

    client.addEventHandler(newMessageEventHandler, new NewMessage());
};