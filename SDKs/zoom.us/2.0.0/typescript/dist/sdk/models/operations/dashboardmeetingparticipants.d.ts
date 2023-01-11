import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardMeetingParticipantsPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum DashboardMeetingParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}
export declare enum DashboardMeetingParticipantsTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingParticipantsQueryParams extends SpeakeasyBase {
    includeFields?: DashboardMeetingParticipantsIncludeFieldsEnum;
    nextPageToken?: string;
    pageSize?: number;
    type?: DashboardMeetingParticipantsTypeEnum;
}
export declare class DashboardMeetingParticipantsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare enum DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum {
    Wired = "Wired",
    Wifi = "Wifi",
    Ppp = "PPP",
    Cellular3GAnd4G = "Cellular (3G and 4G)",
    Others = "Others"
}
export declare enum DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare enum DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum {
    InMeeting = "in_meeting",
    InWaitingRoom = "in_waiting_room"
}
export declare enum DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare class DashboardMeetingParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
    audioQuality?: DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum;
    camera?: string;
    connectionType?: string;
    customerKey?: string;
    dataCenter?: string;
    device?: string;
    domain?: string;
    email?: string;
    harddiskId?: string;
    id?: string;
    inRoomParticipants?: number;
    ipAddress?: string;
    joinTime?: Date;
    leaveReason?: string;
    leaveTime?: Date;
    location?: string;
    macAddr?: string;
    microphone?: string;
    networkType?: DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum;
    pcName?: string;
    recording?: boolean;
    registrantId?: string;
    screenShareQuality?: DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum;
    shareApplication?: boolean;
    shareDesktop?: boolean;
    shareWhiteboard?: boolean;
    speaker?: string;
    status?: DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum;
    userId?: string;
    userName?: string;
    version?: string;
    videoQuality?: DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum;
}
/**
 * Pagination object.
**/
export declare class DashboardMeetingParticipants200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: DashboardMeetingParticipants200ApplicationJsonParticipants[];
    totalRecords?: number;
}
export declare class DashboardMeetingParticipantsRequest extends SpeakeasyBase {
    pathParams: DashboardMeetingParticipantsPathParams;
    queryParams: DashboardMeetingParticipantsQueryParams;
    security: DashboardMeetingParticipantsSecurity;
}
export declare class DashboardMeetingParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardMeetingParticipants200ApplicationJSONObject?: DashboardMeetingParticipants200ApplicationJson;
}
