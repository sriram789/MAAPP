import { getClient } from './session/index.js';

export const App = async () => {
    const client = await getClient();

    await client.sendMessage('me', { message: 'Hello world!' });
};