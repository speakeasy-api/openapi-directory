import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardZoomRoomPathParams extends SpeakeasyBase {
    zoomroomId: string;
}
export declare class DashboardZoomRoomQueryParams extends SpeakeasyBase {
    from: Date;
    nextPageToken?: string;
    pageSize?: number;
    to: Date;
}
export declare class DashboardZoomRoomSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare class DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Meeting metric details.
**/
export declare class DashboardZoomRoomZoomRoomMeetingMetrics extends SpeakeasyBase {
    customKeys?: DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys[];
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
export declare class DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys extends SpeakeasyBase {
    key?: string;
    value?: string;
}
/**
 * Meeting metric details.
**/
export declare class DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics extends SpeakeasyBase {
    customKeys?: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys[];
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
/**
 * Pagination object.
**/
export declare class DashboardZoomRoomZoomRoomPastMeetings extends SpeakeasyBase {
    from?: Date;
    meetings?: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics[];
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
}
/**
 * Zoom room.
**/
export declare class DashboardZoomRoomZoomRoom extends SpeakeasyBase {
    accountType?: string;
    calenderName?: string;
    camera?: string;
    deviceIp?: string;
    email?: string;
    health?: string;
    id?: string;
    issues?: string[];
    lastStartTime?: string;
    liveMeeting?: DashboardZoomRoomZoomRoomMeetingMetrics;
    location?: string;
    microphone?: string;
    pastMeetings?: DashboardZoomRoomZoomRoomPastMeetings;
    roomName?: string;
    speaker?: string;
    status?: string;
}
export declare class DashboardZoomRoomRequest extends SpeakeasyBase {
    pathParams: DashboardZoomRoomPathParams;
    queryParams: DashboardZoomRoomQueryParams;
    security: DashboardZoomRoomSecurity;
}
export declare class DashboardZoomRoomResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    zoomRoom?: DashboardZoomRoomZoomRoom;
}
