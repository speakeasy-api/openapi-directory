package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class SipConnectedAudio {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public SipConnectedAudio(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addCalloutCountries - Add internal call-out countries
     *
     * Specify the list of [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) countries for a master account or a sub account. To add call-out enabled countries to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To add call-out enabled countries to a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    public openapisdk.models.operations.AddCalloutCountriesResponse addCalloutCountries(openapisdk.models.operations.AddCalloutCountriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/callout_countries", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddCalloutCountriesResponse res = new openapisdk.models.operations.AddCalloutCountriesResponse() {{
            addCalloutCountries201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddCalloutCountries201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddCalloutCountries201ApplicationJson.class);
                res.addCalloutCountries201ApplicationJSONObject = out;
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
     * addInternalNumbers - Add internal numbers
     *
     * This API allows a master account with SIP Connected Audio plan to assign internal phone numbers (i.e., numbers that are not provided by Zoom but are owned by the organization consuming the API) to a master account or a sub account.<br><br>To add internal numbers to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To add internal numbers to a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
     * 
     * 
    **/
    public openapisdk.models.operations.AddInternalNumbersResponse addInternalNumbers(openapisdk.models.operations.AddInternalNumbersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/internal_numbers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddInternalNumbersResponse res = new openapisdk.models.operations.AddInternalNumbersResponse() {{
            addInternalNumbers201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddInternalNumbers201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddInternalNumbers201ApplicationJson.class);
                res.addInternalNumbers201ApplicationJSONObject = out;
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
     * assignSipConfig - Assign SIP trunk configuration
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br> Using this API, a master account owner can copy the SIP Connected Audio configurations applied on the master account and enable those configurations on a sub account. The owner can also disable the configuration in the sub account where it was previously enabled. 
     * **Prerequisites:**<br>
     * * Pro or a higher account with SIP Connected Audio plan enabled.
     * * master account Owner<br>
     * **Scopes:** `sip_trunk:master`<br> 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.AssignSipConfigResponse assignSipConfig(openapisdk.models.operations.AssignSipConfigRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/settings", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AssignSipConfigResponse res = new openapisdk.models.operations.AssignSipConfigResponse() {{
            assignSIPConfig204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.assignSIPConfig204ApplicationJSONAny = out;
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
     * assignSipTrunks - Assign SIP trunks
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers’ IP telephony network, will be connected over this trunk rather than over the PSTN.<br><br>Use this API to assign SIP trunk(s) that are available on a master account to a sub account. <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a master account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    public openapisdk.models.operations.AssignSipTrunksResponse assignSipTrunks(openapisdk.models.operations.AssignSipTrunksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/trunks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AssignSipTrunksResponse res = new openapisdk.models.operations.AssignSipTrunksResponse() {{
            assignSIPTrunks201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AssignSipTrunks201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AssignSipTrunks201ApplicationJson.class);
                res.assignSIPTrunks201ApplicationJSONObject = out;
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
     * assignSipTrunkNumbers - Assign numbers
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to assign internal numbers to a sub account.
     * 
     * **Prerequisites:**<br>
     * * Pro or a higher account with SIP Connected Audio plan enabled.
     * * The account must be a master account<br>
     * **Scopes:** `sip_trunk:master`<br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     * 
    **/
    public openapisdk.models.operations.AssignSipTrunkNumbersResponse assignSipTrunkNumbers(openapisdk.models.operations.AssignSipTrunkNumbersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/numbers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AssignSipTrunkNumbersResponse res = new openapisdk.models.operations.AssignSipTrunkNumbersResponse() {{
            assignSipTrunkNumbers201ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.assignSipTrunkNumbers201ApplicationJSONAny = out;
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
     * deleteAllSipNumbers - Delete all numbers
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to delete all internal numbers assigned to a sub account.
     * **Prerequisites:**<br>
     * 
     * * Pro or a higher account with SIP Connected Audio plan enabled.
     * * The account must be a master account<br>
     * **Scopes:** `sip_trunk:master`<br>
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.DeleteAllSipNumbersResponse deleteAllSipNumbers(openapisdk.models.operations.DeleteAllSipNumbersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/numbers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAllSipNumbersResponse res = new openapisdk.models.operations.DeleteAllSipNumbersResponse() {{
            deleteAllSipNumbers204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.deleteAllSipNumbers204ApplicationJSONAny = out;
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
     * deleteInternalCallOutCountry - Delete internal call-out country
     *
     * Delete a previously assigned [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) country from a master account or a sub account. To remove call-out country from a sub account, provide the account ID of the sub account in the `accountId` path parameter. To remove call-out country from a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    public openapisdk.models.operations.DeleteInternalCallOutCountryResponse deleteInternalCallOutCountry(openapisdk.models.operations.DeleteInternalCallOutCountryRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/callout_countries/{countryId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteInternalCallOutCountryResponse res = new openapisdk.models.operations.DeleteInternalCallOutCountryResponse() {{
            deleteInternalCallOutCountry204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.deleteInternalCallOutCountry204ApplicationJSONAny = out;
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
     * deleteInternalNumber - Delete an internal number
     *
     * This API allows a master account with SIP Connected Audio plan to delete a previously assigned internal phone number from a master account or a sub account.<br><br>To delete an internal number from a sub account, provide the account ID of the sub account in the `accountId` path parameter. To delete an internal number from a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
     * 
     * 
     * 
    **/
    public openapisdk.models.operations.DeleteInternalNumberResponse deleteInternalNumber(openapisdk.models.operations.DeleteInternalNumberRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/internal_numbers/{numberId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteInternalNumberResponse res = new openapisdk.models.operations.DeleteInternalNumberResponse() {{
            deleteInternalNumber204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.deleteInternalNumber204ApplicationJSONAny = out;
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
     * deleteSipTrunk - Delete a SIP trunk
     *
     * Use this API to remove existing SIP trunk of a sub account.<br>
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a master account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    public openapisdk.models.operations.DeleteSipTrunkResponse deleteSipTrunk(openapisdk.models.operations.DeleteSipTrunkRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/trunks/{trunkId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteSipTrunkResponse res = new openapisdk.models.operations.DeleteSipTrunkResponse() {{
            deleteSIPTrunk204ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, Object> out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map.class);
                res.deleteSIPTrunk204ApplicationJSONObject = out;
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
     * listInternalCalloutCountries - List internal call-out countries
     *
     * Retrieve the list of internal [call-out](https://support.zoom.us/hc/en-us/articles/200942859-How-To-Use-Telephone-Call-Out-) countries of a master account or a sub account. To list call-out enabled countries of a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list call-out enabled countries of a master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
    **/
    public openapisdk.models.operations.ListInternalCalloutCountriesResponse listInternalCalloutCountries(openapisdk.models.operations.ListInternalCalloutCountriesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/callout_countries", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListInternalCalloutCountriesResponse res = new openapisdk.models.operations.ListInternalCalloutCountriesResponse() {{
            listInternalCalloutCountries200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListInternalCalloutCountries200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListInternalCalloutCountries200ApplicationJson.class);
                res.listInternalCalloutCountries200ApplicationJSONObject = out;
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
     * listInternalNumbers - List internal numbers
     *
     * This API allows a master account with SIP Connected Audio plan to list internal phone numbers (i.e., numbers that are not provided by Zoom but are owned by the organization consuming the API) assigned to a master account or a sub account.<br><br>To list internal numbers of a sub account, provide the account ID of the sub account in the `accountId` path parameter. To list internal numbers of a  master account, provide `me` as the value of the `accountId` path parameter.
     * <br><b>Prerequisites:</b><br>
     * * The account making this API request must be a [master account](https://marketplace.zoom.us/docs/api-reference/master-account-apis) with SIP Connected Audio Plan.<br><br>
     * **Scope:** `sip_trunk:master`
     * 
     * 
     * 
    **/
    public openapisdk.models.operations.ListInternalNumbersResponse listInternalNumbers(openapisdk.models.operations.ListInternalNumbersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/internal_numbers", request.pathParams);
        
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

        openapisdk.models.operations.ListInternalNumbersResponse res = new openapisdk.models.operations.ListInternalNumbersResponse() {{
            listInternalNumbers200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListInternalNumbers200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListInternalNumbers200ApplicationJson.class);
                res.listInternalNumbers200ApplicationJSONObject = out;
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
     * listSipTrunks - List SIP trunks
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers’ IP telephony network, will be connected over this trunk rather than over the PSTN.<br><br>
     * Use this API to list all the SIP trunks assigned to a master account or a sub account of the master account. To retrieve SIP trunks assigned to a sub account, provide the account ID of the sub account in the `accountId` path parameter. To retrieve SIP trunks of a master account, provide `me` as the value of the `accountId` path parameter. <br><br> **Scope:** `sip_trunk:read:admin`
     * <br><b>Prerequisites:</b><br>
     * * The account must either be a master account or a sub account with [API Partner Plan](https://zoom.us/plan/api) and SIP Connected Audio Plan.
    **/
    public openapisdk.models.operations.ListSipTrunksResponse listSipTrunks(openapisdk.models.operations.ListSipTrunksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/accounts/{accountId}/sip_trunk/trunks", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListSipTrunksResponse res = new openapisdk.models.operations.ListSipTrunksResponse() {{
            listSIPTrunks200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipTrunks200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipTrunks200ApplicationJson.class);
                res.listSIPTrunks200ApplicationJSONObject = out;
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
     * listSipTrunkNumbers - List SIP trunk numbers
     *
     * With SIP-connected audio, Zoom establishes a SIP trunk (a network connection specifically designed to make and deliver phone calls) over a direct and private connection between the customer’s network and the Zoom cloud. Meeting participants that dial into a meeting or have the meeting call them, and are On-Net from the perspective of the customers' IP telephony network, will be connected over this trunk rather than over the PSTN. <br><br>Use this API to list all the numbers that are configured for SIP Connected Audio in a Zoom Account.
     * 
     * **Prerequisites:**<br>
     * * Pro or a higher account with SIP Connected Audio plan enabled.
     * * The account must be a master account<br>
     * **Scopes:** `sip_trunk:master`
     *  
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.ListSipTrunkNumbersResponse listSipTrunkNumbers(openapisdk.models.operations.ListSipTrunkNumbersRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/sip_trunk/numbers");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListSipTrunkNumbersResponse res = new openapisdk.models.operations.ListSipTrunkNumbersResponse() {{
            listSipTrunkNumbers200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSipTrunkNumbers200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSipTrunkNumbers200ApplicationJson.class);
                res.listSipTrunkNumbers200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 404) {
        }

        return res;
    }
	
}