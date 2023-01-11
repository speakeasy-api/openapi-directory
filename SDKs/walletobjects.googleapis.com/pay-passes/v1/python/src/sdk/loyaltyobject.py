import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Loyaltyobject:
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

    
    def walletobjects_loyaltyobject_addmessage(self, request: operations.WalletobjectsLoyaltyobjectAddmessageRequest) -> operations.WalletobjectsLoyaltyobjectAddmessageResponse:
        r"""Adds a message to the loyalty object referenced by the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/loyaltyObject/{resourceId}/addMessage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsLoyaltyobjectAddmessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoyaltyObjectAddMessageResponse])
                res.loyalty_object_add_message_response = out

        return res

    
    def walletobjects_loyaltyobject_get(self, request: operations.WalletobjectsLoyaltyobjectGetRequest) -> operations.WalletobjectsLoyaltyobjectGetResponse:
        r"""Returns the loyalty object with the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/loyaltyObject/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsLoyaltyobjectGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoyaltyObject])
                res.loyalty_object = out

        return res

    
    def walletobjects_loyaltyobject_insert(self, request: operations.WalletobjectsLoyaltyobjectInsertRequest) -> operations.WalletobjectsLoyaltyobjectInsertResponse:
        r"""Inserts an loyalty object with the given ID and properties.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/loyaltyObject"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsLoyaltyobjectInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoyaltyObject])
                res.loyalty_object = out

        return res

    
    def walletobjects_loyaltyobject_list(self, request: operations.WalletobjectsLoyaltyobjectListRequest) -> operations.WalletobjectsLoyaltyobjectListResponse:
        r"""Returns a list of all loyalty objects for a given issuer ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/loyaltyObject"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsLoyaltyobjectListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoyaltyObjectListResponse])
                res.loyalty_object_list_response = out

        return res

    
    def walletobjects_loyaltyobject_modifylinkedofferobjects(self, request: operations.WalletobjectsLoyaltyobjectModifylinkedofferobjectsRequest) -> operations.WalletobjectsLoyaltyobjectModifylinkedofferobjectsResponse:
        r"""Modifies linked offer objects for the loyalty object with the given ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/loyaltyObject/{resourceId}/modifyLinkedOfferObjects", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsLoyaltyobjectModifylinkedofferobjectsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoyaltyObject])
                res.loyalty_object = out

        return res

    
    def walletobjects_loyaltyobject_patch(self, request: operations.WalletobjectsLoyaltyobjectPatchRequest) -> operations.WalletobjectsLoyaltyobjectPatchResponse:
        r"""Updates the loyalty object referenced by the given object ID. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/loyaltyObject/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsLoyaltyobjectPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoyaltyObject])
                res.loyalty_object = out

        return res

    
    def walletobjects_loyaltyobject_update(self, request: operations.WalletobjectsLoyaltyobjectUpdateRequest) -> operations.WalletobjectsLoyaltyobjectUpdateResponse:
        r"""Updates the loyalty object referenced by the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/loyaltyObject/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsLoyaltyobjectUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LoyaltyObject])
                res.loyalty_object = out

        return res

    