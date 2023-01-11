import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingStatusUpdatePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}


export class RecordingStatusUpdateRequests extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/json" })
  any?: any;

  @SpeakeasyMetadata({ data: "request, media_type=multipart/form-data" })
  any1?: any;
}


export class RecordingStatusUpdateSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class RecordingStatusUpdateRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingStatusUpdatePathParams;

  @SpeakeasyMetadata()
  request: RecordingStatusUpdateRequests;

  @SpeakeasyMetadata()
  security: RecordingStatusUpdateSecurity;
}


export class RecordingStatusUpdateResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
