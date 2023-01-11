import requests
from typing import Optional
from sdk.models import operations
from . import utils

class CloudRecording:
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

    
    def get_account_cloud_recording(self, request: operations.GetAccountCloudRecordingRequest) -> operations.GetAccountCloudRecordingResponse:
        r"""List recordings of an account
        List [Cloud Recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) available on an Account.
        
        > To access a password protected cloud recording, add an \"access_token\" parameter to the download URL and provide [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) as the value of the \"access_token\".
        <br>
        **Prerequisites**:<br>
        * A Pro or a higher paid plan with Cloud Recording option enabled.<br>
        **Scopes**: `recording:read:admin` or `account:read:admin`
        
        If the scope `recording:read:admin` is used, the Account ID of the Account must be provided in the `accountId` path parameter to list recordings that belong to the Account. This scope only works for sub accounts. 
        
        To list recordings of a master account, the scope must be `account:read:admin` and the value of `accountId` should be `me`.<br>  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/recordings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountCloudRecordingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetAccountCloudRecording200ApplicationJSON])
                res.get_account_cloud_recording_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def list_archived_files(self, request: operations.ListArchivedFilesRequest) -> operations.ListArchivedFilesResponse:
        r"""List archived files
        Zoom’s [archiving solution](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data) allows account administrators to set up an automated mechanism to record, collect and archive meeting data to a 3rd party platform of their choice and hence, satisfy FINRA and/ or other compliance requirements.<br><br>
        Use this API to retrieve archived meeting or webinar files of an account.
        
        **Scope:** `recording:read:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br><br>
        **Prerequisites:** <br>
        * Enable cloud recording.
        * Follow the [enablement process](https://support.zoom.us/hc/en-us/articles/360050431572-Archiving-Meeting-and-Webinar-data#h_01ENPBD3WR68D7FAKTBY92SG45) to access the archiving feature.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/archive_files"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListArchivedFilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListArchivedFiles200ApplicationJSON])
                res.list_archived_files_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def meeting_recording_registrant_create(self, request: operations.MeetingRecordingRegistrantCreateRequest) -> operations.MeetingRecordingRegistrantCreateResponse:
        r"""Create a recording registrant
        Cloud Recordings of past Zoom Meetings can be made [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings). Users should be [registered](https://marketplace.zoom.us/docs/api-reference/zoom-api/cloud-recording/meetingrecordingregistrantcreate) to view these recordings.
        
        Use this API to register a user to gain access to **On-demand Cloud Recordings** of a past meeting.<br>
        **Scopes:** `recording:write:admin`, `recording:write`.<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/registrants", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingRecordingRegistrantCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingRecordingRegistrantCreate201ApplicationJSON])
                res.meeting_recording_registrant_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_recording_registrant_status(self, request: operations.MeetingRecordingRegistrantStatusRequest) -> operations.MeetingRecordingRegistrantStatusResponse:
        r"""Update registrant's status
        A registrant can either be approved or denied from viewing the [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) recording. 
        Use this API to update a registrant's status.
        
        **Scopes:** `recording:write:admin`, `recording:write`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/registrants/status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingRecordingRegistrantStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def meeting_recording_registrants(self, request: operations.MeetingRecordingRegistrantsRequest) -> operations.MeetingRecordingRegistrantsResponse:
        r"""List recording registrants
        Cloud Recordings of past Zoom Meetings can be made [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings). Users should be [registered](https://marketplace.zoom.us/docs/api-reference/zoom-api/cloud-recording/meetingrecordingregistrantcreate) to view these recordings.
        
        Use this API to list registrants of **On-demand Cloud Recordings** of a past meeting.<br>
        **Scopes:** `recording:read:admin`, `recording:read`.<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/registrants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.MeetingRecordingRegistrantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.MeetingRecordingRegistrantsRecordingRegistrationList])
                res.recording_registration_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def recording_delete(self, request: operations.RecordingDeleteRequest) -> operations.RecordingDeleteResponse:
        r"""Delete meeting recordings
        Delete all recording files of a meeting.<br><br>
        
        **Scopes:** `recording:write:admin` `recording:write`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites**:
        * Cloud Recording should be enabled on the user's account.<br>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def recording_delete_one(self, request: operations.RecordingDeleteOneRequest) -> operations.RecordingDeleteOneResponse:
        r"""Delete a meeting recording file
        Delete a sprecific recording file from a meeting.<br><br>
        **Scopes**: `recording:write:admin` `recording:write`<br>
         <br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/{recordingId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingDeleteOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def recording_get(self, request: operations.RecordingGetRequest) -> operations.RecordingGetResponse:
        r"""Get meeting recordings
        Get all the [recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording#h_7420acb5-1897-4061-87b4-5b76e99c03b4) from a meeting or Webinar instance.<br><br> The recording files can be downloaded via the `download_url` property listed in the response.
        
        > To access a password protected cloud recording, add an \"access_token\" parameter to the download URL and provide OAuth access token or [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) as the value of the \"access_token\".
        <br>
        
        **Scopes:** `recording:read:admin` `recording:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RecordingGetRecordingFileList])
                res.recording_file_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def recording_registrant_question_update(self, request: operations.RecordingRegistrantQuestionUpdateRequest) -> operations.RecordingRegistrantQuestionUpdateResponse:
        r"""Update registration questions
        For [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) meeting recordings, you can include fields with questions that will be shown to registrants when they register to view the recording.
        
        Use this API to update registration questions that are to be answered by users while registering to view a recording.<br>
        **Scopes:** `recording:write:admin`, `recording:write`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/registrants/questions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingRegistrantQuestionUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def recording_registrants_questions_get(self, request: operations.RecordingRegistrantsQuestionsGetRequest) -> operations.RecordingRegistrantsQuestionsGetResponse:
        r"""Get registration questions
        For [on-demand](https://support.zoom.us/hc/en-us/articles/360000488283-On-demand-Recordings) meeting recordings, you can include fields with questions that will be shown to registrants when they register to view the recording.
        
        Use this API to retrieve a list of questions that are displayed for users to complete when registering to view the recording of a specific meeting.<br>
        **Scopes:** `recording:read:admin`, `recording:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/registrants/questions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingRegistrantsQuestionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RecordingRegistrantsQuestionsGetRecordingRegistrantQuestions])
                res.recording_registrant_questions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def recording_setting_update(self, request: operations.RecordingSettingUpdateRequest) -> operations.RecordingSettingUpdateResponse:
        r"""Get meeting recording settings
        Retrieve settings applied to a meeting's [Cloud Recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording).<br><br>
        **Scopes**: `recording:read:admin` `recording:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/settings", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingSettingUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RecordingSettingUpdateRecordingSettings])
                res.recording_settings = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def recording_settings_update(self, request: operations.RecordingSettingsUpdateRequest) -> operations.RecordingSettingsUpdateResponse:
        r"""Update meeting recording settings
        Update settings applied to a meeting's [Cloud Recording](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording)<br><br>
        **Scopes**: `recording:write:admin` `recording:write`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` <br>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/settings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingSettingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def recording_status_update(self, request: operations.RecordingStatusUpdateRequest) -> operations.RecordingStatusUpdateResponse:
        r"""Recover meeting recordings
        Zoom allows users to recover recordings from trash for up to 30 days from the deletion date. Use this API to recover all deleted [Cloud Recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) of a specific meeting.<br><br>
        **Scopes**: `recording:write:admin` `recording:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites**:<br>
        * A Pro user with Cloud Recording enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingStatusUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def recording_status_update_one(self, request: operations.RecordingStatusUpdateOneRequest) -> operations.RecordingStatusUpdateOneResponse:
        r"""Recover a single recording
        Zoom allows users to recover recordings from trash for up to 30 days from the deletion date. Use this API to recover a single recording file from the meeting.<br>
        **Scopes:** `recording:write:admin` `recording:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/meetings/{meetingId}/recordings/{recordingId}/status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingStatusUpdateOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def recordings_list(self, request: operations.RecordingsListRequest) -> operations.RecordingsListResponse:
        r"""List all recordings
        When a user records a meeting or a webinar by choosing the **Record to the Cloud** option, the video, audio, and chat text are recorded in the Zoom cloud. 
        
        Use this API to list all [Cloud recordings](https://support.zoom.us/hc/en-us/articles/203741855-Cloud-Recording) of a user.<br>
        > To access a user's password protected cloud recording, add an \"access_token\" parameter to the download URL and provide either the [JWT](https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-jwt-app) or the user's OAuth access token as the value of the \"access_token\" parameter. 
        <br>
        
        **Scopes:** `recording:read:admin` `recording:read`  <br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Prerequisites:** 
        * Pro or a higher plan.
        * Cloud Recording must be enabled on the user's account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/recordings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RecordingsListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RecordingsListRecordingList])
                res.recording_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    