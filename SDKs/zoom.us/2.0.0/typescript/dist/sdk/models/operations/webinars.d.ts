import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class WebinarsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class WebinarsRequest extends SpeakeasyBase {
    /**
     *
     * @remarks
     * **Deprecated** - This field has been deprecated and we will stop supporting it completely in a future release. Please use "next_page_token" for pagination instead of this field.
     *
     * The page number of the current page in the returned records.
     */
    pageNumber?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
export declare class WebinarsUserListWebinars extends SpeakeasyBase {
    /**
     * Webinar Description. The length of agenda gets truncated to 250 characters when you list all webinars for a user. To view the complete agenda, retrieve details for a single webinar [here](https://marketplace.zoom.us/docs/api-reference/zoom-api/webinars/webinar).
     */
    agenda?: string;
    /**
     * Time of webinar creation.
     */
    createdAt?: Date;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * ID of the host of the webinar.
     */
    hostId?: string;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Join URL of the webinar (using which others can join the webinar).
     */
    joinUrl?: string;
    /**
     * Scheduled start time of the Webinar.
     */
    startTime?: Date;
    /**
     * [Timezone ID](https://marketplace.zoom.us/docs/api-reference/other-references/abbreviation-lists#timezones) for the Webinar.
     */
    timezone?: string;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Webinar Types:<br>`5` - Webinar.<br>`6` - Recurring webinar with no fixed time.<br>`9` - Recurring webinar with a fixed time.
     */
    type?: string;
    /**
     * Unique identifier of a Webinar. Each webinar instance will generate its own UUID. Once a Webinar ends, the value of uuid for the same webinar will be different from when it was scheduled.
     */
    uuid?: string;
}
/**
 * Pagination Object.
 */
export declare class WebinarsUserList extends SpeakeasyBase {
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * **Deprecated**: This field has been deprecated. Please use the "next_page_token" field for pagination instead of this field.
     *
     * @remarks
     *
     * The page number of the current results.
     */
    pageNumber?: number;
    /**
     * The number of records returned with a single API call.
     */
    pageSize?: number;
    /**
     * The total number of all the records available across pages.
     */
    totalRecords?: number;
    /**
     * List of webinar objects.
     */
    webinars?: WebinarsUserListWebinars[];
}
export declare class WebinarsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of webinar objects returned.
     */
    userList?: WebinarsUserList;
}
