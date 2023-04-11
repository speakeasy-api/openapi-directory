import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig } from "axios";
/**
 * Report operations
 */
export declare class Reports {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * Get cloud recording usage report
     *
     * @remarks
     * Retrieve cloud recording usage report for a specified period. You can only get cloud recording reports that is one day ealier than the current date and for the most recent period of 6 months. The date gap between from and to dates should be smaller or equal to 30 days. <br>
     * **Prerequisites**<br>
     * * Pro or higher plan.<br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     */
    reportCloudRecording(req: operations.ReportCloudRecordingRequest, security: operations.ReportCloudRecordingSecurity, config?: AxiosRequestConfig): Promise<operations.ReportCloudRecordingResponse>;
    /**
     * Get daily usage report
     *
     * @remarks
     * Retrieve daily report to access the account-wide usage of Zoom services for each day in a given month. It lists the number of new users, meetings, participants, and meeting minutes.<br>
     * **Prerequisites**<br>
     * * Pro or higher plan.<br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     */
    reportDaily(req: operations.ReportDailyRequest, security: operations.ReportDailySecurity, config?: AxiosRequestConfig): Promise<operations.ReportDailyResponse>;
    /**
     * Get meeting detail reports
     *
     * @remarks
     * Get a detailed report for a past meeting. <br>
     * **Scopes:** `report:read:admin`<br>
     * \
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan.<br>
     *
     */
    reportMeetingDetails(req: operations.ReportMeetingDetailsRequest, security: operations.ReportMeetingDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ReportMeetingDetailsResponse>;
    /**
     * Get meeting participant reports
     *
     * @remarks
     * Get participant report for a past meeting.<br><br>
     * **Scopes:** `report:read:admin`<br>
     * \
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan.<br>
     *
     */
    reportMeetingParticipants(req: operations.ReportMeetingParticipantsRequest, security: operations.ReportMeetingParticipantsSecurity, config?: AxiosRequestConfig): Promise<operations.ReportMeetingParticipantsResponse>;
    /**
     * Get meeting poll reports
     *
     * @remarks
     * Retrieve a report of [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) results for a past meeting. <br><br>
     * **Scopes:** `report:read:admin`<br>
     * \
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan.<br>
     *
     */
    reportMeetingPolls(req: operations.ReportMeetingPollsRequest, security: operations.ReportMeetingPollsSecurity, config?: AxiosRequestConfig): Promise<operations.ReportMeetingPollsResponse>;
    /**
     * Get meeting reports
     *
     * @remarks
     * Retrieve [report](https://support.zoom.us/hc/en-us/articles/216378603-Meeting-Reporting) on a past meeting for a specified period of time. The time range for the report is limited to a month and the month should fall under the past six months.
     *
     * Meetings will only be returned in the response if the meeting has two or more unique participants.  <br><br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or higher plan.
     */
    reportMeetings(req: operations.ReportMeetingsRequest, config?: AxiosRequestConfig): Promise<operations.ReportMeetingsResponse>;
    /**
     * Get operation logs report
     *
     * @remarks
     * The [Operations Logs](https://support.zoom.us/hc/en-us/articles/360032748331-Operation-Logs) report allows you to audit admin and user activity, such as adding a new user, changing account settings, and deleting recordings.<br>
     * Use this API to retrieve operation logs report for a specified period of time.<br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or higher plan.
     */
    reportOperationLogs(req: operations.ReportOperationLogsRequest, security: operations.ReportOperationLogsSecurity, config?: AxiosRequestConfig): Promise<operations.ReportOperationLogsResponse>;
    /**
     * Get sign In / sign out activity report
     *
     * @remarks
     * Retrieve a list of sign in / sign out activity logs [report](https://support.zoom.us/hc/en-us/articles/201363213-Getting-Started-with-Reports) of users under a Zoom account.<br>
     * **Prerequisites**<br>
     * * Pro or higher plan.<br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
     */
    reportSignInSignOutActivities(req: operations.ReportSignInSignOutActivitiesRequest, security: operations.ReportSignInSignOutActivitiesSecurity, config?: AxiosRequestConfig): Promise<operations.ReportSignInSignOutActivitiesResponse>;
    /**
     * Get telephone reports
     *
     * @remarks
     * The [telephone report](https://support.zoom.us/hc/en-us/articles/206514816-Telephone-reports) allows you to view who dialed into meetings via phone (Audio Conferencing or SIP Connected Audio) and which number they dialed into and other details. Use this API to get telephone report for a specified period of time.
     *
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>**Prerequisites:**<br>
     * * Pro or higher plan.
     */
    reportTelephone(req: operations.ReportTelephoneRequest, security: operations.ReportTelephoneSecurity, config?: AxiosRequestConfig): Promise<operations.ReportTelephoneResponse>;
    /**
     * Get active/inactive host reports
     *
     * @remarks
     * A user is considered to be an active host during the month specified in the "from" and "to" range, if the user has hosted at least one meeting during this period. If the user didn't host any meetings during this period, the user is considered to be inactive.<br>The Active Hosts report displays a list of meetings, participants, and meeting minutes for a specific time range, up to one month. The month should fall within the last six months.<br>The Inactive Hosts report pulls a list of users who were not active during a specific period of time.
     * Use this API to retrieve an active or inactive host report for a specified period of time. The time range for the report is limited to a month and the month should fall under the past six months. <br>You can specify the type of report and date range using the query parameters.<br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or higher plan.
     */
    reportUsers(req: operations.ReportUsersRequest, security: operations.ReportUsersSecurity, config?: AxiosRequestConfig): Promise<operations.ReportUsersResponse>;
    /**
     * Get webinar detail reports
     *
     * @remarks
     * Retrieve a [report](https://support.zoom.us/hc/en-us/articles/201393719-Webinar-Reporting) containing past webinar details.  <br><br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with Webinar add-on.
     */
    reportWebinarDetails(req: operations.ReportWebinarDetailsRequest, security: operations.ReportWebinarDetailsSecurity, config?: AxiosRequestConfig): Promise<operations.ReportWebinarDetailsResponse>;
    /**
     * Get webinar participant reports
     *
     * @remarks
     * Get detailed report on each attendee of a webinar.<br><br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with Webinar add-on enabled.
     */
    reportWebinarParticipants(req: operations.ReportWebinarParticipantsRequest, security: operations.ReportWebinarParticipantsSecurity, config?: AxiosRequestConfig): Promise<operations.ReportWebinarParticipantsResponse>;
    /**
     * Get webinar poll reports
     *
     * @remarks
     * Retrieve a report on past [webinar polls](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).<br><br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with Webinar add-on enabled.
     */
    reportWebinarPolls(req: operations.ReportWebinarPollsRequest, security: operations.ReportWebinarPollsSecurity, config?: AxiosRequestConfig): Promise<operations.ReportWebinarPollsResponse>;
    /**
     * Get webinar Q&A report
     *
     * @remarks
     * The Question & Answer (Q&A) feature for webinars allows attendees to ask questions during the webinar and for the panelists, co-hosts and host to answer their questions.
     *
     * Use this API to retrieve a report on question and answers from past webinars. <br><br>
     * **Scopes:** `report:read:admin`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with Webinar add-on enabled.
     */
    reportWebinarQA(req: operations.ReportWebinarQARequest, security: operations.ReportWebinarQASecurity, config?: AxiosRequestConfig): Promise<operations.ReportWebinarQAResponse>;
}
