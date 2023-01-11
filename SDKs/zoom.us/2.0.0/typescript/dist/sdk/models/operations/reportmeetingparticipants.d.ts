import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportMeetingParticipantsPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum ReportMeetingParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}
export declare class ReportMeetingParticipantsQueryParams extends SpeakeasyBase {
    includeFields?: ReportMeetingParticipantsIncludeFieldsEnum;
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ReportMeetingParticipantsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportMeetingParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
    customerKey?: string;
    duration?: number;
    failover?: boolean;
    id?: string;
    joinTime?: Date;
    leaveTime?: Date;
    name?: string;
    registrantId?: string;
    userEmail?: string;
    userId?: string;
}
/**
 * Pagination object.
**/
export declare class ReportMeetingParticipants200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: ReportMeetingParticipants200ApplicationJsonParticipants[];
    totalRecords?: number;
}
export declare class ReportMeetingParticipantsRequest extends SpeakeasyBase {
    pathParams: ReportMeetingParticipantsPathParams;
    queryParams: ReportMeetingParticipantsQueryParams;
    security: ReportMeetingParticipantsSecurity;
}
export declare class ReportMeetingParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportMeetingParticipants200ApplicationJSONObject?: ReportMeetingParticipants200ApplicationJson;
}
