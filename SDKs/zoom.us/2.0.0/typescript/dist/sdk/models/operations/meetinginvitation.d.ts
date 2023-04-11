import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingInvitationSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class MeetingInvitationRequest extends SpeakeasyBase {
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
/**
 * Meeting invitation details.
 */
export declare class MeetingInvitationMeetingInvitation extends SpeakeasyBase {
    /**
     * Meeting invitation.
     */
    invitation?: string;
}
export declare class MeetingInvitationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * Meeting invitation returned.
     */
    meetingInvitation?: MeetingInvitationMeetingInvitation;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
