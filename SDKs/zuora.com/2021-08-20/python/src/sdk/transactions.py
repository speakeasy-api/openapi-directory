"""Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT."""

import requests as requests_http
from . import utils
from sdk.models import operations, shared
from typing import Optional

class Transactions:
    _client: requests_http.Session
    _security_client: requests_http.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests_http.Session, security_client: requests_http.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version
        
    def get_transaction_invoice(self, request: operations.GETTransactionInvoiceRequest) -> operations.GETTransactionInvoiceResponse:
        r"""List all invoices for an account
        Retrieves invoices for a specified account. 
        Invoices are returned in reverse chronological order by **updatedDate**.
        
        For a use case of this operation, see [View invoices](https://www.zuora.com/developer/api-guides/#View-invoices).
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GETTransactionInvoiceRequest, base_url, '/v1/transactions/invoices/accounts/{account-key}', request)
        
        headers = utils.get_headers(request)
        query_params = utils.get_query_params(operations.GETTransactionInvoiceRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GETTransactionInvoiceResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GETInvoiceFileWrapper])
                res.get_invoice_file_wrapper = out

        return res

    def get_transaction_payment(self, request: operations.GETTransactionPaymentRequest) -> operations.GETTransactionPaymentResponse:
        r"""List all payments for an account
        Retrieves payments for a specified account. Payments are returned in
        reverse chronological order by **updatedDate**.
        """
        base_url = self._server_url
        
        url = utils.generate_url(operations.GETTransactionPaymentRequest, base_url, '/v1/transactions/payments/accounts/{account-key}', request)
        
        headers = utils.get_headers(request)
        query_params = utils.get_query_params(operations.GETTransactionPaymentRequest, request)
        
        client = self._client
        
        http_res = client.request('GET', url, params=query_params, headers=headers)
        content_type = http_res.headers.get('Content-Type')

        res = operations.GETTransactionPaymentResponse(status_code=http_res.status_code, content_type=content_type, raw_response=http_res)
        
        if http_res.status_code == 200:
            res.headers = http_res.headers
            
            if utils.match_content_type(content_type, 'application/json; charset=utf-8'):
                out = utils.unmarshal_json(http_res.text, Optional[shared.GETPaymentsType])
                res.get_payments_type = out

        return res

    