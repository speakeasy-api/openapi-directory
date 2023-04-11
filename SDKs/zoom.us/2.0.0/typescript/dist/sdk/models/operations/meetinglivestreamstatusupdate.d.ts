import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingLiveStreamStatusUpdateSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Update the status of a livestream.
 *
 * @remarks
 *
 * The value can be one of the following:<br>
 * `start`: Start a live stream. <br>
 * `stop`: Stop an ongoing live stream.
 */
export declare enum MeetingLiveStreamStatusUpdateApplicationJSONActionEnum {
    Start = "start",
    Stop = "stop"
}
/**
 * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
 */
export declare class MeetingLiveStreamStatusUpdateApplicationJSONSettings extends SpeakeasyBase {
    /**
     * Display the name of the active speaker during a live stream.
     */
    activeSpeakerName?: boolean;
    /**
     * Display name of the live stream.
     */
    displayName?: string;
}
/**
 * Meeting live stream status.
 */
export declare class MeetingLiveStreamStatusUpdateApplicationJSON extends SpeakeasyBase {
    /**
     * Update the status of a livestream.
     *
     * @remarks
     *
     * The value can be one of the following:<br>
     * `start`: Start a live stream. <br>
     * `stop`: Stop an ongoing live stream.
     */
    action?: MeetingLiveStreamStatusUpdateApplicationJSONActionEnum;
    /**
     * Update the settings of a live streaming session. The settings can only be updated for a live stream that has been stopped. You can not update the settings of an ongoing live stream.
     */
    settings?: MeetingLiveStreamStatusUpdateApplicationJSONSettings;
}
export declare class MeetingLiveStreamStatusUpdateRequest extends SpeakeasyBase {
    /**
     * Meeting
     */
    requestBody: MeetingLiveStreamStatusUpdateApplicationJSON;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
export declare class MeetingLiveStreamStatusUpdateResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
