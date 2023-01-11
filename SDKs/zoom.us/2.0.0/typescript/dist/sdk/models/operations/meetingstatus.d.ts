import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingStatusPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare enum MeetingStatusApplicationJsonActionEnum {
    End = "end",
    Recover = "recover"
}
export declare class MeetingStatusApplicationJson extends SpeakeasyBase {
    action?: MeetingStatusApplicationJsonActionEnum;
}
export declare enum MeetingStatusMultipartFormDataActionEnum {
    End = "end",
    Recover = "recover"
}
export declare class MeetingStatusMultipartFormData extends SpeakeasyBase {
    action?: MeetingStatusMultipartFormDataActionEnum;
}
export declare class MeetingStatusRequests extends SpeakeasyBase {
    object?: MeetingStatusApplicationJson;
    object1?: MeetingStatusMultipartFormData;
}
export declare class MeetingStatusSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingStatusRequest extends SpeakeasyBase {
    pathParams: MeetingStatusPathParams;
    request: MeetingStatusRequests;
    security: MeetingStatusSecurity;
}
export declare class MeetingStatusResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
