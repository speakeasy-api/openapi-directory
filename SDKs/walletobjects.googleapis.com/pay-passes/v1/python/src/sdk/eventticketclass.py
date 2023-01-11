import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Eventticketclass:
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

    
    def walletobjects_eventticketclass_addmessage(self, request: operations.WalletobjectsEventticketclassAddmessageRequest) -> operations.WalletobjectsEventticketclassAddmessageResponse:
        r"""Adds a message to the event ticket class referenced by the given class ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketClass/{resourceId}/addMessage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketclassAddmessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketClassAddMessageResponse])
                res.event_ticket_class_add_message_response = out

        return res

    
    def walletobjects_eventticketclass_get(self, request: operations.WalletobjectsEventticketclassGetRequest) -> operations.WalletobjectsEventticketclassGetResponse:
        r"""Returns the event ticket class with the given class ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketClass/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketclassGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketClass])
                res.event_ticket_class = out

        return res

    
    def walletobjects_eventticketclass_insert(self, request: operations.WalletobjectsEventticketclassInsertRequest) -> operations.WalletobjectsEventticketclassInsertResponse:
        r"""Inserts an event ticket class with the given ID and properties.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/eventTicketClass"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketclassInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketClass])
                res.event_ticket_class = out

        return res

    
    def walletobjects_eventticketclass_list(self, request: operations.WalletobjectsEventticketclassListRequest) -> operations.WalletobjectsEventticketclassListResponse:
        r"""Returns a list of all event ticket classes for a given issuer ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/eventTicketClass"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketclassListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketClassListResponse])
                res.event_ticket_class_list_response = out

        return res

    
    def walletobjects_eventticketclass_patch(self, request: operations.WalletobjectsEventticketclassPatchRequest) -> operations.WalletobjectsEventticketclassPatchResponse:
        r"""Updates the event ticket class referenced by the given class ID. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketClass/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketclassPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketClass])
                res.event_ticket_class = out

        return res

    
    def walletobjects_eventticketclass_update(self, request: operations.WalletobjectsEventticketclassUpdateRequest) -> operations.WalletobjectsEventticketclassUpdateResponse:
        r"""Updates the event ticket class referenced by the given class ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketClass/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketclassUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketClass])
                res.event_ticket_class = out

        return res

    