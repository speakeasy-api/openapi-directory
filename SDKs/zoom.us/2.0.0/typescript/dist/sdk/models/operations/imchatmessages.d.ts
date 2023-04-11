import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ImChatMessagesRequest extends SpeakeasyBase {
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
     * IM chat session ID.
     */
    sessionId: string;
    /**
     * End date.
     */
    to: Date;
}
export declare class ImChatMessages200ApplicationXMLMessages extends SpeakeasyBase {
    /**
     * IM chat message action.
     */
    action?: string;
    /**
     * Action time.
     */
    actionTime?: Date;
    /**
     * IM chat message sent time.
     */
    dateTime?: Date;
    /**
     * IM chat message content.
     */
    message?: string;
    /**
     * IM chat message sender.
     */
    sender?: string;
}
/**
 * Pagination object.
 */
export declare class ImChatMessages200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date.
     */
    from?: Date;
    /**
     * Array of session objects.
     */
    messages?: ImChatMessages200ApplicationXMLMessages[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
    /**
     * IM chat session ID.
     */
    sessionId?: string;
    /**
     * End date.
     */
    to?: Date;
}
export declare class ImChatMessages200ApplicationJSONMessages extends SpeakeasyBase {
    /**
     * IM chat message action.
     */
    action?: string;
    /**
     * Action time.
     */
    actionTime?: Date;
    /**
     * IM chat message sent time.
     */
    dateTime?: Date;
    /**
     * IM chat message content.
     */
    message?: string;
    /**
     * IM chat message sender.
     */
    sender?: string;
}
/**
 * Pagination object.
 */
export declare class ImChatMessages200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date.
     */
    from?: Date;
    /**
     * Array of session objects.
     */
    messages?: ImChatMessages200ApplicationJSONMessages[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of the available result list exceeds the page size. The expiration period is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The amount of records returns within a single API call.
     */
    pageSize?: number;
    /**
     * IM chat session ID.
     */
    sessionId?: string;
    /**
     * End date.
     */
    to?: Date;
}
export declare class ImChatMessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` <br>
     *
     * @remarks
     * Archived IM chat messages returned.
     */
    imChatMessages200ApplicationJSONObject?: ImChatMessages200ApplicationJSON;
}
