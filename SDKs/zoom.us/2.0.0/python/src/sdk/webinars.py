import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Webinars:
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

    
    def add_batch_webinar_registrants(self, request: operations.AddBatchWebinarRegistrantsRequest) -> operations.AddBatchWebinarRegistrantsResponse:
        r"""Perform batch registration
        Use this API to register up to 30 registrants at once for a scheduled webinar that requires [registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-webinar-with-registration). <br>
        
        **Prerequisites:**<br>
        * The webinar host must be a Licensed user.
        * The webinar should be of type `5`, i.e., it should be a scheduled webinar. Other types of webinars are not supported by this API.<br><br>
        **Scope:** `webinar:write`, `webinar:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
        
        
        
        
        
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/batch_registrants", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddBatchWebinarRegistrantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddBatchWebinarRegistrants200ApplicationJSON])
                res.add_batch_webinar_registrants_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_webinar_registrant(self, request: operations.DeleteWebinarRegistrantRequest) -> operations.DeleteWebinarRegistrantResponse:
        r"""Delete a webinar registrant
        Delete a webinar registrant.<br><br>
        **Scopes**: `webinar:write:admin` `webinar:write`<br>
         <br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/registrants/{registrantId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteWebinarRegistrantResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def get_tracking_sources(self, request: operations.GetTrackingSourcesRequest) -> operations.GetTrackingSourcesResponse:
        r"""Get webinar tracking sources
        [Webinar Registration Tracking Sources](https://support.zoom.us/hc/en-us/articles/360000315683-Webinar-Registration-Source-Tracking) allow you to see where your registrants are coming from if you share the webinar registration page in multiple platforms. You can then use the source tracking to see the number of registrants generated from each platform.<br> Use this API to list information on all the tracking sources of a Webinar.<br>
        **Scopes:** `webinar:read:admin`, `webinar:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Prerequisites**:<br>
        * [Webinar license](https://zoom.us/webinar).
        * Registration must be required for the Webinar.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/tracking_sources", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTrackingSourcesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetTrackingSources200ApplicationJSON])
                res.get_tracking_sources_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def list_past_webinar_poll_results(self, request: operations.ListPastWebinarPollResultsRequest) -> operations.ListPastWebinarPollResultsResponse:
        r"""List past webinar poll results
        The polling feature for webinar allows you to create single choice or multiple choice polling questions for your webinars. Use this API to retrieve the results for Webinar Polls of a specific Webinar.
        
        **Prerequisites:**<br>
        * [Webinar license](https://zoom.us/webinar)<br>
        **Scopes**: `webinar:read:admin`, `webinar:read`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_webinars/{webinarId}/polls", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPastWebinarPollResultsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPastWebinarPollResults200ApplicationJSON])
                res.list_past_webinar_poll_results_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def list_past_webinar_qa(self, request: operations.ListPastWebinarQaRequest) -> operations.ListPastWebinarQaResponse:
        r"""List Q&A of past webinar
        The [Question & Answer (Q&A)](https://support.zoom.us/hc/en-us/articles/203686015-Getting-Started-with-Question-Answer) feature for Webinars allows attendees to ask questions during the Webinar and for the panelists, co-hosts and host to answer their questions.<br>
        Use this API to list Q&A of a specific Webinar.
        
        **Prerequisites:**<br>
        * [Webinar license](https://zoom.us/webinar)<br>
        **Scopes**: `webinar:read:admin`, `webinar:read`<br>
         <br>
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_webinars/{webinarId}/qa", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListPastWebinarQaResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListPastWebinarQa200ApplicationJSON])
                res.list_past_webinar_qa_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def list_webinar_participants(self, request: operations.ListWebinarParticipantsRequest) -> operations.ListWebinarParticipantsResponse:
        r"""List webinar participants
        Use this API to list all the participants who attended a webinar hosted in the past. <br>
        
        **Prerequisites:**
        * Pro or higher plan with a Webinar Add-on.<br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br> 
        <br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_webinars/{webinarId}/participants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWebinarParticipantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWebinarParticipants200ApplicationJSON])
                res.list_webinar_participants_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def list_webinar_templates(self, request: operations.ListWebinarTemplatesRequest) -> operations.ListWebinarTemplatesResponse:
        r"""List webinar templates
        When you schedule a webinar, you can save the settings for that webinar as a template for scheduling future webinars. <br><br>Use this API to list a user's existing [Webinar templates'](https://support.zoom.us/hc/en-us/articles/115001079746-Webinar-Templates) information.
        
        **Prerequisites:**
        * Pro or a higher account with Webinar plan enabled.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/webinar_templates", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ListWebinarTemplatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListWebinarTemplates200ApplicationJSON])
                res.list_webinar_templates_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def past_webinars(self, request: operations.PastWebinarsRequest) -> operations.PastWebinarsResponse:
        r"""List past webinar instances
        List past webinar instances.<br><br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_webinars/{webinarId}/instances", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.PastWebinarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.PastWebinarsWebinarInstances])
                res.webinar_instances = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar(self, request: operations.WebinarRequest) -> operations.WebinarResponse:
        r"""Get a webinar
        Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br>Use this API to get details of a scheduled webinar.<br><br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>**Prerequisites:**
        * Pro or higher plan with a Webinar Add-on.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Webinar200ApplicationJSON])
                res.webinar_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_absentees(self, request: operations.WebinarAbsenteesRequest) -> operations.WebinarAbsenteesResponse:
        r"""Get webinar absentees
        List absentees of a webinar.<br><br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/past_webinars/{WebinarUUID}/absentees", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarAbsenteesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarAbsenteesRegistrationList])
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

    
    def webinar_create(self, request: operations.WebinarCreateRequest) -> operations.WebinarCreateResponse:
        r"""Create a webinar
        Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br>Use this API to schedule a Webinar for a user (host).<br><br> 
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**
        * Pro or higher plan with a Webinar Add-on.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/webinars", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarCreate201ApplicationJSON])
                res.webinar_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_delete(self, request: operations.WebinarDeleteRequest) -> operations.WebinarDeleteResponse:
        r"""Delete a webinar
        Delete a Webinar.<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**<br>
        * Pro or higher plan with a Webinar Add-on.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_panelist_create(self, request: operations.WebinarPanelistCreateRequest) -> operations.WebinarPanelistCreateResponse:
        r"""Add panelists
        Panelists in a Webinar can view and send video, screen share, annotate, etc and do much more compared to attendees in a webinar.<br>Use this API to [add panelists](https://support.zoom.us/hc/en-us/articles/115005657826-Inviting-Panelists-to-a-Webinar#h_7550d59e-23f5-4703-9e22-e76bded1ed70) to a scheduled webinar.<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        **Prerequisites:**
        * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br> 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/panelists", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPanelistCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarPanelistCreate201ApplicationJSON])
                res.webinar_panelist_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_panelist_delete(self, request: operations.WebinarPanelistDeleteRequest) -> operations.WebinarPanelistDeleteResponse:
        r"""Remove a panelist
        [Remove](https://support.zoom.us/hc/en-us/articles/115005657826-Inviting-Panelists-to-a-Webinar#h_de31f237-a91c-4fb2-912b-ecfba8ec5ffb) a single panelist from a webinar.<br> You can retrieve the `panelistId` by calling **List Panelists API**.<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        **Prerequisites:**<br>
        * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br> 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/panelists/{panelistId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPanelistDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_panelists(self, request: operations.WebinarPanelistsRequest) -> operations.WebinarPanelistsResponse:
        r"""List panelists
        Panelists in a Webinar can view and send video, screen share, annotate, etc and do much more compared to attendees in a Webinar. 
        
        Use this API to list all the panelists of a Webinar.<br><br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Prerequisites:**<br>
        * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br> 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/panelists", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPanelistsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarPanelistsPanelistList])
                res.panelist_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_panelists_delete(self, request: operations.WebinarPanelistsDeleteRequest) -> operations.WebinarPanelistsDeleteResponse:
        r"""Remove panelists
        Remove all the panelists from a Webinar.<br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**<br>
        * Pro or a higher plan with [Webinar Add-on](https://zoom.us/webinar).<br> 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/panelists", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPanelistsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_poll_create(self, request: operations.WebinarPollCreateRequest) -> operations.WebinarPollCreateResponse:
        r"""Create a webinar's poll
        Create a [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) for a webinar.<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/polls", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPollCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarPollCreatePoll2])
                res.poll = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_poll_delete(self, request: operations.WebinarPollDeleteRequest) -> operations.WebinarPollDeleteResponse:
        r"""Delete a webinar poll
        Delete a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/polls/{pollId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPollDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_poll_get(self, request: operations.WebinarPollGetRequest) -> operations.WebinarPollGetResponse:
        r"""Get a webinar poll
        Get a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) details.<br><br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/polls/{pollId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPollGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarPollGetPoll])
                res.poll = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_poll_update(self, request: operations.WebinarPollUpdateRequest) -> operations.WebinarPollUpdateResponse:
        r"""Update a webinar poll
        Update a webinar's [poll](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars).<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/polls/{pollId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPollUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_polls(self, request: operations.WebinarPollsRequest) -> operations.WebinarPollsResponse:
        r"""List a webinar's polls 
        List all the [polls](https://support.zoom.us/hc/en-us/articles/203749865-Polling-for-Webinars) of a Webinar.<br><br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/polls", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarPollsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarPollsPollList])
                res.poll_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_registrant_create(self, request: operations.WebinarRegistrantCreateRequest) -> operations.WebinarRegistrantCreateResponse:
        r"""Add a webinar registrant
        Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the Webinar.<br>Use this API to create and submit the registration of a user for a webinar.<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**
        * Pro or higher plan with a Webinar Add-on.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/registrants", request.path_params)
        
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

        res = operations.WebinarRegistrantCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarRegistrantCreate201ApplicationJSON])
                res.webinar_registrant_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_registrant_get(self, request: operations.WebinarRegistrantGetRequest) -> operations.WebinarRegistrantGetResponse:
        r"""Get a webinar registrant
        Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the Webinar.<br>Use this API to get details on a specific user who has registered for the Webinar.<br><br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**<br>
        * The account must have a Webinar plan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/registrants/{registrantId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarRegistrantGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarRegistrantGetWebianrRegistrant])
                res.webianr_registrant = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_registrant_question_update(self, request: operations.WebinarRegistrantQuestionUpdateRequest) -> operations.WebinarRegistrantQuestionUpdateResponse:
        r"""Update registration questions
        Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form with fields and questions before they can receive the link to join the Webinar.<br>Use this API to update registration questions and fields of a scheduled Webinar that are to be answered by users while registering for a Webinar.<br><br>
        **Prerequisites:**<br>  
        * Pro or higher plan with a Webinar Add-on.
        * Registration option for Webinar should be set as required to use this API. 
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/registrants/questions", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarRegistrantQuestionUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_registrant_status(self, request: operations.WebinarRegistrantStatusRequest) -> operations.WebinarRegistrantStatusResponse:
        r"""Update registrant's status
        Update a webinar registrant's status. Using this API, you can specify whether you want to approve a registration, deny a registration or cancel a previously approved registration.<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/registrants/status", request.path_params)
        
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

        res = operations.WebinarRegistrantStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_registrants(self, request: operations.WebinarRegistrantsRequest) -> operations.WebinarRegistrantsResponse:
        r"""List webinar registrants
        Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees. Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form before receiving the link to join the Webinar.<br>
        Use this API to list all the users that have registered for a webinar.<br><br>
        **Prerequisites:**
        * Pro or higher plan with a Webinar Add-on.<br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/registrants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarRegistrantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarRegistrantsRegistrationList])
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

    
    def webinar_registrants_questions_get(self, request: operations.WebinarRegistrantsQuestionsGetRequest) -> operations.WebinarRegistrantsQuestionsGetResponse:
        r"""List registration questions
        Scheduling a [Webinar with registration](https://support.zoom.us/hc/en-us/articles/204619915-Scheduling-a-Webinar-with-Registration) requires your registrants to complete a brief form with fields and questions before they can receive the link to join the Webinar.<br>Use this API to list registration questions and fields that are to be answered by users while registering for a Webinar.<br>
        **Prerequisites:**<br>  
        * Pro or higher plan with a Webinar Add-on.
        **Scopes:** `webinar:read:admin` `webinar:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/registrants/questions", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarRegistrantsQuestionsGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarRegistrantsQuestionsGetWebinarRegistrantQuestions])
                res.webinar_registrant_questions = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_status(self, request: operations.WebinarStatusRequest) -> operations.WebinarStatusResponse:
        r"""Update webinar status
        Update a webinar's status. Use this API to end an ongoing webinar.<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**<br>
        * The account must hold a valid [Webinar plan](https://zoom.us/webinar).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}/status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinar_update(self, request: operations.WebinarUpdateRequest) -> operations.WebinarUpdateResponse:
        r"""Update a webinar
        Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br>
        Use this API to make updates to a scheduled Webinar.<br><br>
        **Scopes:** `webinar:write:admin` `webinar:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**<br>
        * Pro or higher plan with a Webinar Add-on.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/webinars/{webinarId}", request.path_params)
        
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

        res = operations.WebinarUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def webinars(self, request: operations.WebinarsRequest) -> operations.WebinarsResponse:
        r"""List webinars
        Zoom users with a [Webinar Plan](https://zoom.us/webinar) have access to creating and managing Webinars. Webinar allows a host to broadcast a Zoom meeting to up to 10,000 attendees.<br> Use this API to list all the webinars that are scheduled by or on-behalf a user (Webinar host).<br><br>
        **Scopes:** `webinar:read:admin` `webinar:read`<br> <br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        **Prerequisites:**
        * Pro or higher plan with a Webinar Add-on.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/webinars", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WebinarsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.WebinarsUserList])
                res.user_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    