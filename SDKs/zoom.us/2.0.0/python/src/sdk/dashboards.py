import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Dashboards:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def dashboard_crc(self, request: operations.DashboardCrcRequest) -> operations.DashboardCrcResponse:
        r"""Get CRC port usage
        A Cloud Room Connector allows H.323/SIP endpoints to connect to a Zoom meeting. 
        
        Use this API to get the hour by hour CRC Port usage for a specified period of time. <aside class='notice'>We will provide the report for a maximum of one month. For example, if \"from\" is set to \"2017-08-05\" and \"to\" is set to \"2017-10-10\", we will adjust \"from\" to \"2017-09-10\".</aside><br><br>
        **Prerequisites:**<br>
        * Business, Education or API Plan.
        * Room Connector must be enabled on the account.<br><br>
        **Scopes:** `dashboard_crc:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy` 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/crc"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardCrcResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardCrc200ApplicationJSON])
                res.dashboard_crc_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def dashboard_client_feedback(self, request: operations.DashboardClientFeedbackRequest) -> operations.DashboardClientFeedbackResponse:
        r"""List Zoom meetings client feedback
        Retrieve survey results from [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf). <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
        
        **Prerequisites:**
        * Business or higher account
        * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) enabled.
        
        **Scope:** `account:read:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/client/feedback"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardClientFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardClientFeedback200ApplicationJSON])
                res.dashboard_client_feedback_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def dashboard_client_feedback_detail(self, request: operations.DashboardClientFeedbackDetailRequest) -> operations.DashboardClientFeedbackDetailResponse:
        r"""Get zoom meetings client feedback
        Retrieve detailed information on a [Zoom meetings client feedback](https://support.zoom.us/hc/en-us/articles/115005855266-End-of-Meeting-Feedback-Survey#h_e30d552b-6d8e-4e0a-a588-9ca8180c4dbf). <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
        
        **Prerequisites:**
        * Business or higher account
        * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) enabled.
        
        **Scope:** `dashboard_home:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
        
        `
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/client/feedback/{feedbackId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardClientFeedbackDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardClientFeedbackDetail200ApplicationJSON])
                res.dashboard_client_feedback_detail_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def dashboard_im(self, request: operations.DashboardImRequest) -> operations.DashboardImResponse:
        r"""Get IM metrics
        Get [metrics](https://support.zoom.us/hc/en-us/articles/204654719-Dashboard#h_cc7e9749-1c70-4afb-a9a2-9680654821e4) on how users are utilizing the Zoom Chat Client.<br><br> <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
        **Scope:** `dashboard_im:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
        **Prerequisites:**<br>
        * Business or a higher plan.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/im"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardImResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardIm200ApplicationJSON])
                res.dashboard_im_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def dashboard_issue_detail_zoom_room(self, request: operations.DashboardIssueDetailZoomRoomRequest) -> operations.DashboardIssueDetailZoomRoomResponse:
        r"""Get issues of Zoom Rooms
        Get information about the issues that occured on the Top 25 **Zoom Rooms with issues** in an acount. <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
        
        **Scope:** `dashboard_home:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:** <br>
        * Business or a higher plan.
        * Zoom Room must be enabled in the account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/issues/zoomrooms/{zoomroomId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardIssueDetailZoomRoomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardIssueDetailZoomRoom200ApplicationJSON])
                res.dashboard_issue_detail_zoom_room_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def dashboard_issue_zoom_room(self, request: operations.DashboardIssueZoomRoomRequest) -> operations.DashboardIssueZoomRoomResponse:
        r"""Get top 25 Zoom Rooms with issues
        Get information on top 25 Zoom Rooms with issues in a month. The month specified with the \"from\" and \"to\" range should fall within the last six months.<br>
        **Scope:** `dashboard_home:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:**<br>
        * Business or a higher plan.
        * Zoom Room must be enabled in the account.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/issues/zoomrooms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardIssueZoomRoomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardIssueZoomRoom200ApplicationJSON])
                res.dashboard_issue_zoom_room_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def dashboard_meeting_detail(self, request: operations.DashboardMeetingDetailRequest) -> operations.DashboardMeetingDetailResponse:
        r"""Get meeting details
        Get details on live or past meetings. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.<br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.  <br>
        **Scopes:** `dashboard_meetings:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:** <br>
        * Business or a higher plan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/meetings/{meetingId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardMeetingDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardMeetingDetailMeetingMetrics])
                res.meeting_metrics = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_meeting_participant_qos(self, request: operations.DashboardMeetingParticipantQosRequest) -> operations.DashboardMeetingParticipantQosResponse:
        r"""Get meeting participant QoS
        Retrieve the quality of service for participants from live or past meetings. This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields. <br><br>
        **Scopes:** `dashboard_meetings:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/meetings/{meetingId}/participants/{participantId}/qos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardMeetingParticipantQosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardMeetingParticipantQosParticipantQos])
                res.participant_qos = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_meeting_participant_share(self, request: operations.DashboardMeetingParticipantShareRequest) -> operations.DashboardMeetingParticipantShareResponse:
        r"""Get sharing/recording details
        Retrieve the sharing and recording details of participants from live or past meetings.<br>
        **Scopes:** `dashboard_meetings:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:** <br>
        * Business or a higher plan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/meetings/{meetingId}/participants/sharing", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardMeetingParticipantShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardMeetingParticipantShare200ApplicationJSON])
                res.dashboard_meeting_participant_share_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_meeting_participants(self, request: operations.DashboardMeetingParticipantsRequest) -> operations.DashboardMeetingParticipantsResponse:
        r"""List meeting participants
        Get a list of participants from live or past meetings.<br><br>
        If you do not provide the `type` query parameter, the default value will be set to `live` and thus, you will only see metrics for participants in a live meeting, if any meeting is currently being conducted. To view metrics on past meeting participants, provide the appropriate value for `type`. <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.
        
        **Scopes:** `dashboard_meetings:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:** Business or a higher plan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/meetings/{meetingId}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardMeetingParticipantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardMeetingParticipants200ApplicationJSON])
                res.dashboard_meeting_participants_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_meeting_participants_qos(self, request: operations.DashboardMeetingParticipantsQosRequest) -> operations.DashboardMeetingParticipantsQosResponse:
        r"""List meeting participants QoS
        Get a list of meeting participants from live or past meetings along with the quality of service they recieve during the meeting such as connection quality for sending/receiving video, audio, and shared content.<br>If you do not provide the `type` query parameter, the default value will be set to `live` and thus, you will only see metrics for participants in a live meeting, if any meeting is currently being conducted. To view metrics on past meeting participants, provide the appropriate value for `type`.<br> <br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.<br><br>
        **Scopes:** `dashboard_meetings:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:** <br>
        * Business or a higher plan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/meetings/{meetingId}/participants/qos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardMeetingParticipantsQosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardMeetingParticipantsQosParticipantQosList])
                res.participant_qos_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_meetings(self, request: operations.DashboardMeetingsRequest) -> operations.DashboardMeetingsResponse:
        r"""List meetings
        List total live or past meetings that occurred during a specified period of time. This overview will show if features such as audio, video, screen sharing, and recording were being used in the meeting. You can also see the license types of each user on your account.<br> You can specify a monthly date range for the dashboard data using the `from` and `to` query parameters. The month should fall within the last six months.<br>
        **Scopes:** `dashboard_meetings:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br><br>
        **Prerequisites:** <br>
        * Business or a higher plan.<br><br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/meetings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardMeetingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardMeetings200ApplicationJSON])
                res.dashboard_meetings_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass

        return res

    
    def dashboard_webinar_detail(self, request: operations.DashboardWebinarDetailRequest) -> operations.DashboardWebinarDetailResponse:
        r"""Get webinar details
        Retrieve details from live or past webinars.<br><br>
        **Scopes:** `dashboard_webinars:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:**<br>
        * Business, Education or API Plan with Webinar add-on.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/webinars/{webinarId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardWebinarDetailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardWebinarDetailWebinarMetrics])
                res.webinar_metrics = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_webinar_participant_qos(self, request: operations.DashboardWebinarParticipantQosRequest) -> operations.DashboardWebinarParticipantQosResponse:
        r"""Get webinar participant QoS
        Retrieve details on the quality of service that participants from live or past webinars recieved.<br>This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields.<br>
        **Scopes:** `dashboard_webinars:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy` <br>
        **Prerequisites:** <br>
        * Business, Education or API Plan with Zoom Rooms set up.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/webinars/{webinarId}/participants/{participantId}/qos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardWebinarParticipantQosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardWebinarParticipantQosParticipantQos])
                res.participant_qos = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_webinar_participant_share(self, request: operations.DashboardWebinarParticipantShareRequest) -> operations.DashboardWebinarParticipantShareResponse:
        r"""Get sharing/recording details
        Retrieve the sharing and recording details of participants from live or past webinars. <br><br>
        **Scopes:** `dashboard_webinars:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy` <br>
        **Prerequisites:**<br>
        * Business, Education or API Plan with Webinar add-on.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/webinars/{webinarId}/participants/sharing", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardWebinarParticipantShareResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardWebinarParticipantShare200ApplicationJSON])
                res.dashboard_webinar_participant_share_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_webinar_participants(self, request: operations.DashboardWebinarParticipantsRequest) -> operations.DashboardWebinarParticipantsResponse:
        r"""Get webinar participants
        Retrieve details on participants from live or past webinars.<br><br>
        **Scopes:** `dashboard_webinars:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:**<br>
        * Business, Education or API Plan with Webinar add-on.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/webinars/{webinarId}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardWebinarParticipantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardWebinarParticipants200ApplicationJSON])
                res.dashboard_webinar_participants_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_webinar_participants_qos(self, request: operations.DashboardWebinarParticipantsQosRequest) -> operations.DashboardWebinarParticipantsQosResponse:
        r"""List webinar participant QoS
        Retrieve a list of participants from live or past webinars and the quality of service they received.<br>This data indicates the connection quality for sending/receiving video, audio, and shared content. If nothing is being sent or received at that time, no information will be shown in the fields.<br>
        **Scopes:** `dashboard_webinars:read:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        **Prerequisites:**
        * Business, Education or API Plan with Webinar add-on.
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/webinars/{webinarId}/participants/qos", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardWebinarParticipantsQosResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardWebinarParticipantsQosParticipantQosList])
                res.participant_qos_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def dashboard_webinars(self, request: operations.DashboardWebinarsRequest) -> operations.DashboardWebinarsResponse:
        r"""List webinars
        List all the live or past webinars from a specified period of time. <br><br>
        **Scopes:** `dashboard_webinars:read:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
        **Prerequisites:**<br>
        * Business, Education or API Plan with Webinar add-on.
        
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/webinars"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardWebinarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardWebinars200ApplicationJSON])
                res.dashboard_webinars_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass

        return res

    
    def dashboard_zoom_room(self, request: operations.DashboardZoomRoomRequest) -> operations.DashboardZoomRoomResponse:
        r"""Get Zoom Rooms details
        The Zoom Rooms dashboard metrics lets you know the type of configuration a Zoom room has and details on the meetings held in that room. 
        
        Use this API to retrieve information on a specific room.<br><br>
        **Scopes:** `dashboard_zr:read:admin`<br> <br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`**Prerequisites:**<br>
        * Business, Education or API Plan with Zoom Rooms set up.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/zoomrooms/{zoomroomId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardZoomRoomResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardZoomRoomZoomRoom])
                res.zoom_room = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass

        return res

    
    def dashboard_zoom_room_issue(self, request: operations.DashboardZoomRoomIssueRequest) -> operations.DashboardZoomRoomIssueResponse:
        r"""Get top 25 issues of Zoom Rooms
        Get top 25 issues of Zoom Rooms.<br>
        **Scopes:** `dashboard_zr:read:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
         **Prerequisites:**<br>
        * Business, Education or API Plan with Zoom Rooms set up.
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/zoomrooms/issues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardZoomRoomIssueResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardZoomRoomIssue200ApplicationJSON])
                res.dashboard_zoom_room_issue_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def dashboard_zoom_rooms(self, request: operations.DashboardZoomRoomsRequest) -> operations.DashboardZoomRoomsResponse:
        r"""List Zoom Rooms
        List information on all Zoom Rooms in an account.<br><br>
        **Scopes:** `dashboard_zr:read:admin`
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Resource-intensive`<br>
         **Prerequisites:**<br>
        * Business, Education or API Plan with Zoom Rooms set up.
        
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/zoomrooms"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DashboardZoomRoomsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DashboardZoomRoomsZoomRoomList])
                res.zoom_room_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_call_log_metrics_details(self, request: operations.GetCallLogMetricsDetailsRequest) -> operations.GetCallLogMetricsDetailsResponse:
        r"""Get call details from call log
        Call logs provide a record of all incoming and outgoing calls over Zoom Phone in an account. 
        
        Use this API to list call log details of a specific call. 
        
        **Prerequisites:**
        * Business, or Education account
        * Zoom Phone license <br><br>
        
        **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
        **Rate Limit Label:** `Light`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/metrics/call_logs/{call_id}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCallLogMetricsDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCallLogMetricsDetails200ApplicationJSON])
                res.get_call_log_metrics_details_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def get_call_qo_s(self, request: operations.GetCallQoSRequest) -> operations.GetCallQoSResponse:
        r"""Get call QoS
        Get call quality of service(QoS) data for a call made or received by a Zoom phone user in the account. 
        
        **Prerequisites:**
        * Business, or Education account
        * Zoom Phone license <br><br>
        **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
        **Rate Limit Label:** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/metrics/call_logs/{callId}/qos", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCallQoSResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetCallQoS200ApplicationJSON])
                res.get_call_qo_s_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def list_call_logs_metrics(self, request: operations.ListCallLogsMetricsRequest) -> operations.ListCallLogsMetricsResponse:
        r"""List call logs
        Call logs provide a record of all incoming and outgoing calls over Zoom Phone in an account. 
        
        Use this API to list monthly call logs metrics. You can use query parameters to filter the response by date, site and MOS(Mean Opinion Score) of the call. 
        
        **Prerequisites:**
        * Business, or Education account
        * Zoom Phone license <br><br>
        
        **Scopes:** `phone:read:admin`, `phone:write:admin`<br>
        **Rate Limit Label:** `Heavy`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/metrics/call_logs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListCallLogsMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListCallLogsMetrics200ApplicationJSON])
                res.list_call_logs_metrics_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def list_meeting_satisfaction(self, request: operations.ListMeetingSatisfactionRequest) -> operations.ListMeetingSatisfactionResponse:
        r"""List client meeting satisfaction
        If the [End of Meeting Feedback Survey](https://support.zoom.us/hc/en-us/articles/115005855266) option is enabled, attendees will be prompted with a survey window where they can tap either the **Thumbs Up** or **Thumbs Down** button that indicates their Zoom meeting experience. With this API, you can get information on the attendees' meeting satisfaction. Specify a monthly date range for the query using the from and to query parameters. The month should fall within the last six months.
        
        To get information on the survey results with negative experiences (indicated by **Thumbs Down**), use the [Get Zoom Meetings Client Feedback API](https://marketplace.zoom.us/docs/api-reference/zoom-api/dashboards/dashboardclientfeedbackdetail).<br>
        **Scopes:** `dashboard:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/metrics/client/satisfaction"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMeetingSatisfactionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMeetingSatisfaction200ApplicationJSON])
                res.list_meeting_satisfaction_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def participant_feedback(self, request: operations.ParticipantFeedbackRequest) -> operations.ParticipantFeedbackResponse:
        r"""Get post meeting feedback
        When a meeting ends, each attendee will be prompted to share their meeting experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific meeting. Note that this API only works for meetings scheduled after December 20, 2020.
        
        **Prerequisites:**
        * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
        * The user making the API request must be enrolled in a Business or a higher plan.
        
        <br> **Scope:** `dashboard_meetings:read:admiin`
        
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/meetings/{meetingId}/participants/satisfaction", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ParticipantFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ParticipantFeedback200ApplicationJSON])
                res.participant_feedback_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def participant_webinar_feedback(self, request: operations.ParticipantWebinarFeedbackRequest) -> operations.ParticipantWebinarFeedbackResponse:
        r"""Get post webinar feedback
        When a Webinar ends, each attendee will be prompted to share their Webinar experience by clicking either thumbs up or thumbs down. Use this API to retrieve the feedback submitted for a specific webinar. Note that this API only works for meetings scheduled after December 20, 2020.
        
        **Prerequisites:**
        * [Feedback to Zoom](https://support.zoom.us/hc/en-us/articles/115005838023) setting must be enabled by the participant prior to the meeting.
        * The user making the API request must be enrolled in a Business or a higher plan.
        
        
        <br> **Scope:** `dashboard_webinars:read:admin`
        
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/metrics/webinars/{webinarId}/participants/satisfaction", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ParticipantWebinarFeedbackResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ParticipantWebinarFeedback200ApplicationJSON])
                res.participant_webinar_feedback_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    