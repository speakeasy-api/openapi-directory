import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPastWebinarFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=webinarId" })
  webinarId: string;
}


export class ListPastWebinarFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListPastWebinarFiles200ApplicationJsonInMeetingFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;
}


export class ListPastWebinarFiles200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=in_meeting_files", elemType: ListPastWebinarFiles200ApplicationJsonInMeetingFiles })
  inMeetingFiles?: ListPastWebinarFiles200ApplicationJsonInMeetingFiles[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListPastWebinarFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPastWebinarFilesPathParams;

  @SpeakeasyMetadata()
  security: ListPastWebinarFilesSecurity;
}


export class ListPastWebinarFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPastWebinarFiles200ApplicationJSONObject?: ListPastWebinarFiles200ApplicationJson;
}
