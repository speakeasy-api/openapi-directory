import { SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";
export declare class GetAccountCloudRecordingPathParams extends SpeakeasyBase {
    accountId: string;
}
export declare class GetAccountCloudRecordingQueryParams extends SpeakeasyBase {
    from?: Date;
    nextPageToken?: string;
    pageSize?: number;
    to?: Date;
}
export declare class GetAccountCloudRecordingSecurity extends SpeakeasyBase {
    oAuth: shared.SchemeOAuth;
}
export declare enum GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum {
    Mp4 = "MP4",
    M4A = "M4A",
    Chat = "CHAT",
    Transcript = "TRANSCRIPT",
    Cc = "CC",
    Csv = "CSV",
    Tb = "TB"
}
export declare enum GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum {
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
export declare enum GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum {
    Completed = "completed",
    Processing = "processing"
}
export declare class GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles extends SpeakeasyBase {
    downloadUrl?: string;
    fileSize?: number;
    fileType?: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesFileTypeEnum;
    id?: string;
    meetingId?: string;
    playUrl?: string;
    recordingEnd?: string;
    recordingStart?: string;
    recordingType?: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesRecordingTypeEnum;
    status?: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFilesStatusEnum;
}
export declare class GetAccountCloudRecording200ApplicationJsonMeetings extends SpeakeasyBase {
    duration?: number;
    hostId?: string;
    id?: string;
    recordingCount?: number;
    recordingFiles?: GetAccountCloudRecording200ApplicationJsonMeetingsRecordingFiles[];
    startTime?: Date;
    topic?: string;
    totalSize?: number;
    uuid?: string;
}
export declare class GetAccountCloudRecording200ApplicationJson extends SpeakeasyBase {
    from?: Date;
    meetings?: GetAccountCloudRecording200ApplicationJsonMeetings[];
    nextPageToken?: string;
    pageSize?: number;
    to?: Date;
    totalRecords?: number;
}
export declare class GetAccountCloudRecordingRequest extends SpeakeasyBase {
    pathParams: GetAccountCloudRecordingPathParams;
    queryParams: GetAccountCloudRecordingQueryParams;
    security: GetAccountCloudRecordingSecurity;
}
export declare class GetAccountCloudRecordingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    getAccountCloudRecording200ApplicationJSONObject?: GetAccountCloudRecording200ApplicationJson;
}
