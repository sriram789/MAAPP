export const sendSelfMessage = (client, data) => {
    client.sendMessage('me', {
        message: data
    });
};