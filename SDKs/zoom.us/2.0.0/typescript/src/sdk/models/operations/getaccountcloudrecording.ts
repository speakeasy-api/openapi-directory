import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetAccountCloudRecordingPathParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "pathParam, style=simple;explode=false;name=accountId" })
  accountId: string;
}


export class GetAccountCloudRecordingQueryParams extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "queryParam, style=form;explode=true;name=to" })
  to?: Date;
}


export class GetAccountCloudRecordingSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuth: shared.SchemeOAuth;
}

export enum GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum {
    Mp4 = "MP4",
    M4A = "M4A",
    Chat = "CHAT",
    Transcript = "TRANSCRIPT",
    Cc = "CC",
    Csv = "CSV",
    Tb = "TB"
}

export enum GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum {
    SharedScreenWithSpeakerViewCc = "shared_screen_with_speaker_view(CC)",
    SharedScreenWithSpeakerView = "shared_screen_with_speaker_view",
    SharedScreenWithGalleryView = "shared_screen_with_gallery_view",
    ActiveSpeaker = "active_speaker",
    GalleryView = "gallery_view",
    SharedScreen = "shared_screen",
    AudioOnly = "audio_only",
    AudioTranscript = "audio_transcript",
    ChatFile = "chat_file",
    Poll = "poll",
    HostVideo = "host_video",
    ClosedCaption = "closed_caption",
    Timeline = "timeline",
    Thumbnail = "thumbnail"
}

export enum GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum {
    Completed = "completed",
    Processing = "processing"
}


export class GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=download_url" })
  downloadUrl?: string;

  @SpeakeasyMetadata({ data: "json, name=file_size" })
  fileSize?: number;

  @SpeakeasyMetadata({ data: "json, name=file_type" })
  fileType?: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum;

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
  recordingType?: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum;

  @SpeakeasyMetadata({ data: "json, name=status" })
  status?: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum;
}


export class GetAccountCloudRecording200ApplicationJsonMeetings extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=duration" })
  duration?: number;

  @SpeakeasyMetadata({ data: "json, name=host_id" })
  hostId?: string;

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=recording_count" })
  recordingCount?: number;

  @SpeakeasyMetadata({ data: "json, name=recording_files", elemType: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles })
  recordingFiles?: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles[];

  @SpeakeasyMetadata({ data: "json, name=start_time" })
  startTime?: Date;

  @SpeakeasyMetadata({ data: "json, name=topic" })
  topic?: string;

  @SpeakeasyMetadata({ data: "json, name=total_size" })
  totalSize?: number;

  @SpeakeasyMetadata({ data: "json, name=uuid" })
  uuid?: string;
}


export class GetAccountCloudRecording200ApplicationJson extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=from" })
  from?: Date;

  @SpeakeasyMetadata({ data: "json, name=meetings", elemType: GetAccountCloudRecording200ApplicationJsonMeetings })
  meetings?: GetAccountCloudRecording200ApplicationJsonMeetings[];

  @SpeakeasyMetadata({ data: "json, name=next_page_token" })
  nextPageToken?: string;

  @SpeakeasyMetadata({ data: "json, name=page_size" })
  pageSize?: number;

  @SpeakeasyMetadata({ data: "json, name=to" })
  to?: Date;

  @SpeakeasyMetadata({ data: "json, name=total_records" })
  totalRecords?: number;
}


export class GetAccountCloudRecordingRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  pathParams: GetAccountCloudRecordingPathParams;

  @SpeakeasyMetadata()
  queryParams: GetAccountCloudRecordingQueryParams;

  @SpeakeasyMetadata()
  security: GetAccountCloudRecordingSecurity;
}


export class GetAccountCloudRecordingResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  body?: Uint8Array;

  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  statusCode: number;

  @SpeakeasyMetadata()
  getAccountCloudRecording200ApplicationJSONObject?: GetAccountCloudRecording200ApplicationJson;
}
