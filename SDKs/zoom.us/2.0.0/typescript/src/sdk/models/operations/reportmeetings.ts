import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ReportMeetingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum ReportMeetingsTypeEnum {
    Past = "past",
    PastOne = "pastOne"
}


export class ReportMeetingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: ReportMeetingsTypeEnum;
}


export class ReportMeetings200ApplicationJsonMeetingsCustomKeys extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=key" })
  key?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


export class ReportMeetings200ApplicationJsonMeetings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=custom_keys", elemType: ReportMeetings200ApplicationJsonMeetingsCustomKeys })
  customKeys?: ReportMeetings200ApplicationJsonMeetingsCustomKeys[];

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=end_time" })
  endTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=participants_count" })
  participantsCount?: number;

  @SpeakeasyMetadata({ data: "json, name=source" })
  source?: string;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=total_minutes" })
  totalMinutes?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=user_email" })
  userEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=user_name" })
  userName?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


// ReportMeetings200ApplicationJson
/** 
 * Pagination Object.
**/
export class ReportMeetings200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=meetings", elemType: ReportMeetings200ApplicationJsonMeetings })
  meetings?: ReportMeetings200ApplicationJsonMeetings[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_number" })
  pageNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ReportMeetingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ReportMeetingsPathParams;

  @SpeakeasyMetadata()
  queryParams: ReportMeetingsQueryParams;
}


export class ReportMeetingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportMeetings200ApplicationJSONObject?: ReportMeetings200ApplicationJson;
}
