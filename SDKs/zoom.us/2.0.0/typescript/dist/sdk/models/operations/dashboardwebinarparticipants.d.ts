import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardWebinarParticipantsPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare enum DashboardWebinarParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}
export declare enum DashboardWebinarParticipantsTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarParticipantsQueryParams extends SpeakeasyBase {
    includeFields?: DashboardWebinarParticipantsIncludeFieldsEnum;
    nextPageToken?: string;
    pageSize?: number;
    type?: DashboardWebinarParticipantsTypeEnum;
}
export declare class DashboardWebinarParticipantsSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare enum DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare enum DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}
export declare class DashboardWebinarParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
    audioQuality?: DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum;
    connectionType?: string;
    customerKey?: string;
    dataCenter?: string;
    device?: string;
    domain?: string;
    email?: string;
    harddiskId?: string;
    id?: string;
    ipAddress?: string;
    joinTime?: Date;
    leaveReason?: string;
    leaveTime?: Date;
    location?: string;
    macAddr?: string;
    microphone?: string;
    networkType?: string;
    pcName?: string;
    recording?: boolean;
    registrantId?: string;
    screenShareQuality?: DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum;
    shareApplication?: boolean;
    shareDesktop?: boolean;
    shareWhiteboard?: boolean;
    speaker?: string;
    userId?: string;
    userName?: string;
    version?: string;
    videoQuality?: DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum;
}
/**
 * Pagination object.
**/
export declare class DashboardWebinarParticipants200ApplicationJson extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: DashboardWebinarParticipants200ApplicationJsonParticipants[];
    totalRecords?: number;
}
export declare class DashboardWebinarParticipantsRequest extends SpeakeasyBase {
    pathParams: DashboardWebinarParticipantsPathParams;
    queryParams: DashboardWebinarParticipantsQueryParams;
    security: DashboardWebinarParticipantsSecurity;
}
export declare class DashboardWebinarParticipantsResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    dashboardWebinarParticipants200ApplicationJSONObject?: DashboardWebinarParticipants200ApplicationJson;
}
