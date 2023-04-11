import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class EditChatbotMessageSecurity extends SpeakeasyBase {
    clientCredentials: string;
}
export declare class EditChatbotMessageApplicationJSON extends SpeakeasyBase {
    /**
     * The AccountID of the Zoom account to which the message was sent. Retrieve this from the Chatbot request sent to your server as shown in the example [here]( https://marketplace.zoom.us/docs/guides/chatbots/sending-messages).
     */
    accountId: string;
    /**
     * JSON template describing how the edited message should be displayed for the user. For more information please see our ["Send Message" templates](https://marketplace.zoom.us/docs/guides/chatbots/sending-messages#example-request).
     */
    content: Record<string, any>;
    /**
     * **Optional**<br>
     *
     * @remarks
     * Enable or disable markdown parser to your chatbot message. Applies the markdown parser to your chatbot message if the value of this field is set to `true`.<br> To learn more, refer to the Chatbot message [markdown reference](https://marketplace.zoom.us/docs/guides/chatbots/customizing-messages/message-with-markdown).
     */
    isMarkdownSupport?: boolean;
    /**
     * Robot JID created when enabling chatbot features on your marketplace app.
     */
    robotJid: string;
    /**
     * **Optional**<br>
     *
     * @remarks
     * The UserJID of the user on whose behalf the message is being sent. Use this field to prevent members of a channel from getting notifications that were set up by a user who has left the channel.
     */
    userJid?: string;
}
export declare class EditChatbotMessageRequest extends SpeakeasyBase {
    requestBody?: EditChatbotMessageApplicationJSON;
    /**
     * Unique Identifier of the message that needs to be updated. This should be retrieved from the response of [Send Chatbot Message API](https://marketplace.zoom.us/docs/api-reference/zoom-api/im-chat/sendchatbot).
     */
    messageId: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Message updated.
 */
export declare class EditChatbotMessage200ApplicationXML extends SpeakeasyBase {
    /**
     * Unique Identifier of the updated message,
     */
    messageId?: string;
    /**
     * The BotJID found in the Chat Subscription Section on the Features page of your App Dashboard.
     */
    robotJid?: string;
    /**
     * The date and time at which the message was sent.
     */
    sentTime?: Date;
    /**
     * The JID of the Channel or User to whom the message was sent.
     */
    toJid?: string;
    /**
     * The UserJID of the user on whose behalf the message is being sent. Used to prevent members of a channel from getting notifications that were set up by a user who has left the channel.
     */
    userJid?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Message updated.
 */
export declare class EditChatbotMessage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique Identifier of the updated message,
     */
    messageId?: string;
    /**
     * The BotJID found in the Chat Subscription Section on the Features page of your App Dashboard.
     */
    robotJid?: string;
    /**
     * The date and time at which the message was sent.
     */
    sentTime?: Date;
    /**
     * The JID of the Channel or User to whom the message was sent.
     */
    toJid?: string;
    /**
     * The UserJID of the user on whose behalf the message is being sent. Used to prevent members of a channel from getting notifications that were set up by a user who has left the channel.
     */
    userJid?: string;
}
export declare class EditChatbotMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Message updated.
     */
    editChatbotMessage200ApplicationJSONObject?: EditChatbotMessage200ApplicationJSON;
}
