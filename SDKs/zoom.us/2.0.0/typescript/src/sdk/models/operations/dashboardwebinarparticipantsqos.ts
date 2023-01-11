import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardWebinarParticipantsQosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}

export enum DashboardWebinarParticipantsQosTypeEnum {
    Past = "past",
    Live = "live"
}


export class DashboardWebinarParticipantsQosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardWebinarParticipantsQosTypeEnum;
}


export class DashboardWebinarParticipantsQosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc
/** 
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc
/** 
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject
/** 
 * Quality of Service object.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject extends SpeakeasyBase {
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


// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc
/** 
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc
/** 
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1
/** 
 * Quality of Service object.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 extends SpeakeasyBase {
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


export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=system_max_cpu_usage" })
  systemMaxCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_avg_cpu_usage" })
  zoomAvgCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_max_cpu_usage" })
  zoomMaxCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_min_cpu_usage" })
  zoomMinCpuUsage?: string;
}


// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc
/** 
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc extends SpeakeasyBase {
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


// DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc
/** 
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc extends SpeakeasyBase {
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


export class DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=as_device_from_crc" })
  asDeviceFromCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=as_device_to_crc" })
  asDeviceToCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=as_input" })
  asInput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=as_output" })
  asOutput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=audio_device_from_crc" })
  audioDeviceFromCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=audio_device_to_crc" })
  audioDeviceToCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=audio_input" })
  audioInput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;

  @SpeakeasyMetadata({ data: "json, name=audio_output" })
  audioOutput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;

  @SpeakeasyMetadata({ data: "json, name=cpu_usage" })
  cpuUsage?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=video_device_from_crc" })
  videoDeviceFromCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=video_device_to_crc" })
  videoDeviceToCrc?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=video_input" })
  videoInput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=video_output" })
  videoOutput?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
}


// DashboardWebinarParticipantsQosParticipantQosListParticipantQos
/** 
 * Participant QOS.
**/
export class DashboardWebinarParticipantsQosParticipantQosListParticipantQos extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=user_qos", elemType: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos })
  userQos?: DashboardWebinarParticipantsQosParticipantQosListParticipantQosUserQos[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// DashboardWebinarParticipantsQosParticipantQosList
/** 
 * Pagination object.
**/
export class DashboardWebinarParticipantsQosParticipantQosList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: DashboardWebinarParticipantsQosParticipantQosListParticipantQos })
  participants?: DashboardWebinarParticipantsQosParticipantQosListParticipantQos[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardWebinarParticipantsQosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardWebinarParticipantsQosPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardWebinarParticipantsQosQueryParams;

  @SpeakeasyMetadata()
  security: DashboardWebinarParticipantsQosSecurity;
}


export class DashboardWebinarParticipantsQosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantQOSList?: DashboardWebinarParticipantsQosParticipantQosList;

  @SpeakeasyMetadata()
  statusCode: number;
}
