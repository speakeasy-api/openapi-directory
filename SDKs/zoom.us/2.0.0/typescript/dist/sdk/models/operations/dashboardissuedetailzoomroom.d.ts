import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class DashboardIssueDetailZoomRoomSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class DashboardIssueDetailZoomRoomRequest extends SpeakeasyBase {
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
     * The Zoom room ID.
     */
    zoomroomId: string;
}
export declare class DashboardIssueDetailZoomRoom200ApplicationXMLIssueDetails extends SpeakeasyBase {
    /**
     * Zoom Room Issue Detail.<br> The value of the this field could be one of the following:<br>
     *
     * @remarks
     * * `Room Controller disconnected`<br>
     * * `Room Controller connected`
     * * `Selected camera has disconnected`
     * * `Selected camera is reconnected`
     * * `Selected microphone has disconnected`
     * * `Selected microphone is reconnected`
     * * `Selected speaker has disconnected`
     * * `Selected speaker is reconnected`
     * * `Zoom room is offline`
     * * `Zoom room is online`
     * * `High CPU usage is detected`
     * * `Low bandwidth network is detected`
     * * `{name} battery is low`
     * * `{name} battery is normal`
     * * `{name} disconnected`
     * * `{name} connected`
     * * `{name} is not charging`
     *
     * Possible values for {name}: <br>
     * * Zoom Rooms Computer
     * * Controller
     * * Scheduling Display
     */
    issue?: string;
    /**
     * Time at which the issue was encountered.
     */
    time?: Date;
}
/**
 * Pagination object.
 */
export declare class DashboardIssueDetailZoomRoom200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for this report
     */
    from?: Date;
    issueDetails?: DashboardIssueDetailZoomRoom200ApplicationXMLIssueDetails[];
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
     * End date for this report
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardIssueDetailZoomRoom200ApplicationJSONIssueDetails extends SpeakeasyBase {
    /**
     * Zoom Room Issue Detail.<br> The value of the this field could be one of the following:<br>
     *
     * @remarks
     * * `Room Controller disconnected`<br>
     * * `Room Controller connected`
     * * `Selected camera has disconnected`
     * * `Selected camera is reconnected`
     * * `Selected microphone has disconnected`
     * * `Selected microphone is reconnected`
     * * `Selected speaker has disconnected`
     * * `Selected speaker is reconnected`
     * * `Zoom room is offline`
     * * `Zoom room is online`
     * * `High CPU usage is detected`
     * * `Low bandwidth network is detected`
     * * `{name} battery is low`
     * * `{name} battery is normal`
     * * `{name} disconnected`
     * * `{name} connected`
     * * `{name} is not charging`
     *
     * Possible values for {name}: <br>
     * * Zoom Rooms Computer
     * * Controller
     * * Scheduling Display
     */
    issue?: string;
    /**
     * Time at which the issue was encountered.
     */
    time?: Date;
}
/**
 * Pagination object.
 */
export declare class DashboardIssueDetailZoomRoom200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for this report
     */
    from?: Date;
    issueDetails?: DashboardIssueDetailZoomRoom200ApplicationJSONIssueDetails[];
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
     * End date for this report
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class DashboardIssueDetailZoomRoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Zoom Room with issue details returned
     */
    dashboardIssueDetailZoomRoom200ApplicationJSONObject?: DashboardIssueDetailZoomRoom200ApplicationJSON;
}
