import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ReleaseEventAPI:
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

    
    def release_event_api_delete(self, request: operations.ReleaseEventAPIDeleteRequest) -> operations.ReleaseEventAPIDeleteResponse:
        r"""Deletes an event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def release_event_api_get_albums(self, request: operations.ReleaseEventAPIGetAlbumsRequest) -> operations.ReleaseEventAPIGetAlbumsResponse:
        r"""Gets a list of albums for a specific event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{eventId}/albums", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetAlbumsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def release_event_api_get_list(self, request: operations.ReleaseEventAPIGetListRequest) -> operations.ReleaseEventAPIGetListResponse:
        r"""Gets a page of events.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/releaseEvents"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventForAPIContract])
                res.partial_find_result_release_event_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventForAPIContract])
                res.partial_find_result_release_event_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventForAPIContract])
                res.partial_find_result_release_event_for_api_contract_ = out

        return res

    
    def release_event_api_get_names(self, request: operations.ReleaseEventAPIGetNamesRequest) -> operations.ReleaseEventAPIGetNamesResponse:
        r"""Find event names by a part of name.
                    
                    Matching is done anywhere from the name.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/releaseEvents/names"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetNamesResponse(status_code=r.status_code, content_type=content_type)
        
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
                res.release_event_api_get_names_200_application_json_strings = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.release_event_api_get_names_200_application_jsonp_strings = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[list[str]])
                res.release_event_api_get_names_200_text_json_strings = out

        return res

    
    def release_event_api_get_one(self, request: operations.ReleaseEventAPIGetOneRequest) -> operations.ReleaseEventAPIGetOneResponse:
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventForAPIContract])
                res.release_event_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventForAPIContract])
                res.release_event_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventForAPIContract])
                res.release_event_for_api_contract = out

        return res

    
    def release_event_api_get_published_songs(self, request: operations.ReleaseEventAPIGetPublishedSongsRequest) -> operations.ReleaseEventAPIGetPublishedSongsResponse:
        r"""Gets a list of songs for a specific event.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{eventId}/published-songs", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIGetPublishedSongsResponse(status_code=r.status_code, content_type=content_type)
        
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

    
    def release_event_api_post_report(self, request: operations.ReleaseEventAPIPostReportRequest) -> operations.ReleaseEventAPIPostReportResponse:
        r"""Creates a new report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEvents/{eventId}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventAPIPostReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    