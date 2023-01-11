import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Transactions:
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

    
    def get_transaction_invoice(self, request: operations.GetTransactionInvoiceRequest) -> operations.GetTransactionInvoiceResponse:
        r"""List all invoices for an account
        Retrieves invoices for a specified account. 
        Invoices are returned in reverse chronological order by **updatedDate**.
        
        For a use case of this operation, see [View invoices](https://www.zuora.com/developer/api-guides/#View-invoices).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/transactions/invoices/accounts/{account-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionInvoiceResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetInvoiceFileWrapper])
                res.get_invoice_file_wrapper = out

        return res

    
    def get_transaction_payment(self, request: operations.GetTransactionPaymentRequest) -> operations.GetTransactionPaymentResponse:
        r"""List all payments for an account
        Retrieves payments for a specified account. Payments are returned in
        reverse chronological order by **updatedDate**.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/transactions/payments/accounts/{account-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetTransactionPaymentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentsType])
                res.get_payments_type = out

        return res

    