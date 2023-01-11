package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class ChatbotMessages {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public ChatbotMessages(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteAChatbotMessage - Delete a chatbot message
     *
     * Delete a message that was sent by your chatbot app.<br><br> **Scopes:** `imchat:bot`<br> **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>**Authorization Flow**: Client Credentials Flow<br><br>To get authorized, make a POST request to `/oauth/token` endpoint with grant type as `client_credentials`. <br>Use `https://api.zoom.us/oauth/token?grant_type=client_credentials` as the endpoint for the request. 
     * You will need to send your ClientID and Secret as a Basic base64 encoded AUthorization header. Ex. `Basic base64Encode({client_id}:{client_sceret})`<br><br> Next, use the token received (access_token) as a bearer token while making the DELETE /im/chat/messages/{message_id} request to delete a message.<br><br>
     * Learn more about how to authotize chatbots in the [Chatbot Authorization](https://marketplace.zoom.us/docs/guides/chatbots/authorization) guide.
    **/
    public openapisdk.models.operations.DeleteAChatbotMessageResponse deleteAChatbotMessage(openapisdk.models.operations.DeleteAChatbotMessageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/im/chat/messages/{message_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAChatbotMessageResponse res = new openapisdk.models.operations.DeleteAChatbotMessageResponse() {{
            deleteAChatbotMessage200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.DeleteAChatbotMessage200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.DeleteAChatbotMessage200ApplicationJson.class);
                res.deleteAChatbotMessage200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * editChatbotMessage - Edit a chatbot message
     *
     * Edit a message that was [sent](https://marketplace.zoom.us/docs/api-reference/zoom-api/im-chat/sendchatbot) by your Chatbot app.<br> After sending a message using the Send Chatbot Message API, you must store the messageId returned in the response so that you can make edits to the associated message using this API.
     * 
     * **Scope:** `imchat:bot`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Authorization Flow**: Client Credentials Flow<br><br>
     * To get authorized, make a POST request to `/oauth/token` endpoint with grant type as `client_credentials`. <br>Use `https://api.zoom.us/oauth/token?grant_type=client_credentials` as the endpoint for the request. 
     * You will need to send your ClientID and Secret as a Basic base64 encoded AUthorization header. Ex. `Basic base64Encode({client_id}:{client_sceret})`<br><br> Next, use the token received (access_token) as a bearer token while making the PUT /im/chat/messages/{message_id} request to edit a chatbot message.<br><br>
     * Learn more about how to authotize chatbots in the [Chatbot Authorization](https://marketplace.zoom.us/docs/guides/chatbots/authorization) guide.
    **/
    public openapisdk.models.operations.EditChatbotMessageResponse editChatbotMessage(openapisdk.models.operations.EditChatbotMessageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/im/chat/messages/{message_id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.EditChatbotMessageResponse res = new openapisdk.models.operations.EditChatbotMessageResponse() {{
            editChatbotMessage200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.EditChatbotMessage200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.EditChatbotMessage200ApplicationJson.class);
                res.editChatbotMessage200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * sendchatbot - Send chatbot messages
     *
     * Send chatbot messages from your marketplace chatbot app.<br><br>
     * **Scopes:** `imchat:bot`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`<br>
     * **Authorization Flow**: Client Credentials Flow<br><br>
     * To get authorized, make a POST request to `/oauth/token` endpoint with grant type as `client_credentials`. <br>Use `https://api.zoom.us/oauth/token?grant_type=client_credentials` as the endpoint for the request. 
     * You will need to send your ClientID and Secret as a Basic base64 encoded AUthorization header. Ex. `Basic base64Encode({client_id}:{client_sceret})`<br><br> Next, use the token recieved (access_token) as a bearer token while making the POST /im/chat/messages request to send chatbot messages.<br><br>
     * Learn more about how to authorize chatbots in the [Chatbot Authorization](https://marketplace.zoom.us/docs/guides/chatbots/authorization) guide.
    **/
    public openapisdk.models.operations.SendchatbotResponse sendchatbot(openapisdk.models.operations.SendchatbotRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/im/chat/messages");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.SendchatbotResponse res = new openapisdk.models.operations.SendchatbotResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
}