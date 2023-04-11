import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class GetAccountCloudRecordingSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class GetAccountCloudRecordingRequest extends SpeakeasyBase {
    /**
     * Unique identifier of the account.
     */
    accountId: string;
    /**
     * The start date in UTC for the monthly range for which you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date. For example, if you make the API request on June 30, 2020, without providing the “from” and “to” parameters, by default the value of 'from' field will be “2020-06-30” and the value of the 'to' field will be “2020-07-01”.
     */
    from?: Date;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The end date for the monthly range for which you would like to retrieve recordings. The maximum range can be a month.
     */
    to?: Date;
}
/**
 * The recording file type. The value of this field could be one of the following:<br>
 *
 * @remarks
 * * `MP4`: Video file of the recording.<br>
 * * `M4A` Audio-only file of the recording.<br>
 * * `TB`: Timestamp file of the recording in JSON format.<br>
 * * `TRANSCRIPT`: Transcription file of the recording in VTT format.<br>
 * * `CHAT`: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>
 * * `CC`: File containing closed captions of the recording in VTT file format.<br>
 * * `CSV`: File containing polling data in csv format.
 *
 * A recording file object with file type of either `CC` or `TB` **does not have** the following properties:<br>
 * 	`id`, `status`, `file_size`, `recording_type`, and `play_url`.
 */
export declare enum GetAccountCloudRecording200ApplicationXMLMeetingsRecordingFilesFileTypeEnum {
    Mp4 = "MP4",
    M4A = "M4A",
    Chat = "CHAT",
    Transcript = "TRANSCRIPT",
    Cc = "CC",
    Csv = "CSV",
    Tb = "TB"
}
/**
 * The recording type. The value of this field can be one of the following:<br>
 *
 * @remarks
 * * `shared_screen_with_speaker_view(CC)`
 * * `shared_screen_with_speaker_view`
 * * `shared_screen_with_gallery_view`
 * * `shared_screen`
 * * `active_speaker`
 * * `gallery_view`
 * * `audio_only`
 * * `audio_transcript`
 * * `chat_file`
 * * `host_video`
 * * `closed_caption`
 * * `poll`
 * * `timeline`
 * * `thumbnail`
 *
 */
