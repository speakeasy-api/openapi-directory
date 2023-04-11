import { SpeakeasyBase } from "../../../internal/utils";
import { AxiosResponse } from "axios";
/**
 * Query data type for `from` and `to`.
 */
export declare enum ListArchivedFilesQueryDataTypeEnum {
    MeetingStartTime = "meeting_start_time",
    ArchiveCompleteTime = "archive_complete_time"
}
export declare class ListArchivedFilesRequest extends SpeakeasyBase {
    /**
     * Start date for the query in "yyyy-MM-dd'T'HH:mm:ss'Z'" format. The duration for the query defined using the "from" and "to" parameters should not exceed 7 days as this API only provides a week's data at once.
     */
    from?: string;
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * Query data type for `from` and `to`.
     */
    queryDataType?: ListArchivedFilesQueryDataTypeEnum;
    /**
     * End date for the query in "yyyy-MM-dd'T'HH:mm:ss'Z'" format.
     */
    to?: string;
}
export declare class ListArchivedFiles200ApplicationXMLMeetingsArchiveFiles extends SpeakeasyBase {
    /**
     * The URL using which the archived file can be downloaded. To download the archived file of a meeting or a webinar hosted in your account, create a [Zoom JWT App Type](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app). Use the generated JWT token as the value of the access_token query parameter and include this query parameter at the end of the URL as shown in the example.
     *
     * @remarks
     *
     * Example: `https://{{base-domain}}/rec/archive/download/xxx?access_token={{Your-JWT}}`
     *
     * If a user has authorized and installed your OAuth app that supports archiving, use the user’s [OAuth access token](https://marketplace.zoom.us/docs/guides/auth/oauth) to download the file.
     *
     * Example: `https://{{base-domain}}/rec/archive/download/xxx?access_token={{ OAuth Access Token }}`
     */
    downloadUrl?: string;
    /**
     * Extension of the recording file.
     *
     * @remarks
     *
     */
    fileExtension?: string;
    /**
     * The recording file size.
     *
     * @remarks
     *
     */
    fileSize?: number;
    /**
     * Recorded file type. The value of this field could be one of the following:
     *
     * @remarks
     *
     * `MP4`: Video file of the recording.<br>
     * `M4A`: Audio-only file of the recording.<br>
     * `TRANSCRIPT`: Transcription file of the recording in VTT format.
     * CHAT: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>
     * `CC`: File containing closed captions of the recording in VTT file format.<br>
     * `CSV`: File containing polling data in csv format.
     */
    fileType?: string;
    /**
     * Unique identifier of the archived file.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The recording type. The value of this field can be one of the following:
     *
     * @remarks
     * * `shared_screen_with_speaker_view(CC)`
     * * `shared_screen_with_speaker_view`
     * * `shared_screen_with_gallery_view`
     * * `speaker_view`
     * * `gallery_view`
     * * `shared_screen`
     * * `audio_only`
     * * `audio_transcript`
     * * `chat_file`,
     * * `active_speaker`
     * * `host_video`
     *
     */
    recordingType?: string;
    /**
     * Status of the archived file.
     *
     * @remarks
     *
     */
    status?: string;
}
export declare class ListArchivedFiles200ApplicationXMLMeetings extends SpeakeasyBase {
    archiveFiles?: ListArchivedFiles200ApplicationXMLMeetingsArchiveFiles[];
    /**
     * Scheduled duration of the meeting or the webinar.
     */
    duration?: number;
    /**
     * ID of the user set as the host of meeting or the webinar that was archived.
     *
     * @remarks
     *
     */
    hostId?: string;
    /**
     * Unique identifier of the meeting(meetingId) or the webinar(webinarId).
     *
     * @remarks
     *
     */
    id?: number;
    /**
     * Number of recording files returned in the response of this API call.
     *
     * @remarks
     *
     */
    recordingCount?: number;
    /**
     * The time at which the meeting or the webinar started.
     *
     * @remarks
     *
     */
    startTime?: string;
    /**
     * Timezone of the host.
     */
    timezone?: string;
    /**
     * Meeting or webinar topic.
     */
    topic?: string;
    /**
     * Total size of the archive.
     *
     * @remarks
     *
     */
    totalSize?: number;
    /**
     * Type of the meeting or the webinar that was archived.<br>
     *
     * @remarks
     * <br>Meeting types:<br>
     * `1` - Instant meeting<br>
     * `2` - Scheduled meeting<br>
     * `3` - Recurring meeting with no fixed time<br>
     * 8 - Recurring meeting with fixed time
     *
     * Webinar types:<br>
     * `5` - Webinar<br>
     * `6` - Recurring webinar with no fixed time<br>
     * `9` - Recurring webinar with a fixed time
     *
     */
    type?: number;
    /**
     * Unique identifier of the meeting instance or the webinar instance during which the archiving took place. Each instance of the meeting will have its own UUID.
     *
     * @remarks
     *
     */
    uuid?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**
 *
 * @remarks
 * Archived files returned.
 *
 */
export declare class ListArchivedFiles200ApplicationXML extends SpeakeasyBase {
    /**
     * Start date for the query in "yyyy-MM-dd'T'HH:mm:ss'Z'" format. The duration for the query defined using the "from" and "to" parameters should not exceed 7 days as this API only provides a week's data at once.
     */
    from?: string;
    meetings?: ListArchivedFiles200ApplicationXMLMeetings[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date for the query in "yyyy-MM-dd'T'HH:mm:ss'Z'" format.
     */
    to?: string;
}
export declare class ListArchivedFiles200ApplicationJSONMeetingsArchiveFiles extends SpeakeasyBase {
    /**
     * The URL using which the archived file can be downloaded. To download the archived file of a meeting or a webinar hosted in your account, create a [Zoom JWT App Type](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app). Use the generated JWT token as the value of the access_token query parameter and include this query parameter at the end of the URL as shown in the example.
     *
     * @remarks
     *
     * Example: `https://{{base-domain}}/rec/archive/download/xxx?access_token={{Your-JWT}}`
     *
     * If a user has authorized and installed your OAuth app that supports archiving, use the user’s [OAuth access token](https://marketplace.zoom.us/docs/guides/auth/oauth) to download the file.
     *
     * Example: `https://{{base-domain}}/rec/archive/download/xxx?access_token={{ OAuth Access Token }}`
     */
    downloadUrl?: string;
    /**
     * Extension of the recording file.
     *
     * @remarks
     *
     */
    fileExtension?: string;
    /**
     * The recording file size.
     *
     * @remarks
     *
     */
    fileSize?: number;
    /**
     * Recorded file type. The value of this field could be one of the following:
     *
     * @remarks
     *
     * `MP4`: Video file of the recording.<br>
     * `M4A`: Audio-only file of the recording.<br>
     * `TRANSCRIPT`: Transcription file of the recording in VTT format.
     * CHAT: A TXT file containing in-meeting chat messages that were sent during the meeting.<br>
     * `CC`: File containing closed captions of the recording in VTT file format.<br>
     * `CSV`: File containing polling data in csv format.
     */
    fileType?: string;
    /**
     * Unique identifier of the archived file.
     *
     * @remarks
     *
     */
    id?: string;
    /**
     * The recording type. The value of this field can be one of the following:
     *
     * @remarks
     * * `shared_screen_with_speaker_view(CC)`
     * * `shared_screen_with_speaker_view`
     * * `shared_screen_with_gallery_view`
     * * `speaker_view`
     * * `gallery_view`
     * * `shared_screen`
     * * `audio_only`
     * * `audio_transcript`
     * * `chat_file`,
     * * `active_speaker`
     * * `host_video`
     *
     */
    recordingType?: string;
    /**
     * Status of the archived file.
     *
     * @remarks
     *
     */
    status?: string;
}
export declare class ListArchivedFiles200ApplicationJSONMeetings extends SpeakeasyBase {
    archiveFiles?: ListArchivedFiles200ApplicationJSONMeetingsArchiveFiles[];
    /**
     * Scheduled duration of the meeting or the webinar.
     */
    duration?: number;
    /**
     * ID of the user set as the host of meeting or the webinar that was archived.
     *
     * @remarks
     *
     */
    hostId?: string;
    /**
     * Unique identifier of the meeting(meetingId) or the webinar(webinarId).
     *
     * @remarks
     *
     */
    id?: number;
    /**
     * Number of recording files returned in the response of this API call.
     *
     * @remarks
     *
     */
    recordingCount?: number;
    /**
     * The time at which the meeting or the webinar started.
     *
     * @remarks
     *
     */
    startTime?: string;
    /**
     * Timezone of the host.
     */
    timezone?: string;
    /**
     * Meeting or webinar topic.
     */
    topic?: string;
    /**
     * Total size of the archive.
     *
     * @remarks
     *
     */
    totalSize?: number;
    /**
     * Type of the meeting or the webinar that was archived.<br>
     *
     * @remarks
     * <br>Meeting types:<br>
     * `1` - Instant meeting<br>
     * `2` - Scheduled meeting<br>
     * `3` - Recurring meeting with no fixed time<br>
     * 8 - Recurring meeting with fixed time
     *
     * Webinar types:<br>
     * `5` - Webinar<br>
     * `6` - Recurring webinar with no fixed time<br>
     * `9` - Recurring webinar with a fixed time
     *
     */
    type?: number;
    /**
     * Unique identifier of the meeting instance or the webinar instance during which the archiving took place. Each instance of the meeting will have its own UUID.
     *
     * @remarks
     *
     */
    uuid?: string;
}
/**
 * **HTTP Status Code:** `200` **OK**
 *
 * @remarks
 * Archived files returned.
 *
 */
export declare class ListArchivedFiles200ApplicationJSON extends SpeakeasyBase {
    /**
     * Start date for the query in "yyyy-MM-dd'T'HH:mm:ss'Z'" format. The duration for the query defined using the "from" and "to" parameters should not exceed 7 days as this API only provides a week's data at once.
     */
    from?: string;
    meetings?: ListArchivedFiles200ApplicationJSONMeetings[];
    /**
     * The next page token is used to paginate through large result sets. A next page token will be returned whenever the set of available results exceeds the current page size. The expiration period for this token is 15 minutes.
     */
    nextPageToken?: string;
    /**
     * The number of records returned within a single API call.
     */
    pageSize?: number;
    /**
     * End date for the query in "yyyy-MM-dd'T'HH:mm:ss'Z'" format.
     */
    to?: string;
}
export declare class ListArchivedFilesResponse extends SpeakeasyBase {
    body?: Uint8Array;
    contentType: string;
    statusCode: number;
    rawResponse?: AxiosResponse;
    /**
     * **HTTP Status Code:** `200` **OK**
     *
     * @remarks
     * Archived files returned.
     *
     */
    listArchivedFiles200ApplicationJSONObject?: ListArchivedFiles200ApplicationJSON;
}
