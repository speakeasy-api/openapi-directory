import { SpeakeasyBase } from "../../../internal/utils";
export declare class ListCallLogsMetricsQueryParams extends SpeakeasyBase {
    from?: string;
    nextPageToken?: string;
    pageSize?: number;
    qualityType?: string;
    siteId?: string;
    to?: string;
}
/**
 * Callee object contains information of the calee.
**/
export declare class ListCallLogsMetrics200ApplicationJsonCallLogsCallee extends SpeakeasyBase {
    codec?: string;
    deviceType?: string;
    extensionNumber?: string;
    headset?: string;
    isp?: string;
    microphone?: string;
    phoneNumber?: string;
    siteId?: string;
}
/**
 * Caller object contains information of the caller.
**/
export declare class ListCallLogsMetrics200ApplicationJsonCallLogsCaller extends SpeakeasyBase {
    codec?: string;
    deviceType?: string;
    extensionNumber?: string;
    headset?: string;
    isp?: string;
    microphone?: string;
    phoneNumber?: string;
    siteId?: string;
}
export declare class ListCallLogsMetrics200ApplicationJsonCallLogs extends SpeakeasyBase {
    callId?: string;
    callee?: ListCallLogsMetrics200ApplicationJsonCallLogsCallee;
    caller?: ListCallLogsMetrics200ApplicationJsonCallLogsCaller;
    dateTime?: string;
    direction?: string;
    duration?: number;
    mos?: string;
}
export declare class ListCallLogsMetrics200ApplicationJson extends SpeakeasyBase {
    callLogs?: ListCallLogsMetrics200ApplicationJsonCallLogs[];
    from?: string;
    nextPageToken?: string;
    pageSize?: number;
    to?: string;
    totalRecords?: number;
}
export declare class ListCallLogsMetricsRequest extends SpeakeasyBase {
    queryParams: ListCallLogsMetricsQueryParams;
}
export declare class ListCallLogsMetricsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    listCallLogsMetrics200ApplicationJSONObject?: ListCallLogsMetrics200ApplicationJson;
}
