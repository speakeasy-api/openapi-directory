package openapisdk;

import openapisdk.utils.HTTPClient;
import openapisdk.utils.HTTPRequest;
import java.net.http.HttpResponse;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.nio.charset.StandardCharsets;
import org.apache.http.NameValuePair;

public class AlbumApi {
	private HTTPClient _defaultClient;
	private HTTPClient _securityClient;
	private String _serverUrl;
	private String _language;
	private String _sdkVersion;
	private String _genVersion;

	public AlbumApi(HTTPClient defaultClient, HTTPClient securityClient, String serverUrl, String language, String sdkVersion, String genVersion) {
		this._defaultClient = defaultClient;
		this._securityClient = securityClient;
		this._serverUrl = serverUrl;
		this._language = language;
		this._sdkVersion = sdkVersion;
		this._genVersion = genVersion;
	}
	
	
    /**
     * albumApiDelete - Deletes an album.
    **/
    public openapisdk.models.operations.AlbumApiDeleteResponse albumApiDelete(openapisdk.models.operations.AlbumApiDeleteRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/{id}", request.pathParams);
        
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

        openapisdk.models.operations.AlbumApiDeleteResponse res = new openapisdk.models.operations.AlbumApiDeleteResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * albumApiDeleteComment - Deletes a comment.
     *
     * Normal users can delete their own comments, moderators can delete all comments.
     *             Requires login.
    **/
    public openapisdk.models.operations.AlbumApiDeleteCommentResponse albumApiDeleteComment(openapisdk.models.operations.AlbumApiDeleteCommentRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/comments/{commentId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AlbumApiDeleteCommentResponse res = new openapisdk.models.operations.AlbumApiDeleteCommentResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    public openapisdk.models.operations.AlbumApiDeleteReviewResponse albumApiDeleteReview(openapisdk.models.operations.AlbumApiDeleteReviewRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/{id}/reviews/{reviewId}", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("DELETE");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AlbumApiDeleteReviewResponse res = new openapisdk.models.operations.AlbumApiDeleteReviewResponse() {{
        }};
        res.statusCode = Long.valueOf(httpRes.statusCode());
        res.contentType = contentType;
        
        if (httpRes.statusCode() == 204) {
        }

        return res;
    }
	
	
    /**
     * albumApiGetComments - Gets a list of comments for an album.
     *
     * Pagination and sorting might be added later.
    **/
    public openapisdk.models.operations.AlbumApiGetCommentsResponse albumApiGetComments(openapisdk.models.operations.AlbumApiGetCommentsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/{id}/comments", request.pathParams);
        
        HTTPRequest req = new HTTPRequest();
        req.setMethod("GET");
        req.setURL(url);
        
        
        HTTPClient client = this._defaultClient;
        HttpResponse<byte[]> httpRes = client.send(req);

        String contentType = httpRes.headers().allValues("Content-Type").get(0);

        openapisdk.models.operations.AlbumApiGetCommentsResponse res = new openapisdk.models.operations.AlbumApiGetCommentsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            commentForApiContracts = null;
            commentForApiContracts = null;
            commentForApiContracts = null;
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
                openapisdk.models.shared.CommentForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommentForApiContract[].class);
                res.commentForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommentForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommentForApiContract[].class);
                res.commentForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.CommentForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.CommentForApiContract[].class);
                res.commentForApiContracts = out;
            }
        }

        return res;
    }
	
	
    /**
     * albumApiGetList - Gets a page of albums.
    **/
    public openapisdk.models.operations.AlbumApiGetListResponse albumApiGetList(openapisdk.models.operations.AlbumApiGetListRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums");
        
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

        openapisdk.models.operations.AlbumApiGetListResponse res = new openapisdk.models.operations.AlbumApiGetListResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            partialFindResultAlbumForApiContract = null;
            partialFindResultAlbumForApiContract = null;
            partialFindResultAlbumForApiContract = null;
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
                openapisdk.models.shared.PartialFindResultAlbumForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultAlbumForApiContract.class);
                res.partialFindResultAlbumForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultAlbumForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultAlbumForApiContract.class);
                res.partialFindResultAlbumForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.PartialFindResultAlbumForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.PartialFindResultAlbumForApiContract.class);
                res.partialFindResultAlbumForApiContract = out;
            }
        }

        return res;
    }
	
	
    /**
     * albumApiGetNames - Gets a list of album names. Ideal for autocomplete boxes.
    **/
    public openapisdk.models.operations.AlbumApiGetNamesResponse albumApiGetNames(openapisdk.models.operations.AlbumApiGetNamesRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/names");
        
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

        openapisdk.models.operations.AlbumApiGetNamesResponse res = new openapisdk.models.operations.AlbumApiGetNamesResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            albumApiGetNames200ApplicationJSONStrings = null;
            albumApiGetNames200ApplicationJsonpStrings = null;
            albumApiGetNames200TextJSONStrings = null;
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
                res.albumApiGetNames200ApplicationJSONStrings = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.albumApiGetNames200ApplicationJsonpStrings = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                String[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), String[].class);
                res.albumApiGetNames200TextJSONStrings = out;
            }
        }

        return res;
    }
	
	
    /**
     * albumApiGetNewAlbums - Gets list of upcoming or recent albums, same as front page.
     *
     * Output is cached for 1 hour.
    **/
    public openapisdk.models.operations.AlbumApiGetNewAlbumsResponse albumApiGetNewAlbums(openapisdk.models.operations.AlbumApiGetNewAlbumsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/new");
        
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

        openapisdk.models.operations.AlbumApiGetNewAlbumsResponse res = new openapisdk.models.operations.AlbumApiGetNewAlbumsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            albumForApiContracts = null;
            albumForApiContracts = null;
            albumForApiContracts = null;
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
                openapisdk.models.shared.AlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract[].class);
                res.albumForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract[].class);
                res.albumForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract[].class);
                res.albumForApiContracts = out;
            }
        }

        return res;
    }
	
	
    /**
     * albumApiGetOne - Gets an album by Id.
    **/
    public openapisdk.models.operations.AlbumApiGetOneResponse albumApiGetOne(openapisdk.models.operations.AlbumApiGetOneRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/{id}", request.pathParams);
        
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

        openapisdk.models.operations.AlbumApiGetOneResponse res = new openapisdk.models.operations.AlbumApiGetOneResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            albumForApiContract = null;
            albumForApiContract = null;
            albumForApiContract = null;
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
                openapisdk.models.shared.AlbumForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract.class);
                res.albumForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract.class);
                res.albumForApiContract = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForApiContract out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract.class);
                res.albumForApiContract = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.AlbumApiGetReviewsResponse albumApiGetReviews(openapisdk.models.operations.AlbumApiGetReviewsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/{id}/reviews", request.pathParams);
        
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

        openapisdk.models.operations.AlbumApiGetReviewsResponse res = new openapisdk.models.operations.AlbumApiGetReviewsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            albumReviewContracts = null;
            albumReviewContracts = null;
            albumReviewContracts = null;
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
                openapisdk.models.shared.AlbumReviewContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumReviewContract[].class);
                res.albumReviewContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumReviewContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumReviewContract[].class);
                res.albumReviewContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumReviewContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumReviewContract[].class);
                res.albumReviewContracts = out;
            }
        }

        return res;
    }
	
	
    /**
     * albumApiGetTopAlbums - Gets list of top rated albums, same as front page.
     *
     * Output is cached for 1 hour.
    **/
    public openapisdk.models.operations.AlbumApiGetTopAlbumsResponse albumApiGetTopAlbums(openapisdk.models.operations.AlbumApiGetTopAlbumsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/top");
        
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

        openapisdk.models.operations.AlbumApiGetTopAlbumsResponse res = new openapisdk.models.operations.AlbumApiGetTopAlbumsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            albumForApiContracts = null;
            albumForApiContracts = null;
            albumForApiContracts = null;
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
                openapisdk.models.shared.AlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract[].class);
                res.albumForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract[].class);
                res.albumForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForApiContract[].class);
                res.albumForApiContracts = out;
            }
        }

        return res;
    }
	
	
    /**
     * albumApiGetTracks - Gets tracks for an album.
    **/
    public openapisdk.models.operations.AlbumApiGetTracksResponse albumApiGetTracks(openapisdk.models.operations.AlbumApiGetTracksRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/{id}/tracks", request.pathParams);
        
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

        openapisdk.models.operations.AlbumApiGetTracksResponse res = new openapisdk.models.operations.AlbumApiGetTracksResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            songInAlbumForApiContracts = null;
            songInAlbumForApiContracts = null;
            songInAlbumForApiContracts = null;
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
                openapisdk.models.shared.SongInAlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SongInAlbumForApiContract[].class);
                res.songInAlbumForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SongInAlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SongInAlbumForApiContract[].class);
                res.songInAlbumForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.SongInAlbumForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.SongInAlbumForApiContract[].class);
                res.songInAlbumForApiContracts = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.AlbumApiGetTracksFieldsResponse albumApiGetTracksFields(openapisdk.models.operations.AlbumApiGetTracksFieldsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/{id}/tracks/fields", request.pathParams);
        
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

        openapisdk.models.operations.AlbumApiGetTracksFieldsResponse res = new openapisdk.models.operations.AlbumApiGetTracksFieldsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            body = null;
            albumApiGetTracksFields200ApplicationJSONObjects = null;
            albumApiGetTracksFields200ApplicationJsonpObjects = null;
            albumApiGetTracksFields200TextJSONObjects = null;
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
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/csv")) {
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
                java.util.Map<String, String>[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map[].class);
                res.albumApiGetTracksFields200ApplicationJSONObjects = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, String>[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map[].class);
                res.albumApiGetTracksFields200ApplicationJsonpObjects = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                java.util.Map<String, String>[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), java.util.Map[].class);
                res.albumApiGetTracksFields200TextJSONObjects = out;
            }
        }

        return res;
    }
	
	
    public openapisdk.models.operations.AlbumApiGetUserCollectionsResponse albumApiGetUserCollections(openapisdk.models.operations.AlbumApiGetUserCollectionsRequest request) throws Exception {
        String baseUrl = this._serverUrl;
        String url = openapisdk.utils.Utils.generateURL(baseUrl, "/api/albums/{id}/user-collections", request.pathParams);
        
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

        openapisdk.models.operations.AlbumApiGetUserCollectionsResponse res = new openapisdk.models.operations.AlbumApiGetUserCollectionsResponse() {{
            body = null;
            body = null;
            body = null;
            body = null;
            albumForUserForApiContracts = null;
            albumForUserForApiContracts = null;
            albumForUserForApiContracts = null;
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
                openapisdk.models.shared.AlbumForUserForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract[].class);
                res.albumForUserForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "application/json-p")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForUserForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract[].class);
                res.albumForUserForApiContracts = out;
            }
            if (openapisdk.utils.Utils.matchContentType(contentType, "text/json")) {
                ObjectMapper mapper = new ObjectMapper();
                mapper.findAndRegisterModules();
                openapisdk.models.shared.AlbumForUserForApiContract[] out = mapper.readValue(new String(httpRes.body(), StandardCharsets.UTF_8), openapisdk.models.shared.AlbumForUserForApiContract[].class);
                res.albumForUserForApiContracts = out;
            }
        }

        return res;
    }
	
}