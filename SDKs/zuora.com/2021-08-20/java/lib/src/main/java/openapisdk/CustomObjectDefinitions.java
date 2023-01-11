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

public class CustomObjectDefinitions {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CustomObjectDefinitions(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteCustomObjectDefinitionByType - Delete a custom object definition
     *
     * Deletes the custom object definition for the provided type.
     * 
     * **Note:** A custom object definition can only be deleted if no record of this custom object type exists.
     * 
    **/
    public openapisdk.models.operations.DeleteCustomObjectDefinitionByTypeResponse deleteCustomObjectDefinitionByType(openapisdk.models.operations.DeleteCustomObjectDefinitionByTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/objects/definitions/default/{object}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteCustomObjectDefinitionByTypeResponse res = new openapisdk.models.operations.DeleteCustomObjectDefinitionByTypeResponse() {{
            deleteCustomObjectDefinitionByType200ApplicationJSONUriString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.deleteCustomObjectDefinitionByType200ApplicationJSONUriString = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAllCustomObjectDefinitionsInNamespace - List custom object definitions
     *
     * Get all custom objects definitions for a given tenant. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can call this operation in your old tenant and then use its response directly as the request of the [Create custom object definitions](https://www.zuora.com/developer/api-reference/#operation/POST_CustomObjectDefinitions) call in the new tenant to import all the custom objects from the old tenant.
     * 
    **/
    public openapisdk.models.operations.GetAllCustomObjectDefinitionsInNamespaceResponse getAllCustomObjectDefinitionsInNamespace(openapisdk.models.operations.GetAllCustomObjectDefinitionsInNamespaceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/objects/definitions/default");
        
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

        openapisdk.models.operations.GetAllCustomObjectDefinitionsInNamespaceResponse res = new openapisdk.models.operations.GetAllCustomObjectDefinitionsInNamespaceResponse() {{
            getAllCustomObjectDefinitionsInNamespaceResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetAllCustomObjectDefinitionsInNamespaceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetAllCustomObjectDefinitionsInNamespaceResponse.class);
                res.getAllCustomObjectDefinitionsInNamespaceResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getCustomObjectDefinitionByType - Retrieve a custom object definition
     *
     * Retrieves the custom object definition by type for the given tenant.
     * 
    **/
    public openapisdk.models.operations.GetCustomObjectDefinitionByTypeResponse getCustomObjectDefinitionByType(openapisdk.models.operations.GetCustomObjectDefinitionByTypeRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/objects/definitions/default/{object}", request.pathParams);
        
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

        openapisdk.models.operations.GetCustomObjectDefinitionByTypeResponse res = new openapisdk.models.operations.GetCustomObjectDefinitionByTypeResponse() {{
            customObjectDefinition = null;
            commonErrorResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CustomObjectDefinition out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CustomObjectDefinition.class);
                res.customObjectDefinition = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommonErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommonErrorResponse.class);
                res.commonErrorResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postCustomObjectDefinitions - Create custom object definitions
     *
     * You can post custom object definitions with the request body schema described below. 
     * 
     * This operation also allows you to use the [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) response schema as its request schema. If you want to copy all the existing custom objects from an old tenant to a new tenant, you can make a [List custom object definitions](https://www.zuora.com/developer/api-reference/#operation/GET_AllCustomObjectDefinitionsInNamespace) call in your old tenant and then use its response directly as the request of this operation in the new tenant to import all the custom objects from the old tenant.
     * 
     * The `label` field is the UI label of the custom object. The `object` field contains the API Name of the custom object.
     * 
     * ## Limitations 
     * 
     * This custom object definition has the following limitations:
     * 
     * * The maximum number of characters for the Custom Object API Name (`object`) is 64.
     * * The maximum number of characters for the Custom Object Label (`label`) is	64.
     * * The maximum number of characters for the Custom Object Description 250.
     * * The maximum number of custom fields in an custom object	is 50.
     * * The maximum number of characters for the custom field API name is	64.
     * * The maximum number of characters for the custom field label (`label`) is	64.
     * * The maximum number of characters for the custom field Description	is 250.
     * * The maximum number of picklist options is 250.
     * * The default maximum number of characters for the Text field is 512. You can configure the max length up to 4,096 characters when creating or updating the custom object definition via API.
     * 
    **/
    public openapisdk.models.operations.PostCustomObjectDefinitionsResponse postCustomObjectDefinitions(openapisdk.models.operations.PostCustomObjectDefinitionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/objects/definitions/default");
        
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

        openapisdk.models.operations.PostCustomObjectDefinitionsResponse res = new openapisdk.models.operations.PostCustomObjectDefinitionsResponse() {{
            getAllCustomObjectDefinitionsInNamespaceResponse = null;
            commonErrorResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetAllCustomObjectDefinitionsInNamespaceResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetAllCustomObjectDefinitionsInNamespaceResponse.class);
                res.getAllCustomObjectDefinitionsInNamespaceResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommonErrorResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommonErrorResponse.class);
                res.commonErrorResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postUpdateCustomObjectDefinition - Update a custom object definition
     *
     * Updates a custom object definition by posting migration resource to initiate the migration of definitions.
     * 
     * ## Limitations 
     * 
     * Updating custom field definition has the following limitations:
     * 
     * * You can only have one action per update request.
     * * You cannot delete fields from custom objects that contain records.
     * * You can only add required fields to custom objects with no records.
     * * You can change optional fields to required only on the custom objects with no records. 
     * 
    **/
    public openapisdk.models.operations.PostUpdateCustomObjectDefinitionResponse postUpdateCustomObjectDefinition(openapisdk.models.operations.PostUpdateCustomObjectDefinitionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/objects/migrations");
        
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

        openapisdk.models.operations.PostUpdateCustomObjectDefinitionResponse res = new openapisdk.models.operations.PostUpdateCustomObjectDefinitionResponse() {{
            migrationUpdateCustomObjectDefinitionsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.MigrationUpdateCustomObjectDefinitionsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.MigrationUpdateCustomObjectDefinitionsResponse.class);
                res.migrationUpdateCustomObjectDefinitionsResponse = out;
            }
        }

        return res;
    }
	
}