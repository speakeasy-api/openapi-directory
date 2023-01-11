import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardWebinarParticipantQosPathParams extends SpeakeasyBase {
    participantId: string;
    webinarId: string;
}
export declare enum DashboardWebinarParticipantQosTypeEnum {
    Past = "past",
    Live = "live"
}
export declare class DashboardWebinarParticipantQosQueryParams extends SpeakeasyBase {
    type?: DashboardWebinarParticipantQosTypeEnum;
}
export declare class DashboardWebinarParticipantQosSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * Quality of Service object.
**/
export declare class DashboardWebinarParticipantQosParticipantQosUserQosQosObject extends SpeakeasyBase {
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
export declare class DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * Quality of Service object.
**/
export declare class DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
export declare class DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage extends SpeakeasyBase {
    systemMaxCpuUsage?: string;
    zoomAvgCpuUsage?: string;
    zoomMaxCpuUsage?: string;
    zoomMinCpuUsage?: string;
}
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
export declare class DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
export declare class DashboardWebinarParticipantQosParticipantQosUserQos extends SpeakeasyBase {
    asDeviceFromCrc?: DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc;
    asDeviceToCrc?: DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc;
    asInput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject;
    asOutput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject;
    audioDeviceFromCrc?: DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc;
    audioDeviceToCrc?: DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc;
    audioInput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject1;
    audioOutput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject1;
    cpuUsage?: DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage;
    dateTime?: Date;
    videoDeviceFromCrc?: DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc;
    videoDeviceToCrc?: DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc;
    videoInput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject;
    videoOutput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject;
}
/**
 * Participant QOS.
**/
export declare class DashboardWebinarParticipantQosParticipantQos extends SpeakeasyBase {
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
    userQos?: DashboardWebinarParticipantQosParticipantQosUserQos[];
    version?: string;
}
export declare class DashboardWebinarParticipantQosRequest extends SpeakeasyBase {
    pathParams: DashboardWebinarParticipantQosPathParams;
    queryParams: DashboardWebinarParticipantQosQueryParams;
    security: DashboardWebinarParticipantQosSecurity;
}
export declare class DashboardWebinarParticipantQosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantQOS?: DashboardWebinarParticipantQosParticipantQos;
    statusCode: number;
}
