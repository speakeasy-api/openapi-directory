package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class PhoneSharedLineGroups {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public PhoneSharedLineGroups(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * addMembersToSharedLineGroup - Add members to a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to [add members](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups#h_7cb42370-48f6-4a8f-84f4-c6eee4d9f0ca) to a Shared Line Group. Note that a member can only be added to one shared line group. 
     * 
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges 
     * 
     * **Scopes:** `phone:write:admin`
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.AddMembersToSharedLineGroupResponse addMembersToSharedLineGroup(openapisdk.models.operations.AddMembersToSharedLineGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups/{sharedLineGroupId}/members", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AddMembersToSharedLineGroupResponse res = new openapisdk.models.operations.AddMembersToSharedLineGroupResponse() {{
            addMembersToSharedLineGroup201ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.addMembersToSharedLineGroup201ApplicationJSONAny = out;
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
     * assignPhoneNumbersSlg - Assign phone numbers
     *
     * Use this API to assign phone numbers to a shared line groups. These direct phone numbers will be shared among members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups).
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     * 
     * **Scopes:** `phone:write:admin`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.AssignPhoneNumbersSlgResponse assignPhoneNumbersSlg(openapisdk.models.operations.AssignPhoneNumbersSlgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups/{sharedLineGroupId}/phone_numbers", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AssignPhoneNumbersSlgResponse res = new openapisdk.models.operations.AssignPhoneNumbersSlgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 201) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * createASharedLineGroup - Create a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to create a shared line group.
     * 
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges 
     * 
     * **Scopes:** `phone:write:admin`
     *  
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.CreateASharedLineGroupResponse createASharedLineGroup(openapisdk.models.operations.CreateASharedLineGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = openapisdk.utils.Utils.configureSecurityClient(this._defaultClient, request.security);
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.CreateASharedLineGroupResponse res = new openapisdk.models.operations.CreateASharedLineGroupResponse() {{
            createASharedLineGroup200ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.createASharedLineGroup200ApplicationJSONAny = out;
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
     * deleteAMemberSlg - Unassign a member from a shared line group
     *
     * Members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) have access to the group's phone number and voicemail. Use this API to unassign **a specific member** from a Shared Line Group.
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     * 
     * **Scopes:** `phone:write:admin`
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.DeleteAMemberSlgResponse deleteAMemberSlg(openapisdk.models.operations.DeleteAMemberSlgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups/{sharedLineGroupId}/members/{memberId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAMemberSlgResponse res = new openapisdk.models.operations.DeleteAMemberSlgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }

        return res;
    }
	
	
    /**
     * deleteAPhoneNumberSlg - Unassign a phone number
     *
     * Use this API to unassign a specific phone number that was assigned to the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792-Setting-up-shared-line-groups).
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     * 
     * **Scopes:** `phone:write:admin`
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.DeleteAPhoneNumberSlgResponse deleteAPhoneNumberSlg(openapisdk.models.operations.DeleteAPhoneNumberSlgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups/{sharedLineGroupId}/phone_numbers/{phoneNumberId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteAPhoneNumberSlgResponse res = new openapisdk.models.operations.DeleteAPhoneNumberSlgResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }
        else if (httpRes.statusCode() == 400) {
        }
        else if (httpRes.statusCode() == 401) {
        }

        return res;
    }
	
	
    /**
     * deleteASharedLineGroup - Delete a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. Use this API to delete a Shared Line Group. 
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges 
     * 
     * **Scopes:** `phone:write:admin`
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.DeleteASharedLineGroupResponse deleteASharedLineGroup(openapisdk.models.operations.DeleteASharedLineGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups/{sharedLineGroupId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteASharedLineGroupResponse res = new openapisdk.models.operations.DeleteASharedLineGroupResponse() {{
            deleteASharedLineGroup204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.deleteASharedLineGroup204ApplicationJSONAny = out;
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
     * deleteMembersOfSlg - Unassign members of a shared line group
     *
     * Members of the [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) have access to the group's phone number and voicemail. Use this API to unassign **all** the existing members from a Shared Line Group.
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * A valid Shared Line Group
     * * Account owner or admin privileges
     * 
     * **Scopes:** `phone:write:admin`
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.DeleteMembersOfSlgResponse deleteMembersOfSlg(openapisdk.models.operations.DeleteMembersOfSlgRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups/{sharedLineGroupId}/members", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.DeleteMembersOfSlgResponse res = new openapisdk.models.operations.DeleteMembersOfSlgResponse() {{
            deleteMembersOfSLG204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.deleteMembersOfSLG204ApplicationJSONAny = out;
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
     * getASharedLineGroup - Get a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to list all the Shared Line Groups.
     * 
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges 
     * 
     * **Scopes:** `phone:read:admin` or `phone:write:admin`
     * 
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.GetASharedLineGroupResponse getASharedLineGroup(openapisdk.models.operations.GetASharedLineGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups/{sharedLineGroupId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetASharedLineGroupResponse res = new openapisdk.models.operations.GetASharedLineGroupResponse() {{
            getASharedLineGroup200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.GetASharedLineGroup200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.GetASharedLineGroup200ApplicationJson.class);
                res.getASharedLineGroup200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * listSharedLineGroups - List shared line groups
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to list all the Shared Line Groups.
     * 
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges  <br>
     * 
     * **Scopes:** `phone:read:admin`, `phone:write:admin`
     * 
     *  
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Medium`
    **/
    public openapisdk.models.operations.ListSharedLineGroupsResponse listSharedLineGroups(openapisdk.models.operations.ListSharedLineGroupsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups");
        
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

        openapisdk.models.operations.ListSharedLineGroupsResponse res = new openapisdk.models.operations.ListSharedLineGroupsResponse() {{
            listSharedLineGroups200ApplicationJSONObject = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.ListSharedLineGroups200ApplicationJson out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.ListSharedLineGroups200ApplicationJson.class);
                res.listSharedLineGroups200ApplicationJSONObject = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
        }

        return res;
    }
	
	
    /**
     * updateASharedLineGroup - Update a shared line group
     *
     * A [shared line group](https://support.zoom.us/hc/en-us/articles/360038850792) allows Zoom Phone admins to share a phone number and extension with a group of phone users or common area phones. This gives members of the shared line group access to the group's direct phone number and voicemail. Use this API to update information of a Shared Line Group. 
     * **Prerequisties:** <br>
     * * Pro or higher account with Zoom Phone license.
     * * Account owner or admin privileges 
     * 
     * **Scopes:** `phone:write:admin`
     * 
     *  **[Rate Limit Label](https://marketplace.zoom.us/docs/api-reference/rate-limits#rate-limits):** `Light`
    **/
    public openapisdk.models.operations.UpdateASharedLineGroupResponse updateASharedLineGroup(openapisdk.models.operations.UpdateASharedLineGroupRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/phone/shared_line_groups/{sharedLineGroupId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("PATCH");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._securityClient;
        
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UpdateASharedLineGroupResponse res = new openapisdk.models.operations.UpdateASharedLineGroupResponse() {{
            updateASharedLineGroup204ApplicationJSONAny = null;
            body = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Object out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Object.class);
                res.updateASharedLineGroup204ApplicationJSONAny = out;
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
	
}