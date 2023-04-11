import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetChatMessagesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetChatMessagesRequest extends SpeakeasyBase {
    /**
     * The query date for which you would like to get the chat messages.
     */
    date?: Date;
    /**
     * **Optional** <br>
     *
     * @remarks
     * Set the value of this field to `true` to include edited and deleted messages in the response.
     */
    includeDeletedAndEditedMessage?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The channel Id of a channel inside which the current user had chat conversations. Messages that were sent and/or received between the user and the channel is displayed.
     *
     * @remarks
     *
     * Note: You must provide either `contact` or `channel` as a query parameter to retrieve messages either from an individual or a chat channel.
     */
    toChannel?: string;
    /**
     * The email address of a chat contact with whom the current user chatted. Messages that were sent and/or received between the user and the contact is displayed.
     *
     * @remarks
     *
     * Note: You must provide either `contact` or `channel` as a query parameter to retrieve messages either from an individual or a chat channel.
     */
    toContact?: string;
    userId: string;
}
/**
 * This field indicates whether a message is an original message(unedited), an edited message or a deleted message.
 *
 * @remarks
 *
 * This field is only returned if you set the value of `for include_deleted_and_edited_message` query parameter to `true`.
 */
export declare enum GetChatMessages200ApplicationXMLMessagesStatusEnum {
    Deleted = "Deleted",
    Edited = "Edited",
    Normal = "Normal"
}
export declare class GetChatMessages200ApplicationXMLMessages extends SpeakeasyBase {
    /**
     * The date-time at which the message was sent.
     */
    dateTime?: string;
    /**
     * Message ID: Unique Identifier of the message.
     */
    id?: string;
    /**
     * The message content.
     */
    message?: string;
    /**
     * Unique identifier of a reply. This field will only be returned if the message is a reply message.
     */
    replyMainMessageId?: string;
    /**
     * Timestamp of when the reply message was sent. This field will only be returned if the message is a reply message.
     *
     * @remarks
     *
     * The value of this field will be in **long** format(int64).
     */
    replyMainMessageTimestamp?: number;
    /**
     * The email address of the sender of the message.
     */
    sender?: string;
    /**
     * This field indicates whether a message is an original message(unedited), an edited message or a deleted message.
     *
     * @remarks
     *
     * This field is only returned if you set the value of `for include_deleted_and_edited_message` query parameter to `true`.
     */
    status?: GetChatMessages200ApplicationXMLMessagesStatusEnum;
    /**
     * The timestamp of the message in microseconds.
     */
    timestamp?: number;
}
/**
 * Chat message object.
 */
export declare class GetChatMessages200ApplicationXML extends SpeakeasyBase {
    /**
     * The date provided in the query parameter. If a date is not provided, the default value is the **current date**.
     */
    date?: Date;
    /**
     * List of message(s).
     */
    messages?: GetChatMessages200ApplicationXMLMessages[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     *
     * @remarks
     *
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
}
/**
 * This field indicates whether a message is an original message(unedited), an edited message or a deleted message.
 *
 * @remarks
 *
 * This field is only returned if you set the value of `for include_deleted_and_edited_message` query parameter to `true`.
 */
export declare enum GetChatMessages200ApplicationJSONMessagesStatusEnum {
    Deleted = "Deleted",
    Edited = "Edited",
    Normal = "Normal"
}
export declare class GetChatMessages200ApplicationJSONMessages extends SpeakeasyBase {
    /**
     * The date-time at which the message was sent.
     */
    dateTime?: string;
    /**
     * Message ID: Unique Identifier of the message.
     */
    id?: string;
    /**
     * The message content.
     */
    message?: string;
    /**
     * Unique identifier of a reply. This field will only be returned if the message is a reply message.
     */
    replyMainMessageId?: string;
    /**
     * Timestamp of when the reply message was sent. This field will only be returned if the message is a reply message.
     *
     * @remarks
     *
     * The value of this field will be in **long** format(int64).
     */
    replyMainMessageTimestamp?: number;
    /**
     * The email address of the sender of the message.
     */
    sender?: string;
    /**
     * This field indicates whether a message is an original message(unedited), an edited message or a deleted message.
     *
     * @remarks
     *
     * This field is only returned if you set the value of `for include_deleted_and_edited_message` query parameter to `true`.
     */
    status?: GetChatMessages200ApplicationJSONMessagesStatusEnum;
    /**
     * The timestamp of the message in microseconds.
     */
    timestamp?: number;
}
/**
 * Chat message object.
 */
export declare class GetChatMessages200ApplicationJSON extends SpeakeasyBase {
    /**
     * The date provided in the query parameter. If a date is not provided, the default value is the **current date**.
     */
    date?: Date;
    /**
     * List of message(s).
     */
    messages?: GetChatMessages200ApplicationJSONMessages[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     *
     * @remarks
     *
     */
    nextPageToken?: string;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
}
export declare class GetChatMessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:**`200`<br>
     *
     * @remarks
     * List of chat messages returned.
     */
    getChatMessages200ApplicationJSONObject?: GetChatMessages200ApplicationJSON;
}
