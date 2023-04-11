import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportCloudRecordingSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ReportCloudRecordingRequest extends SpeakeasyBase {
    /**
     * Start date in 'yyyy-mm-dd' format. The date range defined by the "from" and "to" parameters should only be one month as the report includes only one month worth of data at once.
     */
    from: Date;
    /**
     * End date.
     */
    to: Date;
}
export declare class ReportCloudRecording200ApplicationXMLCloudRecordingStorage extends SpeakeasyBase {
    /**
     * Date of the usage
     */
    date?: Date;
    /**
     * Free storage
     */
    freeUsage?: string;
    /**
     * Paid storage
     */
    planUsage?: string;
    /**
     * Storage used on the date
     */
    usage?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Cloud Recording Report Returned
 */
export declare class ReportCloudRecording200ApplicationXML extends SpeakeasyBase {
    /**
     * Array of cloud usage objects
     */
    cloudRecordingStorage?: ReportCloudRecording200ApplicationXMLCloudRecordingStorage[];
    /**
     * Start date for this report
     */
    from?: Date;
    /**
     * End date for this report
     */
    to?: Date;
}
export declare class ReportCloudRecording200ApplicationJSONCloudRecordingStorage extends SpeakeasyBase {
    /**
     * Date of the usage
     */
    date?: Date;
    /**
     * Free storage
     */
    freeUsage?: string;
    /**
     * Paid storage
     */
    planUsage?: string;
    /**
     * Storage used on the date
     */
    usage?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Cloud Recording Report Returned
 */
export declare class ReportCloudRecording200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array of cloud usage objects
     */
    cloudRecordingStorage?: ReportCloudRecording200ApplicationJSONCloudRecordingStorage[];
    /**
     * Start date for this report
     */
    from?: Date;
    /**
     * End date for this report
     */
    to?: Date;
}
export declare class ReportCloudRecordingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Cloud Recording Report Returned
     */
    reportCloudRecording200ApplicationJSONObject?: ReportCloudRecording200ApplicationJSON;
}
