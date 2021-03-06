export interface MessageDataInterface {
    sender: string,
    senderID: string,
    messageID: string,
    receiver: string,
    senderType: string,
    messageDate: Date,
    image: string,
    text: string,
    color: string,
    platform: string,
    messageType: string,
    conversationID: string,
    completed: boolean,
    tags: string[],
    actionButtons: any,
}
