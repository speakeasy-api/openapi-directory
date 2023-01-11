import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class ImGroups:
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

    
    def im_group(self, request: operations.ImGroupRequest) -> operations.ImGroupResponse:
        r"""Retrieve an IM directory group
        Retrieve an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
        Scopes: `imgroup:read:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` 
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/groups/{groupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImGroupResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImGroup200ApplicationJSON])
                res.im_group_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def im_group_create(self, request: operations.ImGroupCreateRequest) -> operations.ImGroupCreateResponse:
        r"""Create an IM directory group
        Create an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
        **Scopes**: `imgroup:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/im/groups"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImGroupCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImGroupCreate201ApplicationJSON])
                res.im_group_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def im_group_delete(self, request: operations.ImGroupDeleteRequest) -> operations.ImGroupDeleteResponse:
        r"""Delete an IM directory group
        Delete an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
        Scopes: `imgroup:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/groups/{groupId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImGroupDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def im_group_members(self, request: operations.ImGroupMembersRequest) -> operations.ImGroupMembersResponse:
        r"""List IM directory group members
        List the members of an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).<br><br>
        **Scope:** `imgroup:read:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/groups/{groupId}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ImGroupMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImGroupMembersGroupMemberList])
                res.group_member_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def im_group_members_create(self, request: operations.ImGroupMembersCreateRequest) -> operations.ImGroupMembersCreateResponse:
        r"""Add IM directory group members
        Add members to an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.<br><br>
        **Scope:** `imgroup:write:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/groups/{groupId}/members", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImGroupMembersCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.im_group_members_create_201_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def im_group_members_delete(self, request: operations.ImGroupMembersDeleteRequest) -> operations.ImGroupMembersDeleteResponse:
        r"""Delete an IM directory group member
        Delete a member from an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under an account.<br><br>
        Scopes: `imgroup:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/groups/{groupId}/members/{memberId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImGroupMembersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def im_group_update(self, request: operations.ImGroupUpdateRequest) -> operations.ImGroupUpdateResponse:
        r"""Update an IM directory group
        Update an [IM directory group](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management) under your account.<br><br>
        **Scopes**: `imgroup:write:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/groups/{groupId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ImGroupUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def im_groups(self) -> operations.ImGroupsResponse:
        r"""List IM directory groups
        List [IM directory groups](https://support.zoom.us/hc/en-us/articles/203749815-IM-Management).<br><br>
        **Scopes**: `imgroup:read:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/im/groups"
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ImGroupsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImGroupsImGroupList])
                res.im_group_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    