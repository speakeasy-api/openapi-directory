import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum ReportTelephoneTypeEnum {
    One = "1",
    Three = "3"
}


export class ReportTelephoneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReportTelephoneTypeEnum;
}


export class ReportTelephoneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum ReportTelephone200ApplicationJsonTelephonyUsageTypeEnum {
    TollFree = "toll-free",
    CallOut = "call-out",
    CallIn = "call-in",
    UsTollNumber = "US toll-number",
    GlobalTollNumber = "global toll-number",
    Premium = "premium",
    PremiumCallIn = "premium call-in"
}


export class ReportTelephone200ApplicationJsonTelephonyUsage extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_in_number" })
  callInNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=country_name" })
  countryName?: string;

  @SpeakeasyMetadata({ data: "json, name=dept" })
  dept?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=host_email" })
  hostEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=host_id" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "json, name=host_name" })
  hostName?: string;

  @SpeakeasyMetadata({ data: "json, name=meeting_id" })
  meetingId?: number;

  @SpeakeasyMetadata({ data: "json, name=meeting_type" })
  meetingType?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: number;

  @SpeakeasyMetadata({ data: "json, name=signaled_number" })
  signaledNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=total" })
  total?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: ReportTelephone200ApplicationJsonTelephonyUsageTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class ReportTelephone200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: number;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=telephony_usage", elemType: ReportTelephone200ApplicationJsonTelephonyUsage })
  telephonyUsage?: ReportTelephone200ApplicationJsonTelephonyUsage[];

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ReportTelephoneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportTelephoneQueryParams;

  @SpeakeasyMetadata()
  security: ReportTelephoneSecurity;
}


export class ReportTelephoneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportTelephone200ApplicationJSONObject?: ReportTelephone200ApplicationJson;
}
