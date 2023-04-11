import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class SendaChatMessageSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Type of mention. You can use one of the following values:<br>
 *
 * @remarks
 * * `1`: Mention a contact.
 *
 * * `2`: Mention "all" to notify everyone in the channel.
 */
export declare enum SendaChatMessageApplicationJSONAtItemsAtTypeEnum {
    One = "1",
    Two = "2"
}
export declare class SendaChatMessageApplicationJSONAtItems extends SpeakeasyBase {
    /**
     * This field is required if the value of `at_type` field is set to 1.
     *
     * @remarks
     *
     * Email address of the contact.
     *
     *
     */
    atContact?: string;
    /**
     * Type of mention. You can use one of the following values:<br>
     *
     * @remarks
     * * `1`: Mention a contact.
     *
     * * `2`: Mention "all" to notify everyone in the channel.
     */
    atType?: SendaChatMessageApplicationJSONAtItemsAtTypeEnum;
    /**
     * End position of the mention.
     *
     * @remarks
     *
     * Example message: "@Shrijana How are you?"
     * In this case, the end position of the mention "@Shrijana" is 8. Hence, the value of this field will be 8.
     */
    endPosition?: number;
    /**
     * Start position of the mention("@") in the message string.
     *
     * @remarks
     *
     * For example if you want to include the mention at the beginning of the message, the value for this field will be 0.
     *
     * Example message: "@Shrijana How are you?"
     *
     *
     */
    startPosition?: number;
}
export declare class SendaChatMessageApplicationJSON extends SpeakeasyBase {
    /**
     * [Chat mentions](https://support.zoom.us/hc/en-us/articles/360037567431-Using-chat-mentions-and-slash-commands) object. Use this object to include mentions in the message that will be sent to  a channel.
     */
    atItems?: SendaChatMessageApplicationJSONAtItems[];
    /**
     * The message to be sent.
     */
    message: string;
    /**
     * The Channel Id of the channel where you would like to send a message.
     */
    toChannel?: string;
    /**
     * The email address of the contact to whom you would like to send the message.
     */
    toContact?: string;
}
export declare class SendaChatMessageRequest extends SpeakeasyBase {
    requestBody?: SendaChatMessageApplicationJSON;
    userId: string;
}
/**
 * **Status Code:** `201`<br>
 *
 * @remarks
 * Message sent.
 */
export declare class SendaChatMessage201ApplicationXML extends SpeakeasyBase {
    /**
     * Message ID: Unique Identifier of the message.
     */
    id?: string;
}
/**
 * **Status Code:** `201`<br>
 *
 * @remarks
 * Message sent.
 */
export declare class SendaChatMessage201ApplicationJSON extends SpeakeasyBase {
    /**
     * Message ID: Unique Identifier of the message.
     */
    id?: string;
}
export declare class SendaChatMessageResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Status Code:** `201`<br>
     *
     * @remarks
     * Message sent.
     */
    sendaChatMessage201ApplicationJSONObject?: SendaChatMessage201ApplicationJSON;
}
