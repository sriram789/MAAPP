export const filterMessage = (message) => {
    return message;
}

export const isMessageFromPeer = (message, peerId) => {
    return message.peerId?.channelId === peerId;
}