import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DashboardMeetingsIncludeFieldsEnum {
    TrackingFields = "tracking_fields"
}

export enum DashboardMeetingsTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}


export class DashboardMeetingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_fields" })
  includeFields?: DashboardMeetingsIncludeFieldsEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardMeetingsTypeEnum;
}


export class DashboardMeetingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardMeetings200ApplicationJsonMetricsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class DashboardMeetings200ApplicationJsonMetricsTrackingFields extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=field" })
  field?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// DashboardMeetings200ApplicationJsonMetrics
/** 
 * Meeting metric details.
**/
export class DashboardMeetings200ApplicationJsonMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: DashboardMeetings200ApplicationJsonMetricsCustomKeys })
  customKeys?: DashboardMeetings200ApplicationJsonMetricsCustomKeys[];

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

  @SpeakeasyMetadata({ data: "json, name=tracking_fields", elemType: DashboardMeetings200ApplicationJsonMetricsTrackingFields })
  trackingFields?: DashboardMeetings200ApplicationJsonMetricsTrackingFields[];

  @SpeakeasyMetadata({ data: "json, name=user_type" })
  userType?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


// DashboardMeetings200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardMeetings200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=meetings", elemType: DashboardMeetings200ApplicationJsonMetrics })
  meetings?: DashboardMeetings200ApplicationJsonMetrics[];

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


export class DashboardMeetingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DashboardMeetingsQueryParams;

  @SpeakeasyMetadata()
  security: DashboardMeetingsSecurity;
}


export class DashboardMeetingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardMeetings200ApplicationJSONObject?: DashboardMeetings200ApplicationJson;
}
