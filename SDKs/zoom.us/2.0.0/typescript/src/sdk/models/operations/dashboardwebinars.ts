import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum DashboardWebinarsTypeEnum {
    Past = "past",
    Live = "live"
}


export class DashboardWebinarsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: DashboardWebinarsTypeEnum;
}


export class DashboardWebinarsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// DashboardWebinars200ApplicationJsonWebinarMetrics
/** 
 * Webinar metric details.
**/
export class DashboardWebinars200ApplicationJsonWebinarMetrics extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys })
  customKeys?: DashboardWebinars200ApplicationJsonWebinarMetricsCustomKeys[];

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


// DashboardWebinars200ApplicationJson
/** 
 * Pagination object.
**/
export class DashboardWebinars200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

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

  @SpeakeasyMetadata({ data: "json, name=webinars", elemType: DashboardWebinars200ApplicationJsonWebinarMetrics })
  webinars?: DashboardWebinars200ApplicationJsonWebinarMetrics[];
}


export class DashboardWebinarsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: DashboardWebinarsQueryParams;

  @SpeakeasyMetadata()
  security: DashboardWebinarsSecurity;
}


export class DashboardWebinarsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  dashboardWebinars200ApplicationJSONObject?: DashboardWebinars200ApplicationJson;
}
