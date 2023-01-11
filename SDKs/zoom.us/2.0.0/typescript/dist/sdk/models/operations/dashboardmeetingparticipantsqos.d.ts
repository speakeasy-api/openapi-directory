import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardMeetingParticipantsQosPathParams extends SpeakeasyBase {
    meetingId: string;
}
export declare enum DashboardMeetingParticipantsQosTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingParticipantsQosQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    type?: DashboardMeetingParticipantsQosTypeEnum;
}
export declare class DashboardMeetingParticipantsQosSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * Quality of Service object.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    frameRate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
    resolution?: string;
}
/**
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * Quality of Service object.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage extends SpeakeasyBase {
    systemMaxCpuUsage?: string;
    zoomAvgCpuUsage?: string;
    zoomMaxCpuUsage?: string;
    zoomMinCpuUsage?: string;
}
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos extends SpeakeasyBase {
    asDeviceFromCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc;
    asDeviceToCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc;
    asInput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
    asOutput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
    audioDeviceFromCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc;
    audioDeviceToCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc;
    audioInput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;
    audioOutput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;
    cpuUsage?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage;
    dateTime?: Date;
    videoDeviceFromCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc;
    videoDeviceToCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc;
    videoInput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
    videoOutput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
}
/**
 * Participant QOS.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosListParticipantQos extends SpeakeasyBase {
    device?: string;
    domain?: string;
    harddiskId?: string;
    ipAddress?: string;
    joinTime?: Date;
    leaveTime?: Date;
    location?: string;
    macAddr?: string;
    pcName?: string;
    userId?: string;
    userName?: string;
    userQos?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos[];
    version?: string;
}
/**
 * Pagination object.
**/
export declare class DashboardMeetingParticipantsQosParticipantQosList extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: DashboardMeetingParticipantsQosParticipantQosListParticipantQos[];
    totalRecords?: number;
}
export declare class DashboardMeetingParticipantsQosRequest extends SpeakeasyBase {
    pathParams: DashboardMeetingParticipantsQosPathParams;
    queryParams: DashboardMeetingParticipantsQosQueryParams;
    security: DashboardMeetingParticipantsQosSecurity;
}
export declare class DashboardMeetingParticipantsQosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantQOSList?: DashboardMeetingParticipantsQosParticipantQosList;
    statusCode: number;
}
