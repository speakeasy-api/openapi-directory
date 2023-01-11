import requests
from typing import Optional
from enum import Enum
from sdk.models import shared, operations
from . import utils

class UserAPI:
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

    
    def user_api_delete_followed_tag(self, request: operations.UserAPIDeleteFollowedTagRequest) -> operations.UserAPIDeleteFollowedTagResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/followedTags/{tagId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIDeleteFollowedTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_delete_messages(self, request: operations.UserAPIDeleteMessagesRequest) -> operations.UserAPIDeleteMessagesResponse:
        r"""Deletes a list of user messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIDeleteMessagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_delete_profile_comment(self, request: operations.UserAPIDeleteProfileCommentRequest) -> operations.UserAPIDeleteProfileCommentResponse:
        r"""Deletes a comment.
        Normal users can delete their own comments, moderators can delete all comments.
                    Requires login.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/profileComments/{commentId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIDeleteProfileCommentResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_get_album_collection(self, request: operations.UserAPIGetAlbumCollectionRequest) -> operations.UserAPIGetAlbumCollectionResponse:
        r"""Gets a list of albums in a user's collection.
        This includes albums that have been rated by the user as well as albums that the user has bought or wishlisted.
                    Note that the user might have set his album ownership status and media type as private, in which case those properties are not included.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/albums", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetAlbumCollectionResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForUserForAPIContract])
                res.partial_find_result_album_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForUserForAPIContract])
                res.partial_find_result_album_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultAlbumForUserForAPIContract])
                res.partial_find_result_album_for_user_for_api_contract_ = out

        return res

    
    def user_api_get_album_for_user(self, request: operations.UserAPIGetAlbumForUserRequest) -> operations.UserAPIGetAlbumForUserResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/album-collection-statuses/{albumId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetAlbumForUserResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out

        return res

    
    def user_api_get_artist_for_user(self, request: operations.UserAPIGetArtistForUserRequest) -> operations.UserAPIGetArtistForUserResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/followedArtists/{artistId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetArtistForUserResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out

        return res

    
    def user_api_get_current(self, request: operations.UserAPIGetCurrentRequest) -> operations.UserAPIGetCurrentResponse:
        r"""Gets information about the currently logged in user.
        Requires login information.
                    This API supports CORS, and is restricted to specific origins.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/users/current"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetCurrentResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out

        return res

    
    def user_api_get_events(self, request: operations.UserAPIGetEventsRequest) -> operations.UserAPIGetEventsResponse:
        r"""Gets a list of events a user has subscribed to.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/events", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetEventsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[list[shared.ReleaseEventForAPIContract]])
                res.release_event_for_api_contracts = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ReleaseEventForAPIContract]])
                res.release_event_for_api_contracts = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[shared.ReleaseEventForAPIContract]])
                res.release_event_for_api_contracts = out

        return res

    
    def user_api_get_followed_artists(self, request: operations.UserAPIGetFollowedArtistsRequest) -> operations.UserAPIGetFollowedArtistsResponse:
        r"""Gets a list of artists followed by a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/followedArtists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetFollowedArtistsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForUserForAPIContract])
                res.partial_find_result_artist_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForUserForAPIContract])
                res.partial_find_result_artist_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultArtistForUserForAPIContract])
                res.partial_find_result_artist_for_user_for_api_contract_ = out

        return res

    
    def user_api_get_list(self, request: operations.UserAPIGetListRequest) -> operations.UserAPIGetListResponse:
        r"""Gets a list of users.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/users"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserForAPIContract])
                res.partial_find_result_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserForAPIContract])
                res.partial_find_result_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserForAPIContract])
                res.partial_find_result_user_for_api_contract_ = out

        return res

    
    def user_api_get_message(self, request: operations.UserAPIGetMessageRequest) -> operations.UserAPIGetMessageResponse:
        r"""Gets a user message.
        The message will be marked as read.
                    User can only load messages from their own inbox.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/messages/{messageId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetMessageResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.UserMessageContract])
                res.user_message_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserMessageContract])
                res.user_message_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserMessageContract])
                res.user_message_contract = out

        return res

    
    def user_api_get_messages(self, request: operations.UserAPIGetMessagesRequest) -> operations.UserAPIGetMessagesResponse:
        r"""Gets a list of messages.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/messages", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetMessagesResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserMessageContract])
                res.partial_find_result_user_message_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserMessageContract])
                res.partial_find_result_user_message_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultUserMessageContract])
                res.partial_find_result_user_message_contract_ = out

        return res

    
    def user_api_get_names(self, request: operations.UserAPIGetNamesRequest) -> operations.UserAPIGetNamesResponse:
        r"""Gets a list of user names. Ideal for autocomplete boxes.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/users/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.user_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.user_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.user_api_get_names_200_text_json_strings = out

        return res

    
    def user_api_get_one(self, request: operations.UserAPIGetOneRequest) -> operations.UserAPIGetOneResponse:
        r"""Gets user by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.UserForAPIContract])
                res.user_for_api_contract = out

        return res

    
    def user_api_get_profile_comments(self, request: operations.UserAPIGetProfileCommentsRequest) -> operations.UserAPIGetProfileCommentsResponse:
        r"""Gets a list of comments posted on user's profile.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/profileComments", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetProfileCommentsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def user_api_get_rated_songs(self, request: operations.UserAPIGetRatedSongsRequest) -> operations.UserAPIGetRatedSongsResponse:
        r"""Gets a list of songs rated by a user.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/ratedSongs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetRatedSongsResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultRatedSongForUserForAPIContract])
                res.partial_find_result_rated_song_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultRatedSongForUserForAPIContract])
                res.partial_find_result_rated_song_for_user_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultRatedSongForUserForAPIContract])
                res.partial_find_result_rated_song_for_user_for_api_contract_ = out

        return res

    
    def user_api_get_song_lists(self, request: operations.UserAPIGetSongListsRequest) -> operations.UserAPIGetSongListsResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/songLists", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetSongListsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def user_api_get_song_rating(self, request: operations.UserAPIGetSongRatingRequest) -> operations.UserAPIGetSongRatingResponse:
        r"""Gets a specific user's rating for a song.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/ratedSongs/{songId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetSongRatingResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRating200ApplicationJSONEnum])
                res.user_api_get_song_rating_200_application_json_string_enum = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRating200ApplicationJsonpEnum])
                res.user_api_get_song_rating_200_application_jsonp_string_enum = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRating200TextJSONEnum])
                res.user_api_get_song_rating_200_text_json_string_enum = out

        return res

    
    def user_api_get_song_rating_for_current(self, request: operations.UserAPIGetSongRatingForCurrentRequest) -> operations.UserAPIGetSongRatingForCurrentResponse:
        r"""Gets currently logged in user's rating for a song.
        Requires authentication.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/ratedSongs/{songId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIGetSongRatingForCurrentResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRatingForCurrent200ApplicationJSONEnum])
                res.user_api_get_song_rating_for_current_200_application_json_string_enum = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRatingForCurrent200ApplicationJsonpEnum])
                res.user_api_get_song_rating_for_current_200_application_jsonp_string_enum = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[operations.UserAPIGetSongRatingForCurrent200TextJSONEnum])
                res.user_api_get_song_rating_for_current_200_text_json_string_enum = out

        return res

    
    def user_api_post_album_status(self, request: operations.UserAPIPostAlbumStatusRequest) -> operations.UserAPIPostAlbumStatusResponse:
        r"""Add or update collection status, media type and rating for a specific album, for the currently logged in user.
        If the user has already rated the album, any previous rating is replaced.
                    Authorization cookie must be included.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/albums/{albumId}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostAlbumStatusResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/javascript"):
                res.user_api_post_album_status_200_application_javascript_string = r.content
            if utils.match_content_type(content_type, "application/json"):
                res.user_api_post_album_status_200_application_json_string = r.content
            if utils.match_content_type(content_type, "application/json-p"):
                res.user_api_post_album_status_200_application_jsonp_string = r.content
            if utils.match_content_type(content_type, "application/xml"):
                res.user_api_post_album_status_200_application_xml_string = r.content
            if utils.match_content_type(content_type, "text/javascript"):
                res.user_api_post_album_status_200_text_javascript_string = r.content
            if utils.match_content_type(content_type, "text/json"):
                res.user_api_post_album_status_200_text_json_string = r.content
            if utils.match_content_type(content_type, "text/xml"):
                res.user_api_post_album_status_200_text_xml_string = r.content

        return res

    
    def user_api_post_followed_tag(self, request: operations.UserAPIPostFollowedTagRequest) -> operations.UserAPIPostFollowedTagResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/followedTags/{tagId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("POST", url)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostFollowedTagResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_post_refresh_entry_edit(self, request: operations.UserAPIPostRefreshEntryEditRequest) -> operations.UserAPIPostRefreshEntryEditResponse:
        r"""Refresh entry edit status, indicating that the current user is still editing that entry.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/users/current/refreshEntryEdit"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostRefreshEntryEditResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def user_api_post_report(self, request: operations.UserAPIPostReportRequest) -> operations.UserAPIPostReportResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/reports", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostReportResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.user_api_post_report_200_application_json_boolean = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.user_api_post_report_200_application_jsonp_boolean = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[bool])
                res.user_api_post_report_200_text_json_boolean = out

        return res

    
    def user_api_post_setting(self, request: operations.UserAPIPostSettingRequest) -> operations.UserAPIPostSettingResponse:
        r"""Updates user setting.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/{id}/settings/{settingName}", request.path_params)
        
        headers = {}
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.UserAPIPostSettingResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def get_api_users_current_album_collection_statuses_album_id_(self, request: operations.GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDRequest) -> operations.GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/album-collection-statuses/{albumId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIUsersCurrentAlbumCollectionStatusesAlbumIDResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.AlbumForUserForAPIContract])
                res.album_for_user_for_api_contract = out

        return res

    
    def get_api_users_current_followed_artists_artist_id_(self, request: operations.GetAPIUsersCurrentFollowedArtistsArtistIDRequest) -> operations.GetAPIUsersCurrentFollowedArtistsArtistIDResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/users/current/followedArtists/{artistId}", request.path_params)
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAPIUsersCurrentFollowedArtistsArtistIDResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ArtistForUserForAPIContract])
                res.artist_for_user_for_api_contract = out

        return res

    