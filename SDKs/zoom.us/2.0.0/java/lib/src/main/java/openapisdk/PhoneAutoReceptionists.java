package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class PhoneAutoReceptionists {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PhoneAutoReceptionists(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addAutoReceptionist - Add an auto receptionist
     *
     * Auto receptionists answer calls with a personalized recording and routes calls to a phone user, call queue, common area phone, voicemail or an IVR system. Use this API to add an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-) to a Zoom Phone.<br>
     * 
     * **Prerequisites:**<br>
     * * Pro or higher account with Zoom Phone license.<br>
     * **Scopes:** `phone:write:admin` <br> 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     * 
     * 
    **/
    public openapisdk.models.operations.AddAutoReceptionistResponse addAutoReceptionist(openapisdk.models.operations.AddAutoReceptionistRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/auto_receptionists");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddAutoReceptionistResponse res = new openapisdk.models.operations.AddAutoReceptionistResponse() {{
            addAutoReceptionist201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddAutoReceptionist201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddAutoReceptionist201ApplicationJson.class);
                res.addAutoReceptionist201ApplicationJSONObject = out;
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
     * assignPhoneNumbersAutoReceptionist - Assign phone numbers
     *
     * Assign available phone numbers to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-). The available numbers can be retrieved using the List Phone Numbers API with `type` query parameter set to "unassigned".
     * 
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br> 
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.AssignPhoneNumbersAutoReceptionistResponse assignPhoneNumbersAutoReceptionist(openapisdk.models.operations.AssignPhoneNumbersAutoReceptionistRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/auto_receptionists/{autoReceptionistId}/phone_numbers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AssignPhoneNumbersAutoReceptionistResponse res = new openapisdk.models.operations.AssignPhoneNumbersAutoReceptionistResponse() {{
            assignPhoneNumbersAutoReceptionist204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.assignPhoneNumbersAutoReceptionist204ApplicationJSONAny = out;
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
     * unassignAPhoneNumAutoReceptionist - Unassign a phone number
     *
     * Unassign a specific phone number that was previously assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-). 
     * 
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br> 
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.UnassignAPhoneNumAutoReceptionistResponse unassignAPhoneNumAutoReceptionist(openapisdk.models.operations.UnassignAPhoneNumAutoReceptionistRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/auto_receptionists/{autoReceptionistId}/phone_numbers/{phoneNumberId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UnassignAPhoneNumAutoReceptionistResponse res = new openapisdk.models.operations.UnassignAPhoneNumAutoReceptionistResponse() {{
            unassignAPhoneNumAutoReceptionist204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.unassignAPhoneNumAutoReceptionist204ApplicationJSONAny = out;
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
     * unassignAllPhoneNumsAutoReceptionist - Unassign all phone numbers
     *
     * Unassign all phone numbers that were previously assigned to an [auto receptionist](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-). 
     * 
     * **Prerequisites:**
     * * Pro or higher account plan with Zoom Phone License
     * * Account owner or admin permissions<br>
     * **Scopes:** `phone:write:admin`<br> 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
     * 
    **/
    public openapisdk.models.operations.UnassignAllPhoneNumsAutoReceptionistResponse unassignAllPhoneNumsAutoReceptionist(openapisdk.models.operations.UnassignAllPhoneNumsAutoReceptionistRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/auto_receptionists/{autoReceptionistId}/phone_numbers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UnassignAllPhoneNumsAutoReceptionistResponse res = new openapisdk.models.operations.UnassignAllPhoneNumsAutoReceptionistResponse() {{
            unassignAllPhoneNumsAutoReceptionist204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.unassignAllPhoneNumsAutoReceptionist204ApplicationJSONAny = out;
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
	
	
    /**
     * updateAutoReceptionist - Update auto receptionist details
     *
     * An auto receptionist answers calls with a personalized recording and routes calls to a phone user, call queue, common area phone, or voicemail. An auto receptionist can also be set up so that it routes calls to an interactive voice response (IVR) system to allow callers to select the routing options.<br>
     * Use this API to [change information](https://support.zoom.us/hc/en-us/articles/360021121312-Managing-Auto-Receptionists-and-Interactive-Voice-Response-IVR-#h_1d5ffc56-6ba3-4ce5-9d86-4a1a1ee743f3) such as display name and extension number assigned to the main auto receptionist.<br><br>
     * **Prerequisites:**<br>
     * * Pro or higher account with Zoom Phone license.<br>
     * **Scopes:** `phone:write:admin` <br> 
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.UpdateAutoReceptionistResponse updateAutoReceptionist(openapisdk.models.operations.UpdateAutoReceptionistRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/auto_receptionists/{autoReceptionistId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateAutoReceptionistResponse res = new openapisdk.models.operations.UpdateAutoReceptionistResponse() {{
            updateAutoReceptionist204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.updateAutoReceptionist204ApplicationJSONAny = out;
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