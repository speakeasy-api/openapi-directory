import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ImChatSessionsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ImChatSessionsRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date.
     */
    to: Date;
}
/**
 * IM chat session type.
 */
export declare enum ImChatSessions200ApplicationXMLSessionsTypeEnum {
    Group = "Group",
    One1 = "1:1"
}
export declare class ImChatSessions200ApplicationXMLSessions extends SpeakeasyBase {
    /**
     * Last message sent time.
     */
    lastMessageSentTime?: Date;
    /**
     * Meeting topic.
     */
    name?: string;
    /**
     * IM chat session ID.
     */
    sessionId?: string;
    /**
     * IM chat session type.
     */
    type?: ImChatSessions200ApplicationXMLSessionsTypeEnum;
}
/**
 * Pagination object.
 */
export declare class ImChatSessions200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
    /**
     * Array of session objects.
     */
    sessions?: ImChatSessions200ApplicationXMLSessions[];
    /**
     * End date.
     */
    to?: Date;
}
/**
 * IM chat session type.
 */
export declare enum ImChatSessions200ApplicationJSONSessionsTypeEnum {
    Group = "Group",
    One1 = "1:1"
}
export declare class ImChatSessions200ApplicationJSONSessions extends SpeakeasyBase {
    /**
     * Last message sent time.
     */
    lastMessageSentTime?: Date;
    /**
     * Meeting topic.
     */
    name?: string;
    /**
     * IM chat session ID.
     */
    sessionId?: string;
    /**
     * IM chat session type.
     */
    type?: ImChatSessions200ApplicationJSONSessionsTypeEnum;
}
/**
 * Pagination object.
 */
export declare class ImChatSessions200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
    /**
     * Array of session objects.
     */
    sessions?: ImChatSessions200ApplicationJSONSessions[];
    /**
     * End date.
     */
    to?: Date;
}
export declare class ImChatSessionsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * Archived IM chat sessions returned.
     */
    imChatSessions200ApplicationJSONObject?: ImChatSessions200ApplicationJSON;
}
