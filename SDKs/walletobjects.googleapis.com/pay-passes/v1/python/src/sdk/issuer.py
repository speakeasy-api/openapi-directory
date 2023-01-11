import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Issuer:
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

    
    def walletobjects_issuer_get(self, request: operations.WalletobjectsIssuerGetRequest) -> operations.WalletobjectsIssuerGetResponse:
        r"""Returns the issuer with the given issuer ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/issuer/{resourceId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsIssuerGetResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Issuer])
                res.issuer = out

        return res

    
    def walletobjects_issuer_insert(self, request: operations.WalletobjectsIssuerInsertRequest) -> operations.WalletobjectsIssuerInsertResponse:
        r"""Inserts an issuer with the given ID and properties.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/issuer"
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("POST", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsIssuerInsertResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Issuer])
                res.issuer = out

        return res

    
    def walletobjects_issuer_list(self, request: operations.WalletobjectsIssuerListRequest) -> operations.WalletobjectsIssuerListResponse:
        r"""Returns a list of all issuers shared to the caller.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/issuer"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsIssuerListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.IssuerListResponse])
                res.issuer_list_response = out

        return res

    
    def walletobjects_issuer_patch(self, request: operations.WalletobjectsIssuerPatchRequest) -> operations.WalletobjectsIssuerPatchResponse:
        r"""Updates the issuer referenced by the given issuer ID. This method supports patch semantics.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/issuer/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PATCH", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsIssuerPatchResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Issuer])
                res.issuer = out

        return res

    
    def walletobjects_issuer_update(self, request: operations.WalletobjectsIssuerUpdateRequest) -> operations.WalletobjectsIssuerUpdateResponse:
        r"""Updates the issuer referenced by the given issuer ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/walletobjects/v1/issuer/{resourceId}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("PUT", url, params=query_params, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsIssuerUpdateResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.Issuer])
                res.issuer = out

        return res

    