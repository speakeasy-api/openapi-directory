import requests
from typing import Optional
from sdk.models import operations
from . import utils

class TrackingField:
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

    
    def trackingfield_create(self, request: operations.TrackingfieldCreateRequest) -> operations.TrackingfieldCreateResponse:
        r"""Create a tracking field
        [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br> Use this API to create a new tracking field.<br><br>
        **Scope:** `trackingfield:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**
        * Business, Education, API or higher plan
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tracking_fields"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TrackingfieldCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TrackingfieldCreateTrackingField1])
                res.tracking_field = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def trackingfield_delete(self, request: operations.TrackingfieldDeleteRequest) -> operations.TrackingfieldDeleteResponse:
        r"""Delete a tracking field
        [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br> Use this API to delete a tracking field.<br><br>
        **Scope:** `trackingfield:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**
        * Business, Education, API or higher plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tracking_fields/{fieldId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrackingfieldDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def trackingfield_get(self, request: operations.TrackingfieldGetRequest) -> operations.TrackingfieldGetResponse:
        r"""Get a tracking field
        [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br><br> When scheduling a meeting, the tracking field will be included in the meeting options.<br>Use this API to get information on a tracking field.<br><br>
        **Scopes:** `trackingfield:read:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**
        * Business, Education, API or higher plan
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tracking_fields/{fieldId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrackingfieldGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TrackingfieldGetTrackingField])
                res.tracking_field = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def trackingfield_list(self, request: operations.TrackingfieldListRequest) -> operations.TrackingfieldListResponse:
        r"""List tracking fields
        [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br> Use this API to list all the tracking fields on your Zoom account.<br><br>
        **Scopes:** `trackingfield:read:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Prerequisites:**
        * Business, Education, API or higher plan
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tracking_fields"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TrackingfieldListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.TrackingfieldListTrackingFieldList])
                res.tracking_field_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def trackingfield_update(self, request: operations.TrackingfieldUpdateRequest) -> operations.TrackingfieldUpdateResponse:
        r"""Update a tracking field
        [Tracking fields](https://support.zoom.us/hc/en-us/articles/115000293426-Scheduling-Tracking-Fields) allow you to analyze usage by various fields within an organization.<br> Use this API to update a tracking field.<br><br>
        **Scope:** `trackingfield:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**
        * Business, Education, API or higher plan
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/tracking_fields/{fieldId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TrackingfieldUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    