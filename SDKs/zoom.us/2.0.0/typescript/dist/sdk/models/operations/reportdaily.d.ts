import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportDailySecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ReportDailyRequest extends SpeakeasyBase {
    /**
     * Month for this report
     */
    month?: number;
    /**
     * Year for this report
     */
    year?: number;
}
export declare class ReportDaily200ApplicationXMLDates extends SpeakeasyBase {
    /**
     * Date for this object.
     */
    date?: Date;
    /**
     * Number of meeting minutes on this date.
     */
    meetingMinutes?: number;
    /**
     * Number of meetings on this date.
     */
    meetings?: number;
    /**
     * Number of new users on this date.
     */
    newUsers?: number;
    /**
     * Number of participants on this date.
     */
    participants?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Daily report retrieved.<br>
 * This is only available for paid accounts:{accountId}.
 */
export declare class ReportDaily200ApplicationXML extends SpeakeasyBase {
    /**
     * Array of date objects.
     */
    dates?: ReportDaily200ApplicationXMLDates[];
    /**
     * Month for this report.
     */
    month?: number;
    /**
     * Year for this report.
     */
    year?: number;
}
export declare class ReportDaily200ApplicationJSONDates extends SpeakeasyBase {
    /**
     * Date for this object.
     */
    date?: Date;
    /**
     * Number of meeting minutes on this date.
     */
    meetingMinutes?: number;
    /**
     * Number of meetings on this date.
     */
    meetings?: number;
    /**
     * Number of new users on this date.
     */
    newUsers?: number;
    /**
     * Number of participants on this date.
     */
    participants?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Daily report retrieved.<br>
 * This is only available for paid accounts:{accountId}.
 */
export declare class ReportDaily200ApplicationJSON extends SpeakeasyBase {
    /**
     * Array of date objects.
     */
    dates?: ReportDaily200ApplicationJSONDates[];
    /**
     * Month for this report.
     */
    month?: number;
    /**
     * Year for this report.
     */
    year?: number;
}
export declare class ReportDailyResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Daily report retrieved.<br>
     * This is only available for paid accounts:{accountId}.
     */
    reportDaily200ApplicationJSONObject?: ReportDaily200ApplicationJSON;
}
