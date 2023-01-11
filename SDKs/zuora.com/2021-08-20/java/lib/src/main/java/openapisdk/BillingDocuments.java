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

public class BillingDocuments {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public BillingDocuments(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getBillingDocumentFilesDeletionJob - Retrieve a job of hard deleting billing document files
     *
     * Retrieves information about an asynchronous job of permanently deleting all billing document PDF files for specific accounts.
     * 
     * **Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled. 
     * 
    **/
    public openapisdk.models.operations.GetBillingDocumentFilesDeletionJobResponse getBillingDocumentFilesDeletionJob(openapisdk.models.operations.GetBillingDocumentFilesDeletionJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounts/billing-documents/files/deletion-jobs/{jobId}", request.pathParams);
        
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

        openapisdk.models.operations.GetBillingDocumentFilesDeletionJobResponse res = new openapisdk.models.operations.GetBillingDocumentFilesDeletionJobResponse() {{
            getBillingDocumentFilesDeletionJobResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetBillingDocumentFilesDeletionJobResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetBillingDocumentFilesDeletionJobResponse.class);
                res.getBillingDocumentFilesDeletionJobResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * getBillingDocuments - List billing documents for an account
     *
     * Retrieves the information about all billing documents associated with a specified account. The billing documents contain invoices, credit memos, and debit memos. 
     * 
     * To retrieve information about credit memos and debit memos, you must have the Invoice Settlement feature enabled. 
     * 
     * You can use query parameters to restrict the data returned in the response.
     * 
     * Examples:
     * - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&sort=+documentDate
     * - /billing-documents?accountId=4028905f5e4feb38015e50af9aa002d1&status=Posted
     * 
    **/
    public openapisdk.models.operations.GetBillingDocumentsResponse getBillingDocuments(openapisdk.models.operations.GetBillingDocumentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/billing-documents");
        
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

        openapisdk.models.operations.GetBillingDocumentsResponse res = new openapisdk.models.operations.GetBillingDocumentsResponse() {{
            billingDocumentQueryResponseElementType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.BillingDocumentQueryResponseElementType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.BillingDocumentQueryResponseElementType.class);
                res.billingDocumentQueryResponseElementType = out;
            }
        }

        return res;
    }
	
	
    /**
     * postBillingDocumentFilesDeletionJob - Create a job to hard delete billing document files
     *
     * Creates an asynchronous job to permanently delete all billing document PDF files for specific accounts. 
     * 
     * After the deletion job is completed, all billing document PDF files are permanently deleted. To retrieve the status of a deletion job, call [Retrieve a job of hard deleting billing document files](https://www.zuora.com/developer/api-reference/#operation/GET_BillingDocumentFilesDeletionJob).
     * 
     * **Note**: This operation can be used only if you have the Billing user permission "Hard Delete Billing Document Files" enabled. 
     * 
    **/
    public openapisdk.models.operations.PostBillingDocumentFilesDeletionJobResponse postBillingDocumentFilesDeletionJob(openapisdk.models.operations.PostBillingDocumentFilesDeletionJobRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounts/billing-documents/files/deletion-jobs");
        
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

        openapisdk.models.operations.PostBillingDocumentFilesDeletionJobResponse res = new openapisdk.models.operations.PostBillingDocumentFilesDeletionJobResponse() {{
            postBillingDocumentFilesDeletionJobResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostBillingDocumentFilesDeletionJobResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostBillingDocumentFilesDeletionJobResponse.class);
                res.postBillingDocumentFilesDeletionJobResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postGenerateBillingDocuments - Generate billing documents by account ID
     *
     * Generates draft or posted billing documents for a specified account. You can also generate billing documents for specified subscriptions of a specified account. The billing documents contain invoices and credit memos. To generate credit memos, you must have the Invoice Settlement feature enabled.
     * 
     * **Note**: You cannot generate billing documents for cancelled or suspended subscriptions.
     * 
    **/
    public openapisdk.models.operations.PostGenerateBillingDocumentsResponse postGenerateBillingDocuments(openapisdk.models.operations.PostGenerateBillingDocumentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounts/{id}/billing-documents/generate", request.pathParams);
        
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

        openapisdk.models.operations.PostGenerateBillingDocumentsResponse res = new openapisdk.models.operations.PostGenerateBillingDocumentsResponse() {{
            generateBillingDocumentResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GenerateBillingDocumentResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GenerateBillingDocumentResponseType.class);
                res.generateBillingDocumentResponseType = out;
            }
        }

        return res;
    }
	
}