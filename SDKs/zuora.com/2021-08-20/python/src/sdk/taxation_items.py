import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class TaxationItems:
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

    
    def delete_taxation_item(self, request: operations.DeleteTaxationItemRequest) -> operations.DeleteTaxationItemResponse:
        r"""Delete a taxation item
        Deletes a specific taxation item by ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxationitems/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteTaxationItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_taxation_item(self, request: operations.GetTaxationItemRequest) -> operations.GetTaxationItemResponse:
        r"""Retrieve a taxation item
        
        Retrieves the information about a specific taxation item by ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxationitems/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTaxationItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_taxation_item_type = out

        return res

    
    def object_delete_taxation_item(self, request: operations.ObjectDeleteTaxationItemRequest) -> operations.ObjectDeleteTaxationItemResponse:
        r"""CRUD: Delete a taxation item
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/taxation-item/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectDeleteTaxationItemResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def object_get_taxation_item(self, request: operations.ObjectGetTaxationItemRequest) -> operations.ObjectGetTaxationItemResponse:
        r"""CRUD: Retrieve a taxation item
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/taxation-item/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectGetTaxationItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.proxy_get_taxation_item = out
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

    
    def object_post_taxation_item(self, request: operations.ObjectPostTaxationItemRequest) -> operations.ObjectPostTaxationItemResponse:
        r"""CRUD: Create a taxation item
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/object/taxation-item"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectPostTaxationItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyCreateOrModifyResponse])
                res.proxy_create_or_modify_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyBadRequestResponse])
                res.proxy_bad_request_response = out
        elif r.status_code == 401:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyUnauthorizedResponse])
                res.proxy_unauthorized_response = out

        return res

    
    def object_put_taxation_item(self, request: operations.ObjectPutTaxationItemRequest) -> operations.ObjectPutTaxationItemResponse:
        r"""CRUD: Update a taxation item
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/taxation-item/{id}", request.path_params)
        
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

        res = operations.ObjectPutTaxationItemResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def put_taxation_item(self, request: operations.PutTaxationItemRequest) -> operations.PutTaxationItemResponse:
        r"""Update a taxation item
        Updates a specific taxation item by ID.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/taxationitems/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutTaxationItemResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_taxation_item_type = out

        return res

    