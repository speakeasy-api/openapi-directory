import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingRegistrantStatusPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class MeetingRegistrantStatusQueryParams extends SpeakeasyBase {
    occurrenceId?: string;
}
export declare enum MeetingRegistrantStatusApplicationJsonActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}
export declare class MeetingRegistrantStatusApplicationJsonRegistrants extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class MeetingRegistrantStatusApplicationJson extends SpeakeasyBase {
    action: MeetingRegistrantStatusApplicationJsonActionEnum;
    registrants?: MeetingRegistrantStatusApplicationJsonRegistrants[];
}
export declare enum MeetingRegistrantStatusMultipartFormDataActionEnum {
    Approve = "approve",
    Cancel = "cancel",
    Deny = "deny"
}
export declare class MeetingRegistrantStatusMultipartFormDataRegistrants extends SpeakeasyBase {
    email?: string;
    id?: string;
}
export declare class MeetingRegistrantStatusMultipartFormData1 extends SpeakeasyBase {
    action: MeetingRegistrantStatusMultipartFormDataActionEnum;
    registrants?: MeetingRegistrantStatusMultipartFormDataRegistrants[];
}
export declare class MeetingRegistrantStatusRequests extends SpeakeasyBase {
    object?: MeetingRegistrantStatusApplicationJson;
    object1?: MeetingRegistrantStatusMultipartFormData1;
}
export declare class MeetingRegistrantStatusSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingRegistrantStatusRequest extends SpeakeasyBase {
    pathParams: MeetingRegistrantStatusPathParams;
    queryParams: MeetingRegistrantStatusQueryParams;
    request: MeetingRegistrantStatusRequests;
    security: MeetingRegistrantStatusSecurity;
}
export declare class MeetingRegistrantStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
