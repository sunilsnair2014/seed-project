/**
 * Created by pachu on 10/9/2017.
 */
export class Message {
    content : string;
    username : string;
    messageId?: string;
    userId?: string;

    constructor(content: string, username: string, messageId?: string, userId?: string) {
        this.content = content;
        this.username = username;
        this.messageId = messageId;
        this.userId = userId;
    }

}