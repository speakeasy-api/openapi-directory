import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class PhoneUserVoiceMailsPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}

export enum PhoneUserVoiceMailsStatusEnum {
    All = "all",
    Read = "read",
    Unread = "unread"
}


export class PhoneUserVoiceMailsQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=status" })
  status?: PhoneUserVoiceMailsStatusEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class PhoneUserVoiceMailsSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum {
    Read = "read",
    Unread = "unread"
}


export class PhoneUserVoiceMails200ApplicationJsonVoiceMails extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: PhoneUserVoiceMails200ApplicationJsonVoiceMailsStatusEnum;
}


// PhoneUserVoiceMails200ApplicationJson
/** 
 * Phone User Voice Mails
**/
export class PhoneUserVoiceMails200ApplicationJson extends SpeakeasyBase {
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

  @SpeakeasyMetadata({ data: "json, name=voice_mails", elemType: PhoneUserVoiceMails200ApplicationJsonVoiceMails })
  voiceMails?: PhoneUserVoiceMails200ApplicationJsonVoiceMails[];
}


export class PhoneUserVoiceMailsRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: PhoneUserVoiceMailsPathParams;

  @SpeakeasyMetadata()
  queryParams: PhoneUserVoiceMailsQueryParams;

  @SpeakeasyMetadata()
  security: PhoneUserVoiceMailsSecurity;
}


export class PhoneUserVoiceMailsResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  phoneUserVoiceMails200ApplicationJSONObject?: PhoneUserVoiceMails200ApplicationJson;
}
