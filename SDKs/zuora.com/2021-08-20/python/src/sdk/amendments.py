import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Amendments:
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

    
    def get_amendments_by_key(self, request: operations.GetAmendmentsByKeyRequest) -> operations.GetAmendmentsByKeyResponse:
        r"""Retrieve an amendment
        Retrieves detailed information about the specified subscription amendment.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/amendments/{amendment-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAmendmentsByKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAmendmentType])
                res.get_amendment_type = out

        return res

    
    def get_amendments_by_subscription_id(self, request: operations.GetAmendmentsBySubscriptionIDRequest) -> operations.GetAmendmentsBySubscriptionIDResponse:
        r"""List all amendments of a subscription
        Retrieves detailed information about the amendment with the specified subscription.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/amendments/subscriptions/{subscription-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAmendmentsBySubscriptionIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAmendmentType])
                res.get_amendment_type = out

        return res

    
    def object_delete_amendment(self, request: operations.ObjectDeleteAmendmentRequest) -> operations.ObjectDeleteAmendmentResponse:
        r"""CRUD: Delete an amendment
        
        Invoiced amendments cannot usually be deleted. One exception to this rule is auto-renew amendments. You can delete the last auto-renew amendment even if an invoice has been generated.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/amendment/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectDeleteAmendmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyDeleteResponse])
                res.proxy_delete_response = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyUnauthorizedResponse])
                res.proxy_unauthorized_response = out

        return res

    
    def object_get_amendment(self, request: operations.ObjectGetAmendmentRequest) -> operations.ObjectGetAmendmentResponse:
        r"""CRUD: Retrieve an amendment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/amendment/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectGetAmendmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.proxy_get_amendment = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyUnauthorizedResponse])
                res.proxy_unauthorized_response = out
        elif r.status_code == 404:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyNoDataResponse])
                res.proxy_no_data_response = out

        return res

    
    def object_put_amendment(self, request: operations.ObjectPutAmendmentRequest) -> operations.ObjectPutAmendmentResponse:
        r"""CRUD: Update an amendment
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/amendment/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectPutAmendmentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyCreateOrModifyResponse])
                res.proxy_create_or_modify_response = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyUnauthorizedResponse])
                res.proxy_unauthorized_response = out

        return res

    