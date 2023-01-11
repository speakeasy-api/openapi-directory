import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardMeetingParticipantSharePathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum DashboardMeetingParticipantShareTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingParticipantShareQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    type?: DashboardMeetingParticipantShareTypeEnum;
}
export declare class DashboardMeetingParticipantShareSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails extends SpeakeasyBase {
    content?: string;
    endTime?: string;
    startTime?: string;
}
export declare class DashboardMeetingParticipantShare200ApplicationJsonParticipants extends SpeakeasyBase {
    details?: DashboardMeetingParticipantShare200ApplicationJsonParticipantsDetails[];
    id?: string;
    userId?: string;
    userName?: string;
}
/**
 * Pagination object.
**/
export declare class DashboardMeetingParticipantShare200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: DashboardMeetingParticipantShare200ApplicationJsonParticipants[];
    totalRecords?: number;
}
export declare class DashboardMeetingParticipantShareRequest extends SpeakeasyBase {
    pathParams: DashboardMeetingParticipantSharePathParams;
    queryParams: DashboardMeetingParticipantShareQueryParams;
    security: DashboardMeetingParticipantShareSecurity;
}
export declare class DashboardMeetingParticipantShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardMeetingParticipantShare200ApplicationJSONObject?: DashboardMeetingParticipantShare200ApplicationJson;
}
