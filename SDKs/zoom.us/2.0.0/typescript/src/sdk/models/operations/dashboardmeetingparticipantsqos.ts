import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardMeetingParticipantsQosPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum DashboardMeetingParticipantsQosTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}


export class DashboardMeetingParticipantsQosQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardMeetingParticipantsQosTypeEnum;
}


export class DashboardMeetingParticipantsQosSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc
/** 
 * QoS metrics on screen shares by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc extends SpeakeasyBase {
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


// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc
/** 
 * QoS metrics on screen shares output being received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc extends SpeakeasyBase {
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


// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject
/** 
 * Quality of Service object.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject extends SpeakeasyBase {
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


// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc
/** 
 * QoS metrics on audio being sent by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc extends SpeakeasyBase {
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


// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc
/** 
 * QoS metrics on audio received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc extends SpeakeasyBase {
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


// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1
/** 
 * Quality of Service object.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1 extends SpeakeasyBase {
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


export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=system_max_cpu_usage" })
  systemMaxCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_avg_cpu_usage" })
  zoomAvgCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_max_cpu_usage" })
  zoomMaxCpuUsage?: string;

  @SpeakeasyMetadata({ data: "json, name=zoom_min_cpu_usage" })
  zoomMinCpuUsage?: string;
}


// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc
/** 
 * QoS metrics on video input being sent from a Cloud Room Connector used by the participant to join the meeting.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc extends SpeakeasyBase {
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


// DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc
/** 
 * QoS metrics on video output received by a participant who joined the meeting via a Cloud Room Connector.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc extends SpeakeasyBase {
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


export class DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=as_device_from_crc" })
  asDeviceFromCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=as_device_to_crc" })
  asDeviceToCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAsDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=as_input" })
  asInput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=as_output" })
  asOutput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=audio_device_from_crc" })
  audioDeviceFromCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=audio_device_to_crc" })
  audioDeviceToCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosAudioDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=audio_input" })
  audioInput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;

  @SpeakeasyMetadata({ data: "json, name=audio_output" })
  audioOutput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject1;

  @SpeakeasyMetadata({ data: "json, name=cpu_usage" })
  cpuUsage?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosCpuUsage;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=video_device_from_crc" })
  videoDeviceFromCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceFromCrc;

  @SpeakeasyMetadata({ data: "json, name=video_device_to_crc" })
  videoDeviceToCrc?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosVideoDeviceToCrc;

  @SpeakeasyMetadata({ data: "json, name=video_input" })
  videoInput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;

  @SpeakeasyMetadata({ data: "json, name=video_output" })
  videoOutput?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQosQosObject;
}


// DashboardMeetingParticipantsQosParticipantQosListParticipantQos
/** 
 * Participant QOS.
**/
export class DashboardMeetingParticipantsQosParticipantQosListParticipantQos extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=user_qos", elemType: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos })
  userQos?: DashboardMeetingParticipantsQosParticipantQosListParticipantQosUserQos[];

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;
}


// DashboardMeetingParticipantsQosParticipantQosList
/** 
 * Pagination object.
**/
export class DashboardMeetingParticipantsQosParticipantQosList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: DashboardMeetingParticipantsQosParticipantQosListParticipantQos })
  participants?: DashboardMeetingParticipantsQosParticipantQosListParticipantQos[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardMeetingParticipantsQosRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardMeetingParticipantsQosPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardMeetingParticipantsQosQueryParams;

  @SpeakeasyMetadata()
  security: DashboardMeetingParticipantsQosSecurity;
}


export class DashboardMeetingParticipantsQosResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  participantQOSList?: DashboardMeetingParticipantsQosParticipantQosList;

  @SpeakeasyMetadata()
  statusCode: number;
}
