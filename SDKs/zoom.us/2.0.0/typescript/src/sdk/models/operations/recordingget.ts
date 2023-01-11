import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class RecordingGetPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=meetingId" })
  meetingId: string;
}


export class RecordingGetQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=include_fields" })
  includeFields?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=ttl" })
  ttl?: number;
}


export class RecordingGetSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum RecordingGetRecordingFileListRecordingFilesStatusEnum {
    Completed = "completed"
}


// RecordingGetRecordingFileListRecordingFiles
/** 
 * Recording file object.
**/
export class RecordingGetRecordingFileListRecordingFiles extends SpeakeasyBase {
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
  status?: RecordingGetRecordingFileListRecordingFilesStatusEnum;
}


// RecordingGetRecordingFileList
/** 
 * List of recording file.
**/
export class RecordingGetRecordingFileList extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=account_id" })
  accountId?: string;

  @SpeakeasyMetadata({ data: "json, name=download_access_token" })
  downloadAccessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=host_id" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_count" })
  recordingCount?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_files", elemType: RecordingGetRecordingFileListRecordingFiles })
  recordingFiles?: RecordingGetRecordingFileListRecordingFiles[];

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


export class RecordingGetRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: RecordingGetPathParams;

  @SpeakeasyMetadata()
  queryParams: RecordingGetQueryParams;

  @SpeakeasyMetadata()
  security: RecordingGetSecurity;
}


export class RecordingGetResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  recordingFileList?: RecordingGetRecordingFileList;

  @SpeakeasyMetadata()
  statusCode: number;
}
