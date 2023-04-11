import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingRecordingRegistrantStatusSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare enum MeetingRecordingRegistrantStatusApplicationJSONActionEnum {
    Approve = "approve",
    Deny = "deny"
}
export declare class MeetingRecordingRegistrantStatusApplicationJSONRegistrants extends SpeakeasyBase {
    id?: string;
}
/**
 * Registrant Status
 */
export declare class MeetingRecordingRegistrantStatusApplicationJSON extends SpeakeasyBase {
    action: MeetingRecordingRegistrantStatusApplicationJSONActionEnum;
    /**
     * List of registrants
     */
    registrants?: MeetingRecordingRegistrantStatusApplicationJSONRegistrants[];
}
export declare class MeetingRecordingRegistrantStatusRequest extends SpeakeasyBase {
    requestBody: MeetingRecordingRegistrantStatusApplicationJSON;
    /**
     * The meeting ID in **long** format. The data type of this field is "long"(represented as int64 in JSON).
     *
     * @remarks
     *
     * While storing it in your database, store it as a **long** data type and **not as an integer**, as the Meeting IDs can be longer than 10 digits.
     */
    meetingId: number;
}
export declare class MeetingRecordingRegistrantStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
