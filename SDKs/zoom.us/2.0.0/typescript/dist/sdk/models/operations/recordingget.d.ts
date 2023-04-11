import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
export declare class RecordingGetSecurity extends SpeakeasyBase {
    oAuth: string;
}
export declare class RecordingGetRequest extends SpeakeasyBase {
    /**
     * Get the `download_access_token` field for downloading meeting recordings.
     */
    includeFields?: string;
    /**
     * To get Cloud Recordings of a meeting, provide the meeting ID or meeting UUID. If the meeting ID is provided instead of UUID,the response will be for the latest meeting instance.
     *
     * @remarks
     *
     * To get Cloud Recordings of a webinar, provide the webinar ID or the webinar UUID. If the webinar ID is provided instead of UUID,the response will be for the latest webinar instance.
     *
     * If a UUID starts with "/" or contains "//" (example: "/ajXp112QmuoKj4854875=="), you must **double encode** the UUID before making an API request.
     */
    meetingId: string;
    /**
     * Time to live (TTL) of the `download_access_token`. This is only valid if the `include_fields` query parameter contains `download_access_token`. The range is between 0-604800.
     */
    ttl?: number;
}
/**
 * The recording status.
 */
export declare enum RecordingGetRecordingFileListRecordingFilesStatusEnum {
    Completed = "completed"
}
/**
 * Recording file object.
 */
export declare class RecordingGetRecordingFileListRecordingFiles extends SpeakeasyBase {
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
    status?: RecordingGetRecordingFileListRecordingFilesStatusEnum;
}
/**
 * List of recording file.
 */
export declare class RecordingGetRecordingFileList extends SpeakeasyBase {
    /**
     * Unique Identifier of the user account.
     */
    accountId?: string;
    /**
     * JWT token for downloading the meeting recording.
     *
     * @remarks
     *  This is only returned if the `include_fields` query parameter contains `download_access_token`.
     */
    downloadAccessToken?: string;
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
    recordingFiles?: RecordingGetRecordingFileListRecordingFiles[];
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
export declare class RecordingGetResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    /**
     * **Error Code:** `200` <br>
     *
     * @remarks
     * You do not have the right permissions.
     * **HTTP Status Code:** `200`<br>
     * Recording object returned.<br>
     *
     */
    recordingFileList?: RecordingGetRecordingFileList;
    statusCode: number;
    rawResponse?: AxiosResponse;
}
