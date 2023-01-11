import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneUserCallLogsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum PhoneUserCallLogsTimeTypeEnum {
    StartTime = "startTime",
    EndTime = "endTime"
}

export enum PhoneUserCallLogsTypeEnum {
    All = "all",
    Missed = "missed"
}


export class PhoneUserCallLogsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=phone_number" })
  phoneNumber?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=time_type" })
  timeType?: PhoneUserCallLogsTimeTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=type" })
  type?: PhoneUserCallLogsTypeEnum;
}


export class PhoneUserCallLogsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


// PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy
/** 
 * Indicates who accepted the call.
**/
export class PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}


// PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy
/** 
 * Indicates where the call was forwarded from.
**/
export class PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}


// PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo
/** 
 * Indicates who the call was forwarded to.
**/
export class PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}


export class PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=location" })
  location?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=number_type" })
  numberType?: string;

  @SpeakeasyMetadata({ data: "json, name=phone_number" })
  phoneNumber?: string;
}


export class PhoneUserCallLogs200ApplicationJsonCallLogsSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class PhoneUserCallLogs200ApplicationJsonCallLogs extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=accepted_by" })
  acceptedBy?: PhoneUserCallLogs200ApplicationJsonCallLogsAcceptedBy;

  @SpeakeasyMetadata({ data: "json, name=call_id" })
  callId?: string;

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

  @SpeakeasyMetadata({ data: "json, name=forwarded_by" })
  forwardedBy?: PhoneUserCallLogs200ApplicationJsonCallLogsForwardedBy;

  @SpeakeasyMetadata({ data: "json, name=forwarded_to" })
  forwardedTo?: PhoneUserCallLogs200ApplicationJsonCallLogsForwardedTo;

  @SpeakeasyMetadata({ data: "json, name=has_recording" })
  hasRecording?: boolean;

  @SpeakeasyMetadata({ data: "json, name=has_voicemail" })
  hasVoicemail?: boolean;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=outgoing_by" })
  outgoingBy?: PhoneUserCallLogs200ApplicationJsonCallLogsOutgoingBy;

  @SpeakeasyMetadata({ data: "json, name=path" })
  path?: string;

  @SpeakeasyMetadata({ data: "json, name=rate" })
  rate?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_type" })
  recordingType?: string;

  @SpeakeasyMetadata({ data: "json, name=result" })
  result?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: PhoneUserCallLogs200ApplicationJsonCallLogsSite;

  @SpeakeasyMetadata({ data: "json, name=user_id" })
  userId?: string;

  @SpeakeasyMetadata({ data: "json, name=waiting_time" })
  waitingTime?: number;
}


// PhoneUserCallLogs200ApplicationJson
/** 
 * Phone User Call Logs
**/
export class PhoneUserCallLogs200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=call_logs", elemType: PhoneUserCallLogs200ApplicationJsonCallLogs })
  callLogs?: PhoneUserCallLogs200ApplicationJsonCallLogs[];

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


export class PhoneUserCallLogsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhoneUserCallLogsPathParams;

  @SpeakeasyMetadata()
  queryParams: PhoneUserCallLogsQueryParams;

  @SpeakeasyMetadata()
  security: PhoneUserCallLogsSecurity;
}


export class PhoneUserCallLogsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  phoneUserCallLogs200ApplicationJSONObject?: PhoneUserCallLogs200ApplicationJson;
}
