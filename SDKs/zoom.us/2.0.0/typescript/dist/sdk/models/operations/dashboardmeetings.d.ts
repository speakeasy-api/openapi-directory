import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DashboardMeetingsIncludeFieldsEnum {
    TrackingFields = "tracking_fields"
}
export declare enum DashboardMeetingsTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingsQueryParams extends SpeakeasyBase {
    from: Date;
    includeFields?: DashboardMeetingsIncludeFieldsEnum;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
    type?: DashboardMeetingsTypeEnum;
}
export declare class DashboardMeetingsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardMeetings200ApplicationJsonMetricsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
export declare class DashboardMeetings200ApplicationJsonMetricsTrackingFields extends SpeakeasyBase {
    field?: string;
    value?: string;
}
/**
 * Meeting metric details.
**/
export declare class DashboardMeetings200ApplicationJsonMetrics extends SpeakeasyBase {
    customKeys?: DashboardMeetings200ApplicationJsonMetricsCustomKeys[];
    dept?: string;
    duration?: string;
    email?: string;
    endTime?: Date;
    has3rdPartyAudio?: boolean;
    hasPstn?: boolean;
    hasRecording?: boolean;
    hasScreenShare?: boolean;
    hasSip?: boolean;
    hasVideo?: boolean;
    hasVoip?: boolean;
    host?: string;
    id?: number;
    inRoomParticipants?: number;
    participants?: number;
    startTime?: Date;
    topic?: string;
    trackingFields?: DashboardMeetings200ApplicationJsonMetricsTrackingFields[];
    userType?: string;
    uuid?: string;
}
/**
 * Pagination object.
**/
export declare class DashboardMeetings200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    meetings?: DashboardMeetings200ApplicationJsonMetrics[];
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
}
export declare class DashboardMeetingsRequest extends SpeakeasyBase {
    queryParams: DashboardMeetingsQueryParams;
    security: DashboardMeetingsSecurity;
}
export declare class DashboardMeetingsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardMeetings200ApplicationJSONObject?: DashboardMeetings200ApplicationJson;
}
