import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Giftcardclass:
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

    
    def walletobjects_giftcardclass_addmessage(self, request: operations.WalletobjectsGiftcardclassAddmessageRequest) -> operations.WalletobjectsGiftcardclassAddmessageResponse:
        r"""Adds a message to the gift card class referenced by the given class ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/giftCardClass/{resourceId}/addMessage", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardclassAddmessageResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardClassAddMessageResponse])
                res.gift_card_class_add_message_response = out

        return res

    
    def walletobjects_giftcardclass_get(self, request: operations.WalletobjectsGiftcardclassGetRequest) -> operations.WalletobjectsGiftcardclassGetResponse:
        r"""Returns the gift card class with the given class ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/giftCardClass/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardclassGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardClass])
                res.gift_card_class = out

        return res

    
    def walletobjects_giftcardclass_insert(self, request: operations.WalletobjectsGiftcardclassInsertRequest) -> operations.WalletobjectsGiftcardclassInsertResponse:
        r"""Inserts an gift card class with the given ID and properties.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/giftCardClass"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardclassInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardClass])
                res.gift_card_class = out

        return res

    
    def walletobjects_giftcardclass_list(self, request: operations.WalletobjectsGiftcardclassListRequest) -> operations.WalletobjectsGiftcardclassListResponse:
        r"""Returns a list of all gift card classes for a given issuer ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/giftCardClass"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardclassListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardClassListResponse])
                res.gift_card_class_list_response = out

        return res

    
    def walletobjects_giftcardclass_patch(self, request: operations.WalletobjectsGiftcardclassPatchRequest) -> operations.WalletobjectsGiftcardclassPatchResponse:
        r"""Updates the gift card class referenced by the given class ID. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/giftCardClass/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardclassPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardClass])
                res.gift_card_class = out

        return res

    
    def walletobjects_giftcardclass_update(self, request: operations.WalletobjectsGiftcardclassUpdateRequest) -> operations.WalletobjectsGiftcardclassUpdateResponse:
        r"""Updates the gift card class referenced by the given class ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/giftCardClass/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsGiftcardclassUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.GiftCardClass])
                res.gift_card_class = out

        return res

    