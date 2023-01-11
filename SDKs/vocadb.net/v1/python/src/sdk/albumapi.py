import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class AlbumAPI:
    _client: requests.Session
    _security_client: requests.Session
    _server_url: str
    _language: str
    _sdk_version: str
    _gen_version: str

    def __init__(self, client: requests.Session, security_client: requests.Session, server_url: str, language: str, sdk_version: str, gen_version: str) -> None:
        self._client = client
        self._security_client = security_client
        self._server_url = server_url
        self._language = language
        self._sdk_version = sdk_version
        self._gen_version = gen_version

    
    def album_api_delete(self, request: operations.AlbumAPIDeleteRequest) -> operations.AlbumAPIDeleteResponse:
        r"""Deletes an album.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def album_api_delete_comment(self, request: operations.AlbumAPIDeleteCommentRequest) -> operations.AlbumAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def album_api_delete_review(self, request: operations.AlbumAPIDeleteReviewRequest) -> operations.AlbumAPIDeleteReviewResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/reviews/{reviewId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIDeleteReviewResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def album_api_get_comments(self, request: operations.AlbumAPIGetCommentsRequest) -> operations.AlbumAPIGetCommentsResponse:
        r"""Gets a list of comments for an album.
        Pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.CommentForAPIContract]])
                res.comment_for_api_contracts = out

        return res

    
    def album_api_get_list(self, request: operations.AlbumAPIGetListRequest) -> operations.AlbumAPIGetListResponse:
        r"""Gets a page of albums.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/albums"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForAPIContract])
                res.partial_find_result_album_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForAPIContract])
                res.partial_find_result_album_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForAPIContract])
                res.partial_find_result_album_for_api_contract_ = out

        return res

    
    def album_api_get_names(self, request: operations.AlbumAPIGetNamesRequest) -> operations.AlbumAPIGetNamesResponse:
        r"""Gets a list of album names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/albums/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.album_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.album_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.album_api_get_names_200_text_json_strings = out

        return res

    
    def album_api_get_new_albums(self, request: operations.AlbumAPIGetNewAlbumsRequest) -> operations.AlbumAPIGetNewAlbumsResponse:
        r"""Gets list of upcoming or recent albums, same as front page.
        Output is cached for 1 hour.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/albums/new"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetNewAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out

        return res

    
    def album_api_get_one(self, request: operations.AlbumAPIGetOneRequest) -> operations.AlbumAPIGetOneResponse:
        r"""Gets an album by Id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForAPIContract])
                res.album_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForAPIContract])
                res.album_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForAPIContract])
                res.album_for_api_contract = out

        return res

    
    def album_api_get_reviews(self, request: operations.AlbumAPIGetReviewsRequest) -> operations.AlbumAPIGetReviewsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/reviews", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetReviewsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumReviewContract]])
                res.album_review_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumReviewContract]])
                res.album_review_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumReviewContract]])
                res.album_review_contracts = out

        return res

    
    def album_api_get_top_albums(self, request: operations.AlbumAPIGetTopAlbumsRequest) -> operations.AlbumAPIGetTopAlbumsResponse:
        r"""Gets list of top rated albums, same as front page.
        Output is cached for 1 hour.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/albums/top"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetTopAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForAPIContract]])
                res.album_for_api_contracts = out

        return res

    
    def album_api_get_tracks(self, request: operations.AlbumAPIGetTracksRequest) -> operations.AlbumAPIGetTracksResponse:
        r"""Gets tracks for an album.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/tracks", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetTracksResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongInAlbumForAPIContract]])
                res.song_in_album_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongInAlbumForAPIContract]])
                res.song_in_album_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongInAlbumForAPIContract]])
                res.song_in_album_for_api_contracts = out

        return res

    
    def album_api_get_tracks_fields(self, request: operations.AlbumAPIGetTracksFieldsRequest) -> operations.AlbumAPIGetTracksFieldsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/tracks/fields", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetTracksFieldsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/csv"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[dict[str, str]]])
                res.album_api_get_tracks_fields_200_application_json_objects = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[dict[str, str]]])
                res.album_api_get_tracks_fields_200_application_jsonp_objects = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[dict[str, str]]])
                res.album_api_get_tracks_fields_200_text_json_objects = out

        return res

    
    def album_api_get_user_collections(self, request: operations.AlbumAPIGetUserCollectionsRequest) -> operations.AlbumAPIGetUserCollectionsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/albums/{id}/user-collections", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.AlbumAPIGetUserCollectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.body = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.body = r.content
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForUserForAPIContract]])
                res.album_for_user_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForUserForAPIContract]])
                res.album_for_user_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.AlbumForUserForAPIContract]])
                res.album_for_user_for_api_contracts = out

        return res

    