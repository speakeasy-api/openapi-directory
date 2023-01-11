import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingStatusUpdateOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordingId" })
  recordingId: string;
}


export class RecordingStatusUpdateOneRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  any?: any;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  any1?: any;
}


export class RecordingStatusUpdateOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class RecordingStatusUpdateOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingStatusUpdateOnePathParams;

  @SpeakeasyMetadata()
  request: RecordingStatusUpdateOneRequests;

  @SpeakeasyMetadata()
  security: RecordingStatusUpdateOneSecurity;
}


export class RecordingStatusUpdateOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
