import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneUserRecordingsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class PhoneUserRecordingsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class PhoneUserRecordingsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class PhoneUserRecordings200ApplicationJsonRecordings extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=date_time" })
  dateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=direction" })
  direction?: string;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;
}


// PhoneUserRecordings200ApplicationJson
/** 
 * Phone User Recordings
**/
export class PhoneUserRecordings200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=recordings", elemType: PhoneUserRecordings200ApplicationJsonRecordings })
  recordings?: PhoneUserRecordings200ApplicationJsonRecordings[];

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class PhoneUserRecordingsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhoneUserRecordingsPathParams;

  @SpeakeasyMetadata()
  queryParams: PhoneUserRecordingsQueryParams;

  @SpeakeasyMetadata()
  security: PhoneUserRecordingsSecurity;
}


export class PhoneUserRecordingsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  phoneUserRecordings200ApplicationJSONObject?: PhoneUserRecordings200ApplicationJson;
}
