import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListimmessagesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListimmessagesRequest extends SpeakeasyBase {
    /**
     * IM Channel's ID.
     */
    channel?: string;
    /**
     * Chat user's ID or email address.
     */
    chatUser?: string;
    /**
     * IM message's query date time, format as yyyy-MM-dd.
     */
    date?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The user ID or email address.
     */
    userId: string;
}
export declare class Listimmessages200ApplicationXMLMessages extends SpeakeasyBase {
    /**
     * IM message send time.
     */
    dateTime?: Date;
    /**
     * IM message UUID.
     */
    id?: string;
    /**
     * IM message content.
     */
    message?: string;
    /**
     * IM message sender.
     */
    sender?: string;
    /**
     * IM message send timestamp.
     */
    timstamp?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * User's IM messages returned.
 */
export declare class Listimmessages200ApplicationXML extends SpeakeasyBase {
    /**
     * Query date time, format as yyyy-mm-dd.
     */
    date?: Date;
    /**
     * Array of im messages.
     */
    messages?: Listimmessages200ApplicationXMLMessages[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class Listimmessages200ApplicationJSONMessages extends SpeakeasyBase {
    /**
     * IM message send time.
     */
    dateTime?: Date;
    /**
     * IM message UUID.
     */
    id?: string;
    /**
     * IM message content.
     */
    message?: string;
    /**
     * IM message sender.
     */
    sender?: string;
    /**
     * IM message send timestamp.
     */
    timstamp?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * User's IM messages returned.
 */
export declare class Listimmessages200ApplicationJSON extends SpeakeasyBase {
    /**
     * Query date time, format as yyyy-mm-dd.
     */
    date?: Date;
    /**
     * Array of im messages.
     */
    messages?: Listimmessages200ApplicationJSONMessages[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
}
export declare class ListimmessagesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * User's IM messages returned.
     */
    listimmessages200ApplicationJSONObject?: Listimmessages200ApplicationJSON;
}
