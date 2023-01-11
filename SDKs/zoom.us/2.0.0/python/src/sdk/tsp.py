import requests
from typing import Optional
from sdk.models import operations
from . import utils

class Tsp:
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

    
    def tsp(self) -> operations.TspResponse:
        r"""Get account's TSP information
        Get information on Telephony Service Provider on an account level.<br><br>
        **Scopes:** `tsp:read:admin` <br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        **Prerequisites:**<br>
        * A Pro or a higher plan.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tsp"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.TspResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Tsp200ApplicationJSON])
                res.tsp_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def tsp_update(self, request: operations.TspUpdateRequest) -> operations.TspUpdateResponse:
        r"""Update account's TSP information
        Update information of the Telephony Service Provider set up on an account.<br>
        **Prerequisites**:<br>
        TSP account option should be enabled.<br>
        **Scopes:** `tsp:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/tsp"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TspUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass

        return res

    
    def tsp_url_update(self, request: operations.TspURLUpdateRequest) -> operations.TspURLUpdateResponse:
        r"""Set global dial-in URL for a TSP user
        A global dial-in page can provide a list of global access numbers using which audio conferencing can be conducted. By calling this API, you can set the url for the global dial-in page of a user whose Zoom account has TSP and special TSP with third-party audio conferencing options enabled. <p></p>
        **Scopes:**`tsp:write:admin` `tsp:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/tsp/settings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.TspURLUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_tsp(self, request: operations.UserTspRequest) -> operations.UserTspResponse:
        r"""Get a user's TSP account
        Each user can have a maximum of two TSP accounts. Use this API to retrieve details of a specific TSP account enabled for a specific user.<br><br>
        **Scopes:** `tsp:read:admin` `tsp:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/tsp/{tspId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserTspResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserTspTspAccount])
                res.tsp_account = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_tsp_create(self, request: operations.UserTspCreateRequest) -> operations.UserTspCreateResponse:
        r"""Add a user's TSP account
        Add a user's TSP account.<br><br>
        **Scopes:** `tsp:write:admin` `tsp:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/tsp", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserTspCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserTspCreateTspAccountsList])
                res.tsp_accounts_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_tsp_delete(self, request: operations.UserTspDeleteRequest) -> operations.UserTspDeleteResponse:
        r"""Delete a user's TSP account
        Delete a user's TSP account.<br><br>
        **Scopes:** `tsp:write:admin` `tsp:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/tsp/{tspId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserTspDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_tsp_update(self, request: operations.UserTspUpdateRequest) -> operations.UserTspUpdateResponse:
        r"""Update a TSP account
        Update a user's TSP account.<br><br>
        **Scopes:** `tsp:write:admin` `tsp:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/tsp/{tspId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserTspUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_ts_ps(self, request: operations.UserTsPsRequest) -> operations.UserTsPsResponse:
        r"""List user's TSP accounts
        A user can have a maximum of two TSP accounts. Use this API to list all TSP accounts of a user.<br><br>
        **Scopes:** `tsp:read:admin` `tsp:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/tsp", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserTsPsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserTsPs200ApplicationJSON])
                res.user_ts_ps_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    