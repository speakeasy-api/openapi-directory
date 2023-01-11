import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardWebinarParticipantSharePathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare enum DashboardWebinarParticipantShareTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarParticipantShareQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    type?: DashboardWebinarParticipantShareTypeEnum;
}
export declare class DashboardWebinarParticipantShareSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails extends SpeakeasyBase {
    content?: string;
    endTime?: string;
    startTime?: string;
}
export declare class DashboardWebinarParticipantShare200ApplicationJsonParticipants extends SpeakeasyBase {
    details?: DashboardWebinarParticipantShare200ApplicationJsonParticipantsDetails[];
    id?: string;
    userId?: string;
    userName?: string;
}
/**
 * Pagination object.
**/
export declare class DashboardWebinarParticipantShare200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: DashboardWebinarParticipantShare200ApplicationJsonParticipants[];
    totalRecords?: number;
}
export declare class DashboardWebinarParticipantShareRequest extends SpeakeasyBase {
    pathParams: DashboardWebinarParticipantSharePathParams;
    queryParams: DashboardWebinarParticipantShareQueryParams;
    security: DashboardWebinarParticipantShareSecurity;
}
export declare class DashboardWebinarParticipantShareResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardWebinarParticipantShare200ApplicationJSONObject?: DashboardWebinarParticipantShare200ApplicationJson;
}
