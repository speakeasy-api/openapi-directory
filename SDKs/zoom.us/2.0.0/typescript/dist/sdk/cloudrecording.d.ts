import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class CloudRecording {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * getAccountCloudRecording - List recordings of an account
     *
     * List [Cloud Recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) available on an Account.
     *
     * > To access a password protected cloud recording, add an "access_token" parameter to the download URL and provide [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) as the value of the "access_token".
     * <br>
     * **Prerequisites**:<br>
     * * A Pro or a higher paid plan with Cloud Recording option enabled.<br>
     * **Scopes**: `recording:read:admin` or `account:read:admin`
     *
     * If the scope `recording:read:admin` is used, the Account ID of the Account must be provided in the `accountId` path parameter to list recordings that belong to the Account. This scope only works for sub accounts.
     *
     * To list recordings of a master account, the scope must be `account:read:admin` and the value of `accountId` should be `me`.<br>  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
    **/
    getAccountCloudRecording(req: operations.GetAccountCloudRecordingRequest, config?: AxiosRequestConfig): Promise<operations.GetAccountCloudRecordingResponse>;
    /**
     * listArchivedFiles - List archived files
     *
     * Zoom’s [archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) allows account administrators to set up an automated mechanism to record, collect and archive meeting data to a 3rd party platform of their choice and hence, satisfy FINRA and/ or other compliance requirements.<br><br>
     * Use this API to retrieve archived meeting or webinar files of an account.
     *
     * **Scope:** `recording:read:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br><br>
     * **Prerequisites:** <br>
     * * Enable cloud recording.
     * * Follow the [enablement process](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data#h_01ENPBD3WR68D7FAKTBY92SG45) to access the archiving feature.
    **/
    listArchivedFiles(req: operations.ListArchivedFilesRequest, config?: AxiosRequestConfig): Promise<operations.ListArchivedFilesResponse>;
    /**
     * meetingRecordingRegistrantCreate - Create a recording registrant
     *
     * Cloud Recordings of past Zoom Meetings can be made [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings). Users should be [registered](https://marketplace.zoom.us/docs/api-reference/zoom-api/cloud-recording/meetingrecordingregistrantcreate) to view these recordings.
     *
     * Use this API to register a user to gain access to **On-demand Cloud Recordings** of a past meeting.<br>
     * **Scopes:** `recording:write:admin`, `recording:write`.<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    meetingRecordingRegistrantCreate(req: operations.MeetingRecordingRegistrantCreateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingRecordingRegistrantCreateResponse>;
    /**
     * meetingRecordingRegistrantStatus - Update registrant's status
     *
     * A registrant can either be approved or denied from viewing the [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) recording.
     * Use this API to update a registrant's status.
     *
     * **Scopes:** `recording:write:admin`, `recording:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *
    **/
    meetingRecordingRegistrantStatus(req: operations.MeetingRecordingRegistrantStatusRequest, config?: AxiosRequestConfig): Promise<operations.MeetingRecordingRegistrantStatusResponse>;
    /**
     * meetingRecordingRegistrants - List recording registrants
     *
     * Cloud Recordings of past Zoom Meetings can be made [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings). Users should be [registered](https://marketplace.zoom.us/docs/api-reference/zoom-api/cloud-recording/meetingrecordingregistrantcreate) to view these recordings.
     *
     * Use this API to list registrants of **On-demand Cloud Recordings** of a past meeting.<br>
     * **Scopes:** `recording:read:admin`, `recording:read`.<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *
    **/
    meetingRecordingRegistrants(req: operations.MeetingRecordingRegistrantsRequest, config?: AxiosRequestConfig): Promise<operations.MeetingRecordingRegistrantsResponse>;
    /**
     * recordingDelete - Delete meeting recordings
     *
     * Delete all recording files of a meeting.<br><br>
     *
     * **Scopes:** `recording:write:admin` `recording:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites**:
     * * Cloud Recording should be enabled on the user's account.<br>
     *
    **/
    recordingDelete(req: operations.RecordingDeleteRequest, config?: AxiosRequestConfig): Promise<operations.RecordingDeleteResponse>;
    /**
     * recordingDeleteOne - Delete a meeting recording file
     *
     * Delete a sprecific recording file from a meeting.<br><br>
     * **Scopes**: `recording:write:admin` `recording:write`<br>
     *  <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    recordingDeleteOne(req: operations.RecordingDeleteOneRequest, config?: AxiosRequestConfig): Promise<operations.RecordingDeleteOneResponse>;
    /**
     * recordingGet - Get meeting recordings
     *
     * Get all the [recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording#h_7420acb5-1897-4061-87b4-5b76e99c03b4) from a meeting or Webinar instance.<br><br> The recording files can be downloaded via the `download_url` property listed in the response.
     *
     * > To access a password protected cloud recording, add an "access_token" parameter to the download URL and provide OAuth access token or [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) as the value of the "access_token".
     * <br>
     *
     * **Scopes:** `recording:read:admin` `recording:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    recordingGet(req: operations.RecordingGetRequest, config?: AxiosRequestConfig): Promise<operations.RecordingGetResponse>;
    /**
     * recordingRegistrantQuestionUpdate - Update registration questions
     *
     * For [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) meeting recordings, you can include fields with questions that will be shown to registrants when they register to view the recording.
     *
     * Use this API to update registration questions that are to be answered by users while registering to view a recording.<br>
     * **Scopes:** `recording:write:admin`, `recording:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
    **/
    recordingRegistrantQuestionUpdate(req: operations.RecordingRegistrantQuestionUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RecordingRegistrantQuestionUpdateResponse>;
    /**
     * recordingRegistrantsQuestionsGet - Get registration questions
     *
     * For [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) meeting recordings, you can include fields with questions that will be shown to registrants when they register to view the recording.
     *
     * Use this API to retrieve a list of questions that are displayed for users to complete when registering to view the recording of a specific meeting.<br>
     * **Scopes:** `recording:read:admin`, `recording:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
    **/
    recordingRegistrantsQuestionsGet(req: operations.RecordingRegistrantsQuestionsGetRequest, config?: AxiosRequestConfig): Promise<operations.RecordingRegistrantsQuestionsGetResponse>;
    /**
     * recordingSettingUpdate - Get meeting recording settings
     *
     * Retrieve settings applied to a meeting's [Cloud Recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording).<br><br>
     * **Scopes**: `recording:read:admin` `recording:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
    **/
    recordingSettingUpdate(req: operations.RecordingSettingUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RecordingSettingUpdateResponse>;
    /**
     * recordingSettingsUpdate - Update meeting recording settings
     *
     * Update settings applied to a meeting's [Cloud Recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording)<br><br>
     * **Scopes**: `recording:write:admin` `recording:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
    **/
    recordingSettingsUpdate(req: operations.RecordingSettingsUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RecordingSettingsUpdateResponse>;
    /**
     * recordingStatusUpdate - Recover meeting recordings
     *
     * Zoom allows users to recover recordings from trash for up to 30 days from the deletion date. Use this API to recover all deleted [Cloud Recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) of a specific meeting.<br><br>
     * **Scopes**: `recording:write:admin` `recording:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites**:<br>
     * * A Pro user with Cloud Recording enabled.
    **/
    recordingStatusUpdate(req: operations.RecordingStatusUpdateRequest, config?: AxiosRequestConfig): Promise<operations.RecordingStatusUpdateResponse>;
    /**
     * recordingStatusUpdateOne - Recover a single recording
     *
     * Zoom allows users to recover recordings from trash for up to 30 days from the deletion date. Use this API to recover a single recording file from the meeting.<br>
     * **Scopes:** `recording:write:admin` `recording:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
    **/
    recordingStatusUpdateOne(req: operations.RecordingStatusUpdateOneRequest, config?: AxiosRequestConfig): Promise<operations.RecordingStatusUpdateOneResponse>;
    /**
     * recordingsList - List all recordings
     *
     * When a user records a meeting or a webinar by choosing the **Record to the Cloud** option, the video, audio, and chat text are recorded in the Zoom cloud.
     *
     * Use this API to list all [Cloud recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) of a user.<br>
     * > To access a user's password protected cloud recording, add an "access_token" parameter to the download URL and provide either the [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) or the user's OAuth access token as the value of the "access_token" parameter.
     * <br>
     *
     * **Scopes:** `recording:read:admin` `recording:read`  <br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisites:**
     * * Pro or a higher plan.
     * * Cloud Recording must be enabled on the user's account.
    **/
    recordingsList(req: operations.RecordingsListRequest, config?: AxiosRequestConfig): Promise<operations.RecordingsListResponse>;
}
