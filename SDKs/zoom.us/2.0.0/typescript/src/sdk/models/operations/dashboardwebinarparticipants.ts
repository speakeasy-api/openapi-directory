import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardWebinarParticipantsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}

export enum DashboardWebinarParticipantsIncludeFieldsEnum {
    RegistrantId = "registrant_id"
}

export enum DashboardWebinarParticipantsTypeEnum {
    Past = "past",
    Live = "live"
}


export class DashboardWebinarParticipantsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_fields" })
  includeFields?: DashboardWebinarParticipantsIncludeFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardWebinarParticipantsTypeEnum;
}


export class DashboardWebinarParticipantsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}

export enum DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}

export enum DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum {
    Unknown = " ",
    Good = "good",
    Fair = "fair",
    Poor = "poor",
    Bad = "bad"
}


export class DashboardWebinarParticipants200ApplicationJsonParticipants extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=audio_quality" })
  audioQuality?: DashboardWebinarParticipants200ApplicationJsonParticipantsAudioQualityEnum;

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
  networkType?: string;

  @SpeakeasyMetadata({ data: "json, name=pc_name" })
  pcName?: string;

  @SpeakeasyMetadata({ data: "json, name=recording" })
  recording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=registrant_id" })
  registrantId?: string;

  @SpeakeasyMetadata({ data: "json, name=screen_share_quality" })
  screenShareQuality?: DashboardWebinarParticipants200ApplicationJsonParticipantsScreenShareQualityEnum;

  @SpeakeasyMetadata({ data: "json, name=share_application" })
  shareApplication?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_desktop" })
  shareDesktop?: boolean;

  @SpeakeasyMetadata({ data: "json, name=share_whiteboard" })
  shareWhiteboard?: boolean;

  @SpeakeasyMetadata({ data: "json, name=speaker" })
  speaker?: string;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=version" })
  version?: string;

  @SpeakeasyMetadata({ data: "json, name=video_quality" })
  videoQuality?: DashboardWebinarParticipants200ApplicationJsonParticipantsVideoQualityEnum;
}


// DashboardWebinarParticipants200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardWebinarParticipants200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=participants", elemType: DashboardWebinarParticipants200ApplicationJsonParticipants })
  participants?: DashboardWebinarParticipants200ApplicationJsonParticipants[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class DashboardWebinarParticipantsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardWebinarParticipantsPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardWebinarParticipantsQueryParams;

  @SpeakeasyMetadata()
  security: DashboardWebinarParticipantsSecurity;
}


export class DashboardWebinarParticipantsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardWebinarParticipants200ApplicationJSONObject?: DashboardWebinarParticipants200ApplicationJson;
}
