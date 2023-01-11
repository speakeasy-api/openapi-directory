import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class MeetingLiveStreamUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


// MeetingLiveStreamUpdateApplicationJson
/** 
 * Meeting live stream.
**/
export class MeetingLiveStreamUpdateApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=page_url" })
  pageUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=stream_key" })
  streamKey: string;

  @SpeakeasyMetadata({ data: "json, name=stream_url" })
  streamUrl: string;
}


// MeetingLiveStreamUpdateMultipartFormData
/** 
 * Meeting live stream.
**/
export class MeetingLiveStreamUpdateMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=page_url" })
  pageUrl?: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=stream_key" })
  streamKey: string;

  @SpeakeasyMetadata({ data: "multipart_form, name=stream_url" })
  streamUrl: string;
}


export class MeetingLiveStreamUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: MeetingLiveStreamUpdateApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: MeetingLiveStreamUpdateMultipartFormData;
}


export class MeetingLiveStreamUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class MeetingLiveStreamUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: MeetingLiveStreamUpdatePathParams;

  @SpeakeasyMetadata()
  request: MeetingLiveStreamUpdateRequests;

  @SpeakeasyMetadata()
  security: MeetingLiveStreamUpdateSecurity;
}


export class MeetingLiveStreamUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
