import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingsListPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=userId" })
  userId: string;
}


export class RecordingsListQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=mc" })
  mc?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trash" })
  trash?: boolean;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=trash_type" })
  trashType?: string;
}


export class RecordingsListSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum {
    Completed = "completed"
}


// RecordingsListRecordingListRecordingFileListRecordingFiles
/** 
 * Recording file object.
**/
export class RecordingsListRecordingListRecordingFileListRecordingFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=deleted_time" })
  deletedTime?: string;

  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=file_type" })
  fileType?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=meeting_id" })
  meetingId?: string;

  @SpeakeasyMetadata({ data: "json, name=play_url" })
  playUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_end" })
  recordingEnd?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_start" })
  recordingStart?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_type" })
  recordingType?: string;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum;
}


// RecordingsListRecordingListRecordingFileList
/** 
 * List of recording file.
**/
export class RecordingsListRecordingListRecordingFileList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=host_id" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_count" })
  recordingCount?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_files", elemType: RecordingsListRecordingListRecordingFileListRecordingFiles })
  recordingFiles?: RecordingsListRecordingListRecordingFileListRecordingFiles[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=total_size" })
  totalSize?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


// RecordingsListRecordingList
/** 
 * Pagination object.
**/
export class RecordingsListRecordingList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=meetings", elemType: RecordingsListRecordingListRecordingFileList })
  meetings?: RecordingsListRecordingListRecordingFileList[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_count" })
  pageCount?: number;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class RecordingsListRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingsListPathParams;

  @SpeakeasyMetadata()
  queryParams: RecordingsListQueryParams;

  @SpeakeasyMetadata()
  security: RecordingsListSecurity;
}


export class RecordingsListResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recordingList?: RecordingsListRecordingList;

  @SpeakeasyMetadata()
  statusCode: number;
}
