import { CHANNEL_EVENT_CONFIG } from '../config/index.js';

export const newMessageFromChannelEventHandler = async (client, message) => {
    const {
        peerId: {
            channelId
        },
        message: receivedMessage
    } = message;

    console.log(`Message received from this channel : ${channelId} => ${receivedMessage}`);

    if (CHANNEL_EVENT_CONFIG[channelId]) {
        CHANNEL_EVENT_CONFIG[channelId].callback(client, COURSEVANIA_URL);
    }
}
