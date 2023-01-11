package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class Rooms {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Rooms(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addARoom - Add a Zoom Room
     *
     * Use this API to [add a Zoom Room](https://support.zoom.us/hc/en-us/articles/202822279-Add-Zoom-Rooms-on-Web-Portal) to a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:write:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.AddARoomResponse addARoom(openapisdk.models.operations.AddARoomRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddARoomResponse res = new openapisdk.models.operations.AddARoomResponse() {{
            addARoom201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddARoom201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddARoom201ApplicationJson.class);
                res.addARoom201ApplicationJSONObject = out;
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
     * changeZrLocation - Change a Zoom Room's location
     *
     * An account owner of a Zoom account can establish a [Zoom Rooms Location Hierarchy](https://support.zoom.us/hc/en-us/articles/115000342983-Zoom-Rooms-Location-Hierarchy) to better organize Zoom Rooms spread accress various location. The location can be structured in a hierarchy with Country being the top-level location, followed by city, campus, building, and floor. Use this API to assign a new location for a Zoom Room. Note that the Zoom Room can be assigned only to the lowest level location available in the hierarchy.
     * **Prerequisite:**<br>
     * * Account owner or admin permission
     * * Zoom Rooms version 4.0 or higher<br>
     * **Scopes:** `room:write:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.ChangeZrLocationResponse changeZrLocation(openapisdk.models.operations.ChangeZrLocationRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/{roomId}/location", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ChangeZrLocationResponse res = new openapisdk.models.operations.ChangeZrLocationResponse() {{
            changeZRLocation204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.changeZRLocation204ApplicationJSONAny = out;
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
     * checkInRooms - Check-in or check-out of a Zoom Room
     *
     * The Zoom Rooms check-in feature helps maximize your room utilization. Use this API to either **check in** and confirm that you are utilizing the room reservation or to **check out** of the room so that the room gets released from the scheduled meeting and will be made available for others to use. Learn more from the [Using the Zoom Rooms check-in feature](https://support.zoom.us/hc/en-us/articles/360001147163-Using-the-Zoom-Rooms-check-in-feature) guide. 
     * 
     * **Prerequisites:**
     * * [Zoom Rooms](https://support.zoom.us/hc/en-us/articles/207483343-Getting-started-with-Zoom-Rooms#:~:text=Zoom%20Rooms%20is%20a%20software,or%20from%20their%20mobile%20device) must have been set up for use for the account and must be online. 
     * * You must have access to the Calendar Integration APIs (either Microsoft Exchange or Google Calendar APIs) to get calendar information associated with the Room.
     * 
     * **Scope:** `room:write:admin`
    **/
    public openapisdk.models.operations.CheckInRoomsResponse checkInRooms(openapisdk.models.operations.CheckInRoomsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/{id}/events", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CheckInRoomsResponse res = new openapisdk.models.operations.CheckInRoomsResponse() {{
            checkInRooms202ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.checkInRooms202ApplicationJSONAny = out;
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
     * deleteAZoomRoom - Delete a Zoom Room
     *
     * [Remove](https://support.zoom.us/hc/en-us/articles/360033432032-Zoom-Room-Device-Profiles#h_e55b2092-c418-4b02-819f-44de51448900) a specific Zoom Room profile from a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:write:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.DeleteAZoomRoomResponse deleteAZoomRoom(openapisdk.models.operations.DeleteAZoomRoomRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/{roomId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAZoomRoomResponse res = new openapisdk.models.operations.DeleteAZoomRoomResponse() {{
            deleteAZoomRoom204ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.deleteAZoomRoom204ApplicationJSONObject = out;
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
     * getZrProfile - Get Zoom Room profile
     *
     * 
     * Zoom Rooms is a software-based room system that provides an integrated experience for audio conferencing, wireless screen sharing and video conferencing. Use this API to get detailed information on a specific Zoom Room in a Zoom account.
     * 
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:read:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.GetZrProfileResponse getZrProfile(openapisdk.models.operations.GetZrProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/{roomId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetZrProfileResponse res = new openapisdk.models.operations.GetZrProfileResponse() {{
            getZRProfile200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetZrProfile200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetZrProfile200ApplicationJson.class);
                res.getZRProfile200ApplicationJSONObject = out;
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
     * getZrSettings - Get Zoom Room settings
     *
     * Get information on meeting or alert settings applied to a specific Zoom Room. By default, only **Meeting Settings** are returned. To view only **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter.<br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:read:admin`
     *  
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br> 
    **/
    public openapisdk.models.operations.GetZrSettingsResponse getZrSettings(openapisdk.models.operations.GetZrSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/{roomId}/settings", request.pathParams);
        
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

        openapisdk.models.operations.GetZrSettingsResponse res = new openapisdk.models.operations.GetZrSettingsResponse() {{
            getZRSettings200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getZRSettings200ApplicationJSONObject = out;
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
     * listDigitalSignageContent - List digital signage contents
     *
     * List information about existing [Zoom Rooms digital signage](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage) content in a Zoom account.<br> You can also access this information by logging into your Zoom account in the Zoom web portal and visiting the [Digital Signage Content](https://zoom.us/digitalsignage#/) page listed under **Room Management**.
     * 
     * **Prerequisites:**
     * * Pro or a higher account with Zoom Rooms.
     * * Existing content files or folder in [Digital Signage Content](https://zoom.us/digitalsignage#/) page.
     * 
     * 
     * 
    **/
    public openapisdk.models.operations.ListDigitalSignageContentResponse listDigitalSignageContent(openapisdk.models.operations.ListDigitalSignageContentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/digital_signage");
        
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

        openapisdk.models.operations.ListDigitalSignageContentResponse res = new openapisdk.models.operations.ListDigitalSignageContentResponse() {{
            listDigitalSignageContent200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListDigitalSignageContent200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListDigitalSignageContent200ApplicationJson.class);
                res.listDigitalSignageContent200ApplicationJSONObject = out;
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
     * listZrDevices - List Zoom Room devices
     *
     * List information about the devices that are being used for a specific [Zoom Room](https://support.zoom.us/hc/en-us/articles/207483343-Getting-Started-with-Zoom-Rooms) in an account.
     * 
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * * Account owner or admin permissions.
     * **Scopes**: `room:read:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.ListZrDevicesResponse listZrDevices(openapisdk.models.operations.ListZrDevicesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/{roomId}/devices", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListZrDevicesResponse res = new openapisdk.models.operations.ListZrDevicesResponse() {{
            listZRDevices200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListZrDevices200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListZrDevices200ApplicationJson.class);
                res.listZRDevices200ApplicationJSONObject = out;
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
     * listZoomRooms - List Zoom Rooms
     *
     * Zoom Rooms is a software-based room system that provides an integrated experience for audio conferencing, wireless screen sharing and video conferencing. Use this API to list all the existing [Zoom Rooms](https://support.zoom.us/hc/en-us/articles/207483343-Getting-Started-with-Zoom-Rooms) in a Zoom account.<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:read:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.ListZoomRoomsResponse listZoomRooms(openapisdk.models.operations.ListZoomRoomsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms");
        
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

        openapisdk.models.operations.ListZoomRoomsResponse res = new openapisdk.models.operations.ListZoomRoomsResponse() {{
            listZoomRooms200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListZoomRooms200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListZoomRooms200ApplicationJson.class);
                res.listZoomRooms200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * manageE911signage - Update E911 digital signage
     *
     * Display or hide E911 emergency alert text content from [Zoom Rooms digital signage](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-digital-signage).
     * 
     * **Scope:** `room:write:admin`
     * 
     * **Prerequisites:**<br>
     * * [Zoom Rooms](https://zoom.us/zoomrooms/software) 5.3.0 or higher
     * * Zoom Rooms digital signage must be [enabled](https://support.zoom.us/hc/en-us/articles/360000030683-Zoom-Rooms-Digital-Signage#h_767fbb33-82a8-45a8-8392-a1bfa9687edd)
     * 
    **/
    public openapisdk.models.operations.ManageE911signageResponse manageE911signage(openapisdk.models.operations.ManageE911signageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/events");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ManageE911signageResponse res = new openapisdk.models.operations.ManageE911signageResponse() {{
            manageE911signage202ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 202) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ManageE911signage202ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ManageE911signage202ApplicationJson.class);
                res.manageE911signage202ApplicationJSONObject = out;
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
     * updateRoomProfile - Update a Zoom Room profile
     *
     * Update basic information on a specific Zoom Room in a Zoom account.<br>
     * 
     * **Prerequisites:**<br>
     * * Pro or a higher plan with [Zoom Room](https://zoom.us/zoomrooms) license.<br>
     * **Scopes**: `room:write:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.UpdateRoomProfileResponse updateRoomProfile(openapisdk.models.operations.UpdateRoomProfileRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/{roomId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateRoomProfileResponse res = new openapisdk.models.operations.UpdateRoomProfileResponse() {{
            updateRoomProfile204ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.updateRoomProfile204ApplicationJSONObject = out;
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
     * updateZrSettings - Update Zoom Room settings
     *
     * Update either meeting or alert settings applied to a specific Zoom Room. To update **Alert Settings**, specify `alert` as the value of the `setting_type` query parameter. To update **Meeting Settings**, specify `meeting` as the value of the `setting_type` query parameter.<br>
     * **Prerequisites:**<br>
     * * Zoom Room licenses
     * * Owner or Admin privileges on the Zoom Account.<br>
     * **Scopes:** `room:write:admin`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.UpdateZrSettingsResponse updateZrSettings(openapisdk.models.operations.UpdateZrSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/rooms/{roomId}/settings", request.pathParams);
        
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

        openapisdk.models.operations.UpdateZrSettingsResponse res = new openapisdk.models.operations.UpdateZrSettingsResponse() {{
            updateZRSettings204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.updateZRSettings204ApplicationJSONAny = out;
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