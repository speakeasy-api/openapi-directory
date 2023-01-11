import requests
from typing import Optional
from sdk.models import operations
from . import utils

class ChatbotMessages:
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

    
    def delete_a_chatbot_message(self, request: operations.DeleteAChatbotMessageRequest) -> operations.DeleteAChatbotMessageResponse:
        r"""Delete a chatbot message
        Delete a message that was sent by your chatbot app.<br><br> **Scopes:** `imchat:bot`<br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>**Authorization Flow**: Client Credentials Flow<br><br>To get authorized, make a POST request to `/oauth/token` endpoint with grant type as `client_credentials`. <br>Use `https://api.zoom.us/oauth/token?grant_type=client_credentials` as the endpoint for the request. 
        You will need to send your ClientID and Secret as a Basic base64 encoded AUthorization header. Ex. `Basic base64Encode({client_id}:{client_sceret})`<br><br> Next, use the token received (access_token) as a bearer token while making the DELETE /im/chat/messages/{message_id} request to delete a message.<br><br>
        Learn more about how to authotize chatbots in the [Chatbot Authorization](https://marketplace.zoom.us/docs/guides/chatbots/authorization) guide.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/chat/messages/{message_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAChatbotMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.DeleteAChatbotMessage200ApplicationJSON])
                res.delete_a_chatbot_message_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def edit_chatbot_message(self, request: operations.EditChatbotMessageRequest) -> operations.EditChatbotMessageResponse:
        r"""Edit a chatbot message
        Edit a message that was [sent](https://marketplace.zoom.us/docs/api-reference/zoom-api/im-chat/sendchatbot) by your Chatbot app.<br> After sending a message using the Send Chatbot Message API, you must store the messageId returned in the response so that you can make edits to the associated message using this API.
        
        **Scope:** `imchat:bot`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Authorization Flow**: Client Credentials Flow<br><br>
        To get authorized, make a POST request to `/oauth/token` endpoint with grant type as `client_credentials`. <br>Use `https://api.zoom.us/oauth/token?grant_type=client_credentials` as the endpoint for the request. 
        You will need to send your ClientID and Secret as a Basic base64 encoded AUthorization header. Ex. `Basic base64Encode({client_id}:{client_sceret})`<br><br> Next, use the token received (access_token) as a bearer token while making the PUT /im/chat/messages/{message_id} request to edit a chatbot message.<br><br>
        Learn more about how to authotize chatbots in the [Chatbot Authorization](https://marketplace.zoom.us/docs/guides/chatbots/authorization) guide.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/im/chat/messages/{message_id}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.EditChatbotMessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.EditChatbotMessage200ApplicationJSON])
                res.edit_chatbot_message_200_application_json_object = out
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content

        return res

    
    def sendchatbot(self, request: operations.SendchatbotRequest) -> operations.SendchatbotResponse:
        r"""Send chatbot messages
        Send chatbot messages from your marketplace chatbot app.<br><br>
        **Scopes:** `imchat:bot`<br>
         **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
        **Authorization Flow**: Client Credentials Flow<br><br>
        To get authorized, make a POST request to `/oauth/token` endpoint with grant type as `client_credentials`. <br>Use `https://api.zoom.us/oauth/token?grant_type=client_credentials` as the endpoint for the request. 
        You will need to send your ClientID and Secret as a Basic base64 encoded AUthorization header. Ex. `Basic base64Encode({client_id}:{client_sceret})`<br><br> Next, use the token recieved (access_token) as a bearer token while making the POST /im/chat/messages request to send chatbot messages.<br><br>
        Learn more about how to authorize chatbots in the [Chatbot Authorization](https://marketplace.zoom.us/docs/guides/chatbots/authorization) guide.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/im/chat/messages"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SendchatbotResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            pass
        elif r.status_code == 400:
            pass

        return res

    