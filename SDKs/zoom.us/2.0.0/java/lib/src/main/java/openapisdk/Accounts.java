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

public class Accounts {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Accounts(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * account - Get sub account details
     *
     * Get details of a sub account that is listed under a master account. Your account must be a master account in order to retrieve sub accounts' details. Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and create sub accounts. Email the partner programs team at **partner-success@zoom.us** for more details.
     * 
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled. <br>
     * 
     * **Scope**: `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * 
     * 
     *  
     * 
    **/
    public openapisdk.models.operations.AccountResponse account(openapisdk.models.operations.AccountRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountResponse res = new openapisdk.models.operations.AccountResponse() {{
            account200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.Account200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.Account200ApplicationJson.class);
                res.account200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountCreate - Create a sub account
     *
     * Create a sub account under a master account. Your account must be a master account in order to create sub accounts. 
     * <br><br>Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts. Email the partner programs team at partner-success@zoom.us. for more details. Please note that the created account user will receive a confirmation email.<br><br>
     * <br>
     * **Prerequisites:**<br>
     * * Pro or a higher paid account with master account option enabled. <br>
     * 
     * **Scope**: `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * 
     * 
     *  
    **/
    public openapisdk.models.operations.AccountCreateResponse accountCreate(openapisdk.models.operations.AccountCreateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts");
        
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

        openapisdk.models.operations.AccountCreateResponse res = new openapisdk.models.operations.AccountCreateResponse() {{
            accountCreate201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AccountCreate201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AccountCreate201ApplicationJson.class);
                res.accountCreate201ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 409) {
        }

        return res;
    }
	
	
    /**
     * accountDisassociate - Disassociate a sub account
     *
     * Disassociate a sub account from its master account. This will leave the sub account intact but it will no longer be associated with the master account.<br>  
     * 
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled. <br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis).<br><br>
     * 
     * 
     * **Scope**: `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * 
     * 
     *  
    **/
    public openapisdk.models.operations.AccountDisassociateResponse accountDisassociate(openapisdk.models.operations.AccountDisassociateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountDisassociateResponse res = new openapisdk.models.operations.AccountDisassociateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountManagedDomain - Get managed domains
     *
     * Get a sub account's [managed domains](https://support.zoom.us/hc/en-us/articles/203395207-What-is-Managed-Domain-).<br><br>
     * 
     * **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled. <br><br>
     * To get managed domains of the master account, provide `me` as the value for accountId in the path parameter. Provide the sub account's Account ID as the value of accountId path parameter to get managed domains of the sub account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher paid account with master account option enabled. <br>
     * 
     * **Scope:** `account:read:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * 
     * 
     * 
     * 
    **/
    public openapisdk.models.operations.AccountManagedDomainResponse accountManagedDomain(openapisdk.models.operations.AccountManagedDomainRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/managed_domains", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountManagedDomainResponse res = new openapisdk.models.operations.AccountManagedDomainResponse() {{
            accountManagedDomain200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AccountManagedDomain200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AccountManagedDomain200ApplicationJson.class);
                res.accountManagedDomain200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountOptionsUpdate - Update options
     *
     * Update a sub account's options under the master account.<br> <aside>Your account must be a master account in order to update the options for sub accounts. Zoom only assigns this privilege to trusted partners. </aside>
     * 
     * **Prerequisites:**
     * * Pro or a higher paid account with master account option enabled.
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis).<br><br>
     * 
     * **Scope**: `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * 
     * 
     *  
    **/
    public openapisdk.models.operations.AccountOptionsUpdateResponse accountOptionsUpdate(openapisdk.models.operations.AccountOptionsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/options", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountOptionsUpdateResponse res = new openapisdk.models.operations.AccountOptionsUpdateResponse() {{
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
     * accountSettings - Get settings
     *
     * Get the settings of an account.<br>
     * To get the settings of a master account, use `me` as the value for the `accountId` path parameter.<br><br>
     *  **Prerequisites**:
     *  * The account must be a paid account.<br>
     * **Scopes**: `account:read:admin`
     * <br> 
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.AccountSettingsResponse accountSettings(openapisdk.models.operations.AccountSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/settings", request.pathParams);
        
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

        openapisdk.models.operations.AccountSettingsResponse res = new openapisdk.models.operations.AccountSettingsResponse() {{
            accountSettings200ApplicationJSONOneOf = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.accountSettings200ApplicationJSONOneOf = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountSettingsUpdate - Update settings
     *
     * Update the settings of a sub account that is under a master account.<br> To update the settings of the master account, use `me` as the value of the `accountId` path parameter.<br><br>
     * **Prerequisites**:
     *  * The sub account must be a paid account.<br>
     * **Scopes**: `account:write:admin`
     * <br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.AccountSettingsUpdateResponse accountSettingsUpdate(openapisdk.models.operations.AccountSettingsUpdateRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
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
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountSettingsUpdateResponse res = new openapisdk.models.operations.AccountSettingsUpdateResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 300) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accountTrustedDomain - Get trusted domains
     *
     * Get trusted domains of a sub account. To get the trusted domains of a master account, use `me` as the value for the `accountId` path parameter.
     * 
     * **Prerequisites:**<br>
     * * The sub account must be a paid account.<br>
     * **Scope:** `account:read:admin`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.AccountTrustedDomainResponse accountTrustedDomain(openapisdk.models.operations.AccountTrustedDomainRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/trusted_domains", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AccountTrustedDomainResponse res = new openapisdk.models.operations.AccountTrustedDomainResponse() {{
            accountTrustedDomain200ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.accountTrustedDomain200ApplicationJSONAny = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * accounts - List sub accounts
     *
     * List all the sub accounts that have been created by a master account.<br><br>Zoom allows only [approved partners](https://marketplace.zoom.us/docs/api-reference/master-account-apis) to use master APIs and manage sub accounts. Email the partner programs team at **partner-success@zoom.us** for more details.
     * 
     * <br>**Prerequisites:**<br>
     * * Pro or a higher paid account with master account option enabled. <br>
     * 
     * **Scope**: `account:read:admin`
     * <br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * 
     * 
    **/
    public openapisdk.models.operations.AccountsResponse accounts(openapisdk.models.operations.AccountsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts");
        
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

        openapisdk.models.operations.AccountsResponse res = new openapisdk.models.operations.AccountsResponse() {{
            accountList = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AccountsAccountList out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AccountsAccountList.class);
                res.accountList = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * delVb - Delete virtual background files
     *
     * Delete existing virtual background file(s) from an account. 
     * 
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `account:write:admin`<br> <br> 
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`<br>
     * 
     * 
    **/
    public openapisdk.models.operations.DelVbResponse delVb(openapisdk.models.operations.DelVbRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/settings/virtual_backgrounds", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
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

        openapisdk.models.operations.DelVbResponse res = new openapisdk.models.operations.DelVbResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getAccountLockSettings - Get locked settings
     *
     * [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allow you turn settings on or off for all users in your account. No user except the account admin or account owner can change these settings. With lock settings, you force the settings on for all users.
     * Use this API to retrieve an account's locked settings. 
     * 
     * **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled. <br><br>
     * **Prerequisites:**
     * * Pro or a higher paid account. <br>
     * 
     * **Scope**: `account:read:admin`.
     * <br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * 
     * 
     * 
     * 
     * 
     * **Scope:** account:read:admin
    **/
    public openapisdk.models.operations.GetAccountLockSettingsResponse getAccountLockSettings(openapisdk.models.operations.GetAccountLockSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/lock_settings", request.pathParams);
        
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

        openapisdk.models.operations.GetAccountLockSettingsResponse res = new openapisdk.models.operations.GetAccountLockSettingsResponse() {{
            getAccountLockSettings200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getAccountLockSettings200ApplicationJSONObject = out;
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
     * updateAccountLockSettings - Update locked settings
     *
     * [Account Locked Settings](https://support.zoom.us/hc/en-us/articles/115005269866) allow you turn settings on or off for all users in your account. No user except the account admin or account owner can change these settings. With lock settings, you force the settings on for all users. Use this API to update an account's locked settings.
     * 
     * **Note:** This API can be used by Zoom Accounts that are on a Pro or a higher plan as well accounts that have master and sub accounts options enabled.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher paid account. <br>
     * 
     * **Scope:** `account:write:admin`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * 
     * 
     *  
    **/
    public openapisdk.models.operations.UpdateAccountLockSettingsResponse updateAccountLockSettings(openapisdk.models.operations.UpdateAccountLockSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/lock_settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAccountLockSettingsResponse res = new openapisdk.models.operations.UpdateAccountLockSettingsResponse() {{
            updateAccountLockSettings200ApplicationJSONAny = null;
            body = null;
            body = null;
            updateAccountLockSettings204ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.updateAccountLockSettings200ApplicationJSONAny = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateAccountLockSettings204ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * updateAccountOwner - Update the account owner
     *
     * The current account owner can [change the owner of an account](https://support.zoom.us/hc/en-us/articles/115005686983-Change-Account-Owner) to another user on the same account.<br> Use this API to change the owner of a sub account.
     *  
     * **Prerequisites**: <br>
     * * Account owner or admin permissions of an account.
     * * The account making this API request must be on a pro or a hiigher plan with [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) privilege.<br><br>
     * 
     * **Scopes:**  `account:write:admin` or `account:master`<br>**[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Heavy`<br>
     * 
     * 
     * <br> 
    **/
    public openapisdk.models.operations.UpdateAccountOwnerResponse updateAccountOwner(openapisdk.models.operations.UpdateAccountOwnerRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/owner", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAccountOwnerResponse res = new openapisdk.models.operations.UpdateAccountOwnerResponse() {{
            updateAccountOwner204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.updateAccountOwner204ApplicationJSONAny = out;
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
     * uploadVb - Upload virtual background files
     *
     * Use this API to [upload virtual background files](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_01EJF3YFEWGT8YA0ZJ079JEDQE) for all users on the account to use. 
     * 
     * 
     * **Prerequisites:**<br>
     * * Virtual background feature must be [enabled](https://support.zoom.us/hc/en-us/articles/210707503-Virtual-Background#h_2ef28080-fce9-4ac2-b567-dc958afab1b7) on the account.
     * <br> **Scope:** `account:write:admin`<br><br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * 
     * 
    **/
    public openapisdk.models.operations.UploadVbResponse uploadVb(openapisdk.models.operations.UploadVbRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/settings/virtual_backgrounds", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UploadVbResponse res = new openapisdk.models.operations.UploadVbResponse() {{
            uploadVB201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UploadVb201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UploadVb201ApplicationJson.class);
                res.uploadVB201ApplicationJSONObject = out;
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
	
}