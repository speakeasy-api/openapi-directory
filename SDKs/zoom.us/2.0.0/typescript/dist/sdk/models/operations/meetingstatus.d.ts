import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingStatusSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * `end` - End a meeting.<br>
 *
 * @remarks
 * `recover` - [Recover](https://support.zoom.us/hc/en-us/articles/360038297111-Recover-a-deleted-meeting) a deleted meeting.
 *
 */
export declare enum MeetingStatusApplicationJSONActionEnum {
    End = "end",
    Recover = "recover"
}
export declare class MeetingStatusApplicationJSON extends SpeakeasyBase {
    /**
     * `end` - End a meeting.<br>
     *
     * @remarks
     * `recover` - [Recover](https://support.zoom.us/hc/en-us/articles/360038297111-Recover-a-deleted-meeting) a deleted meeting.
     *
     */
    action?: MeetingStatusApplicationJSONActionEnum;
}
export declare class MeetingStatusRequest extends SpeakeasyBase {
    requestBody: MeetingStatusApplicationJSON;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
export declare class MeetingStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
