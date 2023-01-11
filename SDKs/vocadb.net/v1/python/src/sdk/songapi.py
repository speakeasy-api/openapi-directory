import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class SongAPI:
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

    
    def song_api_delete(self, request: operations.SongAPIDeleteRequest) -> operations.SongAPIDeleteResponse:
        r"""Deletes a song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_api_delete_comment(self, request: operations.SongAPIDeleteCommentRequest) -> operations.SongAPIDeleteCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/comments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIDeleteCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def song_api_get_by_id(self, request: operations.SongAPIGetByIDRequest) -> operations.SongAPIGetByIDResponse:
        r"""Gets a song by Id.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetByIDResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out

        return res

    
    def song_api_get_by_pv(self, request: operations.SongAPIGetByPvRequest) -> operations.SongAPIGetByPvResponse:
        r"""Gets a song by PV.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs/byPv"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetByPvResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.SongForAPIContract])
                res.song_for_api_contract = out

        return res

    
    def song_api_get_comments(self, request: operations.SongAPIGetCommentsRequest) -> operations.SongAPIGetCommentsResponse:
        r"""Gets a list of comments for a song.
        Pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/comments", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetCommentsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def song_api_get_derived(self, request: operations.SongAPIGetDerivedRequest) -> operations.SongAPIGetDerivedResponse:
        r"""Gets derived (alternate versions) of a song.
        Pagination and sorting might be added later.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/derived", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetDerivedResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out

        return res

    
    def song_api_get_highlighted_songs(self, request: operations.SongAPIGetHighlightedSongsRequest) -> operations.SongAPIGetHighlightedSongsResponse:
        r"""Gets list of highlighted songs, same as front page.
        Output is cached for 1 hour.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs/highlighted"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetHighlightedSongsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out

        return res

    
    def song_api_get_list(self, request: operations.SongAPIGetListRequest) -> operations.SongAPIGetListResponse:
        r"""Find songs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongForAPIContract])
                res.partial_find_result_song_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongForAPIContract])
                res.partial_find_result_song_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultSongForAPIContract])
                res.partial_find_result_song_for_api_contract_ = out

        return res

    
    def song_api_get_lyrics(self, request: operations.SongAPIGetLyricsRequest) -> operations.SongAPIGetLyricsResponse:
        r"""Gets lyrics by ID.
        Output is cached. Specify song version as parameter to refresh.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/lyrics/{lyricsId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetLyricsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.LyricsForSongContract])
                res.lyrics_for_song_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.LyricsForSongContract])
                res.lyrics_for_song_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.LyricsForSongContract])
                res.lyrics_for_song_contract = out

        return res

    
    def song_api_get_names(self, request: operations.SongAPIGetNamesRequest) -> operations.SongAPIGetNamesResponse:
        r"""Gets a list of song names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.song_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.song_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.song_api_get_names_200_text_json_strings = out

        return res

    
    def song_api_get_ratings(self, request: operations.SongAPIGetRatingsRequest) -> operations.SongAPIGetRatingsResponse:
        r"""Get ratings for a song.
        The result includes ratings and user information.
                    For users who have requested not to make their ratings public, the user will be empty.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/ratings", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetRatingsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[shared.RatedSongForUserForAPIContract]])
                res.rated_song_for_user_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.RatedSongForUserForAPIContract]])
                res.rated_song_for_user_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.RatedSongForUserForAPIContract]])
                res.rated_song_for_user_for_api_contracts = out

        return res

    
    def song_api_get_related(self, request: operations.SongAPIGetRelatedRequest) -> operations.SongAPIGetRelatedResponse:
        r"""Gets related songs.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/related", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetRelatedResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedSongsContract])
                res.related_songs_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedSongsContract])
                res.related_songs_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.RelatedSongsContract])
                res.related_songs_contract = out

        return res

    
    def song_api_get_top_songs(self, request: operations.SongAPIGetTopSongsRequest) -> operations.SongAPIGetTopSongsResponse:
        r"""Gets top rated songs.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/songs/top-rated"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIGetTopSongsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.SongForAPIContract]])
                res.song_for_api_contracts = out

        return res

    
    def song_api_post_rating(self, request: operations.SongAPIPostRatingRequest) -> operations.SongAPIPostRatingResponse:
        r"""Add or update rating for a specific song, for the currently logged in user.
        If the user has already rated the song, any previous rating is replaced.
                    Authorization cookie must be included.
                    This API supports CORS.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/songs/{id}/ratings", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.SongAPIPostRatingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    