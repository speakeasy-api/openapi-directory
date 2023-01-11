import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingDeleteOnePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;

  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=recordingId" })
  recordingId: string;
}

export enum RecordingDeleteOneActionEnum {
    Trash = "trash",
    Delete = "delete"
}


export class RecordingDeleteOneQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: RecordingDeleteOneActionEnum;
}


export class RecordingDeleteOneSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class RecordingDeleteOneRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingDeleteOnePathParams;

  @SpeakeasyMetadata()
  queryParams: RecordingDeleteOneQueryParams;

  @SpeakeasyMetadata()
  security: RecordingDeleteOneSecurity;
}


export class RecordingDeleteOneResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
