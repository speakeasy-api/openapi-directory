import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SongListAPI:
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

    
    def song_list_api_delete(self, request: operations.SongListAPIDeleteRequest) -> operations.SongListAPIDeleteResponse:
        r"""Deletes a song list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songLists/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_list_api_delete_comment(self, request: operations.SongListAPIDeleteCommentRequest) -> operations.SongListAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songLists/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_list_api_get_comments(self, request: operations.SongListAPIGetCommentsRequest) -> operations.SongListAPIGetCommentsResponse:
        r"""Gets a list of comments for a song list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songLists/{listId}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultCommentForAPIContract])
                res.partial_find_result_comment_for_api_contract_ = out

        return res

    
    def song_list_api_get_featured_list_names(self, request: operations.SongListAPIGetFeaturedListNamesRequest) -> operations.SongListAPIGetFeaturedListNamesResponse:
        r"""Gets a list of featuedd list names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songLists/featured/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIGetFeaturedListNamesResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.song_list_api_get_featured_list_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.song_list_api_get_featured_list_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.song_list_api_get_featured_list_names_200_text_json_strings = out

        return res

    
    def song_list_api_get_featured_lists(self, request: operations.SongListAPIGetFeaturedListsRequest) -> operations.SongListAPIGetFeaturedListsResponse:
        r"""Gets a list of featured song lists.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songLists/featured"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIGetFeaturedListsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongListForAPIContract])
                res.partial_find_result_song_list_for_api_contract_ = out

        return res

    
    def song_list_api_get_songs(self, request: operations.SongListAPIGetSongsRequest) -> operations.SongListAPIGetSongsResponse:
        r"""Gets a list of songs in a song list.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songLists/{listId}/songs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongListAPIGetSongsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongInListForAPIContract])
                res.partial_find_result_song_in_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongInListForAPIContract])
                res.partial_find_result_song_in_list_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongInListForAPIContract])
                res.partial_find_result_song_in_list_for_api_contract_ = out

        return res

    