import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardMeetingParticipantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum DashboardMeetingParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}

export enum DashboardMeetingParticipantsTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}


export class DashboardMeetingParticipantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_fields" })
  includeFields?: DashboardMeetingParticipantsIncludeFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardMeetingParticipantsTypeEnum;
}


export class DashboardMeetingParticipantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}

export enum DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum {
    Wired = "Wired",
    Wifi = "Wifi",
    Ppp = "PPP",
    Cellular3GAnd4G = "Cellular (3G and 4G)",
    Others = "Others"
}

export enum DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}

export enum DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum {
    InMeeting = "in_meeting",
    InWaitingRoom = "in_waiting_room"
}

export enum DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}


export class DashboardMeetingParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_quality" })
  audioQuality?: DashboardMeetingParticipants200ApplicationJsonParticipantsAudioQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=camera" })
  camera?: string;

  @SpeakeasyMetadata({ data: "json, name=connection_type" })
  connectionType?: string;

  @SpeakeasyMetadata({ data: "json, name=customer_key" })
  customerKey?: string;

  @SpeakeasyMetadata({ data: "json, name=data_center" })
  dataCenter?: string;

  @SpeakeasyMetadata({ data: "json, name=device" })
  device?: string;

  @SpeakeasyMetadata({ data: "json, name=domain" })
  domain?: string;

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=harddisk_id" })
  harddiskId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=in_room_participants" })
  inRoomParticipants?: number;

  @SpeakeasyMetadata({ data: "json, name=ip_address" })
  ipAddress?: string;

  @SpeakeasyMetadata({ data: "json, name=join_time" })
  joinTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=leave_reason" })
  leaveReason?: string;

  @SpeakeasyMetadata({ data: "json, name=leave_time" })
  leaveTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=mac_addr" })
  macAddr?: string;

  @SpeakeasyMetadata({ data: "json, name=microphone" })
  microphone?: string;

  @SpeakeasyMetadata({ data: "json, name=network_type" })
  networkType?: DashboardMeetingParticipants200ApplicationJsonParticipantsNetworkTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=pc_name" })
  pcName?: string;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrant_id" })
  registrantId?: string;

  @SpeakeasyMetadata({ data: "json, name=screen_share_quality" })
  screenShareQuality?: DashboardMeetingParticipants200ApplicationJsonParticipantsScreenShareQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=share_application" })
  shareApplication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_desktop" })
  shareDesktop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_whiteboard" })
  shareWhiteboard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=speaker" })
  speaker?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: DashboardMeetingParticipants200ApplicationJsonParticipantsStatusEnum;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=video_quality" })
  videoQuality?: DashboardMeetingParticipants200ApplicationJsonParticipantsVideoQualityEnum;
}


// DashboardMeetingParticipants200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardMeetingParticipants200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: DashboardMeetingParticipants200ApplicationJsonParticipants })
  participants?: DashboardMeetingParticipants200ApplicationJsonParticipants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardMeetingParticipantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardMeetingParticipantsPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardMeetingParticipantsQueryParams;

  @SpeakeasyMetadata()
  security: DashboardMeetingParticipantsSecurity;
}


export class DashboardMeetingParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardMeetingParticipants200ApplicationJSONObject?: DashboardMeetingParticipants200ApplicationJson;
}