export declare enum GetAccountCloudRecording200ApplicationXMLMeetingsRecordingFilesRecordingTypeEnum {
    SharedScreenWithSpeakerViewCC = "shared_screen_with_speaker_view(CC)",
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
/**
 * The status of the recording, either `completed` or `processing`.
 */
export declare enum GetAccountCloudRecording200ApplicationXMLMeetingsRecordingFilesStatusEnum {
    Completed = "completed",
    Processing = "processing"
}
export declare class GetAccountCloudRecording200ApplicationXMLMeetingsRecordingFiles extends SpeakeasyBase {
    /**
     * The URL using which the recording can be downloaded
     */
    downloadUrl?: string;
    /**
     * The size of the recording file in bytes.
     */
    fileSize?: number;
    /**
     * The recording file type. The value of this field could be one of the following:<br>
     *
     * @remarks
     * * `MP4`: Video file of the recording.<br>
     * * `M4A` Audio-only file of the recording.<br>
     * * `TB`: Timestamp file of the recording in JSON format.<br>
     * * `TRANSCRIPT`: Transcription file of the recording in VTT format.<br>
     * * `CHAT`: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>
     * * `CC`: File containing closed captions of the recording in VTT file format.<br>
     * * `CSV`: File containing polling data in csv format.
     *
     * A recording file object with file type of either `CC` or `TB` **does not have** the following properties:<br>
     * 	`id`, `status`, `file_size`, `recording_type`, and `play_url`.
     */
    fileType?: GetAccountCloudRecording200ApplicationXMLMeetingsRecordingFilesFileTypeEnum;
    /**
     * Recording ID. Identifier for the recording.
     */
    id?: string;
    /**
     * Universally unique identifier of the meeting instance that was being recorded.
     */
    meetingId?: string;
    /**
     * The URL using which recording can be played.
     */
    playUrl?: string;
    /**
     * The date and time at which the recording ended.
     */
    recordingEnd?: string;
    /**
     * The date and time at which the recording started.
     */
    recordingStart?: string;
    /**
     * The recording type. The value of this field can be one of the following:<br>
     *
     * @remarks
     * * `shared_screen_with_speaker_view(CC)`
     * * `shared_screen_with_speaker_view`
     * * `shared_screen_with_gallery_view`
     * * `shared_screen`
     * * `active_speaker`
     * * `gallery_view`
     * * `audio_only`
     * * `audio_transcript`
     * * `chat_file`
     * * `host_video`
     * * `closed_caption`
     * * `poll`
     * * `timeline`
     * * `thumbnail`
     *
     */
    recordingType?: GetAccountCloudRecording200ApplicationXMLMeetingsRecordingFilesRecordingTypeEnum;
    /**
     * The status of the recording, either `completed` or `processing`.
     */
    status?: GetAccountCloudRecording200ApplicationXMLMeetingsRecordingFilesStatusEnum;
}
export declare class GetAccountCloudRecording200ApplicationXMLMeetings extends SpeakeasyBase {
    /**
     * The scheduled duration of the meeting.
     */
    duration?: number;
    /**
     * User ID of the user who is set as the host of the meeting.
     */
    hostId?: string;
    /**
     * Meeting ID - Unique Identifier of a meeting, also known as Meeting Number.
     */
    id?: string;
    /**
     * The total number of recordings retrieved from the account.
     */
    recordingCount?: number;
    /**
     * Recording files object
     */
    recordingFiles?: GetAccountCloudRecording200ApplicationXMLMeetingsRecordingFiles[];
    /**
     * The date and time at which the meeting started.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * The total size of the meeting in bytes.
     */
    totalSize?: number;
    /**
     * Universally Unique Identifier of a meeting instance. Each meeting instance will have its own meeting UUID.
     */
    uuid?: string;
}
/**
 * **Response Error Code:** `200` <br>
 *
 * @remarks
 * Only available for Paid account.
 *
 * **HTTP Status Code:** `200` <br>
 * Recording(s) listed successfully.
 *
 *
 */
export declare class GetAccountCloudRecording200ApplicationXML extends SpeakeasyBase {
    /**
     * The start date for the monthly range for which you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date. For example, if you make the API request on June 30, 2020, without providing the “from” and “to” parameters, by default the value of 'from' field will be “2020-06-30” and the value of the 'to' field will be “2020-07-01”.
     */
    from?: Date;
    /**
     * Meetings Object
     */
    meetings?: GetAccountCloudRecording200ApplicationXMLMeetings[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The end date for the monthly range for which you would like to retrieve recordings. The maximum range can be a month.
     */
    to?: Date;
    /**
     * Total number of records found for this request across all pages.
     */
    totalRecords?: number;
}
/**
 * The recording file type. The value of this field could be one of the following:<br>
 *
 * @remarks
 * * `MP4`: Video file of the recording.<br>
 * * `M4A` Audio-only file of the recording.<br>
 * * `TB`: Timestamp file of the recording in JSON format.<br>
 * * `TRANSCRIPT`: Transcription file of the recording in VTT format.<br>
 * * `CHAT`: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>
 * * `CC`: File containing closed captions of the recording in VTT file format.<br>
 * * `CSV`: File containing polling data in csv format.
 *
 * A recording file object with file type of either `CC` or `TB` **does not have** the following properties:<br>
 * 	`id`, `status`, `file_size`, `recording_type`, and `play_url`.
 */
export declare enum GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum {
    Mp4 = "MP4",
    M4A = "M4A",
    Chat = "CHAT",
    Transcript = "TRANSCRIPT",
    Cc = "CC",
    Csv = "CSV",
    Tb = "TB"
}
/**
 * The recording type. The value of this field can be one of the following:<br>
 *
 * @remarks
 * * `shared_screen_with_speaker_view(CC)`
 * * `shared_screen_with_speaker_view`
 * * `shared_screen_with_gallery_view`
 * * `shared_screen`
 * * `active_speaker`
 * * `gallery_view`
 * * `audio_only`
 * * `audio_transcript`
 * * `chat_file`
 * * `host_video`
 * * `closed_caption`
 * * `poll`
 * * `timeline`
 * * `thumbnail`
 *
 */
export declare enum GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum {
    SharedScreenWithSpeakerViewCC = "shared_screen_with_speaker_view(CC)",
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
/**
 * The status of the recording, either `completed` or `processing`.
 */
export declare enum GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnum {
    Completed = "completed",
    Processing = "processing"
}
export declare class GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFiles extends SpeakeasyBase {
    /**
     * The URL using which the recording can be downloaded
     */
    downloadUrl?: string;
    /**
     * The size of the recording file in bytes.
     */
    fileSize?: number;
    /**
     * The recording file type. The value of this field could be one of the following:<br>
     *
     * @remarks
     * * `MP4`: Video file of the recording.<br>
     * * `M4A` Audio-only file of the recording.<br>
     * * `TB`: Timestamp file of the recording in JSON format.<br>
     * * `TRANSCRIPT`: Transcription file of the recording in VTT format.<br>
     * * `CHAT`: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>
     * * `CC`: File containing closed captions of the recording in VTT file format.<br>
     * * `CSV`: File containing polling data in csv format.
     *
     * A recording file object with file type of either `CC` or `TB` **does not have** the following properties:<br>
     * 	`id`, `status`, `file_size`, `recording_type`, and `play_url`.
     */
    fileType?: GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesFileTypeEnum;
    /**
     * Recording ID. Identifier for the recording.
     */
    id?: string;
    /**
     * Universally unique identifier of the meeting instance that was being recorded.
     */
    meetingId?: string;
    /**
     * The URL using which recording can be played.
     */
    playUrl?: string;
    /**
     * The date and time at which the recording ended.
     */
    recordingEnd?: string;
    /**
     * The date and time at which the recording started.
     */
    recordingStart?: string;
    /**
     * The recording type. The value of this field can be one of the following:<br>
     *
     * @remarks
     * * `shared_screen_with_speaker_view(CC)`
     * * `shared_screen_with_speaker_view`
     * * `shared_screen_with_gallery_view`
     * * `shared_screen`
     * * `active_speaker`
     * * `gallery_view`
     * * `audio_only`
     * * `audio_transcript`
     * * `chat_file`
     * * `host_video`
     * * `closed_caption`
     * * `poll`
     * * `timeline`
     * * `thumbnail`
     *
     */
    recordingType?: GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesRecordingTypeEnum;
    /**
     * The status of the recording, either `completed` or `processing`.
     */
    status?: GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFilesStatusEnum;
}
export declare class GetAccountCloudRecording200ApplicationJSONMeetings extends SpeakeasyBase {
    /**
     * The scheduled duration of the meeting.
     */
    duration?: number;
    /**
     * User ID of the user who is set as the host of the meeting.
     */
    hostId?: string;
    /**
     * Meeting ID - Unique Identifier of a meeting, also known as Meeting Number.
     */
    id?: string;
    /**
     * The total number of recordings retrieved from the account.
     */
    recordingCount?: number;
    /**
     * Recording files object
     */
    recordingFiles?: GetAccountCloudRecording200ApplicationJSONMeetingsRecordingFiles[];
    /**
     * The date and time at which the meeting started.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * The total size of the meeting in bytes.
     */
    totalSize?: number;
    /**
     * Universally Unique Identifier of a meeting instance. Each meeting instance will have its own meeting UUID.
     */
    uuid?: string;
}
/**
 * **Response Error Code:** `200` <br>
 *
 * @remarks
 * Only available for Paid account.
 *
 * **HTTP Status Code:** `200` <br>
 * Recording(s) listed successfully.
 *
 *
 */
export declare class GetAccountCloudRecording200ApplicationJSON extends SpeakeasyBase {
    /**
     * The start date for the monthly range for which you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date. For example, if you make the API request on June 30, 2020, without providing the “from” and “to” parameters, by default the value of 'from' field will be “2020-06-30” and the value of the 'to' field will be “2020-07-01”.
     */
    from?: Date;
    /**
     * Meetings Object
     */
    meetings?: GetAccountCloudRecording200ApplicationJSONMeetings[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * The end date for the monthly range for which you would like to retrieve recordings. The maximum range can be a month.
     */
    to?: Date;
    /**
     * Total number of records found for this request across all pages.
     */
    totalRecords?: number;
}
export declare class GetAccountCloudRecordingResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **Response Error Code:** `200` <br>
     *
     * @remarks
     * Only available for Paid account.
     *
     * **HTTP Status Code:** `200` <br>
     * Recording(s) listed successfully.
     *
     *
     */
    getAccountCloudRecording200ApplicationJSONObject?: GetAccountCloudRecording200ApplicationJSON;
}
