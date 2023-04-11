import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Dashboard operations
 */
export declare class Dashboards {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get CRC port usage
     *
     * @remarks
     * A Cloud Room Connector allows H.323/SIP endpoints to connect to a Zoom meeting.
     *
     * Use this API to get the hour by hour CRC Port usage for a specified period of time. <aside class='notice'>We will provide the report for a maximum of one month. For example, if "from" is set to "2017-08-05" and "to" is set to "2017-10-10", we will adjust "from" to "2017-09-10".</aside><br><br>
     * **Prerequisites:**<br>
     * * Business, Education or API Plan.
     * * Room Connector must be enabled on the account.<br><br>
     * **Scopes:** `dashboard_crc:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     */
    dashboardCRC(req: operations.DashboardCRCRequest, security: operations.DashboardCRCSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardCRCResponse>;
    /**
     * List Zoom meetings client feedback
     *
     * @remarks
     * Retrieve survey results from [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf). <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
     *
     * **Prerequisites:**
     * * Business or higher account
     * * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) enabled.
     *
     * **Scope:** `account:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     */
    dashboardClientFeedback(req: operations.DashboardClientFeedbackRequest, security: operations.DashboardClientFeedbackSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardClientFeedbackResponse>;
    /**
     * Get zoom meetings client feedback
     *
     * @remarks
     * Retrieve detailed information on a [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf). <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
     *
     * **Prerequisites:**
     * * Business or higher account
     * * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) enabled.
     *
     * **Scope:** `dashboard_home:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     *
     * `
     */
    dashboardClientFeedbackDetail(req: operations.DashboardClientFeedbackDetailRequest, security: operations.DashboardClientFeedbackDetailSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardClientFeedbackDetailResponse>;
    /**
     * Get IM metrics
     *
     * @remarks
     * Get [metrics](https://support.zoom.us/hc/en-us/articles/204654719-Dashboard#h_cc7e9749-1c70-4afb-a9a2-9680654821e4) on how users are utilizing the Zoom Chat Client.<br><br> <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
     * **Scope:** `dashboard_im:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
     * **Prerequisites:**<br>
     * * Business or a higher plan.
     *
     *
     */
    dashboardIM(req: operations.DashboardIMRequest, security: operations.DashboardIMSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardIMResponse>;
    /**
     * Get issues of Zoom Rooms
     *
     * @remarks
     * Get information about the issues that occured on the Top 25 **Zoom Rooms with issues** in an acount. <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
     *
     * **Scope:** `dashboard_home:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:** <br>
     * * Business or a higher plan.
     * * Zoom Room must be enabled in the account.
     */
    dashboardIssueDetailZoomRoom(req: operations.DashboardIssueDetailZoomRoomRequest, security: operations.DashboardIssueDetailZoomRoomSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardIssueDetailZoomRoomResponse>;
    /**
     * Get top 25 Zoom Rooms with issues
     *
     * @remarks
     * Get information on top 25 Zoom Rooms with issues in a month. The month specified with the "from" and "to" range should fall within the last six months.<br>
     * **Scope:** `dashboard_home:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Business or a higher plan.
     * * Zoom Room must be enabled in the account.
     */
    dashboardIssueZoomRoom(req: operations.DashboardIssueZoomRoomRequest, security: operations.DashboardIssueZoomRoomSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardIssueZoomRoomResponse>;
    /**
     * Get meeting details
     *
     * @remarks
     * Get details on live or past meetings. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.<br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.  <br>
     * **Scopes:** `dashboard_meetings:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:** <br>
     * * Business or a higher plan.
     */
    dashboardMeetingDetail(req: operations.DashboardMeetingDetailRequest, security: operations.DashboardMeetingDetailSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardMeetingDetailResponse>;
    /**
     * Get meeting participant QoS
     *
     * @remarks
     * Retrieve the quality of service for participants from live or past meetings. This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields. <br><br>
     * **Scopes:** `dashboard_meetings:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     */
    dashboardMeetingParticipantQOS(req: operations.DashboardMeetingParticipantQOSRequest, security: operations.DashboardMeetingParticipantQOSSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardMeetingParticipantQOSResponse>;
    /**
     * Get sharing/recording details
     *
     * @remarks
     * Retrieve the sharing and recording details of participants from live or past meetings.<br>
     * **Scopes:** `dashboard_meetings:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:** <br>
     * * Business or a higher plan.
     */
    dashboardMeetingParticipantShare(req: operations.DashboardMeetingParticipantShareRequest, security: operations.DashboardMeetingParticipantShareSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardMeetingParticipantShareResponse>;
    /**
     * List meeting participants
     *
     * @remarks
     * Get a list of participants from live or past meetings.<br><br>
     * If you do not provide the `type` query parameter, the default value will be set to `live` and thus, you will only see metrics for participants in a live meeting, if any meeting is currently being conducted. To view metrics on past meeting participants, provide the appropriate value for `type`. <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
     *
     * **Scopes:** `dashboard_meetings:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:** Business or a higher plan.
     */
    dashboardMeetingParticipants(req: operations.DashboardMeetingParticipantsRequest, security: operations.DashboardMeetingParticipantsSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardMeetingParticipantsResponse>;
    /**
     * List meeting participants QoS
     *
     * @remarks
     * Get a list of meeting participants from live or past meetings along with the quality of service they recieve during the meeting such as connection quality for sending/receiving video, audio, and shared content.<br>If you do not provide the `type` query parameter, the default value will be set to `live` and thus, you will only see metrics for participants in a live meeting, if any meeting is currently being conducted. To view metrics on past meeting participants, provide the appropriate value for `type`.<br> <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.<br><br>
     * **Scopes:** `dashboard_meetings:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:** <br>
     * * Business or a higher plan.
     */
    dashboardMeetingParticipantsQOS(req: operations.DashboardMeetingParticipantsQOSRequest, security: operations.DashboardMeetingParticipantsQOSSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardMeetingParticipantsQOSResponse>;
    /**
     * List meetings
     *
     * @remarks
     * List total live or past meetings that occurred during a specified period of time. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.<br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.<br>
     * **Scopes:** `dashboard_meetings:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br><br>
     * **Prerequisites:** <br>
     * * Business or a higher plan.<br><br>
     */
    dashboardMeetings(req: operations.DashboardMeetingsRequest, security: operations.DashboardMeetingsSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardMeetingsResponse>;
    /**
     * Get webinar details
     *
     * @remarks
     * Retrieve details from live or past webinars.<br><br>
     * **Scopes:** `dashboard_webinars:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Business, Education or API Plan with Webinar add-on.
     *
     *
     */
    dashboardWebinarDetail(req: operations.DashboardWebinarDetailRequest, security: operations.DashboardWebinarDetailSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardWebinarDetailResponse>;
    /**
     * Get webinar participant QoS
     *
     * @remarks
     * Retrieve details on the quality of service that participants from live or past webinars recieved.<br>This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields.<br>
     * **Scopes:** `dashboard_webinars:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy` <br>
     * **Prerequisites:** <br>
     * * Business, Education or API Plan with Zoom Rooms set up.
     *
     */
    dashboardWebinarParticipantQOS(req: operations.DashboardWebinarParticipantQOSRequest, security: operations.DashboardWebinarParticipantQOSSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardWebinarParticipantQOSResponse>;
    /**
     * Get sharing/recording details
     *
     * @remarks
     * Retrieve the sharing and recording details of participants from live or past webinars. <br><br>
     * **Scopes:** `dashboard_webinars:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy` <br>
     * **Prerequisites:**<br>
     * * Business, Education or API Plan with Webinar add-on.
     *
     *
     */
    dashboardWebinarParticipantShare(req: operations.DashboardWebinarParticipantShareRequest, security: operations.DashboardWebinarParticipantShareSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardWebinarParticipantShareResponse>;
    /**
     * Get webinar participants
     *
     * @remarks
     * Retrieve details on participants from live or past webinars.<br><br>
     * **Scopes:** `dashboard_webinars:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Business, Education or API Plan with Webinar add-on.
     *
     *
     */
    dashboardWebinarParticipants(req: operations.DashboardWebinarParticipantsRequest, security: operations.DashboardWebinarParticipantsSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardWebinarParticipantsResponse>;
    /**
     * List webinar participant QoS
     *
     * @remarks
     * Retrieve a list of participants from live or past webinars and the quality of service they received.<br>This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields.<br>
     * **Scopes:** `dashboard_webinars:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**
     * * Business, Education or API Plan with Webinar add-on.
     *
     *
     */
    dashboardWebinarParticipantsQOS(req: operations.DashboardWebinarParticipantsQOSRequest, security: operations.DashboardWebinarParticipantsQOSSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardWebinarParticipantsQOSResponse>;
    /**
     * List webinars
     *
     * @remarks
     * List all the live or past webinars from a specified period of time. <br><br>
     * **Scopes:** `dashboard_webinars:read:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
     * **Prerequisites:**<br>
     * * Business, Education or API Plan with Webinar add-on.
     *
     *
     *
     */
    dashboardWebinars(req: operations.DashboardWebinarsRequest, security: operations.DashboardWebinarsSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardWebinarsResponse>;
    /**
     * Get Zoom Rooms details
     *
     * @remarks
     * The Zoom Rooms dashboard metrics lets you know the type of configuration a Zoom room has and details on the meetings held in that room.
     *
     * Use this API to retrieve information on a specific room.<br><br>
     * **Scopes:** `dashboard_zr:read:admin`<br> <br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`**Prerequisites:**<br>
     * * Business, Education or API Plan with Zoom Rooms set up.
     *
     */
    dashboardZoomRoom(req: operations.DashboardZoomRoomRequest, security: operations.DashboardZoomRoomSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardZoomRoomResponse>;
    /**
     * Get top 25 issues of Zoom Rooms
     *
     * @remarks
     * Get top 25 issues of Zoom Rooms.<br>
     * **Scopes:** `dashboard_zr:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     *  **Prerequisites:**<br>
     * * Business, Education or API Plan with Zoom Rooms set up.
     *
     *
     */
    dashboardZoomRoomIssue(req: operations.DashboardZoomRoomIssueRequest, security: operations.DashboardZoomRoomIssueSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardZoomRoomIssueResponse>;
    /**
     * List Zoom Rooms
     *
     * @remarks
     * List information on all Zoom Rooms in an account.<br><br>
     * **Scopes:** `dashboard_zr:read:admin`
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
     *  **Prerequisites:**<br>
     * * Business, Education or API Plan with Zoom Rooms set up.
     *
     *
     *
     */
    dashboardZoomRooms(req: operations.DashboardZoomRoomsRequest, security: operations.DashboardZoomRoomsSecurity, config?: AxiosRequestConfig): Promise<operations.DashboardZoomRoomsResponse>;
    /**
     * Get call details from call log
     *
     * @remarks
     * Call logs provide a record of all incoming and outgoing calls over Zoom Phone in an account.
     *
     * Use this API to list call log details of a specific call.
     *
     * **Prerequisites:**
     * * Business, or Education account
     * * Zoom Phone license <br><br>
     *
     * **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
     * **Rate Limit Label:** `Light`
     *
     */
    getCallLogMetricsDetails(req: operations.GetCallLogMetricsDetailsRequest, config?: AxiosRequestConfig): Promise<operations.GetCallLogMetricsDetailsResponse>;
    /**
     * Get call QoS
     *
     * @remarks
     * Get call quality of service(QoS) data for a call made or received by a Zoom phone user in the account.
     *
     * **Prerequisites:**
     * * Business, or Education account
     * * Zoom Phone license <br><br>
     * **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
     * **Rate Limit Label:** `Light`
     */
    getCallQoS(req: operations.GetCallQoSRequest, config?: AxiosRequestConfig): Promise<operations.GetCallQoSResponse>;
    /**
     * List call logs
     *
     * @remarks
     * Call logs provide a record of all incoming and outgoing calls over Zoom Phone in an account.
     *
     * Use this API to list monthly call logs metrics. You can use query parameters to filter the response by date, site and MOS(Mean Opinion Score) of the call.
     *
     * **Prerequisites:**
     * * Business, or Education account
     * * Zoom Phone license <br><br>
     *
     * **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
     * **Rate Limit Label:** `Heavy`
     */
    listCallLogsMetrics(req: operations.ListCallLogsMetricsRequest, config?: AxiosRequestConfig): Promise<operations.ListCallLogsMetricsResponse>;
    /**
     * List client meeting satisfaction
     *
     * @remarks
     * If the [End of Meeting Feedback Survey](https://support.zoom.us/hc/en-us/articles/115005855266) option is enabled, attendees will be prompted with a survey window where they can tap either the **Thumbs Up** or **Thumbs Down** button that indicates their Zoom meeting experience. With this API, you can get information on the attendees' meeting satisfaction. Specify a monthly date range for the query using the from and to query parameters. The month should fall within the last six months.
     *
     * To get information on the survey results with negative experiences (indicated by **Thumbs Down**), use the [Get Zoom Meetings Client Feedback API](https://marketplace.zoom.us/docs/api-reference/zoom-api/dashboards/dashboardclientfeedbackdetail).<br>
     * **Scopes:** `dashboard:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     */
    listMeetingSatisfaction(req: operations.ListMeetingSatisfactionRequest, security: operations.ListMeetingSatisfactionSecurity, config?: AxiosRequestConfig): Promise<operations.ListMeetingSatisfactionResponse>;
    /**
     * Get post meeting feedback
     *
     * @remarks
     * When a meeting ends, each attendee will be prompted to share their meeting experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific meeting. Note that this API only works for meetings scheduled after December 20, 2020.
     *
     * **Prerequisites:**
     * * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
     * * The user making the API request must be enrolled in a Business or a higher plan.
     *
     * <br> **Scope:** `dashboard_meetings:read:admiin`
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     */
    participantFeedback(req: operations.ParticipantFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.ParticipantFeedbackResponse>;
    /**
     * Get post webinar feedback
     *
     * @remarks
     * When a Webinar ends, each attendee will be prompted to share their Webinar experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific webinar. Note that this API only works for meetings scheduled after December 20, 2020.
     *
     * **Prerequisites:**
     * * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
     * * The user making the API request must be enrolled in a Business or a higher plan.
     *
     *
     * <br> **Scope:** `dashboard_webinars:read:admin`
     *
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     */
    participantWebinarFeedback(req: operations.ParticipantWebinarFeedbackRequest, config?: AxiosRequestConfig): Promise<operations.ParticipantWebinarFeedbackResponse>;
}
