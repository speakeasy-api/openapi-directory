import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class PhoneBlockedList:
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

    
    def add_anumber_to_blocked_list(self, request: operations.AddAnumberToBlockedListRequest) -> operations.AddAnumberToBlockedListResponse:
        r"""Create a blocked list
        A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers). Blocked callers will hear a generic message stating that the person they are calling is not available.<br>Use this API to create a blocked list and add a number to that blocked list.<br>
        **Prerequisites:**
        * Pro or higher account plan with Zoom phone license<br>
        **Scope:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/blocked_list"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddAnumberToBlockedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddAnumberToBlockedList201ApplicationJSON])
                res.add_anumber_to_blocked_list_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 409:
            pass

        return res

    
    def delete_a_blocked_list(self, request: operations.DeleteABlockedListRequest) -> operations.DeleteABlockedListResponse:
        r"""Delete a blocked list
        A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers).
        <br>Use this API to delete a blocked list and therefore removing the associated number from the blocked list. The number will be unblocked after the deletion.<br>
        **Prerequisites:**
        * Pro or higher account plan with Zoom phone license<br>
        **Scope:** `phone:write:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/blocked_list/{blockedListId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteABlockedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_a_blocked_list_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_a_blocked_list(self, request: operations.GetABlockedListRequest) -> operations.GetABlockedListResponse:
        r"""Get blocked list details
        A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers). Blocked callers will hear a generic message stating that the person they are calling is not available.<br>Use this API to get information about a specific blocked list.<br>
        **Prerequisites:**
        * Pro or higher account plan with Zoom phone license<br>
        **Scope:** `phone:read:admin`<br> 
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/blocked_list/{blockedListId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetABlockedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetABlockedList200ApplicationJSON])
                res.get_a_blocked_list_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def list_blocked_list(self, request: operations.ListBlockedListRequest) -> operations.ListBlockedListResponse:
        r"""List blocked lists
        A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers). Blocked callers will hear a generic message stating that the person they are calling is not available.<br>Use this API to list all the blocked lists in an acccount.<br>
        **Prerequisites:**
        * Pro or higher account plan with Zoom phone license<br>
        **Scope:** `phone:read:admin`<br> 
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/phone/blocked_list"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListBlockedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListBlockedList200ApplicationJSON])
                res.list_blocked_list_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def update_blocked_list(self, request: operations.UpdateBlockedListRequest) -> operations.UpdateBlockedListResponse:
        r"""Update a blocked list
        A Zoom account owner or a user with admin privilege can block phone numbers for phone users in an account. Blocked numbers can be inbound (numbers will be blocked from calling in) and outbound (phone users in your account won't be able to dial those numbers). Blocked callers will hear a generic message stating that the person they are calling is not available.<br>Use this API to update information on the blocked list.<br>
        **Prerequisites:**
        * Pro or higher account plan with Zoom phone license<br>
        **Scope:** `phone:write:admin`<br> 
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/phone/blocked_list/{blockedListId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateBlockedListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_blocked_list_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 409:
            pass

        return res

    