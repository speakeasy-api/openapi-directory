import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Giftcardobject:
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

    
    def walletobjects_giftcardobject_addmessage(self, request: operations.WalletobjectsGiftcardobjectAddmessageRequest) -> operations.WalletobjectsGiftcardobjectAddmessageResponse:
        r"""Adds a message to the gift card object referenced by the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/giftCardObject/{resourceId}/addMessage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardobjectAddmessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardObjectAddMessageResponse])
                res.gift_card_object_add_message_response = out

        return res

    
    def walletobjects_giftcardobject_get(self, request: operations.WalletobjectsGiftcardobjectGetRequest) -> operations.WalletobjectsGiftcardobjectGetResponse:
        r"""Returns the gift card object with the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/giftCardObject/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardobjectGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardObject])
                res.gift_card_object = out

        return res

    
    def walletobjects_giftcardobject_insert(self, request: operations.WalletobjectsGiftcardobjectInsertRequest) -> operations.WalletobjectsGiftcardobjectInsertResponse:
        r"""Inserts an gift card object with the given ID and properties.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/giftCardObject"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardobjectInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardObject])
                res.gift_card_object = out

        return res

    
    def walletobjects_giftcardobject_list(self, request: operations.WalletobjectsGiftcardobjectListRequest) -> operations.WalletobjectsGiftcardobjectListResponse:
        r"""Returns a list of all gift card objects for a given issuer ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/giftCardObject"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardobjectListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardObjectListResponse])
                res.gift_card_object_list_response = out

        return res

    
    def walletobjects_giftcardobject_patch(self, request: operations.WalletobjectsGiftcardobjectPatchRequest) -> operations.WalletobjectsGiftcardobjectPatchResponse:
        r"""Updates the gift card object referenced by the given object ID. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/giftCardObject/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardobjectPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardObject])
                res.gift_card_object = out

        return res

    
    def walletobjects_giftcardobject_update(self, request: operations.WalletobjectsGiftcardobjectUpdateRequest) -> operations.WalletobjectsGiftcardobjectUpdateResponse:
        r"""Updates the gift card object referenced by the given object ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/giftCardObject/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardobjectUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardObject])
                res.gift_card_object = out

        return res

    