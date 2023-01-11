import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class Orders:
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

    
    def delete_order(self, request: operations.DeleteOrderRequest) -> operations.DeleteOrderResponse:
        r"""Delete an order
        **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
               
        Deletes a specified order. 
        
        * All the subscriptions changed by this order are deleted. After the deletion, the subscriptions are rolled back to the previous version. 
        
        * All the order line items created in this order are deleted.
        
        You are not allowed to delete an order if the charges that are affected by this order are invoiced.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/{orderNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("DELETE", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def get_all_orders(self, request: operations.GetAllOrdersRequest) -> operations.GetAllOrdersResponse:
        r"""List orders
        **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        
        Retrieves information about all orders in your tenant. By default, it returns the first page of the orders. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/orders"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAllOrdersResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetAllOrdersResponseType])
                res.get_all_orders_response_type = out

        return res

    
    def get_job_status_and_response(self, request: operations.GetJobStatusAndResponseRequest) -> operations.GetJobStatusAndResponseResponse:
        r"""Retrieve the status and response of a job
        **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        Get the status and response of an asynchronous job. Currently, an asynchronous job created by \"Create an order asynchronously\" or \"Preview an order asynchronously\" is supported.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/async-jobs/{jobId}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetJobStatusAndResponseResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.GetJobStatusAndResponse200ApplicationJSON])
                res.get_job_status_and_response_200_application_json_object = out

        return res

    
    def get_order(self, request: operations.GetOrderRequest) -> operations.GetOrderResponse:
        r"""Retrieve an order
        **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
                
        Retrieves the detailed information about a specified order.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/{orderNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOrderResponse])
                res.get_order_response = out

        return res

    
    def get_order_metricsfor_evergreen_subscription(self, request: operations.GetOrderMetricsforEvergreenSubscriptionRequest) -> operations.GetOrderMetricsforEvergreenSubscriptionResponse:
        r"""List order metrics for an evergreen subscription
        **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
        
        **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects. 
        * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
        * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
        * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
        
        It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        Whereas new customers, and existing customers not currently on [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders), will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.
        
        **Note:** As of Zuora Billing Release 306, any new customers who onboard on [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) will no longer get this operation.
        
        
        Retrieves the metrics of an evergreen subscription in a specified order.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/{orderNumber}/evergreenMetrics/{subscriptionNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrderMetricsforEvergreenSubscriptionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOrderResponseForEvergreen])
                res.get_order_response_for_evergreen = out

        return res

    
    def get_orders_by_invoice_owner(self, request: operations.GetOrdersByInvoiceOwnerRequest) -> operations.GetOrdersByInvoiceOwnerResponse:
        r"""List orders of an invoice owner
        **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        Retrieves the detailed information about all orders for a specified invoice owner.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/invoiceOwner/{accountNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersByInvoiceOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOrdersResponse])
                res.get_orders_response = out

        return res

    
    def get_orders_by_subscription_number(self, request: operations.GetOrdersBySubscriptionNumberRequest) -> operations.GetOrdersBySubscriptionNumberResponse:
        r"""List orders by subscription number
        **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        Retrieves the detailed information about all orders for a specified subscription. Any orders containing the changes on the specified subscription are returned.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/subscription/{subscriptionNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersBySubscriptionNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOrdersResponse])
                res.get_orders_response = out

        return res

    
    def get_orders_by_subscription_owner(self, request: operations.GetOrdersBySubscriptionOwnerRequest) -> operations.GetOrdersBySubscriptionOwnerResponse:
        r"""List orders of a subscription owner
        **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        Retrieves the detailed information about all orders for a specified subscription owner. Any orders containing the changes on the subscriptions owned by this account are returned.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/subscriptionOwner/{accountNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetOrdersBySubscriptionOwnerResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetOrdersResponse])
                res.get_orders_response = out

        return res

    
    def get_subscription_term_info(self, request: operations.GetSubscriptionTermInfoRequest) -> operations.GetSubscriptionTermInfoResponse:
        r"""List subscription terms
        **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
        
        Retrieves the terms of the specified subscription.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/term/{subscriptionNumber}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSubscriptionTermInfoResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetSubscriptionTermInfoResponseType])
                res.get_subscription_term_info_response_type = out

        return res

    
    def post_create_order_asynchronously(self, request: operations.PostCreateOrderAsynchronouslyRequest) -> operations.PostCreateOrderAsynchronouslyResponse:
        r"""Create an order asynchronously
        **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        
        In the case where a normal \"Create an order\" operation call will time out, use this operation instead to create an order asynchronously. A job will be creating the order in the back end; the job ID will be returned for tracking the job status and result. 
        
        The limit of orders allowed on a subscription is 1000.
        
        The limit of order line items allowed in an order is 100.
        
        Zuora has the following limits on the Orders synchronous API to prevent performance degradation: 
        * Up to 50 subscriptions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        * Up to 50 order actions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        * Up to 50 order actions are allowed on a single subscription in a [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        
        If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:
        * [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously)
        * [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously)
        
        Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:
        * Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        * Up to 300 order actions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        * Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        
        If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at [Zuora Global Support](https://support.zuora.com).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/async/orders"
        
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

        res = operations.PostCreateOrderAsynchronouslyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostCreateOrderAsynchronously202ApplicationJSON])
                res.post_create_order_asynchronously_202_application_json_object = out

        return res

    
    def post_order(self, request: operations.PostOrderRequest) -> operations.PostOrderResponse:
        r"""Create an order
        **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        You can use this operation to create subscriptions and make changes to subscriptions by creating orders. You can also use this operation to create order line items by creating orders. The following tutorials demonstrate how to use this operation:
        
         * [Create a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/A_Create_a_Subscription)
         * [Add a Product to a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/A_Add_a_Product_to_a_Subscription)
         * [Create a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/B_Create_a_Ramp_Deal)
         * [Add a Product Mid-Interval Update on a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/E_Update_a_Product_in_a_Ramp_Deal)
         * [Add a Product in a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/C_Add_a_Product_in_a_Ramp_Deal)
         * [Change the Terms and Conditions of a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/D_Change_the_Terms_and_Conditions_of_a_Ramp_Deal_and_Update_the_Ramp)
         * [Change the Owner of a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Change_the_Owner_of_a_Subscription)
         * [Change the Terms and Conditions of a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Change_the_Terms_and_Conditions_of_a_Subscription)
         * [Renew a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Renew_a_Subscription)
         * [Renew a Subscription and Upgrade a Product](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Renew_a_Subscription_and_Upgrade_a_Product)
         * [Replace a Product in a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Replace_a_Product_in_a_Subscription)
         * [Update a Product in a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Update_a_Product_in_a_Subscription)
         * [Cancel a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/D_Cancel_a_Subscription)
         * [Remove a Product from a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/D_Remove_a_Product_from_a_Subscription)
         * [Create an order line item](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/Create_an_order_line_item)
         * [Create an order line item with a new subscription](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/Create_an_order_line_item_with_a_new_subscription)
        
        You can also see the [API Guides](https://www.zuora.com/developer/api-guides/) for more use cases of the \"Create an order\" operation.
        
        Creating a draft order is currently not supported. See [Known Limitations in Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/C_Known_Limitations_in_Orders) for additional limitations.
        
        The limit of orders allowed on a subscription is 1000.
        
        The limit of order line items allowed in an order is 100.
        
        Zuora has the following limits on the Orders synchronous API to prevent performance degradation: 
        * Up to 50 subscriptions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        * Up to 50 order actions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        * Up to 50 order actions are allowed on a single subscription in a [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        
        If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:
        * [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously)
        * [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously)
        
        Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:
        * Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        * Up to 300 order actions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        * Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        
        If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at [Zuora Global Support](https://support.zuora.com).        
        
        **Note:** When you are to suspend a subcription (via the `suspend` order action), if in the same \"Create an order\" call you are to perform other subsequent order actions on the supscription to suspend, you must first resume the subscription (via a `resume` order action). 
        
        **Note:** When using this operation to create an account, create a subscription, run billing, and collect payment in a single call, if any error occurs during the call, such as a payment processing failure and a tax engine failure, then all the other steps will be rolled back. This means that the invoice will not be generated, the subscription will not be created, and the account will not be created.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/orders"
        
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

        res = operations.PostOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostOrderResponseType])
                res.post_order_response_type = out

        return res

    
    def post_preview_order(self, request: operations.PostPreviewOrderRequest) -> operations.PostPreviewOrderResponse:
        r"""Preview an order
        **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).        
        
        Retrieves the preview of the charge metrics and invoice items of a specified order. Preview for subscriptions and order line items are both supported. This operation is only an order preview and no order is created.  
        
        See [Preview a Subscription Creation Order](https://www.zuora.com/developer/api-guides/#Create-a-subscription-for-a-new-customer) for a use case of the \"Preview an order\" operation.
        
        The limit of orders allowed on a subscription is 1000.
        
        The limit of order line items allowed in an order is 100.
        
        Zuora has the following limits on the Orders synchronous API to prevent performance degradation: 
        * Up to 50 subscriptions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        * Up to 50 order actions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        * Up to 50 order actions are allowed on a single subscription in a [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        
        If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:
        * [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously)
        * [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously)
        
        Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:
        * Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        * Up to 300 order actions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        * Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        
        If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at [Zuora Global Support](https://support.zuora.com).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/orders/preview"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPreviewOrderResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostOrderPreviewResponseType])
                res.post_order_preview_response_type = out

        return res

    
    def post_preview_order_asynchronously(self, request: operations.PostPreviewOrderAsynchronouslyRequest) -> operations.PostPreviewOrderAsynchronouslyResponse:
        r"""Preview an order asynchronously
        **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).       
        
        In the case where a normal \"Preview an order\" operation call will time out, use this operation instead to preview an order asynchronously. A job will be previewing the order in the back end; the job ID will be returned for tracking the job status and result.
        
        The limit of orders allowed on a subscription is 1000.
        
        The limit of order line items allowed in an order is 100.
        
        Zuora has the following limits on the Orders synchronous API to prevent performance degradation: 
        * Up to 50 subscriptions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        * Up to 50 order actions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        * Up to 50 order actions are allowed on a single subscription in a [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
        
        If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:
        * [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously)
        * [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously)
        
        Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:
        * Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        * Up to 300 order actions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        * Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
        
        If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at [Zuora Global Support](https://support.zuora.com).
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/async/orders/preview"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostPreviewOrderAsynchronouslyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 202:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[operations.PostPreviewOrderAsynchronously202ApplicationJSON])
                res.post_preview_order_asynchronously_202_application_json_object = out

        return res

    
    def put_order_trigger_dates(self, request: operations.PutOrderTriggerDatesRequest) -> operations.PutOrderTriggerDatesResponse:
        r"""Update order action trigger dates
        **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        Updates the triggering dates for either of the following order actions:
         * CreateSubscription
         * AddProduct
         * UpdateProduct
         * RemoveProduct
         * RenewSubscription
         * TermsAndConditions
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/{orderNumber}/triggerDates", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutOrderTriggerDatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutOrderTriggerDatesResponseType])
                res.put_order_trigger_dates_response_type = out

        return res

    
    def put_update_order_custom_fields(self, request: operations.PutUpdateOrderCustomFieldsRequest) -> operations.PutUpdateOrderCustomFieldsResponse:
        r"""Update order custom fields
        **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
        
        **Note:** To update the custom fields of an order line item, you must use the \"Update an order line item\" or \"Update order line items\" operation.
        
        Updates the custom fields of a specified order.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/orders/{orderNumber}/customFields", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUpdateOrderCustomFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_update_subscription_custom_fields(self, request: operations.PutUpdateSubscriptionCustomFieldsRequest) -> operations.PutUpdateSubscriptionCustomFieldsResponse:
        r"""Update subscription custom fields
        **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
        
        Updates the custom fields of a specified subscription.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/subscriptions/{subscriptionNumber}/customFields", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutUpdateSubscriptionCustomFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    