import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardWebinarsSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * The webinar type.
 */
export declare enum DashboardWebinarsTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarsRequest extends SpeakeasyBase {
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
    /**
     * The webinar type.
     */
    type?: DashboardWebinarsTypeEnum;
}
export declare class DashboardWebinars200ApplicationXMLWebinarMetricsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the Webinar.
     */
    key?: string;
    /**
     * Value of the custom key associated with the Webinar.
     */
    value?: string;
}
/**
 * Webinar metric details.
 */
export declare class DashboardWebinars200ApplicationXMLWebinarMetrics extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the Webinar.
     */
    customKeys?: DashboardWebinars200ApplicationXMLWebinarMetricsCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Webinar duration, formatted as hh:mm:ss, for example: `10:00` for ten minutes.
     */
    duration?: string;
    /**
     * User email.
     */
    email?: string;
    /**
     * Webinar end time.
     */
    endTime?: Date;
    /**
     * Indicates whether or not TSP was used for the Webinar.
     */
    has3rdPartyAudio?: boolean;
    /**
     * Indicates whether or not PSTN was used for the Webinar.
     */
    hasPstn?: boolean;
    /**
     * Indicates whether or not recording was used for the Webinar.
     */
    hasRecording?: boolean;
    /**
     * Indicates whether or not screen sharing was used for the Webinar.
     */
    hasScreenShare?: boolean;
    /**
     * Indicates whether or not SIP was used for the Webinar.
     */
    hasSip?: boolean;
    /**
     * Indicates whether or not video was used for the Webinar.
     */
    hasVideo?: boolean;
    /**
     * Indicates whether or not VoIP was used for the Webinar.
     */
    hasVoip?: boolean;
    /**
     * User display name.
     */
    host?: string;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Webinar participant count.
     */
    participants?: number;
    /**
     * Webinar start time.
     */
    startTime?: Date;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * User type.
     */
    userType?: string;
    /**
     * Webinar UUID.
     */
    uuid?: string;
}
/**
 * Pagination object.
 */
export declare class DashboardWebinars200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
    /**
     * Array of webinar objects.
     */
    webinars?: DashboardWebinars200ApplicationXMLWebinarMetrics[];
}
export declare class DashboardWebinars200ApplicationJSONWebinarMetricsCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the Webinar.
     */
    key?: string;
    /**
     * Value of the custom key associated with the Webinar.
     */
    value?: string;
}
/**
 * Webinar metric details.
 */
export declare class DashboardWebinars200ApplicationJSONWebinarMetrics extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the Webinar.
     */
    customKeys?: DashboardWebinars200ApplicationJSONWebinarMetricsCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Webinar duration, formatted as hh:mm:ss, for example: `10:00` for ten minutes.
     */
    duration?: string;
    /**
     * User email.
     */
    email?: string;
    /**
     * Webinar end time.
     */
    endTime?: Date;
    /**
     * Indicates whether or not TSP was used for the Webinar.
     */
    has3rdPartyAudio?: boolean;
    /**
     * Indicates whether or not PSTN was used for the Webinar.
     */
    hasPstn?: boolean;
    /**
     * Indicates whether or not recording was used for the Webinar.
     */
    hasRecording?: boolean;
    /**
     * Indicates whether or not screen sharing was used for the Webinar.
     */
    hasScreenShare?: boolean;
    /**
     * Indicates whether or not SIP was used for the Webinar.
     */
    hasSip?: boolean;
    /**
     * Indicates whether or not video was used for the Webinar.
     */
    hasVideo?: boolean;
    /**
     * Indicates whether or not VoIP was used for the Webinar.
     */
    hasVoip?: boolean;
    /**
     * User display name.
     */
    host?: string;
    /**
     * Webinar ID in "**long**" format(represented as int64 data type in JSON), also known as the webinar number.
     */
    id?: number;
    /**
     * Webinar participant count.
     */
    participants?: number;
    /**
     * Webinar start time.
     */
    startTime?: Date;
    /**
     * Webinar topic.
     */
    topic?: string;
    /**
     * User type.
     */
    userType?: string;
    /**
     * Webinar UUID.
     */
    uuid?: string;
}
/**
 * Pagination object.
 */
export declare class DashboardWebinars200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
    /**
     * Array of webinar objects.
     */
    webinars?: DashboardWebinars200ApplicationJSONWebinarMetrics[];
}
export declare class DashboardWebinarsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meetings returned.<br>
     * Only available for paid accounts that have enabled the Dashboard feature.
     */
    dashboardWebinars200ApplicationJSONObject?: DashboardWebinars200ApplicationJSON;
}
