import { SpeakeasyBase } from "../../../internal/utils";
export declare class ImChatMessagesPathParams extends SpeakeasyBase {
    sessionId: string;
}
export declare class ImChatMessagesQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
}
export declare class ImChatMessages200ApplicationJsonMessages extends SpeakeasyBase {
    action?: string;
    actionTime?: Date;
    dateTime?: Date;
    message?: string;
    sender?: string;
}
/**
 * Pagination object.
**/
export declare class ImChatMessages200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    messages?: ImChatMessages200ApplicationJsonMessages[];
    nextPageToken?: string;
    pageSize?: number;
    sessionId?: string;
    to?: Date;
}
export declare class ImChatMessagesRequest extends SpeakeasyBase {
    pathParams: ImChatMessagesPathParams;
    queryParams: ImChatMessagesQueryParams;
}
export declare class ImChatMessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    imChatMessages200ApplicationJSONObject?: ImChatMessages200ApplicationJson;
}
