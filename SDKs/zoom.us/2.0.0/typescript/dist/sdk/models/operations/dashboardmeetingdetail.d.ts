import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardMeetingDetailPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum DashboardMeetingDetailTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingDetailQueryParams extends SpeakeasyBase {
    type?: DashboardMeetingDetailTypeEnum;
}
export declare class DashboardMeetingDetailSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardMeetingDetailMeetingMetricsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Meeting metric details.
**/
export declare class DashboardMeetingDetailMeetingMetrics extends SpeakeasyBase {
    customKeys?: DashboardMeetingDetailMeetingMetricsCustomKeys[];
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
    userType?: string;
    uuid?: string;
}
export declare class DashboardMeetingDetailRequest extends SpeakeasyBase {
    pathParams: DashboardMeetingDetailPathParams;
    queryParams: DashboardMeetingDetailQueryParams;
    security: DashboardMeetingDetailSecurity;
}
export declare class DashboardMeetingDetailResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    meetingMetrics?: DashboardMeetingDetailMeetingMetrics;
    statusCode: number;
}
