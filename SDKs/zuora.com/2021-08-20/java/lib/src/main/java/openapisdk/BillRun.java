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

public class BillRun {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public BillRun(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * objectDeleteBillRun - CRUD: Delete a bill run
     *
     * Deletes a bill run. 
     * 
     * 
     * When deleting a bill run, the logic is the same as when using the UI to delete a bill run. The only required parameter is `BillRunId`. The Status for the bill run must be `Canceled` in order to delete a bill run.
     * 
    **/
    public openapisdk.models.operations.ObjectDeleteBillRunResponse objectDeleteBillRun(openapisdk.models.operations.ObjectDeleteBillRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/object/bill-run/{id}", request.pathParams);
        
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

        openapisdk.models.operations.ObjectDeleteBillRunResponse res = new openapisdk.models.operations.ObjectDeleteBillRunResponse() {{
            proxyDeleteResponse = null;
            proxyUnauthorizedResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyDeleteResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyDeleteResponse.class);
                res.proxyDeleteResponse = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyUnauthorizedResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyUnauthorizedResponse.class);
                res.proxyUnauthorizedResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * objectGetBillRun - CRUD: Retrieve a bill run
     *
     * Retrieves information about a bill run. 
     * 
     * 
     * Business operations depending on the completion of the bill run will not be available while the bill run query returns `PostInProgress`. Upon completion of the bill run, a query will return `Posted`.
     * 
    **/
    public openapisdk.models.operations.ObjectGetBillRunResponse objectGetBillRun(openapisdk.models.operations.ObjectGetBillRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/object/bill-run/{id}", request.pathParams);
        
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

        openapisdk.models.operations.ObjectGetBillRunResponse res = new openapisdk.models.operations.ObjectGetBillRunResponse() {{
            proxyGetBillRun = null;
            proxyUnauthorizedResponse = null;
            proxyNoDataResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyGetBillRun out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyGetBillRun.class);
                res.proxyGetBillRun = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyUnauthorizedResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyUnauthorizedResponse.class);
                res.proxyUnauthorizedResponse = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyNoDataResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyNoDataResponse.class);
                res.proxyNoDataResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * objectPostBillRun - CRUD: Create a bill run
     *
     * Creates an ad hoc bill run or a single account or multiple customer accounts.
     * 
     * When creating a single account ad hoc bill run, your request must include `AccountId` and must not include `Batch` or `BillCycleDay`. 
     * 
     * If more than 500 bill runs created by using this operation are in Pending status, no more bill runs can be created by using this operation.
     * 
    **/
    public openapisdk.models.operations.ObjectPostBillRunResponse objectPostBillRun(openapisdk.models.operations.ObjectPostBillRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/object/bill-run");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.ObjectPostBillRunResponse res = new openapisdk.models.operations.ObjectPostBillRunResponse() {{
            proxyCreateOrModifyResponse = null;
            proxyBadRequestResponse = null;
            proxyUnauthorizedResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyCreateOrModifyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyCreateOrModifyResponse.class);
                res.proxyCreateOrModifyResponse = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyBadRequestResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyBadRequestResponse.class);
                res.proxyBadRequestResponse = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyUnauthorizedResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyUnauthorizedResponse.class);
                res.proxyUnauthorizedResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * objectPutBillRun - CRUD: Post or cancel a bill run
     *
     * Posts or cancels a bill run. 
     * 
     * 
     * ## Post a Bill Run
     * 
     * Posting a bill run is an asynchronous operation. To post a bill run, the current bill run must have a status of `Completed`.
     * 
     * When a bill run is posted, its status is changed to `PostInProgress`. Once all invoices for this bill run are posted then its status is changed to `Posted`.   
     * 
     * When you post a bill run and query the status of a bill run, you will get one of the following results `PostInProgress`, `Completed`, or `Posted`. If all invoices in the bill run are posted, then the status of the bill run is `Posted`. If one or more invoices fail to post, the status will change back to `Completed` and you will need to post the bill run again.
     * 
     * ## Cancel a Bill Run
     * 
     * Canceling a bill run is an asynchronous operation. When canceling a bill run, the logic is the same as when using the UI to cancel a bill run. You need to provide the `BillRunId`, and set the Status to `Canceled`. 
     * 
     * When canceling a bill run, consider the following:
     * 
     * * Canceling a bill run with a `Completed` status.
     *   * Only the current bill run will be canceled.
     * * Canceling a bill run with a `Pending` status.
     *   * When canceling an Ad-hoc bill run, only the current bill run will be canceled.
     *   * When canceling a scheduled bill, all scheduled bill runs will be canceled.
     * 
     * The Cancel operation may not be successful. Its success depends on its current business validation. Only a bill run that has no posted invoices can be canceled. If any posted invoices belong to the bill run then an invalid value exception will be thrown with the message, "The Bill Run cannot be Cancelled, There are Posted invoices."
     * 
    **/
    public openapisdk.models.operations.ObjectPutBillRunResponse objectPutBillRun(openapisdk.models.operations.ObjectPutBillRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/object/bill-run/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
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

        openapisdk.models.operations.ObjectPutBillRunResponse res = new openapisdk.models.operations.ObjectPutBillRunResponse() {{
            proxyCreateOrModifyResponse = null;
            proxyUnauthorizedResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyCreateOrModifyResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyCreateOrModifyResponse.class);
                res.proxyCreateOrModifyResponse = out;
            }
        }
        else if (httpRes.statusCode() == 401) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ProxyUnauthorizedResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ProxyUnauthorizedResponse.class);
                res.proxyUnauthorizedResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postEmailBillingDocumentsfromBillRun - Email billing documents generated from a bill run
     *
     * Manually emails all the billing documents that are generated from a specified bill run to your customers. 
     * 
     * 
     * Bill runs can generate invoices and credit memos based on your [invoice and credit memo generation rule](https://knowledgecenter.zuora.com/CB_Billing/Invoice_Settlement/Credit_and_Debit_Memos/Rules_for_Generating_Invoices_and_Credit_Memos). Credit memos are only available if you have the Invoice Settlement feature enabled.
     * 
     * 
     * Using this API operation, the billing documents are sent to the email addresses specified in the **To Email** field of the email templates. The email template used for each billing document is set in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. See [Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information about how to edit the **To Email** field in the email template.
     * 
     * 
     * 
     * 
     * 
     * ## Notes
     *   - Even though no field is required in the Request body, you still need to specify `{}` in the request. Otherwise, an error will be returned.
     * 
     * 
     *   - You can only email posted billing documents.
     *   
     *   
     *   - You must activate the following notifications before emailing invoices and credit memos:
     *     - **Manual Email For Invoice | Manual Email For Invoice** 
     *     - **Email Credit Memo | Manually email Credit Memo**
     *  
     *   
     *   - To include the invoice PDF in the email, select the **Include Invoice PDF** check box in the **Edit notification** dialog from the Zuora UI. To include the credit memo PDF in the email, select the **Include Credit Memo PDF** check box in the **Edit notification** dialog from the Zuora UI. See [Create and Edit Notifications](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/C_Create_Notifications#section_2) for more information.
     * 
     * 
     * 
     *   - Zuora sends the email messages based on the email template you set. You can set the email template to use in the **Delivery Options** panel of the **Edit notification** dialog from the Zuora UI. By default, the following templates are used for billing documents:
     *     - Invoices: **Invoice Posted Default Email Template**
     *     - Credit memos: **Manual Email for Credit Memo Default Template**  
     * 
     *     See [Create and Edit Email Templates](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/Notifications/Create_Email_Templates) for more information.
     *   
     *   
     * 
    **/
    public openapisdk.models.operations.PostEmailBillingDocumentsfromBillRunResponse postEmailBillingDocumentsfromBillRun(openapisdk.models.operations.PostEmailBillingDocumentsfromBillRunRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/bill-runs/{billRunId}/emails", request.pathParams);
        
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

        openapisdk.models.operations.PostEmailBillingDocumentsfromBillRunResponse res = new openapisdk.models.operations.PostEmailBillingDocumentsfromBillRunResponse() {{
            commonResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommonResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommonResponseType.class);
                res.commonResponseType = out;
            }
        }

        return res;
    }
	
}