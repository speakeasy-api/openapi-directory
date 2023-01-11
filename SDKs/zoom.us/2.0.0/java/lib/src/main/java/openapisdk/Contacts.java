package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class Contacts {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Contacts(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getUserContact - Get user's contact details
     *
     * A user under an organization’s Zoom account has internal users listed under Company Contacts in the Zoom Client. A Zoom user can also add another Zoom user as a [contact](https://support.zoom.us/hc/en-us/articles/115004055706-Managing-Contacts). Call this API to get information on a specific contact of the Zoom user.
     * 
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b>This API only supports <b>user-managed</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>.</p><br>
     * 
     * **Scope**: `chat_contact:read`<br>
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.GetUserContactResponse getUserContact(openapisdk.models.operations.GetUserContactRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/users/me/contacts/{contactId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUserContactResponse res = new openapisdk.models.operations.GetUserContactResponse() {{
            getUserContact200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetUserContact200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetUserContact200ApplicationJson.class);
                res.getUserContact200ApplicationJSONObject = out;
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
     * getUserContacts - List user's contacts
     *
     * A user under an organization’s Zoom account has internal users listed under Company Contacts in the Zoom Client. A Zoom user can also add another Zoom user as a [contact](https://support.zoom.us/hc/en-us/articles/115004055706-Managing-Contacts). Call this API to list all the contacts of a Zoom user. Zoom contacts are categorized into "company contacts" and "external contacts". You must specify the contact type in the `type` query parameter. If you do not specify, by default, the type will be set as company contact.
     * 
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> This API only supports <b>user-managed</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>.</p><br>
     * 
     * **Scope**: `chat_contact:read`<br>
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.GetUserContactsResponse getUserContacts(openapisdk.models.operations.GetUserContactsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/users/me/contacts");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUserContactsResponse res = new openapisdk.models.operations.GetUserContactsResponse() {{
            getUserContacts200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetUserContacts200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetUserContacts200ApplicationJson.class);
                res.getUserContacts200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 300) {
        }

        return res;
    }
	
	
    /**
     * searchCompanyContacts - Search company contacts
     *
     * A user under an organization's Zoom account has internal users listed under Company Contacts in the Zoom Client. Use this API to search users that are in the company contacts of a Zoom account. Using the `search_key` query parameter, provide either first name, last name or the email address of the user that you would like to search for. Optionally, set `query_presence_status` to `true` in order to include the presence status of a contact. <br><br>
     * 
     * **Scopes:** `contact:read:admin`, `contact:read`<br>
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium` 
    **/
    public openapisdk.models.operations.SearchCompanyContactsResponse searchCompanyContacts(openapisdk.models.operations.SearchCompanyContactsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/contacts");
        
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

        openapisdk.models.operations.SearchCompanyContactsResponse res = new openapisdk.models.operations.SearchCompanyContactsResponse() {{
            searchCompanyContacts200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.SearchCompanyContacts200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.SearchCompanyContacts200ApplicationJson.class);
                res.searchCompanyContacts200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
}