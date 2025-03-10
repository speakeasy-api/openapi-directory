/* 
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

package org.openapis.openapi;

import com.fasterxml.jackson.databind.ObjectMapper;
import java.net.http.HttpResponse;
import java.nio.charset.StandardCharsets;
import org.openapis.openapi.utils.HTTPClient;
import org.openapis.openapi.utils.HTTPRequest;
import org.openapis.openapi.utils.JSON;
import org.openapis.openapi.utils.SerializedBody;

public class PriceAssociation {
	
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PriceAssociation(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}

    /**
     * Disassociate price association by ID
     * Disassociates a price association from a shopping scenario by its ID
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.DeleteVCustomPricesRulesPriceAssociationIdResponse deleteVCustomPricesRulesPriceAssociationId(org.openapis.openapi.models.operations.DeleteVCustomPricesRulesPriceAssociationIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.DeleteVCustomPricesRulesPriceAssociationIdRequest.class, baseUrl, "/_v/custom-prices/rules/{priceAssociationId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = org.openapis.openapi.utils.Utils.getHeaders(request);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.DeleteVCustomPricesRulesPriceAssociationIdResponse res = new org.openapis.openapi.models.operations.DeleteVCustomPricesRulesPriceAssociationIdResponse(contentType, httpRes.statusCode()) {{
            deleteVCustomPricesRulesPriceAssociationId200ApplicationJSONString = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.deleteVCustomPricesRulesPriceAssociationId200ApplicationJSONString = out;
            }
        }

        return res;
    }

    /**
     * Get price association by ID
     * Retrieves price association for a shopping scenario by its ID
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationIdResponse getVCustomPricesRulesPriceAssociationId(org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationIdRequest.class, baseUrl, "/_v/custom-prices/rules/{priceAssociationId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.Map<String, java.util.List<String>> headers = org.openapis.openapi.utils.Utils.getHeaders(request);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationIdResponse res = new org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationIdResponse(contentType, httpRes.statusCode()) {{
            getVCustomPricesRulesPriceAssociationId200ApplicationJSONObject = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationId200ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.GetVCustomPricesRulesPriceAssociationId200ApplicationJSON.class);
                res.getVCustomPricesRulesPriceAssociationId200ApplicationJSONObject = out;
            }
        }

        return res;
    }

    /**
     * Create price association
     * Creates a new price association for a shopping scenario
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PostVCustomPricesRulesResponse postVCustomPricesRules(org.openapis.openapi.models.operations.PostVCustomPricesRulesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(baseUrl, "/_v/custom-prices/rules");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "requestBody", "json");
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = org.openapis.openapi.utils.Utils.getHeaders(request);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PostVCustomPricesRulesResponse res = new org.openapis.openapi.models.operations.PostVCustomPricesRulesResponse(contentType, httpRes.statusCode()) {{
            postVCustomPricesRules200ApplicationJSONObject = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.PostVCustomPricesRules200ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.PostVCustomPricesRules200ApplicationJSON.class);
                res.postVCustomPricesRules200ApplicationJSONObject = out;
            }
        }

        return res;
    }

    /**
     * Update price association by ID
     * Updates a price association for a shopping scenario by its ID
     * @param request the request object containing all of the parameters for the API call
     * @return the response from the API call
     * @throws Exception if the API call fails
     */
    public org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationIdResponse putVCustomPricesRulesPriceAssociationId(org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = org.openapis.openapi.utils.Utils.generateURL(org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationIdRequest.class, baseUrl, "/_v/custom-prices/rules/{priceAssociationId}", request, null);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = org.openapis.openapi.utils.Utils.serializeRequestBody(request, "requestBody", "json");
        req.setBody(serializedRequestBody);
        
        java.util.Map<String, java.util.List<String>> headers = org.openapis.openapi.utils.Utils.getHeaders(request);
        if (headers != null) {
            for (java.util.Map.Entry<String, java.util.List<String>> header : headers.entrySet()) {
                for (String value : header.getValue()) {
                    req.addHeader(header.getKey(), value);
                }
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().firstValue("Content-Type").orElse("application/octet-stream");

        org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationIdResponse res = new org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationIdResponse(contentType, httpRes.statusCode()) {{
            putVCustomPricesRulesPriceAssociationId200ApplicationJSONObject = null;
        }};
        res.rawResponse = httpRes;
        
        if (httpRes.statusCode() == 200) {
            if (org.openapis.openapi.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = JSON.getMapper();
                org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationId200ApplicationJSON out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), org.openapis.openapi.models.operations.PutVCustomPricesRulesPriceAssociationId200ApplicationJSON.class);
                res.putVCustomPricesRulesPriceAssociationId200ApplicationJSONObject = out;
            }
        }

        return res;
    }
}