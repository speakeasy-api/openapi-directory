import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ArtistAPI:
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

    
    def artist_api_delete(self, request: operations.ArtistAPIDeleteRequest) -> operations.ArtistAPIDeleteResponse:
        r"""Deletes an artist.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/artists/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def artist_api_delete_comment(self, request: operations.ArtistAPIDeleteCommentRequest) -> operations.ArtistAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/artists/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def artist_api_get_comments(self, request: operations.ArtistAPIGetCommentsRequest) -> operations.ArtistAPIGetCommentsResponse:
        r"""Gets a list of comments for an artist.
        Pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/artists/{id}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def artist_api_get_list(self, request: operations.ArtistAPIGetListRequest) -> operations.ArtistAPIGetListResponse:
        r"""Find artists.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/artists"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForAPIContract])
                res.partial_find_result_artist_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForAPIContract])
                res.partial_find_result_artist_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForAPIContract])
                res.partial_find_result_artist_for_api_contract_ = out

        return res

    
    def artist_api_get_names(self, request: operations.ArtistAPIGetNamesRequest) -> operations.ArtistAPIGetNamesResponse:
        r"""Gets a list of artist names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/artists/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.artist_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.artist_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.artist_api_get_names_200_text_json_strings = out

        return res

    
    def artist_api_get_one(self, request: operations.ArtistAPIGetOneRequest) -> operations.ArtistAPIGetOneResponse:
        r"""Gets an artist by Id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/artists/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ArtistAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForAPIContract])
                res.artist_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForAPIContract])
                res.artist_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForAPIContract])
                res.artist_for_api_contract = out

        return res

    