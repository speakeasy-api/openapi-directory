import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardWebinarParticipantQosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=participantId" })
  participantId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}

export enum DashboardWebinarParticipantQosTypeEnum {
    Past = "past",
    Live = "live"
}


export class DashboardWebinarParticipantQosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardWebinarParticipantQosTypeEnum;
}


export class DashboardWebinarParticipantQosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc
/** 
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc
/** 
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantQosParticipantQosUserQosQosObject
/** 
 * Quality of Service object.
**/
export class DashboardWebinarParticipantQosParticipantQosUserQosQosObject extends SpeakeasyBase {
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


// DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc
/** 
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc
/** 
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantQosParticipantQosUserQosQosObject1
/** 
 * Quality of Service object.
**/
export class DashboardWebinarParticipantQosParticipantQosUserQosQosObject1 extends SpeakeasyBase {
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


export class DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=system_max_cpu_usage" })
  systemMaxCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_avg_cpu_usage" })
  zoomAvgCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_max_cpu_usage" })
  zoomMaxCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_min_cpu_usage" })
  zoomMinCpuUsage?: string;
}


// DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc
/** 
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
export class DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc
/** 
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc extends SpeakeasyBase {
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


export class DashboardWebinarParticipantQosParticipantQosUserQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=as_device_from_crc" })
  asDeviceFromCrc?: DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=as_device_to_crc" })
  asDeviceToCrc?: DashboardWebinarParticipantQosParticipantQosUserQosAsDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=as_input" })
  asInput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=as_output" })
  asOutput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=audio_device_from_crc" })
  audioDeviceFromCrc?: DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=audio_device_to_crc" })
  audioDeviceToCrc?: DashboardWebinarParticipantQosParticipantQosUserQosAudioDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=audio_input" })
  audioInput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject1;

  @SpeakeasyMetadata({ data: "json, name=audio_output" })
  audioOutput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject1;

  @SpeakeasyMetadata({ data: "json, name=cpu_usage" })
  cpuUsage?: DashboardWebinarParticipantQosParticipantQosUserQosCpuUsage;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=video_device_from_crc" })
  videoDeviceFromCrc?: DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=video_device_to_crc" })
  videoDeviceToCrc?: DashboardWebinarParticipantQosParticipantQosUserQosVideoDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=video_input" })
  videoInput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=video_output" })
  videoOutput?: DashboardWebinarParticipantQosParticipantQosUserQosQosObject;
}


// DashboardWebinarParticipantQosParticipantQos
/** 
 * Participant QOS.
**/
export class DashboardWebinarParticipantQosParticipantQos extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=user_qos", elemType: DashboardWebinarParticipantQosParticipantQosUserQos })
  userQos?: DashboardWebinarParticipantQosParticipantQosUserQos[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


export class DashboardWebinarParticipantQosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardWebinarParticipantQosPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardWebinarParticipantQosQueryParams;

  @SpeakeasyMetadata()
  security: DashboardWebinarParticipantQosSecurity;
}


export class DashboardWebinarParticipantQosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantQOS?: DashboardWebinarParticipantQosParticipantQos;

  @SpeakeasyMetadata()
  statusCode: number;
}
