import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingInvitationPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class MeetingInvitationSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * Meeting invitation details.
**/
export declare class MeetingInvitationMeetingInvitation extends SpeakeasyBase {
    invitation?: string;
}
export declare class MeetingInvitationRequest extends SpeakeasyBase {
    pathParams: MeetingInvitationPathParams;
    security: MeetingInvitationSecurity;
}
export declare class MeetingInvitationResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    meetingInvitation?: MeetingInvitationMeetingInvitation;
    statusCode: number;
}
