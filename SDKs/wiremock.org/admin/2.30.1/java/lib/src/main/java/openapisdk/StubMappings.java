package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class StubMappings {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public StubMappings(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteAdminMappings - Delete all stub mappings
    **/
    public openapisdk.models.operations.DeleteAdminMappingsResponse deleteAdminMappings() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAdminMappingsResponse res = new openapisdk.models.operations.DeleteAdminMappingsResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * deleteAdminMappingsStubMappingId - Delete a stub mapping
    **/
    public openapisdk.models.operations.DeleteAdminMappingsStubMappingIdResponse deleteAdminMappingsStubMappingId(openapisdk.models.operations.DeleteAdminMappingsStubMappingIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings/{stubMappingId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAdminMappingsStubMappingIdResponse res = new openapisdk.models.operations.DeleteAdminMappingsStubMappingIdResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * getAdminMappings - Get all stub mappings
    **/
    public openapisdk.models.operations.GetAdminMappingsResponse getAdminMappings(openapisdk.models.operations.GetAdminMappingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAdminMappingsResponse res = new openapisdk.models.operations.GetAdminMappingsResponse() {{
            getAdminMappings200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAdminMappings200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAdminMappings200ApplicationJson.class);
                res.getAdminMappings200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAdminMappingsStubMappingId - Get stub mapping by ID
    **/
    public openapisdk.models.operations.GetAdminMappingsStubMappingIdResponse getAdminMappingsStubMappingId(openapisdk.models.operations.GetAdminMappingsStubMappingIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings/{stubMappingId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetAdminMappingsStubMappingIdResponse res = new openapisdk.models.operations.GetAdminMappingsStubMappingIdResponse() {{
            getAdminMappingsStubMappingId200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetAdminMappingsStubMappingId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetAdminMappingsStubMappingId200ApplicationJson.class);
                res.getAdminMappingsStubMappingId200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
	
    /**
     * postAdminMappings - Create a new stub mapping
    **/
    public openapisdk.models.operations.PostAdminMappingsResponse postAdminMappings(openapisdk.models.operations.PostAdminMappingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAdminMappingsResponse res = new openapisdk.models.operations.PostAdminMappingsResponse() {{
            postAdminMappings201ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAdminMappings201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAdminMappings201ApplicationJson.class);
                res.postAdminMappings201ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAdminMappingsFindByMetadata - Find stubs by matching on their metadata
    **/
    public openapisdk.models.operations.PostAdminMappingsFindByMetadataResponse postAdminMappingsFindByMetadata(openapisdk.models.operations.PostAdminMappingsFindByMetadataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings/find-by-metadata");
        
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

        openapisdk.models.operations.PostAdminMappingsFindByMetadataResponse res = new openapisdk.models.operations.PostAdminMappingsFindByMetadataResponse() {{
            postAdminMappingsFindByMetadata200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PostAdminMappingsFindByMetadata200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PostAdminMappingsFindByMetadata200ApplicationJson.class);
                res.postAdminMappingsFindByMetadata200ApplicationJSONObject = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAdminMappingsRemoveByMetadata - Delete stub mappings matching metadata
    **/
    public openapisdk.models.operations.PostAdminMappingsRemoveByMetadataResponse postAdminMappingsRemoveByMetadata(openapisdk.models.operations.PostAdminMappingsRemoveByMetadataRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings/remove-by-metadata");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAdminMappingsRemoveByMetadataResponse res = new openapisdk.models.operations.PostAdminMappingsRemoveByMetadataResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postAdminMappingsReset - Reset stub mappings
     *
     * Restores stub mappings to the defaults defined back in the backing store
    **/
    public openapisdk.models.operations.PostAdminMappingsResetResponse postAdminMappingsReset() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings/reset");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAdminMappingsResetResponse res = new openapisdk.models.operations.PostAdminMappingsResetResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * postAdminMappingsSave - Persist stub mappings
     *
     * Save all persistent stub mappings to the backing store
    **/
    public openapisdk.models.operations.PostAdminMappingsSaveResponse postAdminMappingsSave() throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings/save");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PostAdminMappingsSaveResponse res = new openapisdk.models.operations.PostAdminMappingsSaveResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
        }

        return res;
    }
	
	
    /**
     * putAdminMappingsStubMappingId - Update a stub mapping
    **/
    public openapisdk.models.operations.PutAdminMappingsStubMappingIdResponse putAdminMappingsStubMappingId(openapisdk.models.operations.PutAdminMappingsStubMappingIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/__admin/mappings/{stubMappingId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.PutAdminMappingsStubMappingIdResponse res = new openapisdk.models.operations.PutAdminMappingsStubMappingIdResponse() {{
            putAdminMappingsStubMappingId200ApplicationJSONObject = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.PutAdminMappingsStubMappingId200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.PutAdminMappingsStubMappingId200ApplicationJson.class);
                res.putAdminMappingsStubMappingId200ApplicationJSONObject = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
}