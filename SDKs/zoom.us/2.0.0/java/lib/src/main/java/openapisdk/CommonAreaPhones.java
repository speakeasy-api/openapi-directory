package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class CommonAreaPhones {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public CommonAreaPhones(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addCommonAreaPhone - Add a common area phone
     *
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to [add a common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones#h_2d0da347-c35a-4993-9771-e21aaa568deb).<br><br>
     * **Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scope:** `phone:write:admin`<br> 
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.AddCommonAreaPhoneResponse addCommonAreaPhone(openapisdk.models.operations.AddCommonAreaPhoneRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/common_area_phones");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddCommonAreaPhoneResponse res = new openapisdk.models.operations.AddCommonAreaPhoneResponse() {{
            addCommonAreaPhone201ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.AddCommonAreaPhone201ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.AddCommonAreaPhone201ApplicationJson.class);
                res.addCommonAreaPhone201ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 409) {
        }

        return res;
    }
	
	
    /**
     * deleteCommonAreaPhone - Delete a common area phone
     *
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to remove the [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) from Zoom Phone System in an account.<br><br>**Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scopes:** `phone:write:admin`<br> 
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.DeleteCommonAreaPhoneResponse deleteCommonAreaPhone(openapisdk.models.operations.DeleteCommonAreaPhoneRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/common_area_phones/{commonAreaPhoneId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteCommonAreaPhoneResponse res = new openapisdk.models.operations.DeleteCommonAreaPhoneResponse() {{
            deleteCommonAreaPhone204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.deleteCommonAreaPhone204ApplicationJSONAny = out;
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
     * getACommonAreaPhone - Get common area phone details
     *
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to get details on a specific [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br>For the `commonAreaPhoneId`, use the unique identifier or the Mac address of the common area phone. The Mac address can be hyphenated (00-04-f2-5e-ec-3c) or not hyphenated (0004f25eec3c).<br><br>**Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scopes:** `phone:read:admin`<br> 
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.GetACommonAreaPhoneResponse getACommonAreaPhone(openapisdk.models.operations.GetACommonAreaPhoneRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/common_area_phones/{commonAreaPhoneId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetACommonAreaPhoneResponse res = new openapisdk.models.operations.GetACommonAreaPhoneResponse() {{
            getACommonAreaPhone200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetACommonAreaPhone200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetACommonAreaPhone200ApplicationJson.class);
                res.getACommonAreaPhone200ApplicationJSONObject = out;
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
     * listCommonAreaPhones - List common area phones
     *
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to [list all common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br><br>**Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br><br>
     * **Scope:** `phone:read:admin`<br> 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.ListCommonAreaPhonesResponse listCommonAreaPhones(openapisdk.models.operations.ListCommonAreaPhonesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/common_area_phones");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.ListCommonAreaPhonesResponse res = new openapisdk.models.operations.ListCommonAreaPhonesResponse() {{
            listCommonAreaPhones200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListCommonAreaPhones200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListCommonAreaPhones200ApplicationJson.class);
                res.listCommonAreaPhones200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateCommonAreaPhone - Update common area phone
     *
     * A common area phone can be provisioned by a Zoom account owner or a Zoom admin so that anyone in an organization can use it. For example, if your office has shared desks that don't belong to a specific employees, you could add a common area phone so that any person can use it.<br> Use this API to update details on a specific [common area phone](https://support.zoom.us/hc/en-us/articles/360028516231-Managing-Common-Area-Phones) in an account.<br><br>**Prerequisites:**<br>
     * * Pro or a higher account with Zoom Phone license.
     * * Account owner or admin permissions.
     * * [Supported device](https://support.zoom.us/hc/en-us/articles/360001299063-Zoom-Voice-Supported-Devices)<br>
     * **Scopes:** `phone:write:admin`<br> 
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.UpdateCommonAreaPhoneResponse updateCommonAreaPhone(openapisdk.models.operations.UpdateCommonAreaPhoneRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/common_area_phones/{commonAreaPhoneId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateCommonAreaPhoneResponse res = new openapisdk.models.operations.UpdateCommonAreaPhoneResponse() {{
            updateCommonAreaPhone204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.updateCommonAreaPhone204ApplicationJSONAny = out;
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