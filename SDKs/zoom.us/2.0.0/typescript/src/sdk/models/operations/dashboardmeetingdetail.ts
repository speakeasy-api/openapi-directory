import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardMeetingDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum DashboardMeetingDetailTypeEnum {
    Past = "past",
    PastOne = "pastOne",
    Live = "live"
}


export class DashboardMeetingDetailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardMeetingDetailTypeEnum;
}


export class DashboardMeetingDetailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardMeetingDetailMeetingMetricsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// DashboardMeetingDetailMeetingMetrics
/** 
 * Meeting metric details.
**/
export class DashboardMeetingDetailMeetingMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: DashboardMeetingDetailMeetingMetricsCustomKeys })
  customKeys?: DashboardMeetingDetailMeetingMetricsCustomKeys[];

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


export class DashboardMeetingDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardMeetingDetailPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardMeetingDetailQueryParams;

  @SpeakeasyMetadata()
  security: DashboardMeetingDetailSecurity;
}


export class DashboardMeetingDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  meetingMetrics?: DashboardMeetingDetailMeetingMetrics;

  @SpeakeasyMetadata()
  statusCode: number;
}
