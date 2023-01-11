import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardZoomRoomPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=zoomroomId" })
  zoomroomId: string;
}


export class DashboardZoomRoomQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class DashboardZoomRoomSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// DashboardZoomRoomZoomRoomMeetingMetrics
/** 
 * Meeting metric details.
**/
export class DashboardZoomRoomZoomRoomMeetingMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys })
  customKeys?: DashboardZoomRoomZoomRoomMeetingMetricsCustomKeys[];

  @SpeakeasyMetadata({ data: "json, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=has_3rd_party_audio" })
  has3rdPartyAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_pstn" })
  hasPstn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_recording" })
  hasRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_screen_share" })
  hasScreenShare?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_sip" })
  hasSip?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_video" })
  hasVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_voip" })
  hasVoip?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=in_room_participants" })
  inRoomParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=user_type" })
  userType?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics
/** 
 * Meeting metric details.
**/
export class DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys })
  customKeys?: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetricsCustomKeys[];

  @SpeakeasyMetadata({ data: "json, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=has_3rd_party_audio" })
  has3rdPartyAudio?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_pstn" })
  hasPstn?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_recording" })
  hasRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_screen_share" })
  hasScreenShare?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_sip" })
  hasSip?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_video" })
  hasVideo?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_voip" })
  hasVoip?: boolean;

  @SpeakeasyMetadata({ data: "json, name=host" })
  host?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=in_room_participants" })
  inRoomParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=participants" })
  participants?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=user_type" })
  userType?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


// DashboardZoomRoomZoomRoomPastMeetings
/** 
 * Pagination object.
**/
export class DashboardZoomRoomZoomRoomPastMeetings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=meetings", elemType: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics })
  meetings?: DashboardZoomRoomZoomRoomPastMeetingsMeetingMetrics[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


// DashboardZoomRoomZoomRoom
/** 
 * Zoom room.
**/
export class DashboardZoomRoomZoomRoom extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_type" })
  accountType?: string;

  @SpeakeasyMetadata({ data: "json, name=calender_name" })
  calenderName?: string;

  @SpeakeasyMetadata({ data: "json, name=camera" })
  camera?: string;

  @SpeakeasyMetadata({ data: "json, name=device_ip" })
  deviceIp?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=health" })
  health?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=issues" })
  issues?: string[];

  @SpeakeasyMetadata({ data: "json, name=last_start_time" })
  lastStartTime?: string;

  @SpeakeasyMetadata({ data: "json, name=live_meeting" })
  liveMeeting?: DashboardZoomRoomZoomRoomMeetingMetrics;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=microphone" })
  microphone?: string;

  @SpeakeasyMetadata({ data: "json, name=past_meetings" })
  pastMeetings?: DashboardZoomRoomZoomRoomPastMeetings;

  @SpeakeasyMetadata({ data: "json, name=room_name" })
  roomName?: string;

  @SpeakeasyMetadata({ data: "json, name=speaker" })
  speaker?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class DashboardZoomRoomRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardZoomRoomPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardZoomRoomQueryParams;

  @SpeakeasyMetadata()
  security: DashboardZoomRoomSecurity;
}


export class DashboardZoomRoomResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  zoomRoom?: DashboardZoomRoomZoomRoom;
}
