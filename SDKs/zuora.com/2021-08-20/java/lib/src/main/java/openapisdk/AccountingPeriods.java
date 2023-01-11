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

public class AccountingPeriods {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AccountingPeriods(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * deleteAccountingPeriod - Delete an accounting period
     *
     * Deletes an accounting period.
     * 
     * Prerequisites
     * -------------
     * 
     *  * You must have Zuora Finance enabled on your tenant.
     * 
     *  * You must have the Delete Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
     * 
     * 
     * Limitations
     * -----------
     * 
     * The accounting period to be deleted:
     * 
     * * Must be the most recent accounting period
     * 
     * * Must be an open accounting period
     * 
     * * Must have no revenue distributed into it
     * 
     * * Must not have any active journal entries
     * 
     * * Must not be the open-ended accounting period
     * 
     * * Must not be in the process of running a trial balance
     * 
    **/
    public openapisdk.models.operations.DeleteAccountingPeriodResponse deleteAccountingPeriod(openapisdk.models.operations.DeleteAccountingPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods/{ap-id}", request.pathParams);
        
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

        openapisdk.models.operations.DeleteAccountingPeriodResponse res = new openapisdk.models.operations.DeleteAccountingPeriodResponse() {{
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
	
	
    /**
     * getAccountingPeriod - Retrieve an accounting period
     *
     * Retrieves an accounting period.
     * Prerequisites
     * -------------
     * 
     * You must have Zuora Finance enabled on your tenant.
     * 
    **/
    public openapisdk.models.operations.GetAccountingPeriodResponse getAccountingPeriod(openapisdk.models.operations.GetAccountingPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods/{ap-id}", request.pathParams);
        
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

        openapisdk.models.operations.GetAccountingPeriodResponse res = new openapisdk.models.operations.GetAccountingPeriodResponse() {{
            getAccountingPeriodType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.getAccountingPeriodType = out;
            }
        }

        return res;
    }
	
	
    /**
     * getAllAccountingPeriods - List all accounting periods
     *
     * Retrieves all accounting periods on your tenant.
    **/
    public openapisdk.models.operations.GetAllAccountingPeriodsResponse getAllAccountingPeriods(openapisdk.models.operations.GetAllAccountingPeriodsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods");
        
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

        openapisdk.models.operations.GetAllAccountingPeriodsResponse res = new openapisdk.models.operations.GetAllAccountingPeriodsResponse() {{
            getAccountingPeriodsType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.GetAccountingPeriodsType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.GetAccountingPeriodsType.class);
                res.getAccountingPeriodsType = out;
            }
        }

        return res;
    }
	
	
    /**
     * postAccountingPeriod - Create an accounting period
     *
     * Creates an accounting period.
     * Prerequisites
     * -------------
     * * You must have Zuora Finance enabled on your tenant.
     * * You must have the Create Accounting Period user permission.
     * 
     * Limitations
     * -----------
     * * When creating the first accounting period on your tenant, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
     * * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
     * * If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
    **/
    public openapisdk.models.operations.PostAccountingPeriodResponse postAccountingPeriod(openapisdk.models.operations.PostAccountingPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods");
        
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

        openapisdk.models.operations.PostAccountingPeriodResponse res = new openapisdk.models.operations.PostAccountingPeriodResponse() {{
            postAccountingPeriodResponseType = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json; charset=utf-8")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PostAccountingPeriodResponseType out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PostAccountingPeriodResponseType.class);
                res.postAccountingPeriodResponseType = out;
            }
        }

        return res;
    }
	
	
    /**
     * putCloseAccountingPeriod - Close an accounting period
     *
     * Close an accounting period by accounting period ID.
     * 
     * Prerequisites
     * -------------
     * You must have Zuora Finance enabled on your tenant. You must have the Manage Close Process and Run Trial Balance user permissions.
     * 
     * Limitations
     * -----------
     * * The accounting period cannot already be closed.
     * * The accounting period cannot be in the process of running a trial balance.
     * * All earlier accounting periods must be closed.
     * * There must be no required action items for the accounting period. See Reconcile Transactions Before Closing an Accounting Period for more information.
     * 
     * Notes
     * -----
     * When you close an accounting period in Zuora, a trial balance is automatically run for that period. A successful response means only that the accounting period is now closed, but does not mean that the trial balance has successfully completed.
    **/
    public openapisdk.models.operations.PutCloseAccountingPeriodResponse putCloseAccountingPeriod(openapisdk.models.operations.PutCloseAccountingPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods/{ap-id}/close", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.PutCloseAccountingPeriodResponse res = new openapisdk.models.operations.PutCloseAccountingPeriodResponse() {{
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
	
	
    /**
     * putPendingCloseAccountingPeriod - Set an accounting period to pending close
     *
     * Sets an accounting period to pending close.
     * 
     * 
     * Prerequisites
     * -------------
     * 
     * * You must have Zuora Finance enabled on your tenant.
     * * You must have the Manage Close Process and Run Trial Balance user permissions.
     * 
     *             
     * Limitations 
     *  -----------
     *  
     *  * The accounting period cannot be closed or pending close.
     *  
     *  * The accounting period cannot be in the process of running a trial balance.
     *  
     *  * All earlier accounting periods must be closed.
     *  
     *  
     * Notes
     * -----
     * When you set an accounting period to pending close in Zuora, a trial balance is automatically run for that period. A response of `{ "success": true }`  means only that the accounting period status is now pending close, but does not mean that the trial balance has successfully completed. You can use the Get Accounting Period REST API call to view details about the outcome of the trial balance.
     * 
    **/
    public openapisdk.models.operations.PutPendingCloseAccountingPeriodResponse putPendingCloseAccountingPeriod(openapisdk.models.operations.PutPendingCloseAccountingPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods/{ap-id}/pending-close", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.PutPendingCloseAccountingPeriodResponse res = new openapisdk.models.operations.PutPendingCloseAccountingPeriodResponse() {{
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
	
	
    /**
     * putReopenAccountingPeriod - Reopen an accounting period
     *
     * Re-opens an accounting period.
     * Prerequisites
     * -------------
     * * You must have Zuora Finance enabled on your tenant.
     * * You must have the Manage Close Process and Run Trial Balance user permissions.
     * 
     * Limitations
     * -----------
     * * The accounting period must be closed or pending close.
     * * You can only re-open an accounting period that is immediately previous to an open period.
    **/
    public openapisdk.models.operations.PutReopenAccountingPeriodResponse putReopenAccountingPeriod(openapisdk.models.operations.PutReopenAccountingPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods/{ap-id}/reopen", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.PutReopenAccountingPeriodResponse res = new openapisdk.models.operations.PutReopenAccountingPeriodResponse() {{
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
	
	
    /**
     * putRunTrialBalance - Run trial balance
     *
     * Runs the trial balance for an accounting period. 
     * 
     * Prerequisites
     * -------------
     * 
     * * You must have Zuora Finance enabled on your tenant.
     * 
     * * You must have the Manage Close Process and Run Trial Balance user permissions. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
     * 
     *           
     * Limitations 
     * -----------
     *  
     *  * The accounting period must be open.
     *  
     *  * The accounting period cannot already be in the process of running a trial balance.
     *  
     * Notes
     * -----
     * The trial balance is run asynchronously. A response of `{ "success": true }` means only that the trial balance has started processing, but does not mean that the trial balance has successfully completed. You can use the [Get Accounting Period](https://www.zuora.com/developer/api-reference/#operation/GET_AccountingPeriod) REST API call to view details about the outcome of the trial balance.
     * 
    **/
    public openapisdk.models.operations.PutRunTrialBalanceResponse putRunTrialBalance(openapisdk.models.operations.PutRunTrialBalanceRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods/{ap-id}/run-trial-balance", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.PutRunTrialBalanceResponse res = new openapisdk.models.operations.PutRunTrialBalanceResponse() {{
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
	
	
    /**
     * putUpdateAccountingPeriod - Update an accounting period
     *
     * 
     * Updates an accounting period.
     * 
     * Prerequisites
     * -------------
     * 
     * * You must have Zuora Finance enabled on your tenant.
     * 
     * * You must have the Create Accounting Period user permission. See [Finance Roles](https://knowledgecenter.zuora.com/CF_Users_and_Administrators/A_Administrator_Settings/User_Roles/f_Finance_Roles).
     * 
     * Limitations
     * -----------
     * 
     * * You can update the start date of only the earliest accounting period on your tenant. You cannot update the start date of later periods.
     * 
     * * If you update the earliest accounting period, the start date must be equal to or earlier than the date of the earliest transaction on the tenant.
     * 
     * * Start and end dates of accounting periods must be contiguous. For example, if one accounting period ends on January 31, the next period must start on February 1.
     * 
     * * If you have the Revenue Recognition Package and have enabled the "Monthly recognition over time" revenue recognition model, the accounting period start date and end date must be on the first day and last day of the month, respectively. Note that the start and end dates do not necessarily have to be in the same month.
     * 
     * * You cannot update the start date or end date of an accounting period if:
     *   * Any revenue has been distributed into the period.
     *   * The period has any active journal entries.
     * 
    **/
    public openapisdk.models.operations.PutUpdateAccountingPeriodResponse putUpdateAccountingPeriod(openapisdk.models.operations.PutUpdateAccountingPeriodRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/v1/accounting-periods/{ap-id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PUT");
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

        openapisdk.models.operations.PutUpdateAccountingPeriodResponse res = new openapisdk.models.operations.PutUpdateAccountingPeriodResponse() {{
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