import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Accounts:
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

    
    def get_account(self, request: operations.GetAccountRequest) -> operations.GetAccountResponse:
        r"""Retrieve an account
        Retrieves basic information about a customer account.
        
        This operation is a quick retrieval that doesn't include the account's subscriptions, invoices, payments, or usage details. Use Get account summary to get more detailed information about an account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/{account-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAccountType])
                res.get_account_type = out

        return res

    
    def get_account_summary(self, request: operations.GetAccountSummaryRequest) -> operations.GetAccountSummaryResponse:
        r"""Retrieve an account summary
        Retrieves detailed information about the specified customer account.
        
        The response includes the account information and a summary of the account’s subscriptions, invoices, payments, and usages for the last six recently updated subscriptions.
        
        ## Notes 
        Returns only the six most recent subscriptions based on the subscription updatedDate. Within those subscriptions, there may be many rate plans and many rate plan charges. These items are subject to the maximum limit on the array size. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/{account-key}/summary", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAccountSummaryResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAccountSummaryType])
                res.get_account_summary_type = out

        return res

    
    def object_delete_account(self, request: operations.ObjectDeleteAccountRequest) -> operations.ObjectDeleteAccountResponse:
        r"""CRUD: Delete an account
        Deletes a specific account asynchronously. 
        
        **Note:** When [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) is enabled, before deleting a customer account, you must delete all related orders and subscriptions where this account has been referenced as a subscription owner or invoice owner.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/account/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectDeleteAccountResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def object_get_account(self, request: operations.ObjectGetAccountRequest) -> operations.ObjectGetAccountResponse:
        r"""CRUD: Retrieve an account
        Retrieves the information about one specific account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/account/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectGetAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.proxy_get_account = out
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

    
    def object_post_account(self, request: operations.ObjectPostAccountRequest) -> operations.ObjectPostAccountResponse:
        r"""CRUD: Create an account
        Creates an account without creating any associated objects such as subscriptions.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/object/account"
        
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

        res = operations.ObjectPostAccountResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def object_put_account(self, request: operations.ObjectPutAccountRequest) -> operations.ObjectPutAccountResponse:
        r"""CRUD: Update an account
        Updates an account.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/account/{id}", request.path_params)
        
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

        res = operations.ObjectPutAccountResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_account(self, request: operations.PostAccountRequest) -> operations.PostAccountResponse:
        r"""Create an account
        Creates a customer account with a payment method, a bill-to contact, and an optional sold-to contact. Request and response field descriptions and sample code are provided. Use this operation to optionally create a subscription, invoice for that subscription, and collect payment through the default payment method. The transaction is atomic; if any part fails for any reason, the entire transaction is rolled back.
        
        This operation is CORS Enabled, so you can use client-side Javascript to invoke the call. 
        
        ## Notes
        1. The account is created in active status.  
        2. If the `autoPay` field is set to `true` in the request, you must provide one of the `paymentMethod`, `creditCard`, or `hpmCreditCardPaymentMethodId` field, but not multiple. The one provided becomes the default payment method for this account. If the credit card information is declined or cannot be verified, no account is created.
        3. Customer accounts created with this call are automatically be set to Auto Pay.
        4. If either the `workEmail` or `personalEmail` field is specified, then the account's email delivery preference is automatically set to `true`. (In that case, emails go to the `workEmail` address, if it exists, or else the `personalEmail`.) If neither field is specified, the email delivery preference is automatically set to `false`.
        
        ## Defaults for customerAcceptanceDate and serviceActivationDate
        Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.
        
        |        | serviceActivationDate(SA) specified          | serviceActivationDate (SA) NOT specified  |
        | ------------- |:-------------:| -----:|
        | customerAcceptanceDate (CA) specified      | SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
        | customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/accounts"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostAccountResponseType])
                res.post_account_response_type = out

        return res

    
    def put_account(self, request: operations.PutAccountRequest) -> operations.PutAccountResponse:
        r"""Update an account
        Updates a customer account by specifying the account-key.
        
        ## Notes
        1. Only the fields to be changed should be specified.  Any field that is not included in the request body will not be changed.
        2. If an empty field is submitted with this operation, the corresponding field in the account is emptied.
        3. Email addresses: If no email addresses are specified, no change is made to the email addresses on file or to the email delivery preference. If either the **personalEmail** or **workEmail** is specified (or both), the system updates the corresponding email address(es) on file and the email delivery preference is set to `true`. (In that case, emails go to the **workEmail** address, if it exists, or else the **personalEmail**.) On the other hand, if as a result of this call both of the email addresses for the account are empty, the email delivery preference is set to `false`.
        4. The bill-to and sold-to contacts are separate data entities. If you select the **Same as Bill To Contact** check box during account creation, both the Bill To and Sold To contacts are updated upon updating either one because they point to the same contact record. In this case, if you want to update only one of them, you have to first create another contact and update the Bill To or Sold To contact of the customer account to be the newly created one.
        
        For a use case of this operation, see [Configure payment methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/accounts/{account-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    