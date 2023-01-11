import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Meetings {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * createBatchPolls - Perform batch poll creation
     *
     * Polls allow the meeting host to survey attendees. Use this API to create batch [polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) for a meeting.<br><br>
     *
     * **Scopes**: `meeting:write:admin` `meeting:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites**:<br>
     * * Host user type must be **Pro** or higher plan.
     * * Polling feature must be enabled in the host's account.
     * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
    **/
    createBatchPolls(req: operations.CreateBatchPollsRequest, config?: AxiosRequestConfig): Promise<operations.CreateBatchPollsResponse>;
    /**
     * getLiveStreamDetails - Get live stream details
     *
     * Zoom allows users to [live stream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to get a meeting's live stream configuration details such as Stream URL, Stream Key and Page URL.<br><br>
     * **Prerequisites:**<br>
     * * Meeting host must be a licensed user with a Pro or higher plan.<br>
     * * Live streaming details must have been [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the meeting.<br><br>
     * **Scopes:** `meeting:read:admin` `meeting:read`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     *
     *
    **/
    getLiveStreamDetails(req: operations.GetLiveStreamDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetLiveStreamDetailsResponse>;
    /**
     * inMeetingRecordingControl - Use in-Meeting recording controls
     *
     * Use this API to control the [in-meeting](https://support.zoom.us/hc/en-us/articles/360021921032-In-Meeting-Controls) **recording features** such as starting a recording, stopping a recording, pausing a recording, and resuming a recording. This API only works for Cloud Recordings and not for local recordings.
     *
     *
     * **Prerequisite:**
     * * The meeting must be a live meeting.
     * * Cloud Recording must be enabled.
     * * The user using this API must either be the host or alternative host of the meeting.
     *
     * **Scopes:** `meeting:write`, `meeting:write:admin`, `meeting:master`
    **/
    inMeetingRecordingControl(req: operations.InMeetingRecordingControlRequest, config?: AxiosRequestConfig): Promise<operations.InMeetingRecordingControlResponse>;
    /**
     * listMeetingTemplates - List meeting templates
     *
     * Use this API to list [meeting templates](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates) that are available to be used by a user.
     *
     * **Scope:** `meeting:read` or `meeting:read:admin`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *
    **/
    listMeetingTemplates(req: operations.ListMeetingTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListMeetingTemplatesResponse>;
    /**
     * listPastMeetingPolls - List past meeting's poll results
     *
     * [Polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) allow the meeting host to survey attendees. Use this API to list poll results of a meeting.<br><br>
     *
     * **Scopes**: `meeting:read:admin`, `meeting:read`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` <br>
     * **Prerequisites**:<br>
     * * Host user type must be **Pro**.
     * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
    **/
    listPastMeetingPolls(req: operations.ListPastMeetingPollsRequest, config?: AxiosRequestConfig): Promise<operations.ListPastMeetingPollsResponse>;
    /**
     * meeting - Get a meeting
     *
     * Retrieve the details of a meeting.<br><br>
     * **Scopes:** `meeting:read:admin` `meeting:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    meeting(req: operations.MeetingRequest, config?: AxiosRequestConfig): Promise<operations.MeetingResponse>;
    /**
     * meetingCreate - Create a meeting
     *
     * [Create a meeting](https://support.zoom.us/hc/en-us/articles/201362413-Scheduling-meetings) for a user. <br>This API has a daily rate limit of 100 requests per day. Therefore, only 100 **Create a Meeting** API requests are permitted within a 24 hour window for a user.<br>
     *
     * <aside>The <code>start_url</code> of a meeting is a URL using which a host or an alternative host can start a meeting. The expiration time for the <code>start_url</code> field is two hours for all regular users.
     *
     * For custCreate meeting hosts( i.e., users created using the <code>custCreate</code> option via the [Create Users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usercreate) API), the expiration time of the <code>start_url</code> field is 90 days from the generation of the <code>start_url</code>.
     *
     * For security reasons, the recommended way to retrieve the updated value for the <code>start_url</code> field programmatically (after expiry) is by calling the [Retrieve a Meeting API](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meeting) and referring to the value of the <code>start_url</code> field in the response.</aside><br><br>
     * Scopes: `meeting:write:admin` `meeting:write`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    meetingCreate(req: operations.MeetingCreateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingCreateResponse>;
    /**
     * meetingDelete - Delete a meeting
     *
     * Delete a meeting.<br><br>
     * **Scopes:** `meeting:write:admin` `meeting:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    meetingDelete(req: operations.MeetingDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MeetingDeleteResponse>;
    /**
     * meetingInvitation - Get meeting invitation
     *
     * Retrieve the meeting invite note that was sent for a specific meeting.<br><br>
     * **Scopes:** `meeting:read:admin` `meeting:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    meetingInvitation(req: operations.MeetingInvitationRequest, config?: AxiosRequestConfig): Promise<operations.MeetingInvitationResponse>;
    /**
     * meetingLiveStreamStatusUpdate - Update Live Stream Status
     *
     * Zoom allows users to [live stream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to update the status of a meeting's live stream.<br><br>
     * **Prerequisites:**<br>
     * * Meeting host must have a Pro license.<br>
     * **Scopes:** `meeting:write:admin` `meeting:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    meetingLiveStreamStatusUpdate(req: operations.MeetingLiveStreamStatusUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingLiveStreamStatusUpdateResponse>;
    /**
     * meetingLiveStreamUpdate - Update a live stream
     *
     * Zoom allows users to [live stream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to update a meeting's live stream information.<br><br>
     * **Prerequisites:**<br>
     * * Meeting host must have a Pro license.<br>
     * **Scopes:** `meeting:write:admin` `meeting:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     *
    **/
    meetingLiveStreamUpdate(req: operations.MeetingLiveStreamUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingLiveStreamUpdateResponse>;
    /**
     * meetingPollCreate - Create a meeting poll
     *
     * Polls allow the meeting host to survey attendees. Use this API to create a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) for a meeting.<br><br>
     *
     * **Scopes**: `meeting:write:admin` `meeting:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites**:<br>
     * * Host user type must be **Pro** or higher plan.
     * * Polling feature must be enabled in the host's account.
     * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
    **/
    meetingPollCreate(req: operations.MeetingPollCreateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingPollCreateResponse>;
    /**
     * meetingPollDelete - Delete a meeting poll
     *
     * Polls allow the meeting host to survey attendees. Use this API to delete a meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings).<br>
     * **Scopes**: `meeting:write:admin` `meeting:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
     * **Prerequisites**:<br>
     * * Host user type must be **Pro**.
     * * Polling feature should be enabled in the host's account.
     * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
    **/
    meetingPollDelete(req: operations.MeetingPollDeleteRequest, config?: AxiosRequestConfig): Promise<operations.MeetingPollDeleteResponse>;
    /**
     * meetingPollGet - Get a meeting poll
     *
     * Polls allow the meeting host to survey attendees. Use this API to get information about a specific meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings).<br><br>
     * **Scopes**: `meeting:read:admin` `meeting:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     *
    **/
    meetingPollGet(req: operations.MeetingPollGetRequest, config?: AxiosRequestConfig): Promise<operations.MeetingPollGetResponse>;
    /**
     * meetingPollUpdate - Update a meeting poll
     *
     * Polls allow the meeting host to survey attendees. Use this API to update information of a specific meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings)<br><br>
     * **Scopes**: `meeting:write:admin` `meeting:write`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    meetingPollUpdate(req: operations.MeetingPollUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingPollUpdateResponse>;
    /**
     * meetingPolls - List meeting polls
     *
     * Polls allow the meeting host to survey attendees. Use this API to list [polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) of a meeting.<br><br>
     *
     * **Scopes**: `meeting:read:admin` `meeting:read`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites**:<br>
     * * Host user type must be **Pro** or higher plan.
     * * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
    **/
    meetingPolls(req: operations.MeetingPollsRequest, config?: AxiosRequestConfig): Promise<operations.MeetingPollsResponse>;
    /**
     * meetingRegistrantCreate - Add meeting registrant
     *
     * Register a participant for a meeting.<br><br> Note that there is a maximum limit of 4999 registrants per meeting and users will see an error if the capacity has reached.
     *
     * **Prerequisite:**<br>
     * * Host user type must be "Licensed".
     *
     * **Scopes:** `meeting:write:admin` `meeting:write`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    meetingRegistrantCreate(req: operations.MeetingRegistrantCreateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingRegistrantCreateResponse>;
    /**
     * meetingRegistrantQuestionUpdate - Update registration questions
     *
     * Update registration questions that will be displayed to users while [registering for a meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).<br><br>
     * **Scopes:** `meeting:write`, `meeting:write:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
     *
    **/
    meetingRegistrantQuestionUpdate(req: operations.MeetingRegistrantQuestionUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingRegistrantQuestionUpdateResponse>;
    /**
     * meetingRegistrantStatus - Update registrant's status
     *
     * Update a meeting registrant's status by either approving, cancelling or denying a registrant from joining the meeting.<br><br>
     * **Scopes:** `meeting:write:admin` `meeting:write`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    meetingRegistrantStatus(req: operations.MeetingRegistrantStatusRequest, config?: AxiosRequestConfig): Promise<operations.MeetingRegistrantStatusResponse>;
    /**
     * meetingRegistrants - List meeting registrants
     *
     * A host or a user with admin permission can require [registration for a Zoom meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings). Use this API to list users that have registered for a meeting.<br><br>
     * **Scopes**: `meeting:read:admin` `meeting:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    meetingRegistrants(req: operations.MeetingRegistrantsRequest, config?: AxiosRequestConfig): Promise<operations.MeetingRegistrantsResponse>;
    /**
     * meetingRegistrantsQuestionsGet - List registration questions
     *
     * List registration questions that will be displayed to users while [registering for a meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).<br>
     *
     * **Scopes:** `meeting:read`, `meeting:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    meetingRegistrantsQuestionsGet(req: operations.MeetingRegistrantsQuestionsGetRequest, config?: AxiosRequestConfig): Promise<operations.MeetingRegistrantsQuestionsGetResponse>;
    /**
     * meetingStatus - Update meeting status
     *
     * Update the status of a meeting.<br><br>
     * **Scopes:** `meeting:write:admin` `meeting:write`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    meetingStatus(req: operations.MeetingStatusRequest, config?: AxiosRequestConfig): Promise<operations.MeetingStatusResponse>;
    /**
     * meetingUpdate - Update a meeting
     *
     * Update the details of a meeting.<br>This API has a rate limit of 100 requests per day. Therefore, a meeting can only be updated for a maximum of 100 times within a 24 hour window.<br>
     * **Scopes:** `meeting:write:admin` `meeting:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    meetingUpdate(req: operations.MeetingUpdateRequest, config?: AxiosRequestConfig): Promise<operations.MeetingUpdateResponse>;
    /**
     * meetingregistrantdelete - Delete a meeting registrant
     *
     * Delete a meeting registrant.<br><br>
     * **Scopes**: `meeting:write:admin` `meeting:write`<br>
     *  <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    meetingregistrantdelete(req: operations.MeetingregistrantdeleteRequest, config?: AxiosRequestConfig): Promise<operations.MeetingregistrantdeleteResponse>;
    /**
     * meetings - List meetings
     *
     * List all the meetings that were scheduled for a user (meeting host). This API only supports scheduled meetings and thus, details on instant meetings are not returned via this API.<br><br>
     * **Scopes:** `meeting:read:admin` `meeting:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    meetings(req: operations.MeetingsRequest, config?: AxiosRequestConfig): Promise<operations.MeetingsResponse>;
    /**
     * pastMeetingDetails - Get past meeting details
     *
     * Get details on a past meeting. <br><br>
     * **Scopes:** `meeting:read:admin` `meeting:read`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     * > **Note**: Please double encode your UUID when using this API if the UUID begins with a '/'or contains '//' in it.
    **/
    pastMeetingDetails(req: operations.PastMeetingDetailsRequest, config?: AxiosRequestConfig): Promise<operations.PastMeetingDetailsResponse>;
    /**
     * pastMeetingParticipants - Get past meeting participants
     *
     * Retrieve information on participants from a past meeting. <br><br>
     * **Scopes:** `meeting:read:admin` `meeting:read`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     * **Prerequisites:**<br>
     * * Paid account on a Pro or higher plan.
     *
     * <br> <br>  **Note**: Please double encode your UUID when using this API if the UUID begins with a '/'or contains '//' in it.
     *
    **/
    pastMeetingParticipants(req: operations.PastMeetingParticipantsRequest, config?: AxiosRequestConfig): Promise<operations.PastMeetingParticipantsResponse>;
    /**
     * pastMeetings - List ended meeting instances
     *
     * Get a list of ended meeting instances<br><br>
     * **Scopes:** `meeting:read:admin` `meeting:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    pastMeetings(req: operations.PastMeetingsRequest, config?: AxiosRequestConfig): Promise<operations.PastMeetingsResponse>;
}
