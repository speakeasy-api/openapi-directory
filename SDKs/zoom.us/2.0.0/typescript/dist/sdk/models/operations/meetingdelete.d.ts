import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingDeleteSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class MeetingDeleteRequest extends SpeakeasyBase {
    /**
     * `true`: Notify registrants about the meeting cancellation via email.
     *
     * @remarks
     *
     * `false`: Do not send any email notification to meeting registrants.
     *
     * The default value of this field is `false`.
     */
    cancelMeetingReminder?: string;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
    /**
     * The meeting occurrence ID.
     */
    occurrenceId?: string;
    /**
     * `true`: Notify host and alternative host about the meeting cancellation via email.
     *
     * @remarks
     * `false`: Do not send any email notification.
     */
    scheduleForReminder?: boolean;
}
export declare class MeetingDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
