import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ListMeetingSatisfactionSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ListMeetingSatisfactionRequest extends SpeakeasyBase {
    /**
     * The start date for the query in “yyyy-mm-dd” format.
     */
    from?: Date;
    /**
     * The end date for the query in “yyyy-mm-dd” format.
     */
    to?: Date;
}
export declare class ListMeetingSatisfaction200ApplicationXMLClientSatisfaction extends SpeakeasyBase {
    /**
     * Date of the report.
     */
    date?: Date;
    /**
     * The total number of "thumbs up" received for this meeting.
     */
    goodCount?: number;
    /**
     * The total number of attendees who didn't submit any response (neither thumbs up nor thumbs down).
     */
    noneCount?: number;
    /**
     * The total number of "thumbs down" received for this meeting.
     */
    notGoodCount?: number;
    /**
     * Satisfaction Percentage.
     *
     * @remarks
     * The satisfaction percentage is calculated as `(good_count + none_count)` / `total_count`.
     */
    satisfactionPercent?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Client satisfaction data returned.
 */
export declare class ListMeetingSatisfaction200ApplicationXML extends SpeakeasyBase {
    clientSatisfaction?: ListMeetingSatisfaction200ApplicationXMLClientSatisfaction[];
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: Date;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: Date;
    /**
     * The total number of records available across all pages.
     */
    totalRecords?: number;
}
export declare class ListMeetingSatisfaction200ApplicationJSONClientSatisfaction extends SpeakeasyBase {
    /**
     * Date of the report.
     */
    date?: Date;
    /**
     * The total number of "thumbs up" received for this meeting.
     */
    goodCount?: number;
    /**
     * The total number of attendees who didn't submit any response (neither thumbs up nor thumbs down).
     */
    noneCount?: number;
    /**
     * The total number of "thumbs down" received for this meeting.
     */
    notGoodCount?: number;
    /**
     * Satisfaction Percentage.
     *
     * @remarks
     * The satisfaction percentage is calculated as `(good_count + none_count)` / `total_count`.
     */
    satisfactionPercent?: number;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Client satisfaction data returned.
 */
export declare class ListMeetingSatisfaction200ApplicationJSON extends SpeakeasyBase {
    clientSatisfaction?: ListMeetingSatisfaction200ApplicationJSONClientSatisfaction[];
    /**
     * Start date for this report in 'yyyy-mm-dd' format.
     */
    from?: Date;
    /**
     * End date for this report in 'yyyy-mm-dd' format.
     */
    to?: Date;
    /**
     * The total number of records available across all pages.
     */
    totalRecords?: number;
}
export declare class ListMeetingSatisfactionResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Client satisfaction data returned.
     */
    listMeetingSatisfaction200ApplicationJSONObject?: ListMeetingSatisfaction200ApplicationJSON;
}
