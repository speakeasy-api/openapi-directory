import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RecordingsListSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class RecordingsListRequest extends SpeakeasyBase {
    /**
     * The start date in 'yyyy-mm-dd' UTC format for the date range for which you would like to retrieve recordings. The maximum range can be a month. If no value is provided for this field, the default will be current date. For example, if you make the API request on June 30, 2020, without providing the “from” and “to” parameters, by default the value of 'from' field will be “2020-06-30” and the value of the 'to' field will be “2020-07-01”.
     *
     * @remarks
     *
     * **Note**: The "trash" files cannot be filtered by date range and thus, the "from" and "to" fields should not be used for trash files.
     */
    from?: Date;
    /**
     * Query Metadata of Recording if an On-Premise Meeting Connector was used for the meeting.
     */
    mc?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date in 'yyyy-mm-dd' 'yyyy-mm-dd' UTC format.
     */
    to?: Date;
    /**
     * Query trash.
     *
     * @remarks
     * `true`: List recordings from trash.<br> `false`: Do not list recordings from the trash.<br> The default value is `false`. If you set it to `true`, you can use the `trash_type` property to indicate the type of Cloud recording that you need to retrieve.
     */
    trash?: boolean;
    /**
     * The type of Cloud recording that you would like to retrieve from the trash. The value can be one of the following:<br>
     *
     * @remarks
     *     `meeting_recordings`: List all meeting recordings from the trash.<br>
     *     `recording_file`: List all individual recording files from the trash.
     */
    trashType?: string;
    /**
     * The user ID or email address of the user. For user-level apps, pass `me` as the value for userId.
     */
    userId: string;
}
/**
 * The recording status.
 */
export declare enum RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum {
    Completed = "completed"
}
/**
 * Recording file object.
 */
export declare class RecordingsListRecordingListRecordingFileListRecordingFiles extends SpeakeasyBase {
    /**
     * The time at which recording was deleted. Returned in the response only for trash query.
     */
    deletedTime?: string;
    /**
     * The URL using which the recording file can be downloaded. **To access a private or password protected cloud recording of a user in your account, you can use a [Zoom JWT App Type](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app). Use the generated JWT token as the value of the `access_token` query parameter and include this query parameter at the end of the URL as shown in the example.**
     *
     * @remarks
     * <br>
     * Example: `https://api.zoom.us/recording/download/{{ Download Path }}?access_token={{ JWT Token }}`
     *
     * **Similarly, if the user has installed your OAuth app that contains recording scope(s), you can also use the user's [OAuth access token](https://marketplace.zoom.us/docs/guides/auth/oauth) to download the Cloud Recording.**<br>
     *
     * Example: `https://api.zoom.us/recording/download/{{ Download Path }}?access_token={{ OAuth Access Token }}`
     *
     *
     */
    downloadUrl?: string;
    /**
     * The recording file size.
     */
    fileSize?: number;
    /**
     * The recording file type. The value of this field could be one of the following:<br>
     *
     * @remarks
     * `MP4`: Video file of the recording.<br>`M4A` Audio-only file of the recording.<br>`TIMELINE`: Timestamp file of the recording in JSON file format. To get a timeline file, the "Add a timestamp to the recording" setting must be enabled in the [recording settings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-recording#h_3f14c3a4-d16b-4a3c-bbe5-ef7d24500048). The time will display in the host's timezone, set on their Zoom profile.
     * <br> `TRANSCRIPT`: Transcription file of the recording in VTT format.<br> `CHAT`: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>`CC`: File containing closed captions of the recording in VTT file format.<br>`CSV`: File containing polling data in csv format.
     *
     * <br>
     *
     * A recording file object with file type of either `CC` or `TIMELINE` **does not have** the following properties:<br>
     * 	`id`, `status`, `file_size`, `recording_type`, and `play_url`.
     */
    fileType?: string;
    /**
     * The recording file ID. Included in the response of general query.
     */
    id?: string;
    /**
     * The meeting ID.
     */
    meetingId?: string;
    /**
     * The URL using which a recording file can be played.
     */
    playUrl?: string;
    /**
     * The recording end time. Response in general query.
     */
    recordingEnd?: string;
    /**
     * The recording start time.
     */
    recordingStart?: string;
    /**
     * The recording type. The value of this field can be one of the following:<br>`shared_screen_with_speaker_view(CC)`<br>`shared_screen_with_speaker_view`<br>`shared_screen_with_gallery_view`<br>`speaker_view`<br>`gallery_view`<br>`shared_screen`<br>`audio_only`<br>`audio_transcript`<br>`chat_file`<br>`active_speaker`<br>`poll`
     */
    recordingType?: string;
    /**
     * The recording status.
     */
    status?: RecordingsListRecordingListRecordingFileListRecordingFilesStatusEnum;
}
/**
 * List of recording file.
 */
export declare class RecordingsListRecordingListRecordingFileList extends SpeakeasyBase {
    /**
     * Unique Identifier of the user account.
     */
    accountId?: string;
    /**
     * Meeting duration.
     */
    duration?: number;
    /**
     * ID of the user set as host of meeting.
     */
    hostId?: string;
    /**
     * Meeting ID - also known as the meeting number.
     */
    id?: string;
    /**
     * Number of recording files returned in the response of this API call.
     */
    recordingCount?: string;
    /**
     * List of recording file.
     */
    recordingFiles?: RecordingsListRecordingListRecordingFileListRecordingFiles[];
    /**
     * The time at which the meeting started.
     */
    startTime?: Date;
    /**
     * Meeting topic.
     */
    topic?: string;
    /**
     * Total size of the recording.
     */
    totalSize?: string;
    /**
     * Type of the meeting that was recorded.
     *
     * @remarks
     *
     * Meeting Types:<br>`1` - Instant meeting.<br>`2` - Scheduled meeting.<br>`3` - Recurring meeting with no fixed time.<br>`8` - Recurring meeting with fixed time.
     */
    type?: string;
    /**
     * Unique Meeting Identifier. Each instance of the meeting will have its own UUID.
     */
    uuid?: string;
}
/**
 * Pagination object.
 */
export declare class RecordingsListRecordingList extends SpeakeasyBase {
    /**
     * Start Date.
     */
    from?: Date;
    /**
     * List of recordings.
     */
    meetings?: RecordingsListRecordingListRecordingFileList[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of pages returned for the request made.
     */
    pageCount?: number;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End Date.
     */
    to?: Date;
    /**
     * The number of all records available across pages.
     */
    totalRecords?: number;
}
export declare class RecordingsListResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **HTTP Status Code:** `200`<br>
     *
     * @remarks
     * List of recording objects returned.
     */
    recordingList?: RecordingsListRecordingList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
