import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class MeetingRegistrantStatusSecurity extends SpeakeasyBase {
    oAuth: string;
}
/**
 * Registrant Status:<br>`approve` - Approve registrant.<br>`cancel` - Cancel previously approved registrant's registration.<br>`deny` - Deny registrant.
 */
export declare enum MeetingRegistrantStatusApplicationJSONActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}
export declare class MeetingRegistrantStatusApplicationJSONRegistrants extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class MeetingRegistrantStatusApplicationJSON extends SpeakeasyBase {
    /**
     * Registrant Status:<br>`approve` - Approve registrant.<br>`cancel` - Cancel previously approved registrant's registration.<br>`deny` - Deny registrant.
     */
    action: MeetingRegistrantStatusApplicationJSONActionEnum;
    /**
     * List of registrants.
     */
    registrants?: MeetingRegistrantStatusApplicationJSONRegistrants[];
}
export declare class MeetingRegistrantStatusRequest extends SpeakeasyBase {
    requestBody: MeetingRegistrantStatusApplicationJSON;
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
}
export declare class MeetingRegistrantStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
