import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class ChatChannelsAccountLevel:
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

    
    def delete_channel(self, request: operations.DeleteChannelRequest) -> operations.DeleteChannelResponse:
        r"""Delete a channel
        Zoom chat [channels](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) allow users to communicate via chat in private or public groups. Use this API to delete a specific channel. 
        
        **Scope:** `chat_channel:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> This API only supports <b>user-managed</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>.</p><br>
        
        
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/channels/{channelId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_channel_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_channel(self, request: operations.GetChannelRequest) -> operations.GetChannelResponse:
        r"""Get a channel
        Zoom chat [channels](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) allow users to communicate via chat in private or public groups. Use this API to get information about a specific channel. 
        
        **Scope:** `chat_channel:read:admin` <br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` <br>
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b> <a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\"> role</a>  that has View or Edit permission for Chat Channels</b>.</p>
        
        
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/channels/{channelId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChannel200ApplicationJSON])
                res.get_channel_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def invite_channel_members(self, request: operations.InviteChannelMembersRequest) -> operations.InviteChannelMembersResponse:
        r"""Invite channel members
        A [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) can have one or multiple members. Use this API to invite members that are in a user's contact list to a channel. The maximum number of members that can be added at once with this API is 5. 
        
        **Scope:** `chat_channel:write:admin` <br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
         </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\"> role</a> that has Edit permission for Chat Channels</b>.</p>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/channels/{channelId}/members", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.InviteChannelMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.InviteChannelMembers201ApplicationJSON])
                res.invite_channel_members_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def list_channel_members(self, request: operations.ListChannelMembersRequest) -> operations.ListChannelMembersResponse:
        r"""List channel members
        A [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) can have one or multiple members. List all the members of a channel using this API.
        
         </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\"> role</a> that has View or Edit permission for Chat Channels</b>.</p>
        
        **Scopes:** `chat_channel:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/channels/{channelId}/members", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListChannelMembersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ListChannelMembers200ApplicationJSON])
                res.list_channel_members_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def remove_a_channel_member(self, request: operations.RemoveAChannelMemberRequest) -> operations.RemoveAChannelMemberResponse:
        r"""Remove a member
         A [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) can have one or multiple members. Use this API to remove a member from a chat channel.<br><br>
         
        **Scopes:** `chat_channel:write:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` <br>
         
         
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\"> role</a> that has Edit permission for Chat Channels</b>.</p>
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/channels/{channelId}/members/{memberId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAChannelMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.remove_a_channel_member_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def update_channel(self, request: operations.UpdateChannelRequest) -> operations.UpdateChannelResponse:
        r"""Update a channel
        Zoom chat channels allow users to communicate via chat in private or public channels. Use this API to update the name of a specific channel created by a user. <br><br>
        **Scope:** `chat_channel:write:admin`	<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b> <a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\"> role</a>  that has Edit permission for Chat Channel</b>.</p>
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/channels/{channelId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_channel_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    