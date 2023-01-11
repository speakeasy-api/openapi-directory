import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Eventticketobject:
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

    
    def walletobjects_eventticketobject_addmessage(self, request: operations.WalletobjectsEventticketobjectAddmessageRequest) -> operations.WalletobjectsEventticketobjectAddmessageResponse:
        r"""Adds a message to the event ticket object referenced by the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketObject/{resourceId}/addMessage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketobjectAddmessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketObjectAddMessageResponse])
                res.event_ticket_object_add_message_response = out

        return res

    
    def walletobjects_eventticketobject_get(self, request: operations.WalletobjectsEventticketobjectGetRequest) -> operations.WalletobjectsEventticketobjectGetResponse:
        r"""Returns the event ticket object with the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketObject/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketobjectGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketObject])
                res.event_ticket_object = out

        return res

    
    def walletobjects_eventticketobject_insert(self, request: operations.WalletobjectsEventticketobjectInsertRequest) -> operations.WalletobjectsEventticketobjectInsertResponse:
        r"""Inserts an event ticket object with the given ID and properties.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/eventTicketObject"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketobjectInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketObject])
                res.event_ticket_object = out

        return res

    
    def walletobjects_eventticketobject_list(self, request: operations.WalletobjectsEventticketobjectListRequest) -> operations.WalletobjectsEventticketobjectListResponse:
        r"""Returns a list of all event ticket objects for a given issuer ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/eventTicketObject"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketobjectListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketObjectListResponse])
                res.event_ticket_object_list_response = out

        return res

    
    def walletobjects_eventticketobject_modifylinkedofferobjects(self, request: operations.WalletobjectsEventticketobjectModifylinkedofferobjectsRequest) -> operations.WalletobjectsEventticketobjectModifylinkedofferobjectsResponse:
        r"""Modifies linked offer objects for the event ticket object with the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketObject/{resourceId}/modifyLinkedOfferObjects", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketobjectModifylinkedofferobjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketObject])
                res.event_ticket_object = out

        return res

    
    def walletobjects_eventticketobject_patch(self, request: operations.WalletobjectsEventticketobjectPatchRequest) -> operations.WalletobjectsEventticketobjectPatchResponse:
        r"""Updates the event ticket object referenced by the given object ID. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketObject/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketobjectPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketObject])
                res.event_ticket_object = out

        return res

    
    def walletobjects_eventticketobject_update(self, request: operations.WalletobjectsEventticketobjectUpdateRequest) -> operations.WalletobjectsEventticketobjectUpdateResponse:
        r"""Updates the event ticket object referenced by the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/eventTicketObject/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsEventticketobjectUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.EventTicketObject])
                res.event_ticket_object = out

        return res

    