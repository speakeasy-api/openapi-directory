package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;

public class Ramps {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Ramps(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getRampByRampNumber - Retrieve a ramp
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     * 
     * Retrieves the latest definition of a specified ramp.
     * 
    **/
    public openapisdk.models.operations.GetRampByRampNumberResponse getRampByRampNumber(openapisdk.models.operations.GetRampByRampNumberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ramps/{rampNumber}", request.pathParams);
        
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

        openapisdk.models.operations.GetRampByRampNumberResponse res = new openapisdk.models.operations.GetRampByRampNumberResponse() {{
            getRampByRampNumberResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetRampByRampNumberResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetRampByRampNumberResponseType.class);
                res.getRampByRampNumberResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRampMetricsByOrderNumber - List ramp metrics by order number
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     * 
     * Retrieves key ramp metrics about a specified order, including the following metrics:
     * 
     * * TCB, TCV in the Ramp level
     * * TCB, TCV in the Interval level
     * * TCB, TCV, Quantity, and MRR in Interval Metrics
     * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
     * 
     * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
     * 
    **/
    public openapisdk.models.operations.GetRampMetricsByOrderNumberResponse getRampMetricsByOrderNumber(openapisdk.models.operations.GetRampMetricsByOrderNumberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/orders/{orderNumber}/ramp-metrics", request.pathParams);
        
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

        openapisdk.models.operations.GetRampMetricsByOrderNumberResponse res = new openapisdk.models.operations.GetRampMetricsByOrderNumberResponse() {{
            getRampMetricsByOrderNumberResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetRampMetricsByOrderNumberResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetRampMetricsByOrderNumberResponseType.class);
                res.getRampMetricsByOrderNumberResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRampMetricsByRampNumber - List all ramp metrics of a ramp
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     * 
     * Retrieves key metrics about a specified ramp, including the following metrics:
     * 
     * * TCB, TCV in the Ramp level
     * * TCB, TCV in the Interval level
     * * TCB, TCV, Quantity, and MRR in Interval Metrics
     * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
     * 
     * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
     * 
    **/
    public openapisdk.models.operations.GetRampMetricsByRampNumberResponse getRampMetricsByRampNumber(openapisdk.models.operations.GetRampMetricsByRampNumberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/ramps/{rampNumber}/ramp-metrics", request.pathParams);
        
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

        openapisdk.models.operations.GetRampMetricsByRampNumberResponse res = new openapisdk.models.operations.GetRampMetricsByRampNumberResponse() {{
            getRampMetricsByRampNumberResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetRampMetricsByRampNumberResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetRampMetricsByRampNumberResponseType.class);
                res.getRampMetricsByRampNumberResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRampMetricsBySubscriptionKey - List ramp metrics by subscription key
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     * 
     * Retrieves key ramp metrics about a specified subscription, including the following metrics:
     * 
     * * TCB, TCV in the Ramp level
     * * TCB, TCV in the Interval level
     * * TCB, TCV, Quantity, and MRR in Interval Metrics
     * * Delta TCB, Delta TCV, Delta Quantity, and Delta MRR in Interval Delta Metrics
     * 
     * See [Key metrics for Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/F_Key_metrics_for_Ramps) for more information.
     * 
    **/
    public openapisdk.models.operations.GetRampMetricsBySubscriptionKeyResponse getRampMetricsBySubscriptionKey(openapisdk.models.operations.GetRampMetricsBySubscriptionKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/subscriptions/{subscriptionKey}/ramp-metrics", request.pathParams);
        
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

        openapisdk.models.operations.GetRampMetricsBySubscriptionKeyResponse res = new openapisdk.models.operations.GetRampMetricsBySubscriptionKeyResponse() {{
            getRampMetricsBySubscriptionKeyResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetRampMetricsBySubscriptionKeyResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetRampMetricsBySubscriptionKeyResponseType.class);
                res.getRampMetricsBySubscriptionKeyResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * getRampsBySubscriptionKey - Retrieve a ramp by subscription key
     *
     * **Note**: This operation is only available if you have the Ramps feature enabled. The [Orders](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/AA_Overview_of_Orders) feature must be enabled before you can access the [Ramps](https://knowledgecenter.zuora.com/Billing/Subscriptions/Orders/Ramps_and_Ramp_Metrics/A_Overview_of_Ramps_and_Ramp_Metrics) feature. The Ramps feature is available for customers with Enterprise and Nine editions by default. If you are a Growth customer, see [Zuora Editions](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/C_Zuora_Editions) for pricing information coming October 2020.
     * 
     *  Retrieves the definition of the ramp associated with a specified subscription.
     * 
    **/
    public openapisdk.models.operations.GetRampsBySubscriptionKeyResponse getRampsBySubscriptionKey(openapisdk.models.operations.GetRampsBySubscriptionKeyRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/subscriptions/{subscriptionKey}/ramps", request.pathParams);
        
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

        openapisdk.models.operations.GetRampsBySubscriptionKeyResponse res = new openapisdk.models.operations.GetRampsBySubscriptionKeyResponse() {{
            getRampsBySubscriptionKeyResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetRampsBySubscriptionKeyResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetRampsBySubscriptionKeyResponseType.class);
                res.getRampsBySubscriptionKeyResponseType = out;
            }
        }

        return res;
    }
	
}