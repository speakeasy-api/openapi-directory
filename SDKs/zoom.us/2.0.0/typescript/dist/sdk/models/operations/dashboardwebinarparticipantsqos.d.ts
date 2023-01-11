import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardWebinarParticipantsQosPathParams extends SpeakeasyBase {
    webinarId: string;
}
export declare enum DashboardWebinarParticipantsQosTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarParticipantsQosQueryParams extends SpeakeasyBase {
    nextPageToken?: string;
    pageSize?: number;
    type?: DashboardWebinarParticipantsQosTypeEnum;
}
export declare class DashboardWebinarParticipantsQosSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * Quality of Service object.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * Quality of Service object.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage extends SpeakeasyBase {
    systemMaxCpuUsage?: string;
    zoomAvgCpuUsage?: string;
    zoomMaxCpuUsage?: string;
    zoomMinCpuUsage?: string;
}
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos extends SpeakeasyBase {
    asDeviceFromCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc;
    asDeviceToCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc;
    asInput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
    asOutput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
    audioDeviceFromCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc;
    audioDeviceToCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc;
    audioInput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;
    audioOutput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;
    cpuUsage?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage;
    dateTime?: Date;
    videoDeviceFromCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc;
    videoDeviceToCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc;
    videoInput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
    videoOutput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
}
/**
 * Participant QOS.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosListParticipantQos extends SpeakeasyBase {
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
    userQos?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos[];
    version?: string;
}
/**
 * Pagination object.
**/
export declare class DashboardWebinarParticipantsQosParticipantQosList extends SpeakeasyBase {
    nextPageToken?: string;
    pageCount?: number;
    pageSize?: number;
    participants?: DashboardWebinarParticipantsQosParticipantQosListParticipantQos[];
    totalRecords?: number;
}
export declare class DashboardWebinarParticipantsQosRequest extends SpeakeasyBase {
    pathParams: DashboardWebinarParticipantsQosPathParams;
    queryParams: DashboardWebinarParticipantsQosQueryParams;
    security: DashboardWebinarParticipantsQosSecurity;
}
export declare class DashboardWebinarParticipantsQosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantQOSList?: DashboardWebinarParticipantsQosParticipantQosList;
    statusCode: number;
}
