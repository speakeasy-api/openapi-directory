import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListWebinarParticipantsRequest extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Unique identifier of the webinar. You can retrieve the value of this field by calling the [list webinars](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinars) API.
     */
    webinarId: string;
}
export declare class ListWebinarParticipants200ApplicationXMLParticipants extends SpeakeasyBase {
    /**
     * Unique identifier of the participant.
     */
    id?: string;
    /**
     * Name of the participant.
     */
    name?: string;
    /**
     * Email address of the participant.
     */
    userEmail?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Participants list returned.
 */
export declare class ListWebinarParticipants200ApplicationXML extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for this request.
     */
    pageCount?: number;
    /**
     * The total number of records returned from a single API call.
     */
    pageSize?: number;
    participants?: ListWebinarParticipants200ApplicationXMLParticipants[];
    /**
     * The total number of records available across all pages.
     */
    totalRecords?: number;
}
export declare class ListWebinarParticipants200ApplicationJSONParticipants extends SpeakeasyBase {
    /**
     * Unique identifier of the participant.
     */
    id?: string;
    /**
     * Name of the participant.
     */
    name?: string;
    /**
     * Email address of the participant.
     */
    userEmail?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**<br>
 *
 * @remarks
 * Participants list returned.
 */
export declare class ListWebinarParticipants200ApplicationJSON extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for this request.
     */
    pageCount?: number;
    /**
     * The total number of records returned from a single API call.
     */
    pageSize?: number;
    participants?: ListWebinarParticipants200ApplicationJSONParticipants[];
    /**
     * The total number of records available across all pages.
     */
    totalRecords?: number;
}
export declare class ListWebinarParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**<br>
     *
     * @remarks
     * Participants list returned.
     */
    listWebinarParticipants200ApplicationJSONObject?: ListWebinarParticipants200ApplicationJSON;
}
