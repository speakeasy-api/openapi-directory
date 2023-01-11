package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Orders {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Orders(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteOrder - Delete an order
     *
     * **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     *        
     * Deletes a specified order. 
     * 
     * * All the subscriptions changed by this order are deleted. After the deletion, the subscriptions are rolled back to the previous version. 
     * 
     * * All the order line items created in this order are deleted.
     * 
     * You are not allowed to delete an order if the charges that are affected by this order are invoiced.
     * 
    **/
    public openapisdk.models.operations.DeleteOrderResponse deleteOrder(openapisdk.models.operations.DeleteOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/{orderNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteOrderResponse res = new openapisdk.models.operations.DeleteOrderResponse() {{
            commonResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommonResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommonResponseType.class);
                res.commonResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAllOrders - List orders
     *
     * **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * 
     * Retrieves information about all orders in your tenant. By default, it returns the first page of the orders. 
     * 
    **/
    public openapisdk.models.operations.GetAllOrdersResponse getAllOrders(openapisdk.models.operations.GetAllOrdersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAllOrdersResponse res = new openapisdk.models.operations.GetAllOrdersResponse() {{
            getAllOrdersResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetAllOrdersResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetAllOrdersResponseType.class);
                res.getAllOrdersResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * getJobStatusAndResponse - Retrieve the status and response of a job
     *
     * **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * Get the status and response of an asynchronous job. Currently, an asynchronous job created by "Create an order asynchronously" or "Preview an order asynchronously" is supported.
     * 
    **/
    public openapisdk.models.operations.GetJobStatusAndResponseResponse getJobStatusAndResponse(openapisdk.models.operations.GetJobStatusAndResponseRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/async-jobs/{jobId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetJobStatusAndResponseResponse res = new openapisdk.models.operations.GetJobStatusAndResponseResponse() {{
            getJobStatusAndResponse200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetJobStatusAndResponse200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetJobStatusAndResponse200ApplicationJson.class);
                res.getJobStatusAndResponse200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrder - Retrieve an order
     *
     * **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     *         
     * Retrieves the detailed information about a specified order.
     * 
    **/
    public openapisdk.models.operations.GetOrderResponse getOrder(openapisdk.models.operations.GetOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/{orderNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrderResponse res = new openapisdk.models.operations.GetOrderResponse() {{
            getOrderResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetOrderResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetOrderResponse.class);
                res.getOrderResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrderMetricsforEvergreenSubscription - List order metrics for an evergreen subscription
     *
     * **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
     * 
     * **Note:** As of Zuora Billing Release 306, Zuora has upgraded the methodologies for calculating metrics in [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders). The new methodologies are reflected in the following Order Delta Metrics objects. 
     * * [Order Delta Mrr](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Mrr)
     * * [Order Delta Tcv](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcv)
     * * [Order Delta Tcb](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/Order_Delta_Tcb)
     * 
     * It is recommended that all customers use the new [Order Delta Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Delta_Metrics/AA_Overview_of_Order_Delta_Metrics). If you are an existing [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders) customer and want to migrate to Order Delta Metrics, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * Whereas new customers, and existing customers not currently on [Order Metrics](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders/Key_Metrics_for_Orders), will no longer have access to Order Metrics, existing customers currently using Order Metrics will continue to be supported.
     * 
     * **Note:** As of Zuora Billing Release 306, any new customers who onboard on [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) or [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization) will no longer get this operation.
     * 
     * 
     * Retrieves the metrics of an evergreen subscription in a specified order.
     * 
    **/
    public openapisdk.models.operations.GetOrderMetricsforEvergreenSubscriptionResponse getOrderMetricsforEvergreenSubscription(openapisdk.models.operations.GetOrderMetricsforEvergreenSubscriptionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/{orderNumber}/evergreenMetrics/{subscriptionNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrderMetricsforEvergreenSubscriptionResponse res = new openapisdk.models.operations.GetOrderMetricsforEvergreenSubscriptionResponse() {{
            getOrderResponseForEvergreen = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetOrderResponseForEvergreen out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetOrderResponseForEvergreen.class);
                res.getOrderResponseForEvergreen = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrdersByInvoiceOwner - List orders of an invoice owner
     *
     * **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * Retrieves the detailed information about all orders for a specified invoice owner.
     * 
    **/
    public openapisdk.models.operations.GetOrdersByInvoiceOwnerResponse getOrdersByInvoiceOwner(openapisdk.models.operations.GetOrdersByInvoiceOwnerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/invoiceOwner/{accountNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrdersByInvoiceOwnerResponse res = new openapisdk.models.operations.GetOrdersByInvoiceOwnerResponse() {{
            getOrdersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetOrdersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetOrdersResponse.class);
                res.getOrdersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrdersBySubscriptionNumber - List orders by subscription number
     *
     * **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * Retrieves the detailed information about all orders for a specified subscription. Any orders containing the changes on the specified subscription are returned.
     * 
    **/
    public openapisdk.models.operations.GetOrdersBySubscriptionNumberResponse getOrdersBySubscriptionNumber(openapisdk.models.operations.GetOrdersBySubscriptionNumberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/subscription/{subscriptionNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrdersBySubscriptionNumberResponse res = new openapisdk.models.operations.GetOrdersBySubscriptionNumberResponse() {{
            getOrdersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetOrdersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetOrdersResponse.class);
                res.getOrdersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getOrdersBySubscriptionOwner - List orders of a subscription owner
     *
     * **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * Retrieves the detailed information about all orders for a specified subscription owner. Any orders containing the changes on the subscriptions owned by this account are returned.
     * 
    **/
    public openapisdk.models.operations.GetOrdersBySubscriptionOwnerResponse getOrdersBySubscriptionOwner(openapisdk.models.operations.GetOrdersBySubscriptionOwnerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/subscriptionOwner/{accountNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetOrdersBySubscriptionOwnerResponse res = new openapisdk.models.operations.GetOrdersBySubscriptionOwnerResponse() {{
            getOrdersResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetOrdersResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetOrdersResponse.class);
                res.getOrdersResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getSubscriptionTermInfo - List subscription terms
     *
     * **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
     * 
     * Retrieves the terms of the specified subscription.
     * 
    **/
    public openapisdk.models.operations.GetSubscriptionTermInfoResponse getSubscriptionTermInfo(openapisdk.models.operations.GetSubscriptionTermInfoRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/term/{subscriptionNumber}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetSubscriptionTermInfoResponse res = new openapisdk.models.operations.GetSubscriptionTermInfoResponse() {{
            getSubscriptionTermInfoResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetSubscriptionTermInfoResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetSubscriptionTermInfoResponseType.class);
                res.getSubscriptionTermInfoResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateOrderAsynchronously - Create an order asynchronously
     *
     * **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * 
     * In the case where a normal "Create an order" operation call will time out, use this operation instead to create an order asynchronously. A job will be creating the order in the back end; the job ID will be returned for tracking the job status and result. 
     * 
     * The limit of orders allowed on a subscription is 1000.
     * 
     * The limit of order line items allowed in an order is 100.
     * 
     * Zuora has the following limits on the Orders synchronous API to prevent performance degradation: 
     * * Up to 50 subscriptions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * * Up to 50 order actions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * * Up to 50 order actions are allowed on a single subscription in a [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * 
     * If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:
     * * [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously)
     * * [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously)
     * 
     * Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:
     * * Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * * Up to 300 order actions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * * Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * 
     * If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at [Zuora Global Support](https://support.zuora.com).
     * 
    **/
    public openapisdk.models.operations.PostCreateOrderAsynchronouslyResponse postCreateOrderAsynchronously(openapisdk.models.operations.PostCreateOrderAsynchronouslyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/async/orders");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostCreateOrderAsynchronouslyResponse res = new openapisdk.models.operations.PostCreateOrderAsynchronouslyResponse() {{
            postCreateOrderAsynchronously202ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostCreateOrderAsynchronously202ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostCreateOrderAsynchronously202ApplicationJson.class);
                res.postCreateOrderAsynchronously202ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postOrder - Create an order
     *
     * **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * You can use this operation to create subscriptions and make changes to subscriptions by creating orders. You can also use this operation to create order line items by creating orders. The following tutorials demonstrate how to use this operation:
     * 
     *  * [Create a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/A_Create_a_Subscription)
     *  * [Add a Product to a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/A_Add_a_Product_to_a_Subscription)
     *  * [Create a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/B_Create_a_Ramp_Deal)
     *  * [Add a Product Mid-Interval Update on a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/E_Update_a_Product_in_a_Ramp_Deal)
     *  * [Add a Product in a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/C_Add_a_Product_in_a_Ramp_Deal)
     *  * [Change the Terms and Conditions of a Ramp Deal](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/D_Change_the_Terms_and_Conditions_of_a_Ramp_Deal_and_Update_the_Ramp)
     *  * [Change the Owner of a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Change_the_Owner_of_a_Subscription)
     *  * [Change the Terms and Conditions of a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Change_the_Terms_and_Conditions_of_a_Subscription)
     *  * [Renew a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Renew_a_Subscription)
     *  * [Renew a Subscription and Upgrade a Product](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Renew_a_Subscription_and_Upgrade_a_Product)
     *  * [Replace a Product in a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Replace_a_Product_in_a_Subscription)
     *  * [Update a Product in a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/C_Update_a_Product_in_a_Subscription)
     *  * [Cancel a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/D_Cancel_a_Subscription)
     *  * [Remove a Product from a Subscription](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AC_Orders_Tutorials/D_Remove_a_Product_from_a_Subscription)
     *  * [Create an order line item](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/Create_an_order_line_item)
     *  * [Create an order line item with a new subscription](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/Create_an_order_line_item_with_a_new_subscription)
     * 
     * You can also see the [API Guides](https://www.zuora.com/developer/api-guides/) for more use cases of the "Create an order" operation.
     * 
     * Creating a draft order is currently not supported. See [Known Limitations in Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/C_Known_Limitations_in_Orders) for additional limitations.
     * 
     * The limit of orders allowed on a subscription is 1000.
     * 
     * The limit of order line items allowed in an order is 100.
     * 
     * Zuora has the following limits on the Orders synchronous API to prevent performance degradation: 
     * * Up to 50 subscriptions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * * Up to 50 order actions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * * Up to 50 order actions are allowed on a single subscription in a [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * 
     * If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:
     * * [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously)
     * * [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously)
     * 
     * Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:
     * * Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * * Up to 300 order actions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * * Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * 
     * If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at [Zuora Global Support](https://support.zuora.com).        
     * 
     * **Note:** When you are to suspend a subcription (via the `suspend` order action), if in the same "Create an order" call you are to perform other subsequent order actions on the supscription to suspend, you must first resume the subscription (via a `resume` order action). 
     * 
     * **Note:** When using this operation to create an account, create a subscription, run billing, and collect payment in a single call, if any error occurs during the call, such as a payment processing failure and a tax engine failure, then all the other steps will be rolled back. This means that the invoice will not be generated, the subscription will not be created, and the account will not be created.
     * 
    **/
    public openapisdk.models.operations.PostOrderResponse postOrder(openapisdk.models.operations.PostOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostOrderResponse res = new openapisdk.models.operations.PostOrderResponse() {{
            postOrderResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostOrderResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostOrderResponseType.class);
                res.postOrderResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPreviewOrder - Preview an order
     *
     * **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).        
     * 
     * Retrieves the preview of the charge metrics and invoice items of a specified order. Preview for subscriptions and order line items are both supported. This operation is only an order preview and no order is created.  
     * 
     * See [Preview a Subscription Creation Order](https://www.zuora.com/developer/api-guides/#Create-a-subscription-for-a-new-customer) for a use case of the "Preview an order" operation.
     * 
     * The limit of orders allowed on a subscription is 1000.
     * 
     * The limit of order line items allowed in an order is 100.
     * 
     * Zuora has the following limits on the Orders synchronous API to prevent performance degradation: 
     * * Up to 50 subscriptions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * * Up to 50 order actions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * * Up to 50 order actions are allowed on a single subscription in a [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * 
     * If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:
     * * [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously)
     * * [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously)
     * 
     * Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:
     * * Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * * Up to 300 order actions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * * Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * 
     * If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at [Zuora Global Support](https://support.zuora.com).
     * 
    **/
    public openapisdk.models.operations.PostPreviewOrderResponse postPreviewOrder(openapisdk.models.operations.PostPreviewOrderRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/preview");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostPreviewOrderResponse res = new openapisdk.models.operations.PostPreviewOrderResponse() {{
            postOrderPreviewResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostOrderPreviewResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostOrderPreviewResponseType.class);
                res.postOrderPreviewResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPreviewOrderAsynchronously - Preview an order asynchronously
     *
     * **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * **Note:** The [Order Line Items](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Order_Line_Items/AA_Overview_of_Order_Line_Items) feature is in the **Early Adopter** phase. We are actively soliciting feedback from a small set of early adopters before releasing it as generally available. If you want to join this early adopter program, submit a request at [Zuora Global Support](https://support.zuora.com/).       
     * 
     * In the case where a normal "Preview an order" operation call will time out, use this operation instead to preview an order asynchronously. A job will be previewing the order in the back end; the job ID will be returned for tracking the job status and result.
     * 
     * The limit of orders allowed on a subscription is 1000.
     * 
     * The limit of order line items allowed in an order is 100.
     * 
     * Zuora has the following limits on the Orders synchronous API to prevent performance degradation: 
     * * Up to 50 subscriptions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * * Up to 50 order actions are allowed in a single [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * * Up to 50 order actions are allowed on a single subscription in a [Create an order](https://www.zuora.com/developer/api-reference/#operation/POST_Order) or [Preview an order](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrder) operation call.
     * 
     * If you have an Order that exceeds any limits of the above, Zuora recommends you use the following asynchronous API operations:
     * * [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously)
     * * [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously)
     * 
     * Zuora has the following limits on the Orders asynchronous API operations to prevent performance degradation:
     * * Up to 300 subscriptions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * * Up to 300 order actions are allowed in a single [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * * Up to 300 order actions are allowed on a single subscription in a [Create an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_CreateOrderAsynchronously) or [Preview an order asynchronously](https://www.zuora.com/developer/api-reference/#operation/POST_PreviewOrderAsynchronously) operation call.
     * 
     * If you have a need for a large order that exceeds any limits of the above, you can request a limit increase for the Orders asynchronous API by submitting a request at [Zuora Global Support](https://support.zuora.com).
     * 
    **/
    public openapisdk.models.operations.PostPreviewOrderAsynchronouslyResponse postPreviewOrderAsynchronously(openapisdk.models.operations.PostPreviewOrderAsynchronouslyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/async/orders/preview");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostPreviewOrderAsynchronouslyResponse res = new openapisdk.models.operations.PostPreviewOrderAsynchronouslyResponse() {{
            postPreviewOrderAsynchronously202ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostPreviewOrderAsynchronously202ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostPreviewOrderAsynchronously202ApplicationJson.class);
                res.postPreviewOrderAsynchronously202ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * putOrderTriggerDates - Update order action trigger dates
     *
     * **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * Updates the triggering dates for either of the following order actions:
     *  * CreateSubscription
     *  * AddProduct
     *  * UpdateProduct
     *  * RemoveProduct
     *  * RenewSubscription
     *  * TermsAndConditions
     * 
    **/
    public openapisdk.models.operations.PutOrderTriggerDatesResponse putOrderTriggerDates(openapisdk.models.operations.PutOrderTriggerDatesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/{orderNumber}/triggerDates", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutOrderTriggerDatesResponse res = new openapisdk.models.operations.PutOrderTriggerDatesResponse() {{
            putOrderTriggerDatesResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PutOrderTriggerDatesResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PutOrderTriggerDatesResponseType.class);
                res.putOrderTriggerDatesResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * putUpdateOrderCustomFields - Update order custom fields
     *
     * **Note:** This feature is only available if you have the [Order Metrics](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Order_Metrics) feature enabled. As of Zuora Billing Release 284, Orders is generally available and the Order Metrics feature is no longer available as a standalone feature. If you are an existing Subscribe and Amend customer and want Order Metrics only, you must turn on [Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization). You can still keep the existing Subscribe and Amend API integrations to create and manage subscriptions.
     * 
     * **Note:** To update the custom fields of an order line item, you must use the "Update an order line item" or "Update order line items" operation.
     * 
     * Updates the custom fields of a specified order.
     * 
    **/
    public openapisdk.models.operations.PutUpdateOrderCustomFieldsResponse putUpdateOrderCustomFields(openapisdk.models.operations.PutUpdateOrderCustomFieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/{orderNumber}/customFields", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutUpdateOrderCustomFieldsResponse res = new openapisdk.models.operations.PutUpdateOrderCustomFieldsResponse() {{
            commonResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommonResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommonResponseType.class);
                res.commonResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * putUpdateSubscriptionCustomFields - Update subscription custom fields
     *
     * **Note:** This operation is only available if you have the [Orders](https://knowledgecenter.zuora.com/BC_Subscription_Management/Orders/AA_Overview_of_Orders#Orders) feature enabled. Orders is now generally available as of Zuora Billing Release 284 (August 2020). If you are an existing Zuora Subscribe and Amend customer and want to adopt Orders, see [What is Orders Harmonization](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Orders_Harmonization/Orders_Harmonization#What_is_Orders_Harmonization.3F) and join the [Orders Harmonization community group](https://community.zuora.com/t5/Orders-Harmonization/gp-p/Orders-Harmonization) for more information. If you want to enable Orders, submit a request at [Zuora Global Support](https://support.zuora.com/).
     * 
     * Updates the custom fields of a specified subscription.
     * 
    **/
    public openapisdk.models.operations.PutUpdateSubscriptionCustomFieldsResponse putUpdateSubscriptionCustomFields(openapisdk.models.operations.PutUpdateSubscriptionCustomFieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/subscriptions/{subscriptionNumber}/customFields", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = openapisdk.utils.Utils.getHeaders(request.headers);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutUpdateSubscriptionCustomFieldsResponse res = new openapisdk.models.operations.PutUpdateSubscriptionCustomFieldsResponse() {{
            commonResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommonResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommonResponseType.class);
                res.commonResponseType = out;
            }
        }

        return res;
    }
	
}