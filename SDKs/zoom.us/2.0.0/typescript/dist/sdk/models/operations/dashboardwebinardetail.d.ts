import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardWebinarDetailPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare enum DashboardWebinarDetailTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarDetailQueryParams extends SpeakeasyBase {
    type?: DashboardWebinarDetailTypeEnum;
}
export declare class DashboardWebinarDetailSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardWebinarDetailWebinarMetricsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Webinar metric details.
**/
export declare class DashboardWebinarDetailWebinarMetrics extends SpeakeasyBase {
    customKeys?: DashboardWebinarDetailWebinarMetricsCustomKeys[];
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
export declare class DashboardWebinarDetailRequest extends SpeakeasyBase {
    pathParams: DashboardWebinarDetailPathParams;
    queryParams: DashboardWebinarDetailQueryParams;
    security: DashboardWebinarDetailSecurity;
}
export declare class DashboardWebinarDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    webinarMetrics?: DashboardWebinarDetailWebinarMetrics;
}
