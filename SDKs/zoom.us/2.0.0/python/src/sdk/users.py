import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Users:
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

    
    def del_user_vb(self, request: operations.DelUserVbRequest) -> operations.DelUserVbResponse:
        r"""Delete virtual background files
        Delete existing virtual background file(s) of a user. 
        
        **Prerequisites:**<br>
        * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
        <br> **Scope:** `user:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/settings/virtual_backgrounds", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DelUserVbResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def switch_user_account(self, request: operations.SwitchUserAccountRequest) -> operations.SwitchUserAccountResponse:
        r"""Switch a user's account
        Disassociate a user from one Account and move the user to another Account under the same master account. 
        
        With this API, a user under a master account or a sub account can be moved to another sub account within the same master account. To move a user from a master account to a sub account, use `me` as the value for `accountId`. In this scenario, \"me\" refers to the Account ID of the master account. 
        
        To move a user from one sub account to another sub account, provide the sub account's Account ID as the value for `accountId`. 
        
        **Prerequisites**:
        * The account should have Pro or a higher plan with master account option enabled.
        * The user whose account needs to be switched should not be an admin or an owner of that account.
        * The user should not have the same [managed domain](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-) as the account owner.
        
        **Scope:** `user:master`<br> 
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/accounts/{accountId}/users/{userId}/account", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SwitchUserAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.switch_user_account_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def update_presence_status(self, request: operations.UpdatePresenceStatusRequest) -> operations.UpdatePresenceStatusResponse:
        r"""Update a user's presence status
        Users in the Zoom desktop client and mobile apps are assigned with a [presence status](https://support.zoom.us/hc/en-us/articles/360032554051-Status-Icons). The presence status informs users of their contact's availability. Users can also change their own presence status to be either \"Away\", \"Do not disturb\", or \"Available\".
        
        Use this API to update a user's presence status. A user's status can not be updated more than once per minute, i.e., you can only submit a maximum of 1 update request/minute for a single user.<br>Note that a user's presence status can not be updated using this API if the user is not logged in to the Zoom client.
        
        **Scopes:** `user:write`, `user:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/presence_status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdatePresenceStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_presence_status_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 429:
            pass

        return res

    
    def upload_v_buser(self, request: operations.UploadVBuserRequest) -> operations.UploadVBuserResponse:
        r"""Upload virtual background files
        Use this API to [upload virtual background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background) for a user. 
        
        **Prerequisites:**<br>
        * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
        <br> **Scope:** `user:write:admin`
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/settings/virtual_backgrounds", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UploadVBuserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UploadVBuser201ApplicationJSON])
                res.upload_v_buser_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user(self, request: operations.UserRequest) -> operations.UserResponse:
        r"""Get a user
        A Zoom account can have one or more users. Use this API to view information of a specific user on a Zoom account.<br><br>
        **Scopes:** `user:read:admin` `user:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` 
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b>If a user's status is pending, only `id` and `created_at` fields will be returned. The value of `created_at` will be the time at which the API call was made until the user activates their account.</p>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.User200ApplicationJSON])
                res.user_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_assistant_create(self, request: operations.UserAssistantCreateRequest) -> operations.UserAssistantCreateResponse:
        r"""Add assistants
        Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.<br>Use this API to assign assistants to a user. <br> In the request body, provide either the User ID or the email address of the user.<br><br>
        **Prerequisite**: 
        * The user as well as the assistant must have Licensed or an On-prem license.
        * Assistants must be under the current user's account.<br>
        **Scopes**: `user:write:admin` `user:write`
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/assistants", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAssistantCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAssistantCreate201ApplicationJSON])
                res.user_assistant_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_assistant_delete(self, request: operations.UserAssistantDeleteRequest) -> operations.UserAssistantDeleteResponse:
        r"""Delete a user assistant
        Delete a specific assistant of a user.
        Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.<br><br>
        **Prerequisites**: 
        * The user as well as the assistant must have Licensed or an On-prem license.
        * Assistants must be under the current user's account.<br>
        **Scopes**: `user:write:admin` `user:write`
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/assistants/{assistantId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAssistantDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_assistants(self, request: operations.UserAssistantsRequest) -> operations.UserAssistantsResponse:
        r"""List user assistants
        List a user's assistants.
        
        Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.<br><br>
        **Prerequisites**: <br>
        * Current user as well as the assistant must have Licensed or an On-prem license.
        * Assistants must be under the current user's account.<br>
        **Scopes**: `user:read:admin` `user:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/assistants", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAssistantsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAssistantsUserAssistantsList])
                res.user_assistants_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def user_assistants_delete(self, request: operations.UserAssistantsDeleteRequest) -> operations.UserAssistantsDeleteResponse:
        r"""Delete user assistants
        Delete all assistants of the current user.<br> Assistants are the users to whom the current user has assigned [scheduling privilege](https://support.zoom.us/hc/en-us/articles/201362803-Scheduling-Privilege). These assistants can schedule meeting on behalf of the current user as well as manage and act as an alternative host for all meetings if the admin has enabled [Co-host option](https://zoom.us/account/setting) on the account.<br>
        **Prerequisite**: 
        * The user as well as the assistant must have Licensed or an On-prem license.
        * Assistants must be under the current user's account.<br>
        **Scopes**: `user:write:admin` `user:write`
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/assistants", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAssistantsDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_create(self, request: operations.UserCreateRequest) -> operations.UserCreateResponse:
        r"""Create users
        A Zoom account can have one or more users. Use this API to add a new user to your account.<br><br>
        **Prerequisites:**<br>
        * Pro or higher plan<br><br>
        **Scopes:** `user:write:admin` `user:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserCreateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserCreate201ApplicationJSON])
                res.user_create_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass
        elif r.status_code == 409:
            pass

        return res

    
    def user_delete(self, request: operations.UserDeleteRequest) -> operations.UserDeleteResponse:
        r"""Delete a user
        Deleting a user permanently removes the user and their data from Zoom. Users can create a new Zoom account using the same email address. An account owner or an account admin can transfer meetings, webinars and cloud recordings to another Zoom user account before deleting.<br><br>
        
        This API disassociates (unlinks) a user from the associated Zoom account and provides the user their own basic free Zoom account, and the user can purchase their own licenses. You can transfer the user's data (meetings, webinars and cloud recordings) to another user before disassociation.<br> To permanently delete a user, specify \"delete\" as the value of the `action` query parameter.
        **Scopes:** `user:write:admin` `user:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_email(self, request: operations.UserEmailRequest) -> operations.UserEmailResponse:
        r"""Check a user email
        Verify if a user's email is registered with Zoom.<br><br>
        
        <b>Note: </b>You can successfully check if a user is a registered Zoom user only if the user **signed up for Zoom via email and is within your account.** If you provide an email address of a user who is not in your account, the value of \"existed_email\" parameter will be \"false\" irrespective of whether or not the user is registered with Zoom. The response of this API call will not include users who joined Zoom using options such as \"Sign in with SSO\", \"Sign in with Google\" or \"Sign in with Facebook\" even if they are in the same account as yours.
        
        **Scopes:** `user:read:admin` `user:read`
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/email"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserEmailResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserEmail200ApplicationJSON])
                res.user_email_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_email_update(self, request: operations.UserEmailUpdateRequest) -> operations.UserEmailUpdateResponse:
        r"""Update a user's email
        Change a user's [email address](https://support.zoom.us/hc/en-us/articles/201362563-How-Do-I-Change-the-Email-on-My-Account-) on a Zoom account that has managed domain set up.<br>If the Zoom Account in which the user belongs, has multiple [managed domains](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-), the email to be updated must match one of the managed domains.<br>
        **Scopes:** `user:write:admin` `user:write`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
        >  Note: A user's email address can only be changed for a maximum of 3 times in a day(24 hours).
        **Prerequisite:**<br>
        * Managed domain must be enabled in the account.
        * The new email address should not already exist in Zoom.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/email", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserEmailUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_password(self, request: operations.UserPasswordRequest) -> operations.UserPasswordResponse:
        r"""Update a user's password
        Update the [password](https://support.zoom.us/hc/en-us/articles/206344385-Change-a-User-s-Password) of a user using which the user can login to Zoom.<br> After this request is processed successfully, an email notification will be sent to the user stating that the password was changed.<br>
        **Scopes:** `user:write:admin` `user:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        **Prerequisites:**<br>
        * Owner or admin of the Zoom account.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/password", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserPasswordResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_permission(self, request: operations.UserPermissionRequest) -> operations.UserPermissionResponse:
        r"""Get user permissions
        Users can be assigned a set of permissions that allows them to access only the pages/information that a user needs to view or edit.<br>
        
        Use this API to get permissions that have been granted to the user.<br><br>
        **Scopes:** `user:read:admin` `user:read`<br>
         
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/permissions", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserPermissionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserPermission200ApplicationJSON])
                res.user_permission_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def user_picture(self, request: operations.UserPictureRequest) -> operations.UserPictureResponse:
        r"""Upload a user's profile picture
        Upload a user's profile picture.<br><br>
        
        Provide `multipart/form-data` as the value of the `content-type` header for this request. This API supports JPEG and PNG file formats.
        
        **Scopes:** `user:write:admin` `user:write`<br>
         
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/picture", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._security_client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserPictureResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            res.headers = r.headers
            
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_sso_token_delete(self, request: operations.UserSsoTokenDeleteRequest) -> operations.UserSsoTokenDeleteResponse:
        r"""Revoke a user's SSO token
        Revoke a user's SSO token.<br><br> After calling this API, the SSO user will be logged out of their current Zoom session.<br>
        **Scopes:** `user:write:admin` `user:write`
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/token", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSsoTokenDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_scheduler_delete(self, request: operations.UserSchedulerDeleteRequest) -> operations.UserSchedulerDeleteResponse:
        r"""Delete a scheduler
        Delete a Scheduler.
        
        Schedulers are users on whose behalf the current user (assistant) can schedule meetings for. By calling this API, the current user will no longer be a scheduling assistant of this scheduler. 
        
        **Prerequisite**: Current user must be under the same account as the scheduler.<br>
        **Scopes**: `user:write:admin` `user:write`
         
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/schedulers/{schedulerId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSchedulerDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_schedulers(self, request: operations.UserSchedulersRequest) -> operations.UserSchedulersResponse:
        r"""List user schedulers
        List all the schedulers of a user. Schedulers in this context are the users for whom the current user can schedule meetings for.
        
        For instance, if the current user (i.e., the user whose userId was passed in the path parameter of this API call) is user A, the response of this API will contain a list of user(s), for whom user A can schedule and manage meetings. User A is the assistant of these users and thus has scheduling privilege for these user(s). 
        
        **Prerequisites**:
        * Current user must be under the same account as the scheduler.<br>
        **Scopes**: `user:read:admin` `user:read`
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/schedulers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSchedulersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserSchedulersUserSchedulersList])
                res.user_schedulers_list = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def user_schedulers_delete(self, request: operations.UserSchedulersDeleteRequest) -> operations.UserSchedulersDeleteResponse:
        r"""Delete user schedulers
        Delete all of a user's schedulers. Schedulers are users on whose behalf the current user (assistant) can schedule meetings for. By calling this API, the current user will no longer be a scheduling assistant of any user. 
        
        **Prerequisite**: Current user (assistant) must be under the same account as the scheduler.<br>
        **Scopes**: `user:write:admin` `user:write`
         
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/schedulers", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSchedulersDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_settings(self, request: operations.UserSettingsRequest) -> operations.UserSettingsResponse:
        r"""Get user settings
        Retrieve a user's settings.<br><br>
        **Scopes:** `user:read:admin` `user:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/settings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserSettingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.user_settings_200_application_json_one_of = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_settings_update(self, request: operations.UserSettingsUpdateRequest) -> operations.UserSettingsUpdateResponse:
        r"""Update user settings
        Update a user's settings.<br><br>
        **Scopes:** `user:write:admin` `user:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/settings", request.path_params)
        
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

        res = operations.UserSettingsUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_status(self, request: operations.UserStatusRequest) -> operations.UserStatusResponse:
        r"""Update user status
        An account owner or admins can deactivate as well as activate a user in a Zoom account. Deactivating a user will remove all licenses associated with a user. It will prevent the deactivated user from logging into their Zoom account. A deactivated user can be reactivated. Reactivating a user grants the user access to login to their Zoom account.<br> Use this API to either [deactivate](https://support.zoom.us/hc/en-us/articles/115005269946-Remove-User-from-your-Account#h_6a9bc1c3-d739-4945-b1f2-00b3b88fb5cc) an active user or to [reactivate](https://support.zoom.us/hc/en-us/articles/115005269946-Remove-User-from-your-Account#h_16319724-d120-4be6-af5d-31582d134ea0) a deactivated user .<br><br>**Scopes:** `user:write:admin` `user:write`<br> 
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/status", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_token(self, request: operations.UserTokenRequest) -> operations.UserTokenResponse:
        r"""Get a user token
        Retrieve a user's token.<br><br> This token is used for starting meetings with the Client SDK.<br>
        **Scopes:** `user:read:admin` `user:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        If a user signed into Zoom using Google or Facebook, a null value will be returned for the token. To get the token with this API, ask the user to sign into Zoom using their email and password instead.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}/token", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserTokenResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserToken200ApplicationJSON])
                res.user_token_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 404:
            pass

        return res

    
    def user_update(self, request: operations.UserUpdateRequest) -> operations.UserUpdateResponse:
        r"""Update a user
        Update information on a user's Zoom [profile](https://support.zoom.us/hc/en-us/articles/201363203-My-Profile).<br><br>
        **Scopes:** `user:write:admin` `user:write`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/users/{userId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def user_vanity_name(self, request: operations.UserVanityNameRequest) -> operations.UserVanityNameResponse:
        r"""Check a user's PM room
        A personal meeting room is a virtual meeting room that can be permanently assigned to a user.
        Use this API to check if a personal meeting room with the given name exists or not.<br><br>
        **Scopes:** `user:read:admin` `user:read`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light` 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/vanity_name"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserVanityNameResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserVanityName200ApplicationJSON])
                res.user_vanity_name_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def user_zak(self, request: operations.UserZakRequest) -> operations.UserZakResponse:
        r"""Get user's ZAK
        Get User’s Zoom Access Token (ZAK). You can use a ZAK to enable a non-login user to join a meeting on your app. Non-login users do not need to enter their username and password to join meetings.
        
        **Scope:** `user_zak:read`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
        
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users/me/zak"
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserZakResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserZak200ApplicationJSON])
                res.user_zak_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def users(self, request: operations.UsersRequest) -> operations.UsersResponse:
        r"""List users
        A Zoom account can have one or more users. Use this API to list users on your account.<br><br>
        **Scopes:** `user:read:admin`<br>
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UsersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Users200ApplicationJSON])
                res.users_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    