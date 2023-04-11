import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class ReportMeetingDetailsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class ReportMeetingDetailsRequest extends SpeakeasyBase {
    /**
     * The meeting ID or the meeting UUID.  If a meeting ID is provided in the request instead of a UUID, the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875==\"), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
}
export declare class ReportMeetingDetails200ApplicationXMLCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the user.
     */
    key?: string;
    /**
     * Value of the custom key associated with the user.
     */
    value?: string;
}
export declare class ReportMeetingDetails200ApplicationXMLTrackingFields extends SpeakeasyBase {
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
 * Meeting details returned.<br>
 * This is only available for paid account.
 */
export declare class ReportMeetingDetails200ApplicationXML extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: ReportMeetingDetails200ApplicationXMLCustomKeys[];
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
     * Number of meeting minutes. This represents the total amount of meeting minutes attended by each participant including the host, for meetings hosted by the user. For instance if there were one host(named A) and one participant(named B) in a meeting, the value of total_minutes would be calculated as below:
     *
     * @remarks
     *
     * **total_minutes** = Total Meeting Attendance Minutes of A + Total Meeting Attendance Minutes of B
     */
    totalMinutes?: number;
    /**
     * Tracking fields.
     */
    trackingFields?: ReportMeetingDetails200ApplicationXMLTrackingFields[];
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
     * Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportMeetingDetails200ApplicationJSONCustomKeys extends SpeakeasyBase {
    /**
     * Custom key associated with the user.
     */
    key?: string;
    /**
     * Value of the custom key associated with the user.
     */
    value?: string;
}
export declare class ReportMeetingDetails200ApplicationJSONTrackingFields extends SpeakeasyBase {
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
 * Meeting details returned.<br>
 * This is only available for paid account.
 */
export declare class ReportMeetingDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * Custom keys and values assigned to the meeting.
     */
    customKeys?: ReportMeetingDetails200ApplicationJSONCustomKeys[];
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
     * Number of meeting minutes. This represents the total amount of meeting minutes attended by each participant including the host, for meetings hosted by the user. For instance if there were one host(named A) and one participant(named B) in a meeting, the value of total_minutes would be calculated as below:
     *
     * @remarks
     *
     * **total_minutes** = Total Meeting Attendance Minutes of A + Total Meeting Attendance Minutes of B
     */
    totalMinutes?: number;
    /**
     * Tracking fields.
     */
    trackingFields?: ReportMeetingDetails200ApplicationJSONTrackingFields[];
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
     * Meeting UUID. Each meeting instance will generate its own UUID(i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for API calls if the UUID begins with a '/' or contains '//' in it.
     */
    uuid?: string;
}
export declare class ReportMeetingDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting details returned.<br>
     * This is only available for paid account.
     */
    reportMeetingDetails200ApplicationJSONObject?: ReportMeetingDetails200ApplicationJSON;
}
