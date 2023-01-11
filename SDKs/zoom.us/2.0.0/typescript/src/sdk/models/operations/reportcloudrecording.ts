import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ReportCloudRecordingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to: Date;
}


export class ReportCloudRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ReportCloudRecording200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=cloud_recording_storage" })
  cloudRecordingStorage?: any[];

  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;
}


export class ReportCloudRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ReportCloudRecordingQueryParams;

  @SpeakeasyMetadata()
  security: ReportCloudRecordingSecurity;
}


export class ReportCloudRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  reportCloudRecording200ApplicationJSONObject?: ReportCloudRecording200ApplicationJson;
}
