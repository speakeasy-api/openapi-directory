import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class PaymentMethods:
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

    
    def delete_payment_methods(self, request: operations.DeletePaymentMethodsRequest) -> operations.DeletePaymentMethodsResponse:
        r"""Delete a payment method
        Deletes a credit card payment method.
        
        If the specified payment method is the account's default payment
        method, the request will fail.  In that case, you must first designate a
        different payment method for that customer to be the default.
        
        For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeletePaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_payment_method(self, request: operations.GetPaymentMethodRequest) -> operations.GetPaymentMethodResponse:
        r"""Retrieve a payment method
        This operation allows you to get the detailed information about a payment method.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentMethodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_payment_method_response = out

        return res

    
    def get_payment_methods_credit_card(self, request: operations.GetPaymentMethodsCreditCardRequest) -> operations.GetPaymentMethodsCreditCardResponse:
        r"""List all credit card payment methods of an account
        This REST API reference describes how to retrieve all credit card
        information for the specified customer account. 
        
        ## Notes
        The response includes details of credit or debit cards for the specified customer account. Card numbers are masked, e.g., \"************1234\". Cards are returned in reverse chronological order of last update.
        
        Though you can also send requests for bank transfer, ACH, or other supported payment methods, the response will not include effective details of these payment methods.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/credit-cards/accounts/{account-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetPaymentMethodsCreditCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetPaymentMethodsType])
                res.get_payment_methods_type = out

        return res

    
    def get_stored_credential_profiles(self, request: operations.GetStoredCredentialProfilesRequest) -> operations.GetStoredCredentialProfilesResponse:
        r"""List stored credential profiles of a payment method
        Retrieves the stored credential profiles within a payment method.
        
        **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}/profiles", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetStoredCredentialProfilesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetStoredCredentialProfilesResponse])
                res.get_stored_credential_profiles_response = out

        return res

    
    def object_delete_payment_method(self, request: operations.ObjectDeletePaymentMethodRequest) -> operations.ObjectDeletePaymentMethodResponse:
        r"""CRUD: Delete a payment method
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/payment-method/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectDeletePaymentMethodResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def object_get_payment_method(self, request: operations.ObjectGetPaymentMethodRequest) -> operations.ObjectGetPaymentMethodResponse:
        r"""CRUD: Retrieve a payment method
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/payment-method/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectGetPaymentMethodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ProxyGetPaymentMethod])
                res.proxy_get_payment_method = out
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

    
    def object_post_payment_method(self, request: operations.ObjectPostPaymentMethodRequest) -> operations.ObjectPostPaymentMethodResponse:
        r"""CRUD: Create a payment method
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/object/payment-method"
        
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

        res = operations.ObjectPostPaymentMethodResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def object_put_payment_method(self, request: operations.ObjectPutPaymentMethodRequest) -> operations.ObjectPutPaymentMethodResponse:
        r"""CRUD: Update a payment method
        For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/payment-method/{id}", request.path_params)
        
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

        res = operations.ObjectPutPaymentMethodResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_cancel_authorization(self, request: operations.PostCancelAuthorizationRequest) -> operations.PostCancelAuthorizationResponse:
        r"""Cancel authorization
        **Note:** If you wish to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Allows you to cancel an authorization. The payment gateways that support this operation include Verifi, CyberSource 1.28, CyberSource 1.97, Chase Paymentech Orbital, and Ingenico ePayments.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}/voidAuthorize", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCancelAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostVoidAuthorizeResponse])
                res.post_void_authorize_response = out

        return res

    
    def post_cancel_stored_credential_profile(self, request: operations.PostCancelStoredCredentialProfileRequest) -> operations.PostCancelStoredCredentialProfileResponse:
        r"""Cancel a stored credential profile
        Cancels a stored credential profile within a payment method.
        
        Cancelling the stored credential profile indicates that the stored credentials are no longer valid, per a customer request. You cannot reactivate the stored credential profile after you have cancelled it.
        
        **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCancelStoredCredentialProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifiedStoredCredentialProfileResponse])
                res.modified_stored_credential_profile_response = out

        return res

    
    def post_create_authorization(self, request: operations.PostCreateAuthorizationRequest) -> operations.PostCreateAuthorizationResponse:
        r"""Create authorization
        **Note:** If you want to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
        
        Enables you to authorize the availability of funds for a transaction but delay the capture of funds until a later time. Subsequently, use [CRUD: Create a payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) or [Create a payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) to capture the authorized funds, or use [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization) to cancel the authorization. 
        
        The payment gateways that support this operation include:
        
        * Adyen integration v2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
        * CyberSource 1.28
        * CyberSource 1.97
        * CyberSource 2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
        * Chase Paymentech Orbital
        * Ingenico ePayments
        * Verifi - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
        
        Note that CyberSource 2.0 supports the Delayed Capture feature for both Credit Cards and Credit Card Reference payment methods.
        
        If you have the Invoice Settlement feature enabled, use the [Create payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) operation to capture the funds instead of the [CRUD: Create payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) operation.
              
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}/authorize", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateAuthorizationResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostAuthorizeResponse])
                res.post_authorize_response = out

        return res

    
    def post_create_stored_credential_profile(self, request: operations.PostCreateStoredCredentialProfileRequest) -> operations.PostCreateStoredCredentialProfileResponse:
        r"""Create a stored credential profile
        Creates a stored credential profile within a payment method.
        
        The stored credential profile represents a consent agreement that you have established with a customer. When you use the payment method in a transaction, Zuora may include information from the stored credential profile to inform the payment processor that the transaction is related to your pre-existing consent agreement with the customer.
        
        **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}/profiles", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostCreateStoredCredentialProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifiedStoredCredentialProfileResponse])
                res.modified_stored_credential_profile_response = out

        return res

    
    def post_expire_stored_credential_profile(self, request: operations.PostExpireStoredCredentialProfileRequest) -> operations.PostExpireStoredCredentialProfileResponse:
        r"""Expire a stored credential profile
        Expires a stored credential profile within a payment method.
        
        Expiring the stored credential profile indicates that the stored credentials are no longer valid, per an expiration policy in the stored credential transaction framework. You cannot reactivate the stored credential profile after you have expired it.
        
        **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostExpireStoredCredentialProfileResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ModifiedStoredCredentialProfileResponse])
                res.modified_stored_credential_profile_response = out

        return res

    
    def post_payment_methods(self, request: operations.PostPaymentMethodsRequest) -> operations.PostPaymentMethodsResponse:
        r"""Create a payment method
        You can use this operation to create either a payment method associated with a specific customer account, or an orphan payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
        
        This operation supports the payment methods listed below.
        
        ### PayPal Express Checkout
        The following request body fields are specific to this payment method:
        * `BAID` (required)
        * `email` (required)
        
        ### PayPal Native Express Checkout
        The following request body fields are specific to this payment method:
        * `BAID` (required)
        * `email` (optional)
        
        ### PayPal Adaptive
        The following request body fields are specific to this payment method:
        * `preapprovalKey` (required)
        * `email` (required)
        
        ### Credit Card
        The following request body fields are specific to this payment method:
        * `cardHolderInfo` (`cardHolderName` required)
        * `cardNumber` (required)
        * `cardType` (required)
        * `expirationMonth` (required)
        * `expirationYear` (required)
        * `mitConsentAgreementRef`
        * `mitConsentAgreementSrc`
        * `mitNetworkTransactionId`
        * `mitProfileAction`
        * `mitProfileType`
        * `mitProfileAgreedOn`
        * `securityCode`
        * `checkDuplicated`
        
        
        
        ### ACH
        The following request body fields are applicable to this payment method:
        * `bankABACode` (required)
        * `bankAccountName` (required)
        * `bankAccountNumber` (required)
        * `bankAccountType` (required)
        * `bankName` (required)
        * `addressLine1`
        * `addressLine2`
        * `phone`
        * `email`
        * `city`
        * `country`
        * `state`
        * `zipCode`
        
        ### SEPA
        The following request body fields are applicable to this payment method:
        * `IBAN` (required)
        * `accountHolderInfo` (required)
        * `businessIdentificationCode`
        
        
        ### Betalingsservice (Direct Debit DK)
        The following request body fields are applicable to this payment method:
        * `accountNumber` (required)
        * `identityNumber` (required)
        * `bankCode` (required)
        * `accountHolderInfo` (required)
        
        
        ### Autogiro (Direct Debit SE)
        The following request body fields are applicable to this payment method:        
        * `accountNumber` (required)
        * `identityNumber` (required)
        * `branchCode` (required)
        * `accountHolderInfo` (required) 
        
        
        ### Bacs (Direct Debit UK)
        The following request body fields are applicable to this payment method:        
        * `accountNumber` (required)
        * `bankCode` (required)
        * `accountHolderInfo` (required)
        
        
        ### Becs (Direct Entry AU)
        The following request body fields are applicable to this payment method:        
        * `accountNumber` (required)
        * `branchCode` (required)
        * `accountHolderInfo` (required)
        
        
        ### Becsnz (Direct Debit NZ)
        The following request body fields are applicable to this payment method:        
        * `accountNumber` (required)
        * `bankCode` (required)
        * `branchCode` (required)
        * `accountHolderInfo` (required)
        
        
        ### PAD (Pre-Authorized Debit)
        The following request body fields are applicable to this payment method:        
        * `accountNumber` (required)
        * `bankCode` (required)
        * `branchCode` (required)
        * `accountHolderInfo` (required)
        
        
        ### Custom payment methods
        Note: This feature is in the Early Adopter phase. If you want to use this feature, submit a request at [Zuora Global Support](http://support.zuora.com/) to enable the Universal Payment Connector and Open Payment Method services that support this feature.
        
        With the support of Universal Payment Connector (UPC) and Open Payment Method (OPM) services, you can create custom payment methods by using the fields defined in a definition file for this type of custom payment method. See [Set up custom payment gateways and payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods) for details.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payment-methods"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostPaymentMethodResponse])
                res.post_payment_method_response = out

        return res

    
    def post_payment_methods_credit_card(self, request: operations.PostPaymentMethodsCreditCardRequest) -> operations.PostPaymentMethodsCreditCardResponse:
        r"""Create a credit card payment method
        You can create a credit card payment method for a customer account or an orphan credit card payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
        
        This API call is CORS Enabled. Use client-side JavaScript to invoke the call. 
        
        **Note**: If you use this operation to create credit card payment methods instead of using the [iFrame of Hosted Payment Pages](https://knowledgecenter.zuora.com/CB_Billing/LA_Hosted_Payment_Pages/C_Hosted_Payment_Pages/B_Implementing_Hosted_Payment_Pages_on_Your_Website/C_Embed_and_Submit_the_iFrame), you are subject to PCI-compliance audit requirements.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payment-methods/credit-cards"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPaymentMethodsCreditCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostPaymentMethodResponseType])
                res.post_payment_method_response_type = out

        return res

    
    def post_payment_methods_decryption(self, request: operations.PostPaymentMethodsDecryptionRequest) -> operations.PostPaymentMethodsDecryptionResponse:
        r"""Create an Apple Pay payment method
        The decryption API endpoint can conditionally perform 3 tasks in one atomic call:
          * Decrypt Apple Pay Payment token
          * Create Credit Card Payment Method in Zuora with decrypted Apple Pay information
          * Process Payment on a specified Invoice (optional)
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/payment-methods/decryption"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPaymentMethodsDecryptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostPaymentMethodResponseDecryption])
                res.post_payment_method_response_decryption = out

        return res

    
    def put_payment_method(self, request: operations.PutPaymentMethodRequest) -> operations.PutPaymentMethodResponse:
        r"""Update a payment method
        This operation allows you to update an existing payment method. 
        
        The following request body fields can be updated regardless of payment method types:
        * `authGateway`
        * `gatewayOptions`
        * `accountHolderInfo`
        * Custom fields
        
        The following request body fields can be updated only for the Credit Card payment method:
        * `expirationMonth` 
        * `expirationYear`
        * `securityCode`
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPaymentMethodResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutPaymentMethodResponse])
                res.put_payment_method_response = out

        return res

    
    def put_payment_methods_credit_card(self, request: operations.PutPaymentMethodsCreditCardRequest) -> operations.PutPaymentMethodsCreditCardResponse:
        r"""Update a credit card payment method
        Updates an existing credit card payment method.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/credit-cards/{payment-method-id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutPaymentMethodsCreditCardResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutPaymentMethodResponseType])
                res.put_payment_method_response_type = out

        return res

    
    def put_scrub_payment_methods(self, request: operations.PutScrubPaymentMethodsRequest) -> operations.PutScrubPaymentMethodsResponse:
        r"""Scrub a payment method
        
        This operation enables you to replace all sensitive data in a payment method, related payment method snapshot table, and four related log tables with dummy values that will be stored in Zuora databases. 
        
        This operation will scrub the sensitive data and soft-delete the specified payment method at the same time. 
        
        If you want to delete or anonymize personal data in Zuora, you must scrub the payment method before anonymizing the associated account and contact. See [Delete or anonymize personal data](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Responding_to_individual_requests_for_access%2C_correction%2C_and_deletion_of_data_under_applicable_privacy_laws#Edit_and_correct_personal_data) for more information.
        
        **Note:** In order to use this operation, you must ensure that the **Scrub Sensitive Data of Specific Payment Method payments** permission is enabled in your user role. Contact your tenant administrator if you want to enable this permission. See [Scrub Payment Methods](https://knowledgecenter.zuora.com/CB_Billing/L_Payment_Methods/Scrub_Payment_Methods) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}/scrub", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutScrubPaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_verify_payment_methods(self, request: operations.PutVerifyPaymentMethodsRequest) -> operations.PutVerifyPaymentMethodsResponse:
        r"""Verify a payment method
        Sends an authorization request to the corresponding payment gateway to verify the payment method, even though no changes are made for the payment method. Supported payment methods are Credit Cards and Paypal.
        
        Zuora now supports performing a standalone zero dollar verification or one dollar authorization for credit cards. It also supports a billing agreement status check on PayPal payment methods.
        
        If a payment method is created by Hosted Payment Pages and is not assigned to any billing account, the payment method cannot be verified through this operation.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/payment-methods/{payment-method-id}/verify", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutVerifyPaymentMethodsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutVerifyPaymentMethodResponseType])
                res.put_verify_payment_method_response_type = out

        return res

    