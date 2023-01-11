package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class NearMisses {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public NearMisses(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getAdminRequestsUnmatchedNearMisses - Retrieve near-misses for all unmatched requests
    **/
    public openapisdk.models.operations.GetAdminRequestsUnmatchedNearMissesResponse getAdminRequestsUnmatchedNearMisses() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/requests/unmatched/near-misses");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAdminRequestsUnmatchedNearMissesResponse res = new openapisdk.models.operations.GetAdminRequestsUnmatchedNearMissesResponse() {{
            getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAdminRequestsUnmatchedNearMisses200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAdminRequestsUnmatchedNearMisses200ApplicationJson.class);
                res.getAdminRequestsUnmatchedNearMisses200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAdminNearMissesRequest - Find near misses matching specific request
     *
     * Find at most 3 near misses for closest stub mappings to the specified request
    **/
    public openapisdk.models.operations.PostAdminNearMissesRequestResponse postAdminNearMissesRequest(openapisdk.models.operations.PostAdminNearMissesRequestRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/near-misses/request");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAdminNearMissesRequestResponse res = new openapisdk.models.operations.PostAdminNearMissesRequestResponse() {{
            postAdminNearMissesRequest200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAdminNearMissesRequest200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAdminNearMissesRequest200ApplicationJson.class);
                res.postAdminNearMissesRequest200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAdminNearMissesRequestPattern - Find near misses matching request pattern
     *
     * Find at most 3 near misses for closest logged requests to the specified request pattern
    **/
    public openapisdk.models.operations.PostAdminNearMissesRequestPatternResponse postAdminNearMissesRequestPattern(openapisdk.models.operations.PostAdminNearMissesRequestPatternRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/near-misses/request-pattern");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAdminNearMissesRequestPatternResponse res = new openapisdk.models.operations.PostAdminNearMissesRequestPatternResponse() {{
            postAdminNearMissesRequestPattern200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAdminNearMissesRequestPattern200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAdminNearMissesRequestPattern200ApplicationJson.class);
                res.postAdminNearMissesRequestPattern200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
}