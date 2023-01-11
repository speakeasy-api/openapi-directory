import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ChatMessages:
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

    
    def delete_chat_message(self, request: operations.DeleteChatMessageRequest) -> operations.DeleteChatMessageResponse:
        r"""Delete a message
        Delete a chat message that you previously sent to a contact or a channel. In the query parameter, you must provide either of the following:<br>
        * `to_contact`: The email address of the contact to whom you sent the message. Use this parameter to delete a message sent to an individual contact in Zoom.
        * `to_channel`: The channel ID of the channel where you sent the message. Use this parameter to delete a message sent to a channel in Zoom.
        
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\"> role</a> that has Edit permission for Chat Messages</b>.</p>
        
        **Scope:** `chat_message:write`, `chat_message:write:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/messages/{messageId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteChatMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def edit_message(self, request: operations.EditMessageRequest) -> operations.EditMessageResponse:
        r"""Update a message
        Each chat message has a unique identifier. Use this API to edit a chat message that you previously sent to either a contact or a channel in Zoom by providing the ID of the message as the value of the `messageId` parameter. The ID can be retrieved from List User's Chat Messages API. Additionally, as a query parameter, you must provide either the **email address** of the contact or the **Channel ID** of the channel where the message was sent. 
        
        **Scope:** `chat_message:write`,`chat_message:write:admin`	<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` 
        
        </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\"> role</a> that has Edit permission for Chat Messages</b>.</p>
        **Scope:** `chat_message:write`, `chat_message:write:admin`<br>
        
        
        
        
        
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/messages/{messageId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_chat_messages(self, request: operations.GetChatMessagesRequest) -> operations.GetChatMessagesResponse:
        r"""List user's chat messages
        A Zoom user can have conversations with other Zoom users via chat. Use this API to list the current user's chat messages between the user and an individual contact or a chat channel.<br> In the query parameter, you must provide either of the following:<br>
        * `to_contact`: The email address of the contact with whom the user conversed by sending/receiving messages.
        * `to_channel`: The channel ID of the channel to/from which the user has sent and/or received messages.
        
        <br> **Specify a date** in the `date` query parameter to view messages from that date. If a date is not provided, the default value for the query will be the **current date**.<br>
        <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\">role</a> that has <b>View or Edit</b> permission for Chat Messages.</p><br>
        
        <br>**Scopes:** `chat_message:read`, `chat_message:read:admin`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChatMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetChatMessages200ApplicationJSON])
                res.get_chat_messages_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def senda_chat_message(self, request: operations.SendaChatMessageRequest) -> operations.SendaChatMessageResponse:
        r"""Send a chat message
        Send chat messages on Zoom to either an individual user who is in your contact list or to a [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) of which you are a member. To send a message to a contact, provide the contact's email address in the `to_contact` field. Similary, to send a message to a channel, provide the Channel Id of the Channel in `to_channel` field.<br>
        <br>**Scopes:** `chat_message:write`, `chat_message:write:admin`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br> <p style=\"background-color:#e1f5fe; color:#01579b; padding:8px\"> <b>Note: </b> For an<b> account-level</b> <a href=\"https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app\">OAuth app</a>, this API can only be used on behalf of a user who is assigned with a <b><a href=\"https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.\"> role</a> that has Edit permission for Chat Messages</b>.</p>
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/chat/users/{userId}/messages", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendaChatMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.SendaChatMessage201ApplicationJSON])
                res.senda_chat_message_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 400:
            pass
        elif r.status_code == 404:
            pass

        return res

    