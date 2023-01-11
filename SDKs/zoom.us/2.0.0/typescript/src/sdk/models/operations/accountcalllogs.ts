import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";


export enum AccountCallLogsTimeTypeEnum {
    StartTime = "startTime",
    EndTime = "endTime"
}


export class AccountCallLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_type" })
  timeType?: AccountCallLogsTimeTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: string;
}


export class AccountCallLogsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum {
    Voip = "voip",
    Pstn = "pstn",
    Tollfree = "tollfree",
    International = "international",
    ContactCenter = "contactCenter"
}

export enum AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum {
    User = "user",
    CallQueue = "callQueue",
    AutoReceptionist = "autoReceptionist",
    CommonAreaPhone = "commonAreaPhone",
    SharedLineGroup = "sharedLineGroup"
}


export class AccountCallLogs200ApplicationJsonCallLogsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: AccountCallLogs200ApplicationJsonCallLogsOwnerTypeEnum;
}

export enum AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum {
    One = "1",
    Two = "2"
}


export class AccountCallLogs200ApplicationJsonCallLogsSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class AccountCallLogs200ApplicationJsonCallLogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=answer_start_time" })
  answerStartTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=call_id" })
  callId?: string;

  @SpeakeasyMetadata({ data: "json, name=call_type" })
  callType?: AccountCallLogs200ApplicationJsonCallLogsCallTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=callee_name" })
  calleeName?: string;

  @SpeakeasyMetadata({ data: "json, name=callee_number" })
  calleeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=callee_number_type" })
  calleeNumberType?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_name" })
  callerName?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_number" })
  callerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_number_type" })
  callerNumberType?: string;

  @SpeakeasyMetadata({ data: "json, name=charge" })
  charge?: string;

  @SpeakeasyMetadata({ data: "json, name=client_code" })
  clientCode?: string;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: AccountCallLogs200ApplicationJsonCallLogsOwner;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_id" })
  recordingId?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_type" })
  recordingType?: AccountCallLogs200ApplicationJsonCallLogsRecordingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: AccountCallLogs200ApplicationJsonCallLogsSite;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=waiting_time" })
  waitingTime?: string;
}


// AccountCallLogs200ApplicationJson
/** 
 * Account Call Logs
**/
export class AccountCallLogs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_logs", elemType: AccountCallLogs200ApplicationJsonCallLogs })
  callLogs?: AccountCallLogs200ApplicationJsonCallLogs[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class AccountCallLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: AccountCallLogsQueryParams;

  @SpeakeasyMetadata()
  security: AccountCallLogsSecurity;
}


export class AccountCallLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  accountCallLogs200ApplicationJSONObject?: AccountCallLogs200ApplicationJson;
}
