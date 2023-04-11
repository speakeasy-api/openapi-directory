import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportWebinarDetailsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ReportWebinarDetailsRequest extends SpeakeasyBase {
    /**
     * The webinar ID or the webinar UUID.  If a webinar ID is provided in the request instead of a UUID, the response will be for the latest webinar instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    webinarId: string;
}
export declare class ReportWebinarDetails200ApplicationXMLCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the user.
     */
    key?: string;
    /**
     * Value of the custom key associated with the user.
     */
    value?: string;
}
export declare class ReportWebinarDetails200ApplicationXMLTrackingFields extends SpeakeasyBase {
    /**
     * Tracking fields type.
     */
    field?: string;
    /**
     * Tracking fields value.
     */
    value?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Webinar details returned.<br>
 * This is only available for paid account:{accountId}.
 */
export declare class ReportWebinarDetails200ApplicationXML extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: ReportWebinarDetails200ApplicationXMLCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Meeting end time.
     */
    endTime?: Date;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Number of meeting participants.
     */
    participantsCount?: number;
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Number of Webinar minutes. This represents the total amount of Webinar minutes attended by each participant including the host, for a Webinar hosted by the user. For instance if there were one host(named A) and one participant(named B) in a Webinar, the value of total_minutes would be calculated as below:
     *
     * @remarks
     *
     * **total_minutes** = Total Webinar Attendance Minutes of A + Total Webinar Attendance Minutes of B
     */
    totalMinutes?: number;
    /**
     * Tracking fields.
     */
    trackingFields?: ReportWebinarDetails200ApplicationXMLTrackingFields[];
    /**
     * Meeting type.
     */
    type?: number;
    /**
     * User email.
     */
    userEmail?: string;
    /**
     * User display name.
     */
    userName?: string;
    /**
     * Webinar UUID. Each webinar instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated when the next instance of the webinar starts). Double encode the UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportWebinarDetails200ApplicationJSONCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the user.
     */
    key?: string;
    /**
     * Value of the custom key associated with the user.
     */
    value?: string;
}
export declare class ReportWebinarDetails200ApplicationJSONTrackingFields extends SpeakeasyBase {
    /**
     * Tracking fields type.
     */
    field?: string;
    /**
     * Tracking fields value.
     */
    value?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Webinar details returned.<br>
 * This is only available for paid account:{accountId}.
 */
export declare class ReportWebinarDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: ReportWebinarDetails200ApplicationJSONCustomKeys[];
    /**
     * Department of the host.
     */
    dept?: string;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Meeting end time.
     */
    endTime?: Date;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Number of meeting participants.
     */
    participantsCount?: number;
    /**
     * Meeting start time.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Number of Webinar minutes. This represents the total amount of Webinar minutes attended by each participant including the host, for a Webinar hosted by the user. For instance if there were one host(named A) and one participant(named B) in a Webinar, the value of total_minutes would be calculated as below:
     *
     * @remarks
     *
     * **total_minutes** = Total Webinar Attendance Minutes of A + Total Webinar Attendance Minutes of B
     */
    totalMinutes?: number;
    /**
     * Tracking fields.
     */
    trackingFields?: ReportWebinarDetails200ApplicationJSONTrackingFields[];
    /**
     * Meeting type.
     */
    type?: number;
    /**
     * User email.
     */
    userEmail?: string;
    /**
     * User display name.
     */
    userName?: string;
    /**
     * Webinar UUID. Each webinar instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated when the next instance of the webinar starts). Double encode the UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportWebinarDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Webinar details returned.<br>
     * This is only available for paid account:{accountId}.
     */
    reportWebinarDetails200ApplicationJSONObject?: ReportWebinarDetails200ApplicationJSON;
}
