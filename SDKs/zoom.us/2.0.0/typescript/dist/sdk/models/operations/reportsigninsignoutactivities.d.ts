import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportSignInSignOutActivitiesSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ReportSignInSignOutActivitiesRequest extends SpeakeasyBase {
    /**
     * Start date for which you would like to view the activity logs report. Using the `from` and `to` parameters, specify a monthly date range for the report as the API only provides one month worth of data in one request. The specified date range should fall within the last six months.
     */
    from?: Date;
    /**
     * Next page token is used to paginate through large result sets
     */
    nextPageToken?: string;
    /**
     * The number of records to be returned within a single API call
     */
    pageSize?: number;
    /**
     * End date up to which you would like to view the activity logs report.
     */
    to?: Date;
}
export declare class ReportSignInSignOutActivities200ApplicationXMLActivityLogs extends SpeakeasyBase {
    /**
     * The client interface type using which the activity was performed.
     */
    clientType?: string;
    /**
     * Email address of the user used for the activity.
     */
    email?: string;
    /**
     * The IP address of the user's device.
     */
    ipAddress?: string;
    /**
     * Time during which the activity occurred.
     */
    time?: Date;
    /**
     * The type of activity: <br>`Sign in`: Sign in activity by user.<br>`Sign out`: Sign out activity by user.
     */
    type?: string;
    /**
     * Zoom client version of the user.
     */
    version?: string;
}
/**
 * Report object
 */
export declare class ReportSignInSignOutActivities200ApplicationXML extends SpeakeasyBase {
    /**
     * Array of activity logs.
     */
    activityLogs?: ReportSignInSignOutActivities200ApplicationXMLActivityLogs[];
    /**
     * Start date from which you want the activity logs report to be generated.
     */
    from?: string;
    /**
     * Next page token is used to paginate through large result sets.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: string;
    /**
     * End date until which you want the activity logs report to be generated
     */
    to?: string;
}
export declare class ReportSignInSignOutActivities200ApplicationJSONActivityLogs extends SpeakeasyBase {
    /**
     * The client interface type using which the activity was performed.
     */
    clientType?: string;
    /**
     * Email address of the user used for the activity.
     */
    email?: string;
    /**
     * The IP address of the user's device.
     */
    ipAddress?: string;
    /**
     * Time during which the activity occurred.
     */
    time?: Date;
    /**
     * The type of activity: <br>`Sign in`: Sign in activity by user.<br>`Sign out`: Sign out activity by user.
     */
    type?: string;
    /**
     * Zoom client version of the user.
     */
    version?: string;
}
/**
 * Report object
 */
export declare class ReportSignInSignOutActivities200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array of activity logs.
     */
    activityLogs?: ReportSignInSignOutActivities200ApplicationJSONActivityLogs[];
    /**
     * Start date from which you want the activity logs report to be generated.
     */
    from?: string;
    /**
     * Next page token is used to paginate through large result sets.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: string;
    /**
     * End date until which you want the activity logs report to be generated
     */
    to?: string;
}
export declare class ReportSignInSignOutActivitiesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Success
     */
    reportSignInSignOutActivities200ApplicationJSONObject?: ReportSignInSignOutActivities200ApplicationJSON;
}
