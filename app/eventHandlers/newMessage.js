import { newMessageFromChannelEventHandler } from './channel/index.js';
import { newMessageFromUserEventHandler } from './user/index.js';

export const newMessageEventHandler = async (event) => {
    const {
        message: {
            peerId: {
                className
            }
        },
        message
    } = event;
    switch(className) {
        case 'PeerChannel': newMessageFromChannelEventHandler(message); break;
        case 'PeerUser': newMessageFromUserEventHandler(message); break;
        default: newMessageFromChannelEventHandler(message); break;
    }
}