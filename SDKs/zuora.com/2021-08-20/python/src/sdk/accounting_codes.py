import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class AccountingCodes:
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

    
    def delete_accounting_code(self, request: operations.DeleteAccountingCodeRequest) -> operations.DeleteAccountingCodeResponse:
        r"""Delete an accounting code
        This reference describes how to delete an accounting code through the REST API.
        ## Prerequisites
        If you have Zuora Finance enabled on your tenant, then you must have the Delete Unused Accounting Code permission.
        ## Limitations
        You can only delete accounting codes that have never been associated with any transactions. An accounting code must be deactivated before you can delete it.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-codes/{ac-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteAccountingCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_accounting_code(self, request: operations.GetAccountingCodeRequest) -> operations.GetAccountingCodeResponse:
        r"""Retrieve an accounting code
        This reference describes how to query an accounting code through the REST API.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-codes/{ac-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountingCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_accounting_code_item_type = out

        return res

    
    def get_all_accounting_codes(self, request: operations.GetAllAccountingCodesRequest) -> operations.GetAllAccountingCodesResponse:
        r"""List all accounting codes
        This reference describes how to query all accounting codes in your chart of accounts through the REST API.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounting-codes"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllAccountingCodesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAccountingCodesType])
                res.get_accounting_codes_type = out

        return res

    
    def post_accounting_code(self, request: operations.PostAccountingCodeRequest) -> operations.PostAccountingCodeResponse:
        r"""Create an accounting code
        This reference describes how to create a new accounting code through the REST API. 
        The accounting code will be active as soon as it has been created.
        
        ## Prerequisites
          If you have Zuora Finance enabled on your tenant, you must have the  Configure Accounting Codes permission. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounting-codes"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountingCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostAccountingCodeResponseType])
                res.post_accounting_code_response_type = out

        return res

    
    def put_accounting_code(self, request: operations.PutAccountingCodeRequest) -> operations.PutAccountingCodeResponse:
        r"""Update an accounting code
        This reference describes how to update an existing accounting code through the REST API.
        ## Prerequisites
          If you have Zuora Finance enabled on your tenant, you must have the  Manage Accounting Code permission. 
        ## Limitations
        You can only update accounting codes that are not already associated with any transactions.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-codes/{ac-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAccountingCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_activate_accounting_code(self, request: operations.PutActivateAccountingCodeRequest) -> operations.PutActivateAccountingCodeResponse:
        r"""Activate an accounting code
        This reference describes how to activate an accounting code through the REST API.
        
        Prerequisites
        -------------
        If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-codes/{ac-id}/activate", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutActivateAccountingCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_deactivate_accounting_code(self, request: operations.PutDeactivateAccountingCodeRequest) -> operations.PutDeactivateAccountingCodeResponse:
        r"""Deactivate an accounting code
        This reference describes how to deactivate an accounting code through the REST API.
        
        ## Prerequisites
        If you have Zuora Finance enabled on your tenant, you must have the Manage Accounting Code permission.
        ## Limitations
        You can only deactivate accounting codes that are not associated with any transactions. 
        You cannot disable accounting codes of type AccountsReceivable.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounting-codes/{ac-id}/deactivate", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDeactivateAccountingCodeResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    