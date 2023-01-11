package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Billing {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Billing(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * accountBilling - Get billing information
     *
     * Get [billing information](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) of a sub account.<br><br>Only master accounts can use this API. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br>
     * 
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled. <br>
     * 
     * **Scope**:`billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * 
     * 
    **/
    public openapisdk.models.operations.AccountBillingResponse accountBilling(openapisdk.models.operations.AccountBillingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/billing", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountBillingResponse res = new openapisdk.models.operations.AccountBillingResponse() {{
            accountBilling200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AccountBilling200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AccountBilling200ApplicationJson.class);
                res.accountBilling200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountBillingInvoices - List billing invoices
     *
     * List [invoices](https://support.zoom.us/hc/en-us/articles/207276556-Viewing-your-invoice-history#h_6710542f-23cc-4059-9cc7-ff02bec7314e) of a Zoom account.
     * 
     * To list a regular Zoom account's invoices or a master account's invoices, provide `me` as the value of the `accountId` path parameter. To list a sub account's invoices, provide the account ID of the sub account in the `accountId` path parameter. 
     * 
     * **Prerequisites:**
     * * Account must be enrolled in Pro or a higher plan.<br>
     * 
     * **Scope**:`billing:master`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Additional Rate Limit:** You can make **one** API request per account(`accountId`) every **five** minutes until the daily limit is reached. This API has a daily limit of **6** requests per account(`accountId`).
    **/
    public openapisdk.models.operations.AccountBillingInvoicesResponse accountBillingInvoices(openapisdk.models.operations.AccountBillingInvoicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/billing/invoices", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountBillingInvoicesResponse res = new openapisdk.models.operations.AccountBillingInvoicesResponse() {{
            accountBillingInvoices200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AccountBillingInvoices200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AccountBillingInvoices200ApplicationJson.class);
                res.accountBillingInvoices200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * accountBillingUpdate - Update billing information
     *
     * Update [billing information](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) of a sub account.<br><br>
     * This API can only be used by master accounts that pay all billiing charges of their associated sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * 
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled. <br>
     * 
     * **Scope**:`billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * 
     * 
    **/
    public openapisdk.models.operations.AccountBillingUpdateResponse accountBillingUpdate(openapisdk.models.operations.AccountBillingUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/billing", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountBillingUpdateResponse res = new openapisdk.models.operations.AccountBillingUpdateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountPlanAddonCancel - Cancel additional plans
     *
     * [Cancel additional plan](https://support.zoom.us/hc/en-us/articles/203634215-How-Do-I-Cancel-My-Subscription-) of a sub account. The cancellation does not provide refund for the current subscription. The service remains active for the current session.
     * 
     * This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * 
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * 
     * **Prerequisites:**<br>
     * * Pro or a higher plan with master account option enabled.
     * * The sub account must be a paid account.<br>
     * **Scope:** `billing:master`<br>
     *  
    **/
    public openapisdk.models.operations.AccountPlanAddonCancelResponse accountPlanAddonCancel(openapisdk.models.operations.AccountPlanAddonCancelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/plans/addons/status", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountPlanAddonCancelResponse res = new openapisdk.models.operations.AccountPlanAddonCancelResponse() {{
            accountPlanAddonCancel204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.accountPlanAddonCancel204ApplicationJSONAny = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 300) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountPlanAddonCreate - Subscribe additional plan
     *
     * Subscribe a sub account to a Zoom addon plan. This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * <br>**Prerequisites:**<br>
     * * Pro or a higher plan with master account option enabled.
     * * The sub account must be a paid account. The billing charges for the sub account must be paid by its master account.<br><br>
     * 
     * **Scopes**: `billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * 
     * 
    **/
    public openapisdk.models.operations.AccountPlanAddonCreateResponse accountPlanAddonCreate(openapisdk.models.operations.AccountPlanAddonCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/plans/addons", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountPlanAddonCreateResponse res = new openapisdk.models.operations.AccountPlanAddonCreateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountPlanAddonUpdate - Update an additional plan
     *
     * Update an additional plan for a sub account.
     * 
     * This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * <br>**Prerequisites:**<br>
     * * Pro or a higher plan with master account enabled.
     * * The sub account must be a paid account. The billing charges for the sub account must be paid by the master account.<br><br>
     * 
     * **Scopes**: `billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * 
     * 
     *  
    **/
    public openapisdk.models.operations.AccountPlanAddonUpdateResponse accountPlanAddonUpdate(openapisdk.models.operations.AccountPlanAddonUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/plans/addons", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountPlanAddonUpdateResponse res = new openapisdk.models.operations.AccountPlanAddonUpdateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 300) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountPlanBaseDelete - Cancel a base plan
     *
     * [Cancel a base plan](https://support.zoom.us/hc/en-us/articles/203634215-How-Do-I-Cancel-My-Subscription-) for a sub account.
     * 
     * This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * 
     * **Scopes**: `billing:master`<br> 
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * The sub account must have a Pro or a higher plan.
     *  
    **/
    public openapisdk.models.operations.AccountPlanBaseDeleteResponse accountPlanBaseDelete(openapisdk.models.operations.AccountPlanBaseDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/plans/base/status", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountPlanBaseDeleteResponse res = new openapisdk.models.operations.AccountPlanBaseDeleteResponse() {{
            accountPlanBaseDelete204ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.accountPlanBaseDelete204ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountPlanBaseUpdate - Update a base plan
     *
     * Update a base plan of a sub account. 
     * 
     * This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * **Scopes:** `billing:master`<br><br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Prerequisites:**<br>
     * * The sub account must have a Pro or a higher plan.
     *  
    **/
    public openapisdk.models.operations.AccountPlanBaseUpdateResponse accountPlanBaseUpdate(openapisdk.models.operations.AccountPlanBaseUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/plans/base", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountPlanBaseUpdateResponse res = new openapisdk.models.operations.AccountPlanBaseUpdateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 300) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountPlanCreate - Subscribe plans
     *
     * Subscribe a sub account to a Zoom plan using your master account. This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' subscriptions. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * **Scopes**: `billing:master`<br>
     *  
    **/
    public openapisdk.models.operations.AccountPlanCreateResponse accountPlanCreate(openapisdk.models.operations.AccountPlanCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/plans", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountPlanCreateResponse res = new openapisdk.models.operations.AccountPlanCreateResponse() {{
            accountPlanCreate200ApplicationJSONAny = null;
            body = null;
            body = null;
            accountPlanCreate201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.accountPlanCreate200ApplicationJSONAny = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AccountPlanCreate201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AccountPlanCreate201ApplicationJson.class);
                res.accountPlanCreate201ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 300) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountPlans - Get plan Information
     *
     * Get plan information of a sub account that is managed by a master account. <br><br>This API can only be used by master accounts that pay all billiing charges of their associated Pro or higher sub accounts. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts' billing information. Email the partner programs team at **partner-success@zoom.us** for more details.<br><br>
     * **Scopes:** `billing:master`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * 
     * 
     *  
    **/
    public openapisdk.models.operations.AccountPlansResponse accountPlans(openapisdk.models.operations.AccountPlansRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/plans", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountPlansResponse res = new openapisdk.models.operations.AccountPlansResponse() {{
            accountPlans200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AccountPlans200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AccountPlans200ApplicationJson.class);
                res.accountPlans200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * downloadInvoicePdf - Download an invoice file
     *
     * Download a [billed](https://support.zoom.us/hc/en-us/articles/201363263-About-Billing) invoice file of a Zoom account in PDF format. To download a regular account's invoice or a  master account's invoice, provide `me` as the value of `accountId` path parameter. To download a sub account's invoice, provide the account ID of the sub account in the `accountId` path parameter. 
     * 
     * 
     * **Prerequisites:**
     * * Account must be enrolled in Pro or a higher plan.<br>
     * 
     * **Scope**:`billing:master`<br>
     * **Rate Limit:** You can make **one** request to this API every **thirty** minutes until the daily limit is reached. This API has a daily limit of **100** requests per **account**.
    **/
    public openapisdk.models.operations.DownloadInvoicePdfResponse downloadInvoicePdf(openapisdk.models.operations.DownloadInvoicePdfRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/download/billing/invoices/{invoiceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DownloadInvoicePdfResponse res = new openapisdk.models.operations.DownloadInvoicePdfResponse() {{
            downloadInvoicePDF200ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.downloadInvoicePDF200ApplicationJSONAny = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getAccountBillingInvoice - Get invoice details
     *
     * Get detailed information about a specific [invoice](https://support.zoom.us/hc/en-us/articles/207276556-Viewing-your-invoice-history#h_6710542f-23cc-4059-9cc7-ff02bec7314e). <br>To retrieve a regular Zoom account's invoice details or a master account's invoice details, provide `me` as the value of `accountId` path parameter. To list a sub account's invoice details, provide the account ID of the sub account in the `accountId` path parameter. 
     * 
     * **Prerequisites:**
     * * Account must be enrolled in Pro or a higher plan. <br>
     * 
     * **Scope**:`billing:master`<br>
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * **Additional Rate Limit:** You can make **one** API request every **thirty** minutes until the daily limit is reached. This API has a daily limit of **100** requests per **account**.
    **/
    public openapisdk.models.operations.GetAccountBillingInvoiceResponse getAccountBillingInvoice(openapisdk.models.operations.GetAccountBillingInvoiceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/billing/invoices/{invoiceId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAccountBillingInvoiceResponse res = new openapisdk.models.operations.GetAccountBillingInvoiceResponse() {{
            getAccountBillingInvoice200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAccountBillingInvoice200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAccountBillingInvoice200ApplicationJson.class);
                res.getAccountBillingInvoice200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * getPlanUsage - Get plan usage
     *
     * Get information on usage of [plans](https://marketplace.zoom.us/docs/api-reference/other-references/plans) of an account. This API supports regular accounts as well as master and sub accounts. To get plan usage of a regular account, use the `account:read:admin` scope and provide “me” as the value of the  `accountId` path parameter.To get plan usage of a master account, provide the keyword "me" as the value of the `accountId` path parameter and use the `billing:master` scope. To get plan usage of a sub account, provide the actual account Id of the sub account as the value of the `accountId` path parameter and use the `billing:master` scope. 
     * 
     * **Prerequisite**:<br>
     * Account type: master account on a paid Pro, Business or Enterprise plan.<br>
     * **Scope:** `billing:master` for master and sub accounts. `account:read:admin` for regular Zoom accounts.<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`
    **/
    public openapisdk.models.operations.GetPlanUsageResponse getPlanUsage(openapisdk.models.operations.GetPlanUsageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/plans/usage", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetPlanUsageResponse res = new openapisdk.models.operations.GetPlanUsageResponse() {{
            getPlanUsage200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetPlanUsage200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetPlanUsage200ApplicationJson.class);
                res.getPlanUsage200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}