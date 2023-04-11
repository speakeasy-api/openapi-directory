import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DeleteAChatbotMessageSecurity extends SpeakeasyBase {
    clientCredentials: string;
}
export declare class DeleteAChatbotMessageApplicationJSON extends SpeakeasyBase {
    /**
     * The AccountID of the Zoom account to which the message was sent. Retrieve this from the Chatbot request sent to your server as shown in the example [here]( https://marketplace.zoom.us/docs/guides/chatbots/sending-messages).
     */
    accountId: string;
    /**
     * The BotJID found in the Chat Subscription Section on the Features page of your App Dashboard.
     */
    robotJid: string;
    /**
     * The UserJID of the user on whose behalf the message is being sent. Used to prevent members of a channel from getting notifications that were set up by a user who has left the channel.
     */
    userJid?: string;
}
export declare class DeleteAChatbotMessageRequest extends SpeakeasyBase {
    requestBody?: DeleteAChatbotMessageApplicationJSON;
    messageId: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Message deleted.
 */
export declare class DeleteAChatbotMessage200ApplicationXML extends SpeakeasyBase {
    /**
     * Unique identifier of the message that was deleted.
     */
    messageId?: string;
    /**
     * The BotJID of the Chatbot app. It can be found in the Chat Subscription Section on the Features page of your App Dashboard
     */
    robotJid?: string;
    /**
     * The date and time at which the message was deleted.
     */
    sentTime?: string;
    /**
     * The JID of the Channel or User to whom the message was sent.
     */
    toJid?: string;
    /**
     *  The UserJID of the user on whose behalf the message was sent. Used to prevent members of a channel from getting notifications that were set up by a user who has left the channel.
     */
    userJid?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Message deleted.
 */
export declare class DeleteAChatbotMessage200ApplicationJSON extends SpeakeasyBase {
    /**
     * Unique identifier of the message that was deleted.
     */
    messageId?: string;
    /**
     * The BotJID of the Chatbot app. It can be found in the Chat Subscription Section on the Features page of your App Dashboard
     */
    robotJid?: string;
    /**
     * The date and time at which the message was deleted.
     */
    sentTime?: string;
    /**
     * The JID of the Channel or User to whom the message was sent.
     */
    toJid?: string;
    /**
     *  The UserJID of the user on whose behalf the message was sent. Used to prevent members of a channel from getting notifications that were set up by a user who has left the channel.
     */
    userJid?: string;
}
export declare class DeleteAChatbotMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Message deleted.
     */
    deleteAChatbotMessage200ApplicationJSONObject?: DeleteAChatbotMessage200ApplicationJSON;
}
