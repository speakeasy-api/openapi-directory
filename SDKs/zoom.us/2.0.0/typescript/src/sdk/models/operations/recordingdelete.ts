import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingDeletePathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}

export enum RecordingDeleteActionEnum {
    Trash = "trash",
    Delete = "delete"
}


export class RecordingDeleteQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=action" })
  action?: RecordingDeleteActionEnum;
}


export class RecordingDeleteSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class RecordingDeleteRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingDeletePathParams;

  @SpeakeasyMetadata()
  queryParams: RecordingDeleteQueryParams;

  @SpeakeasyMetadata()
  security: RecordingDeleteSecurity;
}


export class RecordingDeleteResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;
}
