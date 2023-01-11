import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare enum DashboardWebinarsTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarsQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
    type?: DashboardWebinarsTypeEnum;
}
export declare class DashboardWebinarsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Webinar metric details.
**/
export declare class DashboardWebinars200ApplicationJsonWebinarMetrics extends SpeakeasyBase {
    customKeys?: DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys[];
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
    participants?: number;
    startTime?: Date;
    topic?: string;
    userType?: string;
    uuid?: string;
}
/**
 * Pagination object.
**/
export declare class DashboardWebinars200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
    webinars?: DashboardWebinars200ApplicationJsonWebinarMetrics[];
}
export declare class DashboardWebinarsRequest extends SpeakeasyBase {
    queryParams: DashboardWebinarsQueryParams;
    security: DashboardWebinarsSecurity;
}
export declare class DashboardWebinarsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardWebinars200ApplicationJSONObject?: DashboardWebinars200ApplicationJson;
}
