import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class ReportWebinarParticipantsPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare enum ReportWebinarParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}
export declare class ReportWebinarParticipantsQueryParams extends SpeakeasyBase {
    includeFields?: ReportWebinarParticipantsIncludeFieldsEnum;
    nextPageToken?: string;
    pageSize?: number;
}
export declare class ReportWebinarParticipantsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class ReportWebinarParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
    customerKey?: string;
    duration?: number;
    failover?: boolean;
    id?: string;
    joinTime?: Date;
    leaveTime?: Date;
    name?: string;
    userEmail?: string;
    userId?: string;
}
/**
 * Pagination object.
**/
export declare class ReportWebinarParticipants200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: ReportWebinarParticipants200ApplicationJsonParticipants[];
    totalRecords?: number;
}
export declare class ReportWebinarParticipantsRequest extends SpeakeasyBase {
    pathParams: ReportWebinarParticipantsPathParams;
    queryParams: ReportWebinarParticipantsQueryParams;
    security: ReportWebinarParticipantsSecurity;
}
export declare class ReportWebinarParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    reportWebinarParticipants200ApplicationJSONObject?: ReportWebinarParticipants200ApplicationJson;
}
