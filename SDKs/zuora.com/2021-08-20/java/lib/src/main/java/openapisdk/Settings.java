package openapisdk;

import openapisdk.utils.HTTPClient;
import java.util.function.Function;
import java.util.stream.Collectors;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;

public class Settings {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public Settings(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * getListAllSettings - List all settings
     *
     * Get a list of all available settings in your tenant. 
     * 
     * The response message is by default in JSON format. If you want to receive all the availabe settings in csv format, include `Accept` in the header parameters and set it to `application/csv`.
     *             
     * See a [200 response sample in JSON format](https://assets.zuora.com/zuora-documentation/ListAllSettingsResponseSample.json).
     * 
     * See a [200 response sample in CSV format](https://assets.zuora.com/zuora-documentation/ListAllSettingsResponseSample.csv).
     * 
     * You can find a specific operate of an available setting item in your tenant from the 200 response body of this call. See the following tutorials of Settings API for how to operate on a specifc setting item.
     * 
     *  * Billing Rules:
     *    * [Get a specific setting - Billing Rules](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/AA_Get_a_specific_setting_-_Billing_Rules)
     *    * [Update a specific setting - Billing Rules](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/AB_Update_a_specific_setting_-_Billing_Rules)
     *  * Age Buckets:
     *    * [Get Age Buckets](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_Age_Buckets)
     *    * [Update Age Buckets](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Update_Age_Buckets)
     *  * Invoice Templates:
     *    * [Get a specific Invoice Template](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_a_specific_Invoice_Template)
     *    * [Get all Invoice Templates](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Invoice_Templates)
     *    * [Create a new Invoice Template](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Invoice_Template)
     *  * Communications Profiles:
     *    * [Get all Communication Profiles](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Communication_Profiles)
     *    * [Create a new Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Communication_Profile)
     *    * [Modify a Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Modify_a_Communication_Profile)
     *    * [Get all Notifications under a particular Communication Profile](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_all_Notifications_under_a_particular_Communication_Profile)
     *  * Chart of Accounts:
     *    * [Get Chart of Accounts](https://knowledgecenter.zuora.com/DC_Developers/BB_C_Settings_API/Settings_API_tutorials/Get_Chart_of_Accounts)
     *    * [Add a new Chart of Account](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Add_a_new_Chart_of_Account)
     *  * Quote Templates:
     *    * [Get all Quote Templates](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Get_all_Quote_Templates)
     *    * [Get a specific Quote Template](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Get_a_specific_Quote_Template)
     *    * [Create a new Quote Template](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Create_a_new_Quote_Template)
     *  * Custom Fields:
     *    * [View all custom fields](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/View_all_custom_fields)
     *    * [View custom fields of a specific object](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/View_custom_fields_of_a_specific_object)
     *    * [Update custom fields of a specific object](https://knowledgecenter.zuora.com/Central_Platform/API/BB_C_Settings_API/Settings_API_tutorials/Update_custom_fields_of_a_specific_object)
     * 
    **/
    public openapisdk.models.operations.GetListAllSettingsResponse getListAllSettings(openapisdk.models.operations.GetListAllSettingsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/settings/listing");
        
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

        openapisdk.models.operations.GetListAllSettingsResponse res = new openapisdk.models.operations.GetListAllSettingsResponse() {{
            body = null;
            listAllSettingsResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/csv")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ListAllSettingsResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ListAllSettingsResponse.class);
                res.listAllSettingsResponse = out;
            }
        }

        return res;
    }
	
	
    /**
     * postProcessSettingsBatchRequest - Submit settings requests
     *
     * Submit a batch of settings requests by this single API operation.
     * 
     * By default, one batch settings request can contain a maximum of 100 single operation requests, including: 
     * * All the single requests in the process batch settings request.
     * * All the children requests of the single requests.
     * 
     * This maximum value is configurable.
     * 
    **/
    public openapisdk.models.operations.PostProcessSettingsBatchRequestResponse postProcessSettingsBatchRequest(openapisdk.models.operations.PostProcessSettingsBatchRequestRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/settings/batch-requests");
        
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

        openapisdk.models.operations.PostProcessSettingsBatchRequestResponse res = new openapisdk.models.operations.PostProcessSettingsBatchRequestResponse() {{
            settingsBatchResponse = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            res.headers = httpRes.headers().map().keySet().stream().collect(Collectors.toMap(Function.identity(), k -> httpRes.headers().allValues(k).toArray(new String[0])));
            
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SettingsBatchResponse out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SettingsBatchResponse.class);
                res.settingsBatchResponse = out;
            }
        }

        return res;
    }
	
}