import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ImChatSessionsQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
}
export declare class ImChatSessionsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum ImChatSessions200ApplicationJsonSessionsTypeEnum {
    Group = "Group",
    One1 = "1:1"
}
export declare class ImChatSessions200ApplicationJsonSessions extends SpeakeasyBase {
    lastMessageSentTime?: Date;
    name?: string;
    sessionId?: string;
    type?: ImChatSessions200ApplicationJsonSessionsTypeEnum;
}
/**
 * Pagination object.
**/
export declare class ImChatSessions200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    sessions?: ImChatSessions200ApplicationJsonSessions[];
    to?: Date;
}
export declare class ImChatSessionsRequest extends SpeakeasyBase {
    queryParams: ImChatSessionsQueryParams;
    security: ImChatSessionsSecurity;
}
export declare class ImChatSessionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    imChatSessions200ApplicationJSONObject?: ImChatSessions200ApplicationJson;
}
