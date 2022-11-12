export const newMessageFromUserEventHandler = async (message) => {
    const {
        peerId: {
            channelId: userId
        },
        message: receivedMessage
    } = message;

    console.log(`Message received from this user : ${userId} => ${receivedMessage}`);
}