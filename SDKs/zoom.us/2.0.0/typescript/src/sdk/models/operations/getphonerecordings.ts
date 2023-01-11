import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetPhoneRecordingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=owner_type" })
  ownerType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=recording_type" })
  recordingType?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=site_id" })
  siteId?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;
}


export class GetPhoneRecordingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum {
    One = "1",
    Two = "2"
}

export enum GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum {
    One = "1",
    Two = "2"
}

export enum GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum {
    Inbound = "inbound",
    Outbound = "outbound"
}

export enum GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum {
    User = "user",
    CallQueue = "call queue"
}


// GetPhoneRecordings200ApplicationJsonRecordingsOwner
/** 
 * The owner of the recording.
**/
export class GetPhoneRecordings200ApplicationJsonRecordingsOwner extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=extension_number" })
  extensionNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: GetPhoneRecordings200ApplicationJsonRecordingsOwnerTypeEnum;
}


export class GetPhoneRecordings200ApplicationJsonRecordingsSite extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;
}


export class GetPhoneRecordings200ApplicationJsonRecordings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=callee_name" })
  calleeName?: string;

  @SpeakeasyMetadata({ data: "json, name=callee_number" })
  calleeNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=callee_number_type" })
  calleeNumberType?: GetPhoneRecordings200ApplicationJsonRecordingsCalleeNumberTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=caller_name" })
  callerName?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_number" })
  callerNumber?: string;

  @SpeakeasyMetadata({ data: "json, name=caller_number_type" })
  callerNumberType?: GetPhoneRecordings200ApplicationJsonRecordingsCallerNumberTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: GetPhoneRecordings200ApplicationJsonRecordingsDirectionEnum;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=owner" })
  owner?: GetPhoneRecordings200ApplicationJsonRecordingsOwner;

  @SpeakeasyMetadata({ data: "json, name=recording_type" })
  recordingType?: string;

  @SpeakeasyMetadata({ data: "json, name=site" })
  site?: GetPhoneRecordings200ApplicationJsonRecordingsSite;
}


export class GetPhoneRecordings200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=recordings", elemType: GetPhoneRecordings200ApplicationJsonRecordings })
  recordings?: GetPhoneRecordings200ApplicationJsonRecordings[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class GetPhoneRecordingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: GetPhoneRecordingsQueryParams;

  @SpeakeasyMetadata()
  security: GetPhoneRecordingsSecurity;
}


export class GetPhoneRecordingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getPhoneRecordings200ApplicationJSONObject?: GetPhoneRecordings200ApplicationJson;

  @SpeakeasyMetadata()
  getPhoneRecordings400ApplicationJSONAny?: any;
}
