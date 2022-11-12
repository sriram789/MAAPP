import { newMessageFromChannelEventHandler } from './channel/index.js';
import { newMessageFromUserEventHandler } from './user/index.js';

export const newMessageEventHandler = async (client, event) => {
    const {
        message: {
            peerId: {
                className
            }
        },
        message
    } = event;
    switch(className) {
        case 'PeerChannel': newMessageFromChannelEventHandler(client, message); break;
        case 'PeerUser': newMessageFromUserEventHandler(client, message); break;
        default: newMessageFromChannelEventHandler(client, message); break;
    }
}