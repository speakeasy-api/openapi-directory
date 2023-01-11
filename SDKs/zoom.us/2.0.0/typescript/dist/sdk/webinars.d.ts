import { AxiosInstance, AxiosRequestConfig } from "axios";
import * as operations from "./models/operations";
export declare class Webinars {
    _defaultClient: AxiosInstance;
    _securityClient: AxiosInstance;
    _serverURL: string;
    _language: string;
    _sdkVersion: string;
    _genVersion: string;
    constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string);
    /**
     * addBatchWebinarRegistrants - Perform batch registration
     *
     * Use this API to register up to 30 registrants at once for a scheduled webinar that requires [registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-webinar-with-registration). <br>
     *
     * **Prerequisites:**<br>
     * * The webinar host must be a Licensed user.
     * * The webinar should be of type `5`, i.e., it should be a scheduled webinar. Other types of webinars are not supported by this API.<br><br>
     * **Scope:** `webinar:write`, `webinar:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     *
     *
     *
     *
     *
     *
     *
     *
    **/
    addBatchWebinarRegistrants(req: operations.AddBatchWebinarRegistrantsRequest, config?: AxiosRequestConfig): Promise<operations.AddBatchWebinarRegistrantsResponse>;
    /**
     * deleteWebinarRegistrant - Delete a webinar registrant
     *
     * Delete a webinar registrant.<br><br>
     * **Scopes**: `webinar:write:admin` `webinar:write`<br>
     *  <br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    deleteWebinarRegistrant(req: operations.DeleteWebinarRegistrantRequest, config?: AxiosRequestConfig): Promise<operations.DeleteWebinarRegistrantResponse>;
    /**
     * getTrackingSources - Get webinar tracking sources
     *
     * [Webinar Registration Tracking Sources](https://support.zoom.us/hc/en-us/articles/360000315683-Webinar-Registration-Source-Tracking) allow you to see where your registrants are coming from if you share the webinar registration page in multiple platforms. You can then use the source tracking to see the number of registrants generated from each platform.<br> Use this API to list information on all the tracking sources of a Webinar.<br>
     * **Scopes:** `webinar:read:admin`, `webinar:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisites**:<br>
     * * [Webinar license](https://zoom.us/webinar).
     * * Registration must be required for the Webinar.
     *
    **/
    getTrackingSources(req: operations.GetTrackingSourcesRequest, config?: AxiosRequestConfig): Promise<operations.GetTrackingSourcesResponse>;
    /**
     * listPastWebinarPollResults - List past webinar poll results
     *
     * The polling feature for webinar allows you to create single choice or multiple choice polling questions for your webinars. Use this API to retrieve the results for Webinar Polls of a specific Webinar.
     *
     * **Prerequisites:**<br>
     * * [Webinar license](https://zoom.us/webinar)<br>
     * **Scopes**: `webinar:read:admin`, `webinar:read`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *
     *
    **/
    listPastWebinarPollResults(req: operations.ListPastWebinarPollResultsRequest, config?: AxiosRequestConfig): Promise<operations.ListPastWebinarPollResultsResponse>;
    /**
     * listPastWebinarQa - List Q&A of past webinar
     *
     * The [Question & Answer (Q&A)](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) feature for Webinars allows attendees to ask questions during the Webinar and for the panelists, co-hosts and host to answer their questions.<br>
     * Use this API to list Q&A of a specific Webinar.
     *
     * **Prerequisites:**<br>
     * * [Webinar license](https://zoom.us/webinar)<br>
     * **Scopes**: `webinar:read:admin`, `webinar:read`<br>
     *  <br>
     *
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    listPastWebinarQa(req: operations.ListPastWebinarQaRequest, config?: AxiosRequestConfig): Promise<operations.ListPastWebinarQaResponse>;
    /**
     * listWebinarParticipants - List webinar participants
     *
     * Use this API to list all the participants who attended a webinar hosted in the past. <br>
     *
     * **Prerequisites:**
     * * Pro or higher plan with a Webinar Add-on.<br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     * <br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     *
     *
    **/
    listWebinarParticipants(req: operations.ListWebinarParticipantsRequest, config?: AxiosRequestConfig): Promise<operations.ListWebinarParticipantsResponse>;
    /**
     * listWebinarTemplates - List webinar templates
     *
     * When you schedule a webinar, you can save the settings for that webinar as a template for scheduling future webinars. <br><br>Use this API to list a user's existing [Webinar templates'](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates) information.
     *
     * **Prerequisites:**
     * * Pro or a higher account with Webinar plan enabled.
    **/
    listWebinarTemplates(req: operations.ListWebinarTemplatesRequest, config?: AxiosRequestConfig): Promise<operations.ListWebinarTemplatesResponse>;
    /**
     * pastWebinars - List past webinar instances
     *
     * List past webinar instances.<br><br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
    **/
    pastWebinars(req: operations.PastWebinarsRequest, config?: AxiosRequestConfig): Promise<operations.PastWebinarsResponse>;
    /**
     * webinar - Get a webinar
     *
     * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br>Use this API to get details of a scheduled webinar.<br><br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>**Prerequisites:**
     * * Pro or higher plan with a Webinar Add-on.
    **/
    webinar(req: operations.WebinarRequest, config?: AxiosRequestConfig): Promise<operations.WebinarResponse>;
    /**
     * webinarAbsentees - Get webinar absentees
     *
     * List absentees of a webinar.<br><br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
    **/
    webinarAbsentees(req: operations.WebinarAbsenteesRequest, config?: AxiosRequestConfig): Promise<operations.WebinarAbsenteesResponse>;
    /**
     * webinarCreate - Create a webinar
     *
     * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br>Use this API to schedule a Webinar for a user (host).<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**
     * * Pro or higher plan with a Webinar Add-on.
    **/
    webinarCreate(req: operations.WebinarCreateRequest, config?: AxiosRequestConfig): Promise<operations.WebinarCreateResponse>;
    /**
     * webinarDelete - Delete a webinar
     *
     * Delete a Webinar.<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with a Webinar Add-on.
    **/
    webinarDelete(req: operations.WebinarDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebinarDeleteResponse>;
    /**
     * webinarPanelistCreate - Add panelists
     *
     * Panelists in a Webinar can view and send video, screen share, annotate, etc and do much more compared to attendees in a webinar.<br>Use this API to [add panelists](https://support.zoom.us/hc/en-us/articles/115005657826-Inviting-Panelists-to-a-Webinar#h_7550d59e-23f5-4703-9e22-e76bded1ed70) to a scheduled webinar.<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
     * **Prerequisites:**
     * * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br>
    **/
    webinarPanelistCreate(req: operations.WebinarPanelistCreateRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPanelistCreateResponse>;
    /**
     * webinarPanelistDelete - Remove a panelist
     *
     * [Remove](https://support.zoom.us/hc/en-us/articles/115005657826-Inviting-Panelists-to-a-Webinar#h_de31f237-a91c-4fb2-912b-ecfba8ec5ffb) a single panelist from a webinar.<br> You can retrieve the `panelistId` by calling **List Panelists API**.<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br>
    **/
    webinarPanelistDelete(req: operations.WebinarPanelistDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPanelistDeleteResponse>;
    /**
     * webinarPanelists - List panelists
     *
     * Panelists in a Webinar can view and send video, screen share, annotate, etc and do much more compared to attendees in a Webinar.
     *
     * Use this API to list all the panelists of a Webinar.<br><br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br>
    **/
    webinarPanelists(req: operations.WebinarPanelistsRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPanelistsResponse>;
    /**
     * webinarPanelistsDelete - Remove panelists
     *
     * Remove all the panelists from a Webinar.<br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br>
    **/
    webinarPanelistsDelete(req: operations.WebinarPanelistsDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPanelistsDeleteResponse>;
    /**
     * webinarPollCreate - Create a webinar's poll
     *
     * Create a [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) for a webinar.<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
    **/
    webinarPollCreate(req: operations.WebinarPollCreateRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPollCreateResponse>;
    /**
     * webinarPollDelete - Delete a webinar poll
     *
     * Delete a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
    **/
    webinarPollDelete(req: operations.WebinarPollDeleteRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPollDeleteResponse>;
    /**
     * webinarPollGet - Get a webinar poll
     *
     * Get a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) details.<br><br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
    **/
    webinarPollGet(req: operations.WebinarPollGetRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPollGetResponse>;
    /**
     * webinarPollUpdate - Update a webinar poll
     *
     * Update a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
    **/
    webinarPollUpdate(req: operations.WebinarPollUpdateRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPollUpdateResponse>;
    /**
     * webinarPolls - List a webinar's polls
     *
     * List all the [polls](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) of a Webinar.<br><br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
    **/
    webinarPolls(req: operations.WebinarPollsRequest, config?: AxiosRequestConfig): Promise<operations.WebinarPollsResponse>;
    /**
     * webinarRegistrantCreate - Add a webinar registrant
     *
     * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the Webinar.<br>Use this API to create and submit the registration of a user for a webinar.<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**
     * * Pro or higher plan with a Webinar Add-on.
    **/
    webinarRegistrantCreate(req: operations.WebinarRegistrantCreateRequest, config?: AxiosRequestConfig): Promise<operations.WebinarRegistrantCreateResponse>;
    /**
     * webinarRegistrantGet - Get a webinar registrant
     *
     * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the Webinar.<br>Use this API to get details on a specific user who has registered for the Webinar.<br><br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**<br>
     * * The account must have a Webinar plan.
    **/
    webinarRegistrantGet(req: operations.WebinarRegistrantGetRequest, config?: AxiosRequestConfig): Promise<operations.WebinarRegistrantGetResponse>;
    /**
     * webinarRegistrantQuestionUpdate - Update registration questions
     *
     * Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form with fields and questions before they can receive the link to join the Webinar.<br>Use this API to update registration questions and fields of a scheduled Webinar that are to be answered by users while registering for a Webinar.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with a Webinar Add-on.
     * * Registration option for Webinar should be set as required to use this API.
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     *
     *
    **/
    webinarRegistrantQuestionUpdate(req: operations.WebinarRegistrantQuestionUpdateRequest, config?: AxiosRequestConfig): Promise<operations.WebinarRegistrantQuestionUpdateResponse>;
    /**
     * webinarRegistrantStatus - Update registrant's status
     *
     * Update a webinar registrant's status. Using this API, you can specify whether you want to approve a registration, deny a registration or cancel a previously approved registration.<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
    **/
    webinarRegistrantStatus(req: operations.WebinarRegistrantStatusRequest, config?: AxiosRequestConfig): Promise<operations.WebinarRegistrantStatusResponse>;
    /**
     * webinarRegistrants - List webinar registrants
     *
     * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the Webinar.<br>
     * Use this API to list all the users that have registered for a webinar.<br><br>
     * **Prerequisites:**
     * * Pro or higher plan with a Webinar Add-on.<br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     *
     *
    **/
    webinarRegistrants(req: operations.WebinarRegistrantsRequest, config?: AxiosRequestConfig): Promise<operations.WebinarRegistrantsResponse>;
    /**
     * webinarRegistrantsQuestionsGet - List registration questions
     *
     * Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form with fields and questions before they can receive the link to join the Webinar.<br>Use this API to list registration questions and fields that are to be answered by users while registering for a Webinar.<br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with a Webinar Add-on.
     * **Scopes:** `webinar:read:admin` `webinar:read`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     *
     *
    **/
    webinarRegistrantsQuestionsGet(req: operations.WebinarRegistrantsQuestionsGetRequest, config?: AxiosRequestConfig): Promise<operations.WebinarRegistrantsQuestionsGetResponse>;
    /**
     * webinarStatus - Update webinar status
     *
     * Update a webinar's status. Use this API to end an ongoing webinar.<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**<br>
     * * The account must hold a valid [Webinar plan](https://zoom.us/webinar).
    **/
    webinarStatus(req: operations.WebinarStatusRequest, config?: AxiosRequestConfig): Promise<operations.WebinarStatusResponse>;
    /**
     * webinarUpdate - Update a webinar
     *
     * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br>
     * Use this API to make updates to a scheduled Webinar.<br><br>
     * **Scopes:** `webinar:write:admin` `webinar:write`<br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * **Prerequisites:**<br>
     * * Pro or higher plan with a Webinar Add-on.
    **/
    webinarUpdate(req: operations.WebinarUpdateRequest, config?: AxiosRequestConfig): Promise<operations.WebinarUpdateResponse>;
    /**
     * webinars - List webinars
     *
     * Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br> Use this API to list all the webinars that are scheduled by or on-behalf a user (Webinar host).<br><br>
     * **Scopes:** `webinar:read:admin` `webinar:read`<br> <br>
     *
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     * **Prerequisites:**
     * * Pro or higher plan with a Webinar Add-on.
    **/
    webinars(req: operations.WebinarsRequest, config?: AxiosRequestConfig): Promise<operations.WebinarsResponse>;
}
