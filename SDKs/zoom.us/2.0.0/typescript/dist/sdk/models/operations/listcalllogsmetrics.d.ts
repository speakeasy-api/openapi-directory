import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListCallLogsMetricsRequest extends SpeakeasyBase {
    /**
     * Start date for the report in `yyyy-mm-dd` format. Specify a 30 day range using the `from` and `to` parameters as the response provides a maximum of a month worth of data per API request.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single call.
     */
    pageSize?: number;
    /**
     * Filter call logs by voice quality. Zoom uses MOS of 3.5 as a general baseline to categorize calls by call quality. A MOS greater than or equal to 3.5 means good quality, while below 3.5 means poor quality. <br><br>The value of this field can be one of the following:<br>
     *
     * @remarks
     * * `good`: Retrieve call logs of the call(s) with good quality of voice.<br>
     * * `bad`: Retrieve call logs of the call(s) with good quality of voice.<br>
     * * `all`: Retrieve all call logs without filtering by voice quality.
     *
     *
     *
     *
     */
    qualityType?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites). Use this query parameter if you have enabled multiple sites and would like to filter the response of this API call by call logs of a specific phone site.
     */
    siteId?: string;
    /**
     * End date for the report in `yyyy-mm-dd` format.
     */
    to?: string;
}
/**
 * Callee object contains information of the calee.
 */
export declare class ListCallLogsMetrics200ApplicationXMLCallLogsCallee extends SpeakeasyBase {
    /**
     * Audio codec.
     */
    codec?: string;
    /**
     * Device type.
     */
    deviceType?: string;
    /**
     * Full extension number of the callee.
     */
    extensionNumber?: string;
    /**
     * Headset used for the call by the callee.
     */
    headset?: string;
    /**
     * ISP.
     */
    isp?: string;
    /**
     * Microphone used for the call by the callee.
     */
    microphone?: string;
    /**
     * Phone number of the callee in E164 format.
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites).
     */
    siteId?: string;
}
/**
 * Caller object contains information of the caller.
 */
export declare class ListCallLogsMetrics200ApplicationXMLCallLogsCaller extends SpeakeasyBase {
    /**
     * Audio codec.
     */
    codec?: string;
    /**
     * Device type.
     */
    deviceType?: string;
    /**
     * Full extension number of the caller.
     */
    extensionNumber?: string;
    /**
     * Headset used for the call by the caller.
     */
    headset?: string;
    /**
     * ISP.
     */
    isp?: string;
    /**
     * Microphone used for the call by the caller.
     */
    microphone?: string;
    /**
     * Phone number of the caller in E164 format.
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites).
     */
    siteId?: string;
}
export declare class ListCallLogsMetrics200ApplicationXMLCallLogs extends SpeakeasyBase {
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
    /**
     * Callee object contains information of the calee.
     */
    callee?: ListCallLogsMetrics200ApplicationXMLCallLogsCallee;
    /**
     * Caller object contains information of the caller.
     */
    caller?: ListCallLogsMetrics200ApplicationXMLCallLogsCaller;
    /**
     * Date and time at which the call started.
     */
    dateTime?: string;
    /**
     * Direction of the call. The value of this field can be either `internal` or `outbound`.
     */
    direction?: string;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Zoom uses Mean Opinion Score (MOS) as the main measurement to report on voice quality. MOS measures voice quality on a scale of 1 to 5. A score of 1 indicates unacceptable voice quality for all users. A score of 5 is the best voice quality.
     */
    mos?: string;
}
export declare class ListCallLogsMetrics200ApplicationXML extends SpeakeasyBase {
    /**
     * Call logs.
     */
    callLogs?: ListCallLogsMetrics200ApplicationXMLCallLogs[];
    /**
     * Start date for the report in `yyyy-mm-dd` format.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single call.
     */
    pageSize?: number;
    /**
     * End date for the report in `yyyy-mm-dd` format.
     */
    to?: string;
    /**
     * The total number of records available across all pages.
     */
    totalRecords?: number;
}
/**
 * Callee object contains information of the calee.
 */
export declare class ListCallLogsMetrics200ApplicationJSONCallLogsCallee extends SpeakeasyBase {
    /**
     * Audio codec.
     */
    codec?: string;
    /**
     * Device type.
     */
    deviceType?: string;
    /**
     * Full extension number of the callee.
     */
    extensionNumber?: string;
    /**
     * Headset used for the call by the callee.
     */
    headset?: string;
    /**
     * ISP.
     */
    isp?: string;
    /**
     * Microphone used for the call by the callee.
     */
    microphone?: string;
    /**
     * Phone number of the callee in E164 format.
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites).
     */
    siteId?: string;
}
/**
 * Caller object contains information of the caller.
 */
export declare class ListCallLogsMetrics200ApplicationJSONCallLogsCaller extends SpeakeasyBase {
    /**
     * Audio codec.
     */
    codec?: string;
    /**
     * Device type.
     */
    deviceType?: string;
    /**
     * Full extension number of the caller.
     */
    extensionNumber?: string;
    /**
     * Headset used for the call by the caller.
     */
    headset?: string;
    /**
     * ISP.
     */
    isp?: string;
    /**
     * Microphone used for the call by the caller.
     */
    microphone?: string;
    /**
     * Phone number of the caller in E164 format.
     */
    phoneNumber?: string;
    /**
     * Unique identifier of the [site](https://support.zoom.us/hc/en-us/articles/360020809672-Managing-multiple-sites).
     */
    siteId?: string;
}
export declare class ListCallLogsMetrics200ApplicationJSONCallLogs extends SpeakeasyBase {
    /**
     * Unique identifier of the phone call.
     */
    callId?: string;
    /**
     * Callee object contains information of the calee.
     */
    callee?: ListCallLogsMetrics200ApplicationJSONCallLogsCallee;
    /**
     * Caller object contains information of the caller.
     */
    caller?: ListCallLogsMetrics200ApplicationJSONCallLogsCaller;
    /**
     * Date and time at which the call started.
     */
    dateTime?: string;
    /**
     * Direction of the call. The value of this field can be either `internal` or `outbound`.
     */
    direction?: string;
    /**
     * Duration of the call in seconds.
     */
    duration?: number;
    /**
     * Zoom uses Mean Opinion Score (MOS) as the main measurement to report on voice quality. MOS measures voice quality on a scale of 1 to 5. A score of 1 indicates unacceptable voice quality for all users. A score of 5 is the best voice quality.
     */
    mos?: string;
}
export declare class ListCallLogsMetrics200ApplicationJSON extends SpeakeasyBase {
    /**
     * Call logs.
     */
    callLogs?: ListCallLogsMetrics200ApplicationJSONCallLogs[];
    /**
     * Start date for the report in `yyyy-mm-dd` format.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single call.
     */
    pageSize?: number;
    /**
     * End date for the report in `yyyy-mm-dd` format.
     */
    to?: string;
    /**
     * The total number of records available across all pages.
     */
    totalRecords?: number;
}
export declare class ListCallLogsMetricsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    listCallLogsMetrics200ApplicationJSONObject?: ListCallLogsMetrics200ApplicationJSON;
}
