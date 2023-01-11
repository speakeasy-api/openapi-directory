import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Meetings:
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

    
    def create_batch_polls(self, request: operations.CreateBatchPollsRequest) -> operations.CreateBatchPollsResponse:
        r"""Perform batch poll creation
        Polls allow the meeting host to survey attendees. Use this API to create batch [polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) for a meeting.<br><br>
        
        **Scopes**: `meeting:write:admin` `meeting:write`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites**:<br>
        * Host user type must be **Pro** or higher plan.
        * Polling feature must be enabled in the host's account.
        * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/batch_polls", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateBatchPollsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateBatchPolls201ApplicationJSON])
                res.create_batch_polls_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_live_stream_details(self, request: operations.GetLiveStreamDetailsRequest) -> operations.GetLiveStreamDetailsResponse:
        r"""Get live stream details
        Zoom allows users to [live stream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to get a meeting's live stream configuration details such as Stream URL, Stream Key and Page URL.<br><br>
        **Prerequisites:**<br>
        * Meeting host must be a licensed user with a Pro or higher plan.<br>
        * Live streaming details must have been [configured](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service#h_01589a6f-a40a-4e18-a448-cb746e52ebc5) for the meeting.<br><br>
        **Scopes:** `meeting:read:admin` `meeting:read`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/livestream", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetLiveStreamDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetLiveStreamDetails200ApplicationJSON])
                res.get_live_stream_details_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def in_meeting_recording_control(self, request: operations.InMeetingRecordingControlRequest) -> operations.InMeetingRecordingControlResponse:
        r"""Use in-Meeting recording controls
        Use this API to control the [in-meeting](https://support.zoom.us/hc/en-us/articles/360021921032-In-Meeting-Controls) **recording features** such as starting a recording, stopping a recording, pausing a recording, and resuming a recording. This API only works for Cloud Recordings and not for local recordings.
        
        
        **Prerequisite:**
        * The meeting must be a live meeting.
        * Cloud Recording must be enabled.
        * The user using this API must either be the host or alternative host of the meeting.
        
        **Scopes:** `meeting:write`, `meeting:write:admin`, `meeting:master`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/live_meetings/{meetingId}/events", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InMeetingRecordingControlResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.in_meeting_recording_control_202_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def list_meeting_templates(self, request: operations.ListMeetingTemplatesRequest) -> operations.ListMeetingTemplatesResponse:
        r"""List meeting templates
        Use this API to list [meeting templates](https://support.zoom.us/hc/en-us/articles/360036559151-Meeting-templates) that are available to be used by a user.
        
        **Scope:** `meeting:read` or `meeting:read:admin`
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/meeting_templates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListMeetingTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListMeetingTemplates200ApplicationJSON])
                res.list_meeting_templates_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def list_past_meeting_polls(self, request: operations.ListPastMeetingPollsRequest) -> operations.ListPastMeetingPollsResponse:
        r"""List past meeting's poll results
        [Polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) allow the meeting host to survey attendees. Use this API to list poll results of a meeting.<br><br>
        
        **Scopes**: `meeting:read:admin`, `meeting:read`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` <br>
        **Prerequisites**:<br>
        * Host user type must be **Pro**.
        * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_meetings/{meetingId}/polls", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPastMeetingPollsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPastMeetingPolls200ApplicationJSON])
                res.list_past_meeting_polls_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def meeting(self, request: operations.MeetingRequest) -> operations.MeetingResponse:
        r"""Get a meeting
        Retrieve the details of a meeting.<br><br>
        **Scopes:** `meeting:read:admin` `meeting:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` 
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Meeting200ApplicationJSON])
                res.meeting_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_create(self, request: operations.MeetingCreateRequest) -> operations.MeetingCreateResponse:
        r"""Create a meeting
        [Create a meeting](https://support.zoom.us/hc/en-us/articles/201362413-Scheduling-meetings) for a user. <br>This API has a daily rate limit of 100 requests per day. Therefore, only 100 **Create a Meeting** API requests are permitted within a 24 hour window for a user.<br>
        
        <aside>The <code>start_url</code> of a meeting is a URL using which a host or an alternative host can start a meeting. The expiration time for the <code>start_url</code> field is two hours for all regular users. 
        	
        For custCreate meeting hosts( i.e., users created using the <code>custCreate</code> option via the [Create Users](https://marketplace.zoom.us/docs/api-reference/zoom-api/users/usercreate) API), the expiration time of the <code>start_url</code> field is 90 days from the generation of the <code>start_url</code>.
        	
        For security reasons, the recommended way to retrieve the updated value for the <code>start_url</code> field programmatically (after expiry) is by calling the [Retrieve a Meeting API](https://marketplace.zoom.us/docs/api-reference/zoom-api/meetings/meeting) and referring to the value of the <code>start_url</code> field in the response.</aside><br><br>
        Scopes: `meeting:write:admin` `meeting:write`
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/meetings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingCreate201ApplicationJSON])
                res.meeting_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_delete(self, request: operations.MeetingDeleteRequest) -> operations.MeetingDeleteResponse:
        r"""Delete a meeting
        Delete a meeting.<br><br>
        **Scopes:** `meeting:write:admin` `meeting:write`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` 
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_invitation(self, request: operations.MeetingInvitationRequest) -> operations.MeetingInvitationResponse:
        r"""Get meeting invitation
        Retrieve the meeting invite note that was sent for a specific meeting.<br><br>
        **Scopes:** `meeting:read:admin` `meeting:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/invitation", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingInvitationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingInvitationMeetingInvitation])
                res.meeting_invitation = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def meeting_live_stream_status_update(self, request: operations.MeetingLiveStreamStatusUpdateRequest) -> operations.MeetingLiveStreamStatusUpdateResponse:
        r"""Update Live Stream Status
        Zoom allows users to [live stream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to update the status of a meeting's live stream.<br><br>
        **Prerequisites:**<br>
        * Meeting host must have a Pro license.<br>
        **Scopes:** `meeting:write:admin` `meeting:write`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` 
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/livestream/status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingLiveStreamStatusUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def meeting_live_stream_update(self, request: operations.MeetingLiveStreamUpdateRequest) -> operations.MeetingLiveStreamUpdateResponse:
        r"""Update a live stream
        Zoom allows users to [live stream a meeting](https://support.zoom.us/hc/en-us/articles/115001777826-Live-Streaming-Meetings-or-Webinars-Using-a-Custom-Service) to a custom platform. Use this API to update a meeting's live stream information.<br><br>
        **Prerequisites:**<br>
        * Meeting host must have a Pro license.<br>
        **Scopes:** `meeting:write:admin` `meeting:write`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/livestream", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingLiveStreamUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_poll_create(self, request: operations.MeetingPollCreateRequest) -> operations.MeetingPollCreateResponse:
        r"""Create a meeting poll
        Polls allow the meeting host to survey attendees. Use this API to create a [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) for a meeting.<br><br>
        
        **Scopes**: `meeting:write:admin` `meeting:write`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites**:<br>
        * Host user type must be **Pro** or higher plan.
        * Polling feature must be enabled in the host's account.
        * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/polls", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingPollCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingPollCreatePoll2])
                res.poll = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_poll_delete(self, request: operations.MeetingPollDeleteRequest) -> operations.MeetingPollDeleteResponse:
        r"""Delete a meeting poll
        Polls allow the meeting host to survey attendees. Use this API to delete a meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings).<br>
        **Scopes**: `meeting:write:admin` `meeting:write`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
        **Prerequisites**:<br>
        * Host user type must be **Pro**.
        * Polling feature should be enabled in the host's account.
        * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/polls/{pollId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingPollDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_poll_get(self, request: operations.MeetingPollGetRequest) -> operations.MeetingPollGetResponse:
        r"""Get a meeting poll
        Polls allow the meeting host to survey attendees. Use this API to get information about a specific meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings).<br><br>
        **Scopes**: `meeting:read:admin` `meeting:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/polls/{pollId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingPollGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingPollGetPoll])
                res.poll = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_poll_update(self, request: operations.MeetingPollUpdateRequest) -> operations.MeetingPollUpdateResponse:
        r"""Update a meeting poll
        Polls allow the meeting host to survey attendees. Use this API to update information of a specific meeting [poll](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings)<br><br>
        **Scopes**: `meeting:write:admin` `meeting:write`
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` 
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/polls/{pollId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingPollUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_polls(self, request: operations.MeetingPollsRequest) -> operations.MeetingPollsResponse:
        r"""List meeting polls
        Polls allow the meeting host to survey attendees. Use this API to list [polls](https://support.zoom.us/hc/en-us/articles/213756303-Polling-for-Meetings) of a meeting.<br><br>
        
        **Scopes**: `meeting:read:admin` `meeting:read`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites**:<br>
        * Host user type must be **Pro** or higher plan.
        * Meeting must be a scheduled meeting. Instant meetings do not have polling features enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/polls", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingPollsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingPollsPollList])
                res.poll_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_registrant_create(self, request: operations.MeetingRegistrantCreateRequest) -> operations.MeetingRegistrantCreateResponse:
        r"""Add meeting registrant
        Register a participant for a meeting.<br><br> Note that there is a maximum limit of 4999 registrants per meeting and users will see an error if the capacity has reached.
        
        **Prerequisite:**<br>
        * Host user type must be \"Licensed\".
        
        **Scopes:** `meeting:write:admin` `meeting:write`
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/registrants", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingRegistrantCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingRegistrantCreate201ApplicationJSON])
                res.meeting_registrant_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_registrant_question_update(self, request: operations.MeetingRegistrantQuestionUpdateRequest) -> operations.MeetingRegistrantQuestionUpdateResponse:
        r"""Update registration questions
        Update registration questions that will be displayed to users while [registering for a meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).<br><br>
        **Scopes:** `meeting:write`, `meeting:write:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
         
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/registrants/questions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingRegistrantQuestionUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_registrant_status(self, request: operations.MeetingRegistrantStatusRequest) -> operations.MeetingRegistrantStatusResponse:
        r"""Update registrant's status
        Update a meeting registrant's status by either approving, cancelling or denying a registrant from joining the meeting.<br><br>
        **Scopes:** `meeting:write:admin` `meeting:write`
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/registrants/status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingRegistrantStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_registrants(self, request: operations.MeetingRegistrantsRequest) -> operations.MeetingRegistrantsResponse:
        r"""List meeting registrants
        A host or a user with admin permission can require [registration for a Zoom meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings). Use this API to list users that have registered for a meeting.<br><br>
        **Scopes**: `meeting:read:admin` `meeting:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/registrants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingRegistrantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingRegistrantsRegistrationList])
                res.registration_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_registrants_questions_get(self, request: operations.MeetingRegistrantsQuestionsGetRequest) -> operations.MeetingRegistrantsQuestionsGetResponse:
        r"""List registration questions 
        List registration questions that will be displayed to users while [registering for a meeting](https://support.zoom.us/hc/en-us/articles/211579443-Registration-for-Meetings).<br>
        
        **Scopes:** `meeting:read`, `meeting:read:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/registrants/questions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingRegistrantsQuestionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingRegistrantsQuestionsGetMeetingRegistrantQuestions])
                res.meeting_registrant_questions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_status(self, request: operations.MeetingStatusRequest) -> operations.MeetingStatusResponse:
        r"""Update meeting status
        Update the status of a meeting.<br><br>
        **Scopes:** `meeting:write:admin` `meeting:write`
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_update(self, request: operations.MeetingUpdateRequest) -> operations.MeetingUpdateResponse:
        r"""Update a meeting
        Update the details of a meeting.<br>This API has a rate limit of 100 requests per day. Therefore, a meeting can only be updated for a maximum of 100 times within a 24 hour window.<br>
        **Scopes:** `meeting:write:admin` `meeting:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meetingregistrantdelete(self, request: operations.MeetingregistrantdeleteRequest) -> operations.MeetingregistrantdeleteResponse:
        r"""Delete a meeting registrant
        Delete a meeting registrant.<br><br>
        **Scopes**: `meeting:write:admin` `meeting:write`<br>
         <br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/registrants/{registrantId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingregistrantdeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def meetings(self, request: operations.MeetingsRequest) -> operations.MeetingsResponse:
        r"""List meetings
        List all the meetings that were scheduled for a user (meeting host). This API only supports scheduled meetings and thus, details on instant meetings are not returned via this API.<br><br>
        **Scopes:** `meeting:read:admin` `meeting:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/meetings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingsGroupList])
                res.group_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def past_meeting_details(self, request: operations.PastMeetingDetailsRequest) -> operations.PastMeetingDetailsResponse:
        r"""Get past meeting details
        Get details on a past meeting. <br><br>
        **Scopes:** `meeting:read:admin` `meeting:read`
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        > **Note**: Please double encode your UUID when using this API if the UUID begins with a '/'or contains '//' in it.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_meetings/{meetingUUID}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PastMeetingDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PastMeetingDetails200ApplicationJSON])
                res.past_meeting_details_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def past_meeting_participants(self, request: operations.PastMeetingParticipantsRequest) -> operations.PastMeetingParticipantsResponse:
        r"""Get past meeting participants
        Retrieve information on participants from a past meeting. <br><br>
        **Scopes:** `meeting:read:admin` `meeting:read`
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        **Prerequisites:**<br>
        * Paid account on a Pro or higher plan.
        
        <br> <br>  **Note**: Please double encode your UUID when using this API if the UUID begins with a '/'or contains '//' in it.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_meetings/{meetingUUID}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.PastMeetingParticipantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PastMeetingParticipants200ApplicationJSON])
                res.past_meeting_participants_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def past_meetings(self, request: operations.PastMeetingsRequest) -> operations.PastMeetingsResponse:
        r"""List ended meeting instances
        Get a list of ended meeting instances<br><br>
        **Scopes:** `meeting:read:admin` `meeting:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_meetings/{meetingId}/instances", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PastMeetingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PastMeetingsMeetingInstances])
                res.meeting_instances = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    