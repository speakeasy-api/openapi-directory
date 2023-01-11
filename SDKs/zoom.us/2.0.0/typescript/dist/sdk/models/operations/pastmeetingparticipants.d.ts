import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class PastMeetingParticipantsPathParams extends SpeakeasyBase {
    meetingUUID: string;
}
export declare class PastMeetingParticipantsQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
}
export declare class PastMeetingParticipantsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class PastMeetingParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
    id?: string;
    name?: string;
    userEmail?: string;
}
/**
 * Pagination object.
**/
export declare class PastMeetingParticipants200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: PastMeetingParticipants200ApplicationJsonParticipants[];
    totalRecords?: number;
}
export declare class PastMeetingParticipantsRequest extends SpeakeasyBase {
    pathParams: PastMeetingParticipantsPathParams;
    queryParams: PastMeetingParticipantsQueryParams;
    security: PastMeetingParticipantsSecurity;
}
export declare class PastMeetingParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    pastMeetingParticipants200ApplicationJSONObject?: PastMeetingParticipants200ApplicationJson;
}
