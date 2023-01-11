import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class ChatChannels:
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

    
    def create_channel(self, request: operations.CreateChannelRequest) -> operations.CreateChannelResponse:
        r"""Create a channel
        Zoom chat channels allow users to communicate via chat in private or public groups. Use this API to create a channel for a user.<br>
        **Scopes**:`chat_channel:write` or `chat_channel:write:admin`<br>
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> This API supports both user-managed apps and account-level apps. However, in an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, to create a channel on behalf of another user in the same Zoom account, the user calling this API must have a <a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\">role</a> that has <b>Edit</b> permission for the Chat channels feature.</p><br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
         
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/channels", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.CreateChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.CreateChannel201ApplicationJSON])
                res.create_channel_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def delete_user_level_channel(self, request: operations.DeleteUserLevelChannelRequest) -> operations.DeleteUserLevelChannelResponse:
        r"""Delete a channel
        Zoom chat [channels](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) allow users to communicate via chat in private or public groups. Use this API to delete a specific channel. 
        
        **Scope:** `chat_channel:write`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> This API only supports <b>user-managed</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>.</p><br>
        
        
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/channels/{channelId}", request.path_params)
        
        
        client = self._security_client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteUserLevelChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.delete_user_level_channel_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_channels(self, request: operations.GetChannelsRequest) -> operations.GetChannelsResponse:
        r"""List user's channels
        Zoom chat [channels](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) allow users to communicate via chat in private or public groups. Use this API to list a user's chat channels. 
        
        **Scope**: `chat_channel:read` or `chat_channel:read:admin`<br>
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> This API supports both user-managed apps and account-level apps. However, in an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, to list channels of another user in the same Zoom account, the user calling this API must have a <a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\">role</a> that has <b>View or Edit</b> permission for the Chat channels feature.</p><br>
        
        
        
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/channels", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChannelsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChannels200ApplicationJSON])
                res.get_channels_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def get_user_level_channel(self, request: operations.GetUserLevelChannelRequest) -> operations.GetUserLevelChannelResponse:
        r"""Get a channel
        Zoom chat [channels](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) allow users to communicate via chat in private or public groups. Use this API to get information about a specific channel. 
        
        **Scope:** `chat_channel:read`	<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> This API only supports <b>user-managed</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>.</p><br>
        
        
         
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/channels/{channelId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetUserLevelChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetUserLevelChannel200ApplicationJSON])
                res.get_user_level_channel_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def join_channel(self, request: operations.JoinChannelRequest) -> operations.JoinChannelResponse:
        r"""Join a channel
        A [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) can have one or multiple members. Use this API to join a channel that is open for anyone in the same organization to join. You cannot use this API to join private channels that only allows invited members to be a part of it.
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b>This API only supports <b>user-managed</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>.</p><br>
        
        **Scope:** `chat_channel:write`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/channels/{channelId}/members/me", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.JoinChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.JoinChannel201ApplicationJSON])
                res.join_channel_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def leave_channel(self, request: operations.LeaveChannelRequest) -> operations.LeaveChannelResponse:
        r"""Leave a channel
        If you're no longer interested in being a member of an existing channel, you can leave the channel at any time. Use this API to leave a specific channel. After leaving the channel, you can no longer access information from that channel.
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b>This API only supports <b>user-managed</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>.</p><br>
        
        **Scope:** `chat_channel:write`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/channels/{channelId}/members/me", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.LeaveChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.leave_channel_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def remove_a_user_level_channel_member(self, request: operations.RemoveAUserLevelChannelMemberRequest) -> operations.RemoveAUserLevelChannelMemberResponse:
        r"""Remove a member
         A [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) can have one or multiple members. Use this API to remove a member from a chat channel.<br><br>
         **Scopes:** `chat_channel:write`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
         
         <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> This API only supports <b>user-managed</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>.</p><br>
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/channels/{channelId}/members/{memberId}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.RemoveAUserLevelChannelMemberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.remove_a_user_level_channel_member_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    
    def update_user_level_channel(self, request: operations.UpdateUserLevelChannelRequest) -> operations.UpdateUserLevelChannelResponse:
        r"""Update a channel
        Zoom chat channels allow users to communicate via chat in private or public channels. Use this API to update the name of a specific channel that you created. 
        
        **Scope:** `chat_channel:write`	<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> This API only supports <b>user-managed</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>.</p><br>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/channels/{channelId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UpdateUserLevelChannelResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[Any])
                res.update_user_level_channel_204_application_json_any = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass

        return res

    