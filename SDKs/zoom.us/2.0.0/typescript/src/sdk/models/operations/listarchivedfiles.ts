import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";


export enum ListArchivedFilesQueryDataTypeEnum {
    MeetingStartTime = "meeting_start_time",
    ArchiveCompleteTime = "archive_complete_time"
}


export class ListArchivedFilesQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=query_data_type" })
  queryDataType?: ListArchivedFilesQueryDataTypeEnum;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: string;
}


export class ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_extension" })
  fileExtension?: string;

  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=file_type" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_type" })
  recordingType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: string;
}


export class ListArchivedFiles200ApplicationJsonMeetings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=archive_files", elemType: ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles })
  archiveFiles?: ListArchivedFiles200ApplicationJsonMeetingsArchiveFiles[];

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=host_id" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: number;

  @SpeakeasyMetadata({ data: "json, name=recording_count" })
  recordingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: string;

  @SpeakeasyMetadata({ data: "json, name=timezone" })
  timezone?: string;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=total_size" })
  totalSize?: number;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class ListArchivedFiles200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: string;

  @SpeakeasyMetadata({ data: "json, name=meetings", elemType: ListArchivedFiles200ApplicationJsonMeetings })
  meetings?: ListArchivedFiles200ApplicationJsonMeetings[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: string;
}


export class ListArchivedFilesRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  queryParams: ListArchivedFilesQueryParams;
}


export class ListArchivedFilesResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  listArchivedFiles200ApplicationJSONObject?: ListArchivedFiles200ApplicationJson;
}
