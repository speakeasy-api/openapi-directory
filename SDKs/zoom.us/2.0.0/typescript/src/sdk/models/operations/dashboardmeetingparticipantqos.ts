import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardMeetingParticipantQosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=participantId" })
  participantId: string;
}

export enum DashboardMeetingParticipantQosTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}


export class DashboardMeetingParticipantQosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardMeetingParticipantQosTypeEnum;
}


export class DashboardMeetingParticipantQosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc
/** 
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;
}


// DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc
/** 
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;
}


// DashboardMeetingParticipantQosParticipantQosUserQosQosObject
/** 
 * Quality of Service object.
**/
export class DashboardMeetingParticipantQosParticipantQosUserQosQosObject extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=frame_rate" })
  frameRate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=resolution" })
  resolution?: string;
}


// DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc
/** 
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;
}


// DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc
/** 
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;
}


// DashboardMeetingParticipantQosParticipantQosUserQosQosObject1
/** 
 * Quality of Service object.
**/
export class DashboardMeetingParticipantQosParticipantQosUserQosQosObject1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;
}


export class DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=system_max_cpu_usage" })
  systemMaxCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_avg_cpu_usage" })
  zoomAvgCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_max_cpu_usage" })
  zoomMaxCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_min_cpu_usage" })
  zoomMinCpuUsage?: string;
}


// DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc
/** 
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
export class DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;
}


// DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc
/** 
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=avg_loss" })
  avgLoss?: string;

  @SpeakeasyMetadata({ data: "json, name=bitrate" })
  bitrate?: string;

  @SpeakeasyMetadata({ data: "json, name=jitter" })
  jitter?: string;

  @SpeakeasyMetadata({ data: "json, name=latency" })
  latency?: string;

  @SpeakeasyMetadata({ data: "json, name=max_loss" })
  maxLoss?: string;
}


export class DashboardMeetingParticipantQosParticipantQosUserQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=as_device_from_crc" })
  asDeviceFromCrc?: DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=as_device_to_crc" })
  asDeviceToCrc?: DashboardMeetingParticipantQosParticipantQosUserQosAsDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=as_input" })
  asInput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=as_output" })
  asOutput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=audio_device_from_crc" })
  audioDeviceFromCrc?: DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=audio_device_to_crc" })
  audioDeviceToCrc?: DashboardMeetingParticipantQosParticipantQosUserQosAudioDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=audio_input" })
  audioInput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject1;

  @SpeakeasyMetadata({ data: "json, name=audio_output" })
  audioOutput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject1;

  @SpeakeasyMetadata({ data: "json, name=cpu_usage" })
  cpuUsage?: DashboardMeetingParticipantQosParticipantQosUserQosCpuUsage;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=video_device_from_crc" })
  videoDeviceFromCrc?: DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=video_device_to_crc" })
  videoDeviceToCrc?: DashboardMeetingParticipantQosParticipantQosUserQosVideoDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=video_input" })
  videoInput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=video_output" })
  videoOutput?: DashboardMeetingParticipantQosParticipantQosUserQosQosObject;
}


// DashboardMeetingParticipantQosParticipantQos
/** 
 * Participant QOS.
**/
export class DashboardMeetingParticipantQosParticipantQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=harddisk_id" })
  harddiskId?: string;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=join_time" })
  joinTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=leave_time" })
  leaveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_addr" })
  macAddr?: string;

  @SpeakeasyMetadata({ data: "json, name=pc_name" })
  pcName?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=user_qos", elemType: DashboardMeetingParticipantQosParticipantQosUserQos })
  userQos?: DashboardMeetingParticipantQosParticipantQosUserQos[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class DashboardMeetingParticipantQosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardMeetingParticipantQosPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardMeetingParticipantQosQueryParams;

  @SpeakeasyMetadata()
  security: DashboardMeetingParticipantQosSecurity;
}


export class DashboardMeetingParticipantQosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantQOS?: DashboardMeetingParticipantQosParticipantQos;

  @SpeakeasyMetadata()
  statusCode: number;
}
