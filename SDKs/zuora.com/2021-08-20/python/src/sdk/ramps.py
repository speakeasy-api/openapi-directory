import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Ramps:
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

    
    def get_ramp_by_ramp_number(self, request: operations.GetRampByRampNumberRequest) -> operations.GetRampByRampNumberResponse:
        r"""Retrieve a ramp
        **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
        
        Retrieves the latest definition of a specified ramp.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/ramps/{rampNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRampByRampNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRampByRampNumberResponseType])
                res.get_ramp_by_ramp_number_response_type = out

        return res

    
    def get_ramp_metrics_by_order_number(self, request: operations.GetRampMetricsByOrderNumberRequest) -> operations.GetRampMetricsByOrderNumberResponse:
        r"""List ramp metrics by order number
        **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
        
        Retrieves key ramp metrics about a specified order, including the following metrics:
        
        * TCB, TCV in the Ramp level
        * TCB, TCV in the Interval level
        * TCB, TCV, Quantity, and MRR in Interval Metrics
        * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
        
        See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/{orderNumber}/ramp-metrics", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRampMetricsByOrderNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRampMetricsByOrderNumberResponseType])
                res.get_ramp_metrics_by_order_number_response_type = out

        return res

    
    def get_ramp_metrics_by_ramp_number(self, request: operations.GetRampMetricsByRampNumberRequest) -> operations.GetRampMetricsByRampNumberResponse:
        r"""List all ramp metrics of a ramp
        **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
        
        Retrieves key metrics about a specified ramp, including the following metrics:
        
        * TCB, TCV in the Ramp level
        * TCB, TCV in the Interval level
        * TCB, TCV, Quantity, and MRR in Interval Metrics
        * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
        
        See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/ramps/{rampNumber}/ramp-metrics", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRampMetricsByRampNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRampMetricsByRampNumberResponseType])
                res.get_ramp_metrics_by_ramp_number_response_type = out

        return res

    
    def get_ramp_metrics_by_subscription_key(self, request: operations.GetRampMetricsBySubscriptionKeyRequest) -> operations.GetRampMetricsBySubscriptionKeyResponse:
        r"""List ramp metrics by subscription key
        **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
        
        Retrieves key ramp metrics about a specified subscription, including the following metrics:
        
        * TCB, TCV in the Ramp level
        * TCB, TCV in the Interval level
        * TCB, TCV, Quantity, and MRR in Interval Metrics
        * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
        
        See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscriptionKey}/ramp-metrics", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRampMetricsBySubscriptionKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRampMetricsBySubscriptionKeyResponseType])
                res.get_ramp_metrics_by_subscription_key_response_type = out

        return res

    
    def get_ramps_by_subscription_key(self, request: operations.GetRampsBySubscriptionKeyRequest) -> operations.GetRampsBySubscriptionKeyResponse:
        r"""Retrieve a ramp by subscription key
        **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
        
         Retrieves the definition of the ramp associated with a specified subscription.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscriptionKey}/ramps", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRampsBySubscriptionKeyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRampsBySubscriptionKeyResponseType])
                res.get_ramps_by_subscription_key_response_type = out

        return res

    