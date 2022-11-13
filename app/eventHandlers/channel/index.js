import { CHANNEL_EVENT_CONFIG } from '../config/index.js';
import { fetchUrlFromString } from '../../utils/fetchUrlFromString.js'; 

export const newMessageFromChannelEventHandler = async (client, message) => {
    const {
        peerId: {
            channelId
        },
        message: receivedMessage
    } = message;

    console.log(`Message received from this channel : ${channelId} => ${receivedMessage}`);

    if (CHANNEL_EVENT_CONFIG[channelId]) {
        CHANNEL_EVENT_CONFIG[channelId].callback(client, fetchUrlFromString(receivedMessage));
    }
}
