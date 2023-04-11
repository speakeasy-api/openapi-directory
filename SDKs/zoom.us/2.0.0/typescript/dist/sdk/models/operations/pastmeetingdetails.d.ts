import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class PastMeetingDetailsSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class PastMeetingDetailsRequest extends SpeakeasyBase {
    /**
     * The meeting UUID. Each meeting instance will generate its own Meeting UUID (i.e., after a meeting ends, a new UUID will be generated for the next instance of the meeting). Please double encode your UUID when using it for other API calls if the UUID begins with a '/'or contains '//' in it.
     */
    meetingUUID: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Meeting details returned.
 */
export declare class PastMeetingDetails200ApplicationXML extends SpeakeasyBase {
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Meeting end time (GMT).
     */
    endTime?: Date;
    /**
     * Host ID.
     */
    hostId?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Number of meeting participants.
     */
    participantsCount?: number;
    /**
     * Meeting start time (GMT).
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Sum of meeting minutes from all participants in the meeting.
     */
    totalMinutes?: number;
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
     * Meeting UUID.
     */
    uuid?: string;
}
/**
 * **HTTP Status Code:** `200`<br>
 *
 * @remarks
 * Meeting details returned.
 */
export declare class PastMeetingDetails200ApplicationJSON extends SpeakeasyBase {
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * Meeting end time (GMT).
     */
    endTime?: Date;
    /**
     * Host ID.
     */
    hostId?: string;
    /**
     * [Meeting ID](https://support.zoom.us/hc/en-us/articles/201362373-What-is-a-Meeting-ID-): Unique identifier of the meeting in "**long**" format(represented as int64 data type in JSON), also known as the meeting number.
     */
    id?: number;
    /**
     * Number of meeting participants.
     */
    participantsCount?: number;
    /**
     * Meeting start time (GMT).
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Sum of meeting minutes from all participants in the meeting.
     */
    totalMinutes?: number;
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
     * Meeting UUID.
     */
    uuid?: string;
}
export declare class PastMeetingDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting details returned.
     */
    pastMeetingDetails200ApplicationJSONObject?: PastMeetingDetails200ApplicationJSON;
}
