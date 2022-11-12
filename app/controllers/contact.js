import { Api } from 'telegram';

export const searchContact = async (client, query, resultSize) => {
    return await client.invoke(new Api.contacts.Search({
        q: query,
        limit: resultSize,
    }));
};