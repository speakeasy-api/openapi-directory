import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class InMeetingRecordingControlPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}


export class InMeetingRecordingControlApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=method" })
  method?: string;
}


export class InMeetingRecordingControlMultipartFormData extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "multipart_form, name=method" })
  method?: string;
}


export class InMeetingRecordingControlRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  object?: InMeetingRecordingControlApplicationJson;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  object1?: InMeetingRecordingControlMultipartFormData;
}


export class InMeetingRecordingControlRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: InMeetingRecordingControlPathParams;

  @SpeakeasyMetadata()
  request?: InMeetingRecordingControlRequests;
}


export class InMeetingRecordingControlResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  inMeetingRecordingControl202ApplicationJSONAny?: any;
}
