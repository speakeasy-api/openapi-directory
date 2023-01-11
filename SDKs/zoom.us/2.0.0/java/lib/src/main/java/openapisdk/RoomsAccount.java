package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class RoomsAccount {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public RoomsAccount(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getZrAccountProfile - Get Zoom Room account profile
     *
     * Get details on the account profile of a Zoom Room. This information can only by accessed either by the Zoom Room Account Owner or a user with Zoom Rooms admin permission. To get information on an individual Room Profile, use [Get Zoom Room Profile API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/getzrprofile) instead.
     * 
     * **Prerequisites:**<br>
     * * Zoom account owner or Zoom Rooms admin permissions<br>
     * 
     * **Scopes:** `room:read:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.GetZrAccountProfileResponse getZrAccountProfile(openapisdk.models.operations.GetZrAccountProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/account_profile");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetZrAccountProfileResponse res = new openapisdk.models.operations.GetZrAccountProfileResponse() {{
            getZRAccountProfile200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetZrAccountProfile200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetZrAccountProfile200ApplicationJson.class);
                res.getZRAccountProfile200ApplicationJSONObject = out;
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
     * getZrAccountSettings - Get Zoom Room account settings
     *
     * Get details on Account Settings of a Zoom Room. With this API, you can view either the **Account Meeting Settings** or the **Alert Settings** (Client Alert Settings and Notfication Settings) of the Zoom Rooms account. By default, only **Account Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:read:admin`<br><br> 
     *  
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.GetZrAccountSettingsResponse getZrAccountSettings(openapisdk.models.operations.GetZrAccountSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/account_settings");
        
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

        openapisdk.models.operations.GetZrAccountSettingsResponse res = new openapisdk.models.operations.GetZrAccountSettingsResponse() {{
            getZRAccountSettings200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getZRAccountSettings200ApplicationJSONObject = out;
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
     * updateZrAccProfile - Update Zoom Room account profile
     *
     * Update information on the account profile of a Zoom Room. This information can only by accessed either by the Zoom Room Account Owner or a user with Zoom Rooms admin permission. To update information on an individual Room Profile, use [Update Zoom Room Profile API](https://marketplace.zoom.us/docs/api-reference/zoom-api/rooms/updatezrprofile) instead.
     * 
     * **Prerequisites:**<br>
     * * Zoom account owner or Zoom Rooms admin permissions<br>
     * 
     * **Scopes:** `room:write:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.UpdateZrAccProfileResponse updateZrAccProfile(openapisdk.models.operations.UpdateZrAccProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/account_profile");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateZrAccProfileResponse res = new openapisdk.models.operations.UpdateZrAccProfileResponse() {{
            updateZRAccProfile204ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateZRAccProfile204ApplicationJSONObject = out;
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
     * updateZoomRoomAccSettings - Update Zoom Room account settings
     *
     * Update account settings applied for Zoom Rooms in a Zoom account. With this API, you can update either the **Account Meeting Settings** or the **Alert Settings** (Client Alert Settings and Notfication Settings) of the Zoom Rooms account by specifying the required setting type in the `setting_type` parameter. To update only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter and to update only **Account Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br><br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:write:admin`<br> 
     * 
     *   **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.UpdateZoomRoomAccSettingsResponse updateZoomRoomAccSettings(openapisdk.models.operations.UpdateZoomRoomAccSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/account_settings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateZoomRoomAccSettingsResponse res = new openapisdk.models.operations.UpdateZoomRoomAccSettingsResponse() {{
            updateZoomRoomAccSettings204ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateZoomRoomAccSettings204ApplicationJSONObject = out;
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