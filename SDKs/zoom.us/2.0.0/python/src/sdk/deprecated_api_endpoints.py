import requests
from typing import Optional
from sdk.models import operations
from . import utils

class DeprecatedAPIEndpoints:
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

    
    def list_past_meeting_files(self, request: operations.ListPastMeetingFilesRequest) -> operations.ListPastMeetingFilesResponse:
        r"""List past meeting's files
        **Note: This API has been deprecated and is no longer supported due to GCM encryption updates for security purposes.** To learn about saving the in-meeting chat files via Zoom Client, refer to the [Saving in-meeting chat](https://support.zoom.us/hc/en-us/articles/115004792763-Saving-in-meeting-chat) guide.
        
        List files sent via in-meeting chat during a meeting. The in-meeting files are deleted after 24 hours of the meeting completion time. 
        <br><br>
        **Scope:** `meeting:read`, `meeting:read:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_meetings/{meetingId}/files", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPastMeetingFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPastMeetingFiles200ApplicationJSON])
                res.list_past_meeting_files_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def list_past_webinar_files(self, request: operations.ListPastWebinarFilesRequest) -> operations.ListPastWebinarFilesResponse:
        r"""List past webinar files
        **Note: This API has been deprecated and is no longer supported due to GCM encryption updates for security purposes.**
        
        List files sent via in-meeting chat during a meeting. The in-meeting files are deleted after 24 hours of the meeting completion time. 
        <br><br>
        **Scope:** `webinar:read`, `webinar:read:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_webinars/{webinarId}/files", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPastWebinarFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPastWebinarFiles200ApplicationJSON])
                res.list_past_webinar_files_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    