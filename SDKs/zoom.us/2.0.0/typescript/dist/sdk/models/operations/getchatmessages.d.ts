import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetChatMessagesPathParams extends SpeakeasyBase {
    userId: string;
}
export declare class GetChatMessagesQueryParams extends SpeakeasyBase {
    date?: Date;
    includeDeletedAndEditedMessage?: string;
    nextPageToken?: string;
    pageSize?: number;
    toChannel?: string;
    toContact?: string;
}
export declare class GetChatMessagesSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum GetChatMessages200ApplicationJsonMessagesStatusEnum {
    Deleted = "Deleted",
    Edited = "Edited",
    Normal = "Normal"
}
export declare class GetChatMessages200ApplicationJsonMessages extends SpeakeasyBase {
    dateTime?: string;
    id?: string;
    message?: string;
    replyMainMessageId?: string;
    replyMainMessageTimestamp?: number;
    sender?: string;
    status?: GetChatMessages200ApplicationJsonMessagesStatusEnum;
    timestamp?: number;
}
/**
 * Chat message object.
**/
export declare class GetChatMessages200ApplicationJson extends SpeakeasyBase {
    date?: Date;
    messages?: GetChatMessages200ApplicationJsonMessages[];
    nextPageToken?: string;
    pageSize?: number;
}
export declare class GetChatMessagesRequest extends SpeakeasyBase {
    pathParams: GetChatMessagesPathParams;
    queryParams: GetChatMessagesQueryParams;
    security: GetChatMessagesSecurity;
}
export declare class GetChatMessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getChatMessages200ApplicationJSONObject?: GetChatMessages200ApplicationJson;
}
