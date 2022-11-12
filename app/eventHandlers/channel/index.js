export const newMessageFromChannelEventHandler = async (message) => {
    const {
        peerId: {
            channelId
        },
        message: receivedMessage
    } = message;

    console.log(`Message received from this channel : ${channelId} => ${receivedMessage}`);
}