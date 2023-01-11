import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class DashboardWebinarDetailPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}

export enum DashboardWebinarDetailTypeEnum {
    Past = "past",
    Live = "live"
}


export class DashboardWebinarDetailQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardWebinarDetailTypeEnum;
}


export class DashboardWebinarDetailSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardWebinarDetailWebinarMetricsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// DashboardWebinarDetailWebinarMetrics
/** 
 * Webinar metric details.
**/
export class DashboardWebinarDetailWebinarMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: DashboardWebinarDetailWebinarMetricsCustomKeys })
  customKeys?: DashboardWebinarDetailWebinarMetricsCustomKeys[];

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


export class DashboardWebinarDetailRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: DashboardWebinarDetailPathParams;

  @SpeakeasyMetadata()
  queryParams: DashboardWebinarDetailQueryParams;

  @SpeakeasyMetadata()
  security: DashboardWebinarDetailSecurity;
}


export class DashboardWebinarDetailResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  webinarMetrics?: DashboardWebinarDetailWebinarMetrics;
}
