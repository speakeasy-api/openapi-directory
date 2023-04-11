import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendchatbotSecurity extends SpeakeasyBase {
    clientCredentials: string;
}
export declare class SendchatbotApplicationJSON extends SpeakeasyBase {
    /**
     * Account ID of the authorized account.
     */
    accountId: string;
    /**
     * JSON template describing how the message should be displayed for the user. For more information please see our ["Send Message" templates](https://marketplace.zoom.us/docs/guides/chatbots/sending-messages#example-request).
     */
    content: Record<string, any>;
    /**
     * **Optional**<br>
     *
     * @remarks
     * Applies the markdown parser to your chatbot message if the value of this field is set to `true`.<br> To learn more, refer to the Chatbot message [markdown reference](https://marketplace.zoom.us/docs/guides/chatbots/customizing-messages/message-with-markdown).
     */
    isMarkdownSupport?: boolean;
    /**
     * Robot JID created when enabling chatbot features on your marketplace app.
     */
    robotJid: string;
    /**
     * Unique JID of reciever. Can be a group or user.
     */
    toJid: string;
    /**
     * **Optional**<br>
     *
     * @remarks
     * The UserJID of the user on whose behalf the message is being sent. Use this field to prevent members of a channel from getting notifications that were set up by a user who has left the channel.
     */
    userJid?: string;
    /**
     * **Optional**<br>Allow a Chatbot to send a message to a group channel, but have only one designated person in that group channel see the message by providing the person's UserID in this field.
     */
    visibleToUser?: string;
}
export declare class SendchatbotResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
