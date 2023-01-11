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

public class PaymentMethods {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PaymentMethods(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deletePaymentMethods - Delete a payment method
     *
     * Deletes a credit card payment method.
     * 
     * If the specified payment method is the account's default payment
     * method, the request will fail.  In that case, you must first designate a
     * different payment method for that customer to be the default.
     * 
     * For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
     * 
    **/
    public openapisdk.models.operations.DeletePaymentMethodsResponse deletePaymentMethods(openapisdk.models.operations.DeletePaymentMethodsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}", request.pathParams);
        
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

        openapisdk.models.operations.DeletePaymentMethodsResponse res = new openapisdk.models.operations.DeletePaymentMethodsResponse() {{
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
     * getPaymentMethod - Retrieve a payment method
     *
     * This operation allows you to get the detailed information about a payment method.
     * 
    **/
    public openapisdk.models.operations.GetPaymentMethodResponse getPaymentMethod(openapisdk.models.operations.GetPaymentMethodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}", request.pathParams);
        
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

        openapisdk.models.operations.GetPaymentMethodResponse res = new openapisdk.models.operations.GetPaymentMethodResponse() {{
            getPaymentMethodResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getPaymentMethodResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getPaymentMethodsCreditCard - List all credit card payment methods of an account
     *
     * This REST API reference describes how to retrieve all credit card
     * information for the specified customer account. 
     * 
     * ## Notes
     * The response includes details of credit or debit cards for the specified customer account. Card numbers are masked, e.g., "************1234". Cards are returned in reverse chronological order of last update.
     * 
     * Though you can also send requests for bank transfer, ACH, or other supported payment methods, the response will not include effective details of these payment methods.
     * 
    **/
    public openapisdk.models.operations.GetPaymentMethodsCreditCardResponse getPaymentMethodsCreditCard(openapisdk.models.operations.GetPaymentMethodsCreditCardRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/credit-cards/accounts/{account-key}", request.pathParams);
        
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

        openapisdk.models.operations.GetPaymentMethodsCreditCardResponse res = new openapisdk.models.operations.GetPaymentMethodsCreditCardResponse() {{
            getPaymentMethodsType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetPaymentMethodsType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetPaymentMethodsType.class);
                res.getPaymentMethodsType = out;
            }
        }

        return res;
    }
	
	
    /**
     * getStoredCredentialProfiles - List stored credential profiles of a payment method
     *
     * Retrieves the stored credential profiles within a payment method.
     * 
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     * 
    **/
    public openapisdk.models.operations.GetStoredCredentialProfilesResponse getStoredCredentialProfiles(openapisdk.models.operations.GetStoredCredentialProfilesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}/profiles", request.pathParams);
        
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

        openapisdk.models.operations.GetStoredCredentialProfilesResponse res = new openapisdk.models.operations.GetStoredCredentialProfilesResponse() {{
            getStoredCredentialProfilesResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetStoredCredentialProfilesResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetStoredCredentialProfilesResponse.class);
                res.getStoredCredentialProfilesResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * objectDeletePaymentMethod - CRUD: Delete a payment method
    **/
    public openapisdk.models.operations.ObjectDeletePaymentMethodResponse objectDeletePaymentMethod(openapisdk.models.operations.ObjectDeletePaymentMethodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/object/payment-method/{id}", request.pathParams);
        
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

        openapisdk.models.operations.ObjectDeletePaymentMethodResponse res = new openapisdk.models.operations.ObjectDeletePaymentMethodResponse() {{
            proxyDeleteResponse = null;
            proxyUnauthorizedResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyDeleteResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyDeleteResponse.class);
                res.proxyDeleteResponse = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyUnauthorizedResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyUnauthorizedResponse.class);
                res.proxyUnauthorizedResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * objectGetPaymentMethod - CRUD: Retrieve a payment method
    **/
    public openapisdk.models.operations.ObjectGetPaymentMethodResponse objectGetPaymentMethod(openapisdk.models.operations.ObjectGetPaymentMethodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/object/payment-method/{id}", request.pathParams);
        
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

        openapisdk.models.operations.ObjectGetPaymentMethodResponse res = new openapisdk.models.operations.ObjectGetPaymentMethodResponse() {{
            proxyGetPaymentMethod = null;
            proxyUnauthorizedResponse = null;
            proxyNoDataResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyGetPaymentMethod out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyGetPaymentMethod.class);
                res.proxyGetPaymentMethod = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyUnauthorizedResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyUnauthorizedResponse.class);
                res.proxyUnauthorizedResponse = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyNoDataResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyNoDataResponse.class);
                res.proxyNoDataResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * objectPostPaymentMethod - CRUD: Create a payment method
    **/
    public openapisdk.models.operations.ObjectPostPaymentMethodResponse objectPostPaymentMethod(openapisdk.models.operations.ObjectPostPaymentMethodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/object/payment-method");
        
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

        openapisdk.models.operations.ObjectPostPaymentMethodResponse res = new openapisdk.models.operations.ObjectPostPaymentMethodResponse() {{
            proxyCreateOrModifyResponse = null;
            proxyBadRequestResponse = null;
            proxyUnauthorizedResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyCreateOrModifyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyCreateOrModifyResponse.class);
                res.proxyCreateOrModifyResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyBadRequestResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyBadRequestResponse.class);
                res.proxyBadRequestResponse = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyUnauthorizedResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyUnauthorizedResponse.class);
                res.proxyUnauthorizedResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * objectPutPaymentMethod - CRUD: Update a payment method
     *
     * For a use case of this operation, see [Configure Payment Methods](https://www.zuora.com/developer/api-guides/#Configure-payment-methods).
    **/
    public openapisdk.models.operations.ObjectPutPaymentMethodResponse objectPutPaymentMethod(openapisdk.models.operations.ObjectPutPaymentMethodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/object/payment-method/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.ObjectPutPaymentMethodResponse res = new openapisdk.models.operations.ObjectPutPaymentMethodResponse() {{
            proxyCreateOrModifyResponse = null;
            proxyUnauthorizedResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyCreateOrModifyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyCreateOrModifyResponse.class);
                res.proxyCreateOrModifyResponse = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyUnauthorizedResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyUnauthorizedResponse.class);
                res.proxyUnauthorizedResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCancelAuthorization - Cancel authorization
     *
     * **Note:** If you wish to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
     * 
     * Allows you to cancel an authorization. The payment gateways that support this operation include Verifi, CyberSource 1.28, CyberSource 1.97, Chase Paymentech Orbital, and Ingenico ePayments.
     * 
    **/
    public openapisdk.models.operations.PostCancelAuthorizationResponse postCancelAuthorization(openapisdk.models.operations.PostCancelAuthorizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}/voidAuthorize", request.pathParams);
        
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

        openapisdk.models.operations.PostCancelAuthorizationResponse res = new openapisdk.models.operations.PostCancelAuthorizationResponse() {{
            postVoidAuthorizeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostVoidAuthorizeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostVoidAuthorizeResponse.class);
                res.postVoidAuthorizeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCancelStoredCredentialProfile - Cancel a stored credential profile
     *
     * Cancels a stored credential profile within a payment method.
     * 
     * Cancelling the stored credential profile indicates that the stored credentials are no longer valid, per a customer request. You cannot reactivate the stored credential profile after you have cancelled it.
     * 
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     * 
    **/
    public openapisdk.models.operations.PostCancelStoredCredentialProfileResponse postCancelStoredCredentialProfile(openapisdk.models.operations.PostCancelStoredCredentialProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/cancel", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.PostCancelStoredCredentialProfileResponse res = new openapisdk.models.operations.PostCancelStoredCredentialProfileResponse() {{
            modifiedStoredCredentialProfileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ModifiedStoredCredentialProfileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ModifiedStoredCredentialProfileResponse.class);
                res.modifiedStoredCredentialProfileResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateAuthorization - Create authorization
     *
     * **Note:** If you want to enable this feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
     * 
     * Enables you to authorize the availability of funds for a transaction but delay the capture of funds until a later time. Subsequently, use [CRUD: Create a payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) or [Create a payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) to capture the authorized funds, or use [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization) to cancel the authorization. 
     * 
     * The payment gateways that support this operation include:
     * 
     * * Adyen integration v2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
     * * CyberSource 1.28
     * * CyberSource 1.97
     * * CyberSource 2.0 - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
     * * Chase Paymentech Orbital
     * * Ingenico ePayments
     * * Verifi - This gateway does not support [Cancel authorization](https://www.zuora.com/developer/api-reference/#operation/POST_CancelAuthorization).
     * 
     * Note that CyberSource 2.0 supports the Delayed Capture feature for both Credit Cards and Credit Card Reference payment methods.
     * 
     * If you have the Invoice Settlement feature enabled, use the [Create payment](https://www.zuora.com/developer/api-reference/#operation/POST_CreatePayment) operation to capture the funds instead of the [CRUD: Create payment](https://www.zuora.com/developer/api-reference/#operation/Object_POSTPayment) operation.
     *       
     * 
    **/
    public openapisdk.models.operations.PostCreateAuthorizationResponse postCreateAuthorization(openapisdk.models.operations.PostCreateAuthorizationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}/authorize", request.pathParams);
        
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

        openapisdk.models.operations.PostCreateAuthorizationResponse res = new openapisdk.models.operations.PostCreateAuthorizationResponse() {{
            postAuthorizeResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostAuthorizeResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostAuthorizeResponse.class);
                res.postAuthorizeResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCreateStoredCredentialProfile - Create a stored credential profile
     *
     * Creates a stored credential profile within a payment method.
     * 
     * The stored credential profile represents a consent agreement that you have established with a customer. When you use the payment method in a transaction, Zuora may include information from the stored credential profile to inform the payment processor that the transaction is related to your pre-existing consent agreement with the customer.
     * 
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     * 
    **/
    public openapisdk.models.operations.PostCreateStoredCredentialProfileResponse postCreateStoredCredentialProfile(openapisdk.models.operations.PostCreateStoredCredentialProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}/profiles", request.pathParams);
        
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

        openapisdk.models.operations.PostCreateStoredCredentialProfileResponse res = new openapisdk.models.operations.PostCreateStoredCredentialProfileResponse() {{
            modifiedStoredCredentialProfileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ModifiedStoredCredentialProfileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ModifiedStoredCredentialProfileResponse.class);
                res.modifiedStoredCredentialProfileResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postExpireStoredCredentialProfile - Expire a stored credential profile
     *
     * Expires a stored credential profile within a payment method.
     * 
     * Expiring the stored credential profile indicates that the stored credentials are no longer valid, per an expiration policy in the stored credential transaction framework. You cannot reactivate the stored credential profile after you have expired it.
     * 
     * **Note:** This feature is in the **Early Adopters** phase. We are actively soliciting feedback from a small set of early adopters before releasing as generally available.
     * 
    **/
    public openapisdk.models.operations.PostExpireStoredCredentialProfileResponse postExpireStoredCredentialProfile(openapisdk.models.operations.PostExpireStoredCredentialProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}/profiles/{profile-number}/expire", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
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

        openapisdk.models.operations.PostExpireStoredCredentialProfileResponse res = new openapisdk.models.operations.PostExpireStoredCredentialProfileResponse() {{
            modifiedStoredCredentialProfileResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ModifiedStoredCredentialProfileResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ModifiedStoredCredentialProfileResponse.class);
                res.modifiedStoredCredentialProfileResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPaymentMethods - Create a payment method
     *
     * You can use this operation to create either a payment method associated with a specific customer account, or an orphan payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
     * 
     * This operation supports the payment methods listed below.
     * 
     * ### PayPal Express Checkout
     * The following request body fields are specific to this payment method:
     * * `BAID` (required)
     * * `email` (required)
     * 
     * ### PayPal Native Express Checkout
     * The following request body fields are specific to this payment method:
     * * `BAID` (required)
     * * `email` (optional)
     * 
     * ### PayPal Adaptive
     * The following request body fields are specific to this payment method:
     * * `preapprovalKey` (required)
     * * `email` (required)
     * 
     * ### Credit Card
     * The following request body fields are specific to this payment method:
     * * `cardHolderInfo` (`cardHolderName` required)
     * * `cardNumber` (required)
     * * `cardType` (required)
     * * `expirationMonth` (required)
     * * `expirationYear` (required)
     * * `mitConsentAgreementRef`
     * * `mitConsentAgreementSrc`
     * * `mitNetworkTransactionId`
     * * `mitProfileAction`
     * * `mitProfileType`
     * * `mitProfileAgreedOn`
     * * `securityCode`
     * * `checkDuplicated`
     * 
     * 
     * 
     * ### ACH
     * The following request body fields are applicable to this payment method:
     * * `bankABACode` (required)
     * * `bankAccountName` (required)
     * * `bankAccountNumber` (required)
     * * `bankAccountType` (required)
     * * `bankName` (required)
     * * `addressLine1`
     * * `addressLine2`
     * * `phone`
     * * `email`
     * * `city`
     * * `country`
     * * `state`
     * * `zipCode`
     * 
     * ### SEPA
     * The following request body fields are applicable to this payment method:
     * * `IBAN` (required)
     * * `accountHolderInfo` (required)
     * * `businessIdentificationCode`
     * 
     * 
     * ### Betalingsservice (Direct Debit DK)
     * The following request body fields are applicable to this payment method:
     * * `accountNumber` (required)
     * * `identityNumber` (required)
     * * `bankCode` (required)
     * * `accountHolderInfo` (required)
     * 
     * 
     * ### Autogiro (Direct Debit SE)
     * The following request body fields are applicable to this payment method:        
     * * `accountNumber` (required)
     * * `identityNumber` (required)
     * * `branchCode` (required)
     * * `accountHolderInfo` (required) 
     * 
     * 
     * ### Bacs (Direct Debit UK)
     * The following request body fields are applicable to this payment method:        
     * * `accountNumber` (required)
     * * `bankCode` (required)
     * * `accountHolderInfo` (required)
     * 
     * 
     * ### Becs (Direct Entry AU)
     * The following request body fields are applicable to this payment method:        
     * * `accountNumber` (required)
     * * `branchCode` (required)
     * * `accountHolderInfo` (required)
     * 
     * 
     * ### Becsnz (Direct Debit NZ)
     * The following request body fields are applicable to this payment method:        
     * * `accountNumber` (required)
     * * `bankCode` (required)
     * * `branchCode` (required)
     * * `accountHolderInfo` (required)
     * 
     * 
     * ### PAD (Pre-Authorized Debit)
     * The following request body fields are applicable to this payment method:        
     * * `accountNumber` (required)
     * * `bankCode` (required)
     * * `branchCode` (required)
     * * `accountHolderInfo` (required)
     * 
     * 
     * ### Custom payment methods
     * Note: This feature is in the Early Adopter phase. If you want to use this feature, submit a request at [Zuora Global Support](http://support.zuora.com/) to enable the Universal Payment Connector and Open Payment Method services that support this feature.
     * 
     * With the support of Universal Payment Connector (UPC) and Open Payment Method (OPM) services, you can create custom payment methods by using the fields defined in a definition file for this type of custom payment method. See [Set up custom payment gateways and payment methods](https://knowledgecenter.zuora.com/Billing/Billing_and_Payments/MB_Set_up_custom_payment_gateways_and_payment_methods) for details.
     * 
    **/
    public openapisdk.models.operations.PostPaymentMethodsResponse postPaymentMethods(openapisdk.models.operations.PostPaymentMethodsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods");
        
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

        openapisdk.models.operations.PostPaymentMethodsResponse res = new openapisdk.models.operations.PostPaymentMethodsResponse() {{
            postPaymentMethodResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostPaymentMethodResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostPaymentMethodResponse.class);
                res.postPaymentMethodResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPaymentMethodsCreditCard - Create a credit card payment method
     *
     * You can create a credit card payment method for a customer account or an orphan credit card payment method that is not associated with any customer account. The orphan payment method must be associated with a customer account within 10 days. Otherwise, it will be deleted.
     * 
     * This API call is CORS Enabled. Use client-side JavaScript to invoke the call. 
     * 
     * **Note**: If you use this operation to create credit card payment methods instead of using the [iFrame of Hosted Payment Pages](https://knowledgecenter.zuora.com/CB_Billing/LA_Hosted_Payment_Pages/C_Hosted_Payment_Pages/B_Implementing_Hosted_Payment_Pages_on_Your_Website/C_Embed_and_Submit_the_iFrame), you are subject to PCI-compliance audit requirements.
     * 
    **/
    public openapisdk.models.operations.PostPaymentMethodsCreditCardResponse postPaymentMethodsCreditCard(openapisdk.models.operations.PostPaymentMethodsCreditCardRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/credit-cards");
        
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

        openapisdk.models.operations.PostPaymentMethodsCreditCardResponse res = new openapisdk.models.operations.PostPaymentMethodsCreditCardResponse() {{
            postPaymentMethodResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostPaymentMethodResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostPaymentMethodResponseType.class);
                res.postPaymentMethodResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * postPaymentMethodsDecryption - Create an Apple Pay payment method
     *
     * The decryption API endpoint can conditionally perform 3 tasks in one atomic call:
     *   * Decrypt Apple Pay Payment token
     *   * Create Credit Card Payment Method in Zuora with decrypted Apple Pay information
     *   * Process Payment on a specified Invoice (optional)
     * 
    **/
    public openapisdk.models.operations.PostPaymentMethodsDecryptionResponse postPaymentMethodsDecryption(openapisdk.models.operations.PostPaymentMethodsDecryptionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/decryption");
        
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

        openapisdk.models.operations.PostPaymentMethodsDecryptionResponse res = new openapisdk.models.operations.PostPaymentMethodsDecryptionResponse() {{
            postPaymentMethodResponseDecryption = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostPaymentMethodResponseDecryption out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostPaymentMethodResponseDecryption.class);
                res.postPaymentMethodResponseDecryption = out;
            }
        }

        return res;
    }
	
	
    /**
     * putPaymentMethod - Update a payment method
     *
     * This operation allows you to update an existing payment method. 
     * 
     * The following request body fields can be updated regardless of payment method types:
     * * `authGateway`
     * * `gatewayOptions`
     * * `accountHolderInfo`
     * * Custom fields
     * 
     * The following request body fields can be updated only for the Credit Card payment method:
     * * `expirationMonth` 
     * * `expirationYear`
     * * `securityCode`
     * 
    **/
    public openapisdk.models.operations.PutPaymentMethodResponse putPaymentMethod(openapisdk.models.operations.PutPaymentMethodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}", request.pathParams);
        
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

        openapisdk.models.operations.PutPaymentMethodResponse res = new openapisdk.models.operations.PutPaymentMethodResponse() {{
            putPaymentMethodResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PutPaymentMethodResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PutPaymentMethodResponse.class);
                res.putPaymentMethodResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * putPaymentMethodsCreditCard - Update a credit card payment method
     *
     * Updates an existing credit card payment method.
     * 
    **/
    public openapisdk.models.operations.PutPaymentMethodsCreditCardResponse putPaymentMethodsCreditCard(openapisdk.models.operations.PutPaymentMethodsCreditCardRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/credit-cards/{payment-method-id}", request.pathParams);
        
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

        openapisdk.models.operations.PutPaymentMethodsCreditCardResponse res = new openapisdk.models.operations.PutPaymentMethodsCreditCardResponse() {{
            putPaymentMethodResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PutPaymentMethodResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PutPaymentMethodResponseType.class);
                res.putPaymentMethodResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * putScrubPaymentMethods - Scrub a payment method
     *
     * 
     * This operation enables you to replace all sensitive data in a payment method, related payment method snapshot table, and four related log tables with dummy values that will be stored in Zuora databases. 
     * 
     * This operation will scrub the sensitive data and soft-delete the specified payment method at the same time. 
     * 
     * If you want to delete or anonymize personal data in Zuora, you must scrub the payment method before anonymizing the associated account and contact. See [Delete or anonymize personal data](https://knowledgecenter.zuora.com/BB_Introducing_Z_Business/Responding_to_individual_requests_for_access%2C_correction%2C_and_deletion_of_data_under_applicable_privacy_laws#Edit_and_correct_personal_data) for more information.
     * 
     * **Note:** In order to use this operation, you must ensure that the **Scrub Sensitive Data of Specific Payment Method payments** permission is enabled in your user role. Contact your tenant administrator if you want to enable this permission. See [Scrub Payment Methods](https://knowledgecenter.zuora.com/CB_Billing/L_Payment_Methods/Scrub_Payment_Methods) for more information.
     * 
    **/
    public openapisdk.models.operations.PutScrubPaymentMethodsResponse putScrubPaymentMethods(openapisdk.models.operations.PutScrubPaymentMethodsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}/scrub", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.PutScrubPaymentMethodsResponse res = new openapisdk.models.operations.PutScrubPaymentMethodsResponse() {{
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
     * putVerifyPaymentMethods - Verify a payment method
     *
     * Sends an authorization request to the corresponding payment gateway to verify the payment method, even though no changes are made for the payment method. Supported payment methods are Credit Cards and Paypal.
     * 
     * Zuora now supports performing a standalone zero dollar verification or one dollar authorization for credit cards. It also supports a billing agreement status check on PayPal payment methods.
     * 
     * If a payment method is created by Hosted Payment Pages and is not assigned to any billing account, the payment method cannot be verified through this operation.
     * 
    **/
    public openapisdk.models.operations.PutVerifyPaymentMethodsResponse putVerifyPaymentMethods(openapisdk.models.operations.PutVerifyPaymentMethodsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/payment-methods/{payment-method-id}/verify", request.pathParams);
        
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

        openapisdk.models.operations.PutVerifyPaymentMethodsResponse res = new openapisdk.models.operations.PutVerifyPaymentMethodsResponse() {{
            putVerifyPaymentMethodResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PutVerifyPaymentMethodResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PutVerifyPaymentMethodResponseType.class);
                res.putVerifyPaymentMethodResponseType = out;
            }
        }

        return res;
    }
	
}