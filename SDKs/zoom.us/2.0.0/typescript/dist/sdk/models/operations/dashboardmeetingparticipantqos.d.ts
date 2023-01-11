import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class DashboardMeetingParticipantQosPathParams extends SpeakeasyBase {
    meetingId: string;
    participantId: string;
}
export declare enum DashboardMeetingParticipantQosTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}
export declare class DashboardMeetingParticipantQosQueryParams extends SpeakeasyBase {
    type?: DashboardMeetingParticipantQosTypeEnum;
}
export declare class DashboardMeetingParticipantQosSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
/**
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * Quality of Service object.
**/
export declare class DashboardMeetingParticipantQosParticipantQosUserQosQosObject extends SpeakeasyBase {
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
export declare class DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * Quality of Service object.
**/
export declare class DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
export declare class DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage extends SpeakeasyBase {
    systemMaxCpuUsage?: string;
    zoomAvgCpuUsage?: string;
    zoomMaxCpuUsage?: string;
    zoomMinCpuUsage?: string;
}
/**
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
export declare class DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
/**
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
export declare class DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc extends SpeakeasyBase {
    avgLoss?: string;
    bitrate?: string;
    jitter?: string;
    latency?: string;
    maxLoss?: string;
}
export declare class DashboardMeetingParticipantQosParticipantQosUserQos extends SpeakeasyBase {
    asDeviceFromCrc?: DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc;
    asDeviceToCrc?: DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc;
    asInput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject;
    asOutput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject;
    audioDeviceFromCrc?: DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc;
    audioDeviceToCrc?: DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc;
    audioInput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject1;
    audioOutput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject1;
    cpuUsage?: DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage;
    dateTime?: Date;
    videoDeviceFromCrc?: DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc;
    videoDeviceToCrc?: DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc;
    videoInput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject;
    videoOutput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject;
}
/**
 * Participant QOS.
**/
export declare class DashboardMeetingParticipantQosParticipantQos extends SpeakeasyBase {
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
    userQos?: DashboardMeetingParticipantQosParticipantQosUserQos[];
    version?: string;
}
export declare class DashboardMeetingParticipantQosRequest extends SpeakeasyBase {
    pathParams: DashboardMeetingParticipantQosPathParams;
    queryParams: DashboardMeetingParticipantQosQueryParams;
    security: DashboardMeetingParticipantQosSecurity;
}
export declare class DashboardMeetingParticipantQosResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    participantQOS?: DashboardMeetingParticipantQosParticipantQos;
    statusCode: number;
}
