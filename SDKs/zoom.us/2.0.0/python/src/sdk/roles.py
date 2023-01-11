import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Roles:
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

    
    def add_role_members(self, request: operations.AddRoleMembersRequest) -> operations.AddRoleMembersResponse:
        r"""Assign a role
        User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to [assign a role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control#h_748b6fd8-5057-4cf4-bbfd-787909c09db0) to members.
        
        **Scopes:** `role:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Prerequisites:**<br>
        * A Pro or a higher plan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/roles/{roleId}/members", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.AddRoleMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.AddRoleMembers201ApplicationJSON])
                res.add_role_members_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def create_role(self, request: operations.CreateRoleRequest) -> operations.CreateRoleResponse:
        r"""Create a role
        Each Zoom user automatically has a role which can either be owner, administrator, or a member. 
        
        **Pre-requisite:**<br>
        * Pro or higher plan.
        * For setting the initial role, you must be the Account Owner.<br>
        * For subsequent role management, you must be the Account Owner or user with role management permissions.<br>
        **Scopes:** `role:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/roles"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.create_role_200_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 201:
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateRole201ApplicationJSON])
                res.create_role_201_application_json_object = out
        elif r.status_code == 300:
            pass

        return res

    
    def delete_role(self, request: operations.DeleteRoleRequest) -> operations.DeleteRoleResponse:
        r"""Delete a role
        Each Zoom user automatically has a role which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list.
        
        Use this API to delete a role.<br>
        **Pre-requisite:**<br>
        * A Pro or higher plan.<br>
        * For role management and updates, you must be the Account Owner or user with role management permissions.
        
        **Scopes:** `role:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/roles/{roleId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.delete_role_204_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass

        return res

    
    def get_role_information(self, request: operations.GetRoleInformationRequest) -> operations.GetRoleInformationResponse:
        r"""Get role information
        Each Zoom user automatically has a role which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list of privileges.
        
        Use this API to get information including specific privileges assigned to a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control).<br>
        **Pre-requisite:**<br>
        * A Pro or higher plan.<br>
        * For role management and updates, you must be the Account Owner or user with role management permissions.
        
        **Scopes:** `role:read:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/roles/{roleId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRoleInformationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetRoleInformation200ApplicationJSON])
                res.get_role_information_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass

        return res

    
    def role_member_delete(self, request: operations.RoleMemberDeleteRequest) -> operations.RoleMemberDeleteResponse:
        r"""Unassign a role
        User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to unassign a user's role.
        
        **Scope:** `role:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        **Prerequisites:**<br>
        * A Pro or a higher plan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/roles/{roleId}/members/{memberId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RoleMemberDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def role_members(self, request: operations.RoleMembersRequest) -> operations.RoleMembersResponse:
        r"""List members in a role
        User [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) can have a set of permissions that allows access only to the pages a user needs to view or edit. Use this API to list all the members that are assigned a specific role.
        
        **Scope:** `role:read:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>**Prerequisites:**<br>
        * A Pro or a higher plan.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/roles/{roleId}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.RoleMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RoleMembersRoleMembersList])
                res.role_members_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def roles(self, request: operations.RolesRequest) -> operations.RolesResponse:
        r"""List roles
        List [roles](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) on your account
        
        **Scopes:** `role:read:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Prerequisites** :
        *  Pro or higher plan. 
        *  For setting the initial role, you must be the Account Owner. 
        *  For subsequent role management, you must be the Account Owner or user with role management permissions.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/roles"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RolesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.RolesRoleList])
                res.role_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def update_role(self, request: operations.UpdateRoleRequest) -> operations.UpdateRoleResponse:
        r"""Update role information
        Each Zoom user automatically has a [role](https://support.zoom.us/hc/en-us/articles/115001078646-Role-Based-Access-Control) which can either be owner, administrator, or a member. Account Owners and users with edit privileges for Role management can add customized roles with a list.
        
        Use this API to change the privileges, name and description of a specific role.<br>
        **Pre-requisite:**<br>
        * A Pro or higher plan.<br>
        * For role management and updates, you must be the Account Owner or user with role management permissions.<br>**Scopes:** `role:write:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/roles/{roleId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateRoleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_role_200_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 204:
            pass
        elif r.status_code == 300:
            pass

        return res

    