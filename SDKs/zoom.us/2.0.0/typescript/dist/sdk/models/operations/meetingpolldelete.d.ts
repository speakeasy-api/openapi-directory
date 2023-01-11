import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingPollDeletePathParams extends SpeakeasyBase {
    meetingId: number;
    pollId: string;
}
export declare class MeetingPollDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingPollDeleteRequest extends SpeakeasyBase {
    pathParams: MeetingPollDeletePathParams;
    security: MeetingPollDeleteSecurity;
}
export declare class MeetingPollDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
