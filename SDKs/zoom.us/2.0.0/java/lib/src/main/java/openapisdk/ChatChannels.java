package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class ChatChannels {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ChatChannels(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * createChannel - Create a channel
     *
     * Zoom chat channels allow users to communicate via chat in private or public groups. Use this API to create a channel for a user.<br>
     * **Scopes**:`chat_channel:write` or `chat_channel:write:admin`<br>
     * 
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> This API supports both user-managed apps and account-level apps. However, in an<b> account-level</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>, to create a channel on behalf of another user in the same Zoom account, the user calling this API must have a <a href="https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.">role</a> that has <b>Edit</b> permission for the Chat channels feature.</p><br>
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *  
     * 
    **/
    public openapisdk.models.operations.CreateChannelResponse createChannel(openapisdk.models.operations.CreateChannelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/users/{userId}/channels", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateChannelResponse res = new openapisdk.models.operations.CreateChannelResponse() {{
            createChannel201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.CreateChannel201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.CreateChannel201ApplicationJson.class);
                res.createChannel201ApplicationJSONObject = out;
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
     * deleteUserLevelChannel - Delete a channel
     *
     * Zoom chat [channels](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) allow users to communicate via chat in private or public groups. Use this API to delete a specific channel. 
     * 
     * **Scope:** `chat_channel:write`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     * 
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> This API only supports <b>user-managed</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>.</p><br>
     * 
     * 
     *  
    **/
    public openapisdk.models.operations.DeleteUserLevelChannelResponse deleteUserLevelChannel(openapisdk.models.operations.DeleteUserLevelChannelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/channels/{channelId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteUserLevelChannelResponse res = new openapisdk.models.operations.DeleteUserLevelChannelResponse() {{
            deleteUserLevelChannel204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.deleteUserLevelChannel204ApplicationJSONAny = out;
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
     * getChannels - List user's channels
     *
     * Zoom chat [channels](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) allow users to communicate via chat in private or public groups. Use this API to list a user's chat channels. 
     * 
     * **Scope**: `chat_channel:read` or `chat_channel:read:admin`<br>
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> This API supports both user-managed apps and account-level apps. However, in an<b> account-level</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>, to list channels of another user in the same Zoom account, the user calling this API must have a <a href="https://support.zoom.us/hc/en-us/articles/115001078646-Using-role-management#:~:text=Each%20user%20in%20a%20Zoom,owner%2C%20administrator%2C%20or%20member.&text=Role%2Dbased%20access%20control%20enables,needs%20to%20view%20or%20edit.">role</a> that has <b>View or Edit</b> permission for the Chat channels feature.</p><br>
     * 
     * 
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *  
    **/
    public openapisdk.models.operations.GetChannelsResponse getChannels(openapisdk.models.operations.GetChannelsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/users/{userId}/channels", request.pathParams);
        
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

        openapisdk.models.operations.GetChannelsResponse res = new openapisdk.models.operations.GetChannelsResponse() {{
            getChannels200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetChannels200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetChannels200ApplicationJson.class);
                res.getChannels200ApplicationJSONObject = out;
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
     * getUserLevelChannel - Get a channel
     *
     * Zoom chat [channels](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) allow users to communicate via chat in private or public groups. Use this API to get information about a specific channel. 
     * 
     * **Scope:** `chat_channel:read`	<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     * 
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> This API only supports <b>user-managed</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>.</p><br>
     * 
     * 
     *  
    **/
    public openapisdk.models.operations.GetUserLevelChannelResponse getUserLevelChannel(openapisdk.models.operations.GetUserLevelChannelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/channels/{channelId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetUserLevelChannelResponse res = new openapisdk.models.operations.GetUserLevelChannelResponse() {{
            getUserLevelChannel200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetUserLevelChannel200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetUserLevelChannel200ApplicationJson.class);
                res.getUserLevelChannel200ApplicationJSONObject = out;
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
     * joinChannel - Join a channel
     *
     * A [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) can have one or multiple members. Use this API to join a channel that is open for anyone in the same organization to join. You cannot use this API to join private channels that only allows invited members to be a part of it.
     * 
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b>This API only supports <b>user-managed</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>.</p><br>
     * 
     * **Scope:** `chat_channel:write`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.JoinChannelResponse joinChannel(openapisdk.models.operations.JoinChannelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/channels/{channelId}/members/me", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.JoinChannelResponse res = new openapisdk.models.operations.JoinChannelResponse() {{
            joinChannel201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.JoinChannel201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.JoinChannel201ApplicationJson.class);
                res.joinChannel201ApplicationJSONObject = out;
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
     * leaveChannel - Leave a channel
     *
     * If you're no longer interested in being a member of an existing channel, you can leave the channel at any time. Use this API to leave a specific channel. After leaving the channel, you can no longer access information from that channel.
     * 
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b>This API only supports <b>user-managed</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>.</p><br>
     * 
     * **Scope:** `chat_channel:write`<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.LeaveChannelResponse leaveChannel(openapisdk.models.operations.LeaveChannelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/channels/{channelId}/members/me", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.LeaveChannelResponse res = new openapisdk.models.operations.LeaveChannelResponse() {{
            leaveChannel204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.leaveChannel204ApplicationJSONAny = out;
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
     * removeAUserLevelChannelMember - Remove a member
     *
     *  A [channel](https://support.zoom.us/hc/en-us/articles/200912909-Getting-Started-With-Channels-Group-Messaging-) can have one or multiple members. Use this API to remove a member from a chat channel.<br><br>
     *  **Scopes:** `chat_channel:write`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     *  
     *  <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> This API only supports <b>user-managed</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>.</p><br>
     * 
     * 
     * 
    **/
    public openapisdk.models.operations.RemoveAUserLevelChannelMemberResponse removeAUserLevelChannelMember(openapisdk.models.operations.RemoveAUserLevelChannelMemberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/channels/{channelId}/members/{memberId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.RemoveAUserLevelChannelMemberResponse res = new openapisdk.models.operations.RemoveAUserLevelChannelMemberResponse() {{
            removeAUserLevelChannelMember204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.removeAUserLevelChannelMember204ApplicationJSONAny = out;
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
     * updateUserLevelChannel - Update a channel
     *
     * Zoom chat channels allow users to communicate via chat in private or public channels. Use this API to update the name of a specific channel that you created. 
     * 
     * **Scope:** `chat_channel:write`	<br>
     * **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
     * 
     * <p style="background-color:#e1f5fe; color:#01579b; padding:8px"> <b>Note: </b> This API only supports <b>user-managed</b> <a href="https://marketplace.zoom.us/docs/guides/getting-started/app-types/create-oauth-app">OAuth app</a>.</p><br>
     * 
     * 
    **/
    public openapisdk.models.operations.UpdateUserLevelChannelResponse updateUserLevelChannel(openapisdk.models.operations.UpdateUserLevelChannelRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/chat/channels/{channelId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateUserLevelChannelResponse res = new openapisdk.models.operations.UpdateUserLevelChannelResponse() {{
            updateUserLevelChannel204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.updateUserLevelChannel204ApplicationJSONAny = out;
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