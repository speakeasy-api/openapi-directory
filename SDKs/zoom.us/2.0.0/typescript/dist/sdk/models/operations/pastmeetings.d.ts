import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PastMeetingsPathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class PastMeetingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class PastMeetingsMeetingInstancesMeetings extends SpeakeasyBase {
    startTime?: Date;
    uuid?: string;
}
/**
 * List of Meetings
**/
export declare class PastMeetingsMeetingInstances extends SpeakeasyBase {
    meetings?: PastMeetingsMeetingInstancesMeetings[];
}
export declare class PastMeetingsRequest extends SpeakeasyBase {
    pathParams: PastMeetingsPathParams;
    security: PastMeetingsSecurity;
}
export declare class PastMeetingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    meetingInstances?: PastMeetingsMeetingInstances;
    statusCode: number;
}
