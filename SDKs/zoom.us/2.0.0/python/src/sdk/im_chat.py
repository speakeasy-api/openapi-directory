import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ImChat:
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

    
    def im_chat_messages(self, request: operations.ImChatMessagesRequest) -> operations.ImChatMessagesResponse:
        r"""Get IM chat messages
        Retrieve IM chat messages for a specified period of time. <aside>Note: This API only supports oauth2.</aside><br><br>
        
        **Scopes:** `imchat:read`<br>
        
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
         
        Please see our [announcements page related to this deprecation](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#im-api-notice).
         
        
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/chat/sessions/{sessionId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ImChatMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImChatMessages200ApplicationJSON])
                res.im_chat_messages_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass

        return res

    
    def im_chat_sessions(self, request: operations.ImChatSessionsRequest) -> operations.ImChatSessionsResponse:
        r"""Get IM chat sessions
        Retrieve IM Chat sessions for a specified period of time. <aside>Note: This API only supports Oauth2.</aside><br>
         
        **Scopes:** `imchat:read, imchat:read:admin`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
         
         Please see our [announcements page related to this deprecation](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#im-api-notice).
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/im/chat/sessions"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ImChatSessionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.ImChatSessions200ApplicationJSON])
                res.im_chat_sessions_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
        elif r.status_code == 300:
            pass

        return res

    
    def listimmessages(self, request: operations.ListimmessagesRequest) -> operations.ListimmessagesResponse:
        r"""Get user’s IM messages
        Get IM Chat messages for a specified period of time. <aside>Note: This API only supports Oauth2.</aside><br><br>
        **Scopes:** `imchat:read`<br>
        **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        
        Please see the [announcements page related to this deprecation.](https://marketplace.zoom.us/docs/guides/stay-up-to-date/announcements#im-api-notice)
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/users/{userId}/chat/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ListimmessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Listimmessages200ApplicationJSON])
                res.listimmessages_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def sendimmessages(self, request: operations.SendimmessagesRequest) -> operations.SendimmessagesResponse:
        r"""Send IM messages
        Send chat message to a user. <aside>Note: This API only supports OAuth 2.0.</aside><br><br>**Scope:** `imchat:write`
         
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` 
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/im/users/me/chat/messages"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendimmessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 201:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.Sendimmessages201ApplicationJSON])
                res.sendimmessages_201_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    