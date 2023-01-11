package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import openapisdk.utils.SerializedBody;
import org.apache.http.NameValuePair;

public class UserApi {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public UserApi(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    public openapisdk.models.operations.UserApiDeleteFollowedTagResponse userApiDeleteFollowedTag(openapisdk.models.operations.UserApiDeleteFollowedTagRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/current/followedTags/{tagId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiDeleteFollowedTagResponse res = new openapisdk.models.operations.UserApiDeleteFollowedTagResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * userApiDeleteMessages - Deletes a list of user messages.
    **/
    public openapisdk.models.operations.UserApiDeleteMessagesResponse userApiDeleteMessages(openapisdk.models.operations.UserApiDeleteMessagesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/messages", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiDeleteMessagesResponse res = new openapisdk.models.operations.UserApiDeleteMessagesResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * userApiDeleteProfileComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    public openapisdk.models.operations.UserApiDeleteProfileCommentResponse userApiDeleteProfileComment(openapisdk.models.operations.UserApiDeleteProfileCommentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/profileComments/{commentId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiDeleteProfileCommentResponse res = new openapisdk.models.operations.UserApiDeleteProfileCommentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * userApiGetAlbumCollection - Gets a list of albums in a user's collection.
     *
     * This includes albums that have been rated by the user as well as albums that the user has bought or wishlisted.
     *             Note that the user might have set his album ownership status and media type as private, in which case those properties are not included.
    **/
    public openapisdk.models.operations.UserApiGetAlbumCollectionResponse userApiGetAlbumCollection(openapisdk.models.operations.UserApiGetAlbumCollectionRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/albums", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetAlbumCollectionResponse res = new openapisdk.models.operations.UserApiGetAlbumCollectionResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            partialFindResultAlbumForUserForApiContract = null;
            partialFindResultAlbumForUserForApiContract = null;
            partialFindResultAlbumForUserForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultAlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultAlbumForUserForApiContract.class);
                res.partialFindResultAlbumForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultAlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultAlbumForUserForApiContract.class);
                res.partialFindResultAlbumForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultAlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultAlbumForUserForApiContract.class);
                res.partialFindResultAlbumForUserForApiContract = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UserApiGetAlbumForUserResponse userApiGetAlbumForUser(openapisdk.models.operations.UserApiGetAlbumForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/album-collection-statuses/{albumId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetAlbumForUserResponse res = new openapisdk.models.operations.UserApiGetAlbumForUserResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            albumForUserForApiContract = null;
            albumForUserForApiContract = null;
            albumForUserForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract.class);
                res.albumForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract.class);
                res.albumForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract.class);
                res.albumForUserForApiContract = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UserApiGetArtistForUserResponse userApiGetArtistForUser(openapisdk.models.operations.UserApiGetArtistForUserRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/followedArtists/{artistId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetArtistForUserResponse res = new openapisdk.models.operations.UserApiGetArtistForUserResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            artistForUserForApiContract = null;
            artistForUserForApiContract = null;
            artistForUserForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtistForUserForApiContract.class);
                res.artistForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtistForUserForApiContract.class);
                res.artistForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtistForUserForApiContract.class);
                res.artistForUserForApiContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetCurrent - Gets information about the currently logged in user.
     *
     * Requires login information.
     *             This API supports CORS, and is restricted to specific origins.
    **/
    public openapisdk.models.operations.UserApiGetCurrentResponse userApiGetCurrent(openapisdk.models.operations.UserApiGetCurrentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/current");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetCurrentResponse res = new openapisdk.models.operations.UserApiGetCurrentResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            userForApiContract = null;
            userForApiContract = null;
            userForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserForApiContract.class);
                res.userForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserForApiContract.class);
                res.userForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserForApiContract.class);
                res.userForApiContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetEvents - Gets a list of events a user has subscribed to.
    **/
    public openapisdk.models.operations.UserApiGetEventsResponse userApiGetEvents(openapisdk.models.operations.UserApiGetEventsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/events", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetEventsResponse res = new openapisdk.models.operations.UserApiGetEventsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            releaseEventForApiContracts = null;
            releaseEventForApiContracts = null;
            releaseEventForApiContracts = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ReleaseEventForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ReleaseEventForApiContract[].class);
                res.releaseEventForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ReleaseEventForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ReleaseEventForApiContract[].class);
                res.releaseEventForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ReleaseEventForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ReleaseEventForApiContract[].class);
                res.releaseEventForApiContracts = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetFollowedArtists - Gets a list of artists followed by a user.
    **/
    public openapisdk.models.operations.UserApiGetFollowedArtistsResponse userApiGetFollowedArtists(openapisdk.models.operations.UserApiGetFollowedArtistsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/followedArtists", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetFollowedArtistsResponse res = new openapisdk.models.operations.UserApiGetFollowedArtistsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            partialFindResultArtistForUserForApiContract = null;
            partialFindResultArtistForUserForApiContract = null;
            partialFindResultArtistForUserForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultArtistForUserForApiContract.class);
                res.partialFindResultArtistForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultArtistForUserForApiContract.class);
                res.partialFindResultArtistForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultArtistForUserForApiContract.class);
                res.partialFindResultArtistForUserForApiContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetList - Gets a list of users.
    **/
    public openapisdk.models.operations.UserApiGetListResponse userApiGetList(openapisdk.models.operations.UserApiGetListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetListResponse res = new openapisdk.models.operations.UserApiGetListResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            partialFindResultUserForApiContract = null;
            partialFindResultUserForApiContract = null;
            partialFindResultUserForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultUserForApiContract.class);
                res.partialFindResultUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultUserForApiContract.class);
                res.partialFindResultUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultUserForApiContract.class);
                res.partialFindResultUserForApiContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetMessage - Gets a user message.
     *
     * The message will be marked as read.
     *             User can only load messages from their own inbox.
    **/
    public openapisdk.models.operations.UserApiGetMessageResponse userApiGetMessage(openapisdk.models.operations.UserApiGetMessageRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/messages/{messageId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetMessageResponse res = new openapisdk.models.operations.UserApiGetMessageResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            userMessageContract = null;
            userMessageContract = null;
            userMessageContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserMessageContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserMessageContract.class);
                res.userMessageContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserMessageContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserMessageContract.class);
                res.userMessageContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserMessageContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserMessageContract.class);
                res.userMessageContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetMessages - Gets a list of messages.
    **/
    public openapisdk.models.operations.UserApiGetMessagesResponse userApiGetMessages(openapisdk.models.operations.UserApiGetMessagesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/messages", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetMessagesResponse res = new openapisdk.models.operations.UserApiGetMessagesResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            partialFindResultUserMessageContract = null;
            partialFindResultUserMessageContract = null;
            partialFindResultUserMessageContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultUserMessageContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultUserMessageContract.class);
                res.partialFindResultUserMessageContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultUserMessageContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultUserMessageContract.class);
                res.partialFindResultUserMessageContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultUserMessageContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultUserMessageContract.class);
                res.partialFindResultUserMessageContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetNames - Gets a list of user names. Ideal for autocomplete boxes.
    **/
    public openapisdk.models.operations.UserApiGetNamesResponse userApiGetNames(openapisdk.models.operations.UserApiGetNamesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/names");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetNamesResponse res = new openapisdk.models.operations.UserApiGetNamesResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            userApiGetNames200ApplicationJSONStrings = null;
            userApiGetNames200ApplicationJsonpStrings = null;
            userApiGetNames200TextJSONStrings = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.userApiGetNames200ApplicationJSONStrings = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.userApiGetNames200ApplicationJsonpStrings = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.userApiGetNames200TextJSONStrings = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetOne - Gets user by ID.
    **/
    public openapisdk.models.operations.UserApiGetOneResponse userApiGetOne(openapisdk.models.operations.UserApiGetOneRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetOneResponse res = new openapisdk.models.operations.UserApiGetOneResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            userForApiContract = null;
            userForApiContract = null;
            userForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserForApiContract.class);
                res.userForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserForApiContract.class);
                res.userForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.UserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.UserForApiContract.class);
                res.userForApiContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetProfileComments - Gets a list of comments posted on user's profile.
    **/
    public openapisdk.models.operations.UserApiGetProfileCommentsResponse userApiGetProfileComments(openapisdk.models.operations.UserApiGetProfileCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/profileComments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetProfileCommentsResponse res = new openapisdk.models.operations.UserApiGetProfileCommentsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            partialFindResultCommentForApiContract = null;
            partialFindResultCommentForApiContract = null;
            partialFindResultCommentForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultCommentForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultCommentForApiContract.class);
                res.partialFindResultCommentForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultCommentForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultCommentForApiContract.class);
                res.partialFindResultCommentForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultCommentForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultCommentForApiContract.class);
                res.partialFindResultCommentForApiContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetRatedSongs - Gets a list of songs rated by a user.
    **/
    public openapisdk.models.operations.UserApiGetRatedSongsResponse userApiGetRatedSongs(openapisdk.models.operations.UserApiGetRatedSongsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/ratedSongs", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetRatedSongsResponse res = new openapisdk.models.operations.UserApiGetRatedSongsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            partialFindResultRatedSongForUserForApiContract = null;
            partialFindResultRatedSongForUserForApiContract = null;
            partialFindResultRatedSongForUserForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultRatedSongForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultRatedSongForUserForApiContract.class);
                res.partialFindResultRatedSongForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultRatedSongForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultRatedSongForUserForApiContract.class);
                res.partialFindResultRatedSongForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultRatedSongForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultRatedSongForUserForApiContract.class);
                res.partialFindResultRatedSongForUserForApiContract = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UserApiGetSongListsResponse userApiGetSongLists(openapisdk.models.operations.UserApiGetSongListsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/songLists", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetSongListsResponse res = new openapisdk.models.operations.UserApiGetSongListsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            partialFindResultSongListForApiContract = null;
            partialFindResultSongListForApiContract = null;
            partialFindResultSongListForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultSongListForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultSongListForApiContract.class);
                res.partialFindResultSongListForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultSongListForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultSongListForApiContract.class);
                res.partialFindResultSongListForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultSongListForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultSongListForApiContract.class);
                res.partialFindResultSongListForApiContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetSongRating - Gets a specific user's rating for a song.
    **/
    public openapisdk.models.operations.UserApiGetSongRatingResponse userApiGetSongRating(openapisdk.models.operations.UserApiGetSongRatingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/ratedSongs/{songId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetSongRatingResponse res = new openapisdk.models.operations.UserApiGetSongRatingResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            userApiGetSongRating200ApplicationJSONStringEnum = null;
            userApiGetSongRating200ApplicationJsonpStringEnum = null;
            userApiGetSongRating200TextJSONStringEnum = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UserApiGetSongRating200ApplicationJsonEnum out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UserApiGetSongRating200ApplicationJsonEnum.class);
                res.userApiGetSongRating200ApplicationJSONStringEnum = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UserApiGetSongRating200ApplicationJsonpEnum out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UserApiGetSongRating200ApplicationJsonpEnum.class);
                res.userApiGetSongRating200ApplicationJsonpStringEnum = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UserApiGetSongRating200TextJsonEnum out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UserApiGetSongRating200TextJsonEnum.class);
                res.userApiGetSongRating200TextJSONStringEnum = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiGetSongRatingForCurrent - Gets currently logged in user's rating for a song.
     *
     * Requires authentication.
    **/
    public openapisdk.models.operations.UserApiGetSongRatingForCurrentResponse userApiGetSongRatingForCurrent(openapisdk.models.operations.UserApiGetSongRatingForCurrentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/current/ratedSongs/{songId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiGetSongRatingForCurrentResponse res = new openapisdk.models.operations.UserApiGetSongRatingForCurrentResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            userApiGetSongRatingForCurrent200ApplicationJSONStringEnum = null;
            userApiGetSongRatingForCurrent200ApplicationJsonpStringEnum = null;
            userApiGetSongRatingForCurrent200TextJSONStringEnum = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UserApiGetSongRatingForCurrent200ApplicationJsonEnum out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UserApiGetSongRatingForCurrent200ApplicationJsonEnum.class);
                res.userApiGetSongRatingForCurrent200ApplicationJSONStringEnum = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UserApiGetSongRatingForCurrent200ApplicationJsonpEnum out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UserApiGetSongRatingForCurrent200ApplicationJsonpEnum.class);
                res.userApiGetSongRatingForCurrent200ApplicationJsonpStringEnum = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.operations.UserApiGetSongRatingForCurrent200TextJsonEnum out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.operations.UserApiGetSongRatingForCurrent200TextJsonEnum.class);
                res.userApiGetSongRatingForCurrent200TextJSONStringEnum = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiPostAlbumStatus - Add or update collection status, media type and rating for a specific album, for the currently logged in user.
     *
     * If the user has already rated the album, any previous rating is replaced.
     *             Authorization cookie must be included.
    **/
    public openapisdk.models.operations.UserApiPostAlbumStatusResponse userApiPostAlbumStatus(openapisdk.models.operations.UserApiPostAlbumStatusRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/current/albums/{albumId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiPostAlbumStatusResponse res = new openapisdk.models.operations.UserApiPostAlbumStatusResponse() {{
            userApiPostAlbumStatus200ApplicationJavascriptString = null;
            userApiPostAlbumStatus200ApplicationJSONString = null;
            userApiPostAlbumStatus200ApplicationJsonpString = null;
            userApiPostAlbumStatus200ApplicationXMLString = null;
            userApiPostAlbumStatus200TextJavascriptString = null;
            userApiPostAlbumStatus200TextJSONString = null;
            userApiPostAlbumStatus200TextXMLString = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.userApiPostAlbumStatus200ApplicationJavascriptString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.userApiPostAlbumStatus200ApplicationJSONString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.userApiPostAlbumStatus200ApplicationJsonpString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.userApiPostAlbumStatus200ApplicationXMLString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.userApiPostAlbumStatus200TextJavascriptString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.userApiPostAlbumStatus200TextJSONString = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                String out = new String(httpRes.body(), StandardCharsets.UTF_8);
                res.userApiPostAlbumStatus200TextXMLString = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UserApiPostFollowedTagResponse userApiPostFollowedTag(openapisdk.models.operations.UserApiPostFollowedTagRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/current/followedTags/{tagId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiPostFollowedTagResponse res = new openapisdk.models.operations.UserApiPostFollowedTagResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * userApiPostRefreshEntryEdit - Refresh entry edit status, indicating that the current user is still editing that entry.
    **/
    public openapisdk.models.operations.UserApiPostRefreshEntryEditResponse userApiPostRefreshEntryEdit(openapisdk.models.operations.UserApiPostRefreshEntryEditRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/current/refreshEntryEdit");
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        
        java.util.List<NameValuePair> queryParams = openapisdk.utils.Utils.getQueryParams(request.queryParams);
        if (queryParams != null) {
            for (NameValuePair queryParam : queryParams) {
                req.addQueryParam(queryParam);
            }
        }
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiPostRefreshEntryEditResponse res = new openapisdk.models.operations.UserApiPostRefreshEntryEditResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.UserApiPostReportResponse userApiPostReport(openapisdk.models.operations.UserApiPostReportRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/reports", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiPostReportResponse res = new openapisdk.models.operations.UserApiPostReportResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            userApiPostReport200ApplicationJSONBoolean = null;
            userApiPostReport200ApplicationJsonpBoolean = null;
            userApiPostReport200TextJSONBoolean = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Boolean out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Boolean.class);
                res.userApiPostReport200ApplicationJSONBoolean = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Boolean out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Boolean.class);
                res.userApiPostReport200ApplicationJsonpBoolean = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                Boolean out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), Boolean.class);
                res.userApiPostReport200TextJSONBoolean = out;
            }
        }

        return res;
    }
	
	
    /**
     * userApiPostSetting - Updates user setting.
    **/
    public openapisdk.models.operations.UserApiPostSettingResponse userApiPostSetting(openapisdk.models.operations.UserApiPostSettingRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/{id}/settings/{settingName}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("POST");
        req.setURL(url);
        SerializedBody serializedRequestBody = openapisdk.utils.Utils.serializeRequestBody(request);
        if (serializedRequestBody == null) {
            throw new Exception("Request body is required");
        }
        req.setBody(serializedRequestBody);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.UserApiPostSettingResponse res = new openapisdk.models.operations.UserApiPostSettingResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse getApiUsersCurrentAlbumCollectionStatusesAlbumId(openapisdk.models.operations.GetApiUsersCurrentAlbumCollectionStatusesAlbumIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/current/album-collection-statuses/{albumId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse res = new openapisdk.models.operations.GetApiUsersCurrentAlbumCollectionStatusesAlbumIdResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            albumForUserForApiContract = null;
            albumForUserForApiContract = null;
            albumForUserForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract.class);
                res.albumForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract.class);
                res.albumForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract.class);
                res.albumForUserForApiContract = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.GetApiUsersCurrentFollowedArtistsArtistIdResponse getApiUsersCurrentFollowedArtistsArtistId(openapisdk.models.operations.GetApiUsersCurrentFollowedArtistsArtistIdRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/users/current/followedArtists/{artistId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.GetApiUsersCurrentFollowedArtistsArtistIdResponse res = new openapisdk.models.operations.GetApiUsersCurrentFollowedArtistsArtistIdResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            artistForUserForApiContract = null;
            artistForUserForApiContract = null;
            artistForUserForApiContract = null;
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 200) {
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/javascript")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/xml")) {
                byte[] out = httpRes.body();
                res.body = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtistForUserForApiContract.class);
                res.artistForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtistForUserForApiContract.class);
                res.artistForUserForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.ArtistForUserForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.ArtistForUserForApiContract.class);
                res.artistForUserForApiContract = out;
            }
        }

        return res;
    }
	
}