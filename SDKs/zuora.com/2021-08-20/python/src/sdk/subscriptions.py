import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Subscriptions:
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

    
    def get_subscriptions_by_account(self, request: operations.GetSubscriptionsByAccountRequest) -> operations.GetSubscriptionsByAccountResponse:
        r"""List subscriptions by account key
        Retrieves all subscriptions associated with the specified account. Zuora only returns the latest version of the subscriptions.
        
        Subscription data is returned in reverse chronological order based on `updatedDate`.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/accounts/{account-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsByAccountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSubscriptionWrapper])
                res.get_subscription_wrapper = out

        return res

    
    def get_subscriptions_by_key(self, request: operations.GetSubscriptionsByKeyRequest) -> operations.GetSubscriptionsByKeyResponse:
        r"""Retrieve a subscription by key
        This REST API reference describes how to retrieve detailed information about a specified subscription in the latest version.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscription-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsByKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_subscription_type_with_success = out

        return res

    
    def get_subscriptions_by_key_and_version(self, request: operations.GetSubscriptionsByKeyAndVersionRequest) -> operations.GetSubscriptionsByKeyAndVersionResponse:
        r"""Retrieve a subscription by key and version
        This REST API reference describes how to retrieve detailed information about a specified subscription in a specified version. When you create a subscription amendment, you create a new version of the subscription. You can use this method to retrieve information about a subscription in any version.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscription-key}/versions/{version}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionsByKeyAndVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_subscription_type_with_success = out

        return res

    
    def object_delete_subscription(self, request: operations.ObjectDeleteSubscriptionRequest) -> operations.ObjectDeleteSubscriptionResponse:
        r"""CRUD: Delete a subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/subscription/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectDeleteSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def object_get_subscription(self, request: operations.ObjectGetSubscriptionRequest) -> operations.ObjectGetSubscriptionResponse:
        r"""CRUD: Retrieve a subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/subscription/{id}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.ObjectGetSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.proxy_get_subscription = out
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

    
    def object_put_subscription(self, request: operations.ObjectPutSubscriptionRequest) -> operations.ObjectPutSubscriptionResponse:
        r"""CRUD: Update a subscription
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/object/subscription/{id}", request.path_params)
        
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

        res = operations.ObjectPutSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def post_preview_subscription(self, request: operations.PostPreviewSubscriptionRequest) -> operations.PostPreviewSubscriptionResponse:
        r"""Preview a subscription
        The REST API reference describes how to create a new subscription in preview mode. This call does not require a valid customer account. It can be used to show potential new customers a preview of a subscription with complete details and charges before creating an account, or to let existing customers preview a subscription with all charges before committing.
        
        ## Notes
        - The response of the Preview Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers. 
        
        - If you have the Invoice Settlement feature enabled, we recommend that you set the `zuora-version` parameter to `207.0` or later. Otherwise, an error is returned.
        
        
        - Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows.
        
        |        | serviceActivationDate (SA) specified          | serviceActivationDate (SA) NOT specified  |
        | ------------- |:-------------:| -----:|
        | customerAcceptanceDate (CA) specified      | SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
        | customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/subscriptions/preview"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPreviewSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostSubscriptionPreviewResponseType])
                res.post_subscription_preview_response_type = out

        return res

    
    def post_subscription(self, request: operations.PostSubscriptionRequest) -> operations.PostSubscriptionResponse:
        r"""Create a subscription
        This REST API reference describes how to create a new subscription for an existing customer account.
        
        ## Notes
        
        If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
        
        If `invoiceCollect` is `true`, the call will not return `success` = `true` unless the subscription, invoice, and payment are all successful.
        
        Default values for **customerAcceptanceDate** and **serviceActivationDate** are set as follows. This API operation does not support creating a pending subscription.
        
        |        | serviceActivationDate(SA) specified          | serviceActivationDate (SA) NOT specified  |
        | ------------- |:-------------:| -----:|
        | customerAcceptanceDate (CA) specified| SA uses value in the request call; CA uses value in the request call| CA uses value in the request call;SA uses CE as default |
        | customerAcceptanceDate (CA) NOT specified      | SA uses value in the request call; CA uses SA as default |   SA and CA use CE as default |
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/subscriptions"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostSubscriptionResponseType])
                res.post_subscription_response_type = out

        return res

    
    def put_cancel_subscription(self, request: operations.PutCancelSubscriptionRequest) -> operations.PutCancelSubscriptionResponse:
        r"""Cancel a subscription
        This REST API reference describes how to cancel an active subscription.
        
        **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscription-key}/cancel", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCancelSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostSubscriptionCancellationResponseType])
                res.post_subscription_cancellation_response_type = out

        return res

    
    def put_renew_subscription(self, request: operations.PutRenewSubscriptionRequest) -> operations.PutRenewSubscriptionResponse:
        r"""Renew a subscription
        Renews a termed subscription using existing renewal terms.
        
        **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscription-key}/renew", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutRenewSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutRenewSubscriptionResponseType])
                res.put_renew_subscription_response_type = out

        return res

    
    def put_resume_subscription(self, request: operations.PutResumeSubscriptionRequest) -> operations.PutResumeSubscriptionResponse:
        r"""Resume a subscription
        This REST API reference describes how to resume a suspended subscription.  
        
        **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscription-key}/resume", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutResumeSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutSubscriptionResumeResponseType])
                res.put_subscription_resume_response_type = out

        return res

    
    def put_subscription(self, request: operations.PutSubscriptionRequest) -> operations.PutSubscriptionResponse:
        r"""Update a subscription
        Use this call to make the following kinds of changes to a subscription:
          * Add a note
          * Change the renewal term or auto-renewal flag
          * Change the term length or change between evergreen and termed
          * Add a new product rate plan
          * Remove an existing subscription rate plan
          * Change the quantity or price of an existing subscription rate plan
        
        ## Notes
        * The Update Subscription call creates a new subscription, which has the old subscription number but a new subscription ID.  The old subscription is canceled but remains in the system.
        * In one request, this call can make:
          * Up to 9 combined add, update, and remove changes
          * No more than 1 change to terms & conditions
        * Updates are performed in the following sequence:
          1. First change the notes on the existing subscription, if requested.
          2. Then change the terms and conditions, if requested.
          3. Then perform the remaining amendments based upon the effective dates specified. If multiple amendments have the same contract-effective dates, then execute adds before updates, and updates before removes.
        * The update operation is atomic. If any of the updates fails, the entire operation is rolled back.
        * The response of the Update Subscription call is based on the REST API minor version you set in the request header. The response structure might be different if you use different minor version numbers. 
        * If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
        
        ## Override a Tiered Price
        There are two ways you override a tiered price:
        
        * Override a specific tier number
        For example: `tiers[{tier:1,price:8},{tier:2,price:6}]`
        
        * Override the entire tier structure
        For example:  `tiers[{tier:1,price:8,startingUnit:1,endingUnit:100,priceFormat:\"FlatFee\"},
        {tier:2,price:6,startingUnit:101,priceFormat:\"FlatFee\"}]`
        
        If you just override a specific tier, do not include the `startingUnit` field in the request.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscription-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutSubscriptionResponseType])
                res.put_subscription_response_type = out

        return res

    
    def put_suspend_subscription(self, request: operations.PutSuspendSubscriptionRequest) -> operations.PutSuspendSubscriptionResponse:
        r"""Suspend a subscription
        This REST API reference describes how to suspend an active subscription. 
        
        **Note**: If you have the Invoice Settlement feature enabled, it is best practice to set the `zuora-version` parameter to `211.0` or later. Otherwise, an error occurs.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscription-key}/suspend", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSuspendSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutSubscriptionSuspendResponseType])
                res.put_subscription_suspend_response_type = out

        return res

    
    def put_update_subscription_custom_fields_of_a_specified_version(self, request: operations.PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionRequest) -> operations.PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionResponse:
        r"""Update subscription custom fields of a subscription version
        Updates the custom fields of a specified subscription version.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscriptionNumber}/versions/{version}/customFields", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUpdateSubscriptionCustomFieldsOfASpecifiedVersionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    