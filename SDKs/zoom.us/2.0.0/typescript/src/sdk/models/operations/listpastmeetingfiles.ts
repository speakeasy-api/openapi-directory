import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class ListPastMeetingFilesPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: number;
}


export class ListPastMeetingFilesSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}


export class ListPastMeetingFiles200ApplicationJsonInMeetingFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_name" })
  fileName?: string;

  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;
}


export class ListPastMeetingFiles200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=in_meeting_files", elemType: ListPastMeetingFiles200ApplicationJsonInMeetingFiles })
  inMeetingFiles?: ListPastMeetingFiles200ApplicationJsonInMeetingFiles[];

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class ListPastMeetingFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: ListPastMeetingFilesPathParams;

  @SpeakeasyMetadata()
  security: ListPastMeetingFilesSecurity;
}


export class ListPastMeetingFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listPastMeetingFiles200ApplicationJSONObject?: ListPastMeetingFiles200ApplicationJson;
}
