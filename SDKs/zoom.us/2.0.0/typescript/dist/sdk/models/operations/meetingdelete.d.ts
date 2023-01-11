import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class MeetingDeletePathParams extends SpeakeasyBase {
    meetingId: number;
}
export declare class MeetingDeleteQueryParams extends SpeakeasyBase {
    cancelMeetingReminder?: string;
    occurrenceId?: string;
    scheduleForReminder?: boolean;
}
export declare class MeetingDeleteSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class MeetingDeleteRequest extends SpeakeasyBase {
    pathParams: MeetingDeletePathParams;
    queryParams: MeetingDeleteQueryParams;
    security: MeetingDeleteSecurity;
}
export declare class MeetingDeleteResponse extends SpeakeasyBase {
    contentType: string;
    statusCode: number;
}
