import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PastMeetingDetailsPathParams extends SpeakeasyBase {
    meetingUUID: string;
}
export declare class PastMeetingDetailsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class PastMeetingDetails200ApplicationJson extends SpeakeasyBase {
    duration?: number;
    endTime?: Date;
    hostId?: string;
    id?: number;
    participantsCount?: number;
    startTime?: Date;
    topic?: string;
    totalMinutes?: number;
    type?: number;
    userEmail?: string;
    userName?: string;
    uuid?: string;
}
export declare class PastMeetingDetailsRequest extends SpeakeasyBase {
    pathParams: PastMeetingDetailsPathParams;
    security: PastMeetingDetailsSecurity;
}
export declare class PastMeetingDetailsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    pastMeetingDetails200ApplicationJSONObject?: PastMeetingDetails200ApplicationJson;
}
