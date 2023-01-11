import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingRecordingRegistrantStatusPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare enum MeetingRecordingRegistrantStatusApplicationJsonActionEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Registrant Status
**/
export declare class MeetingRecordingRegistrantStatusApplicationJson extends SpeakeasyBase {
    action: MeetingRecordingRegistrantStatusApplicationJsonActionEnum;
    registrants?: any[];
}
export declare enum MeetingRecordingRegistrantStatusMultipartFormDataActionEnum {
    Approve = "approve",
    Deny = "deny"
}
/**
 * Registrant Status
**/
export declare class MeetingRecordingRegistrantStatusMultipartFormData extends SpeakeasyBase {
    action: MeetingRecordingRegistrantStatusMultipartFormDataActionEnum;
    registrants?: any[];
}
export declare class MeetingRecordingRegistrantStatusRequests extends SpeakeasyBase {
    object?: MeetingRecordingRegistrantStatusApplicationJson;
    object1?: MeetingRecordingRegistrantStatusMultipartFormData;
}
export declare class MeetingRecordingRegistrantStatusSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingRecordingRegistrantStatusRequest extends SpeakeasyBase {
    pathParams: MeetingRecordingRegistrantStatusPathParams;
    request: MeetingRecordingRegistrantStatusRequests;
    security: MeetingRecordingRegistrantStatusSecurity;
}
export declare class MeetingRecordingRegistrantStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
