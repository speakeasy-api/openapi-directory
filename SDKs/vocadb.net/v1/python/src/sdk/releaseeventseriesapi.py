import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ReleaseEventSeriesAPI:
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

    
    def release_event_series_api_delete(self, request: operations.ReleaseEventSeriesAPIDeleteRequest) -> operations.ReleaseEventSeriesAPIDeleteResponse:
        r"""Deletes an event series.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEventSeries/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventSeriesAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def release_event_series_api_get_list(self, request: operations.ReleaseEventSeriesAPIGetListRequest) -> operations.ReleaseEventSeriesAPIGetListResponse:
        r"""Gets a page of event series.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/releaseEventSeries"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventSeriesAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventSeriesForAPIContract])
                res.partial_find_result_release_event_series_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventSeriesForAPIContract])
                res.partial_find_result_release_event_series_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultReleaseEventSeriesForAPIContract])
                res.partial_find_result_release_event_series_for_api_contract_ = out

        return res

    
    def release_event_series_api_get_one(self, request: operations.ReleaseEventSeriesAPIGetOneRequest) -> operations.ReleaseEventSeriesAPIGetOneResponse:
        r"""Gets single event series by ID.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/releaseEventSeries/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.ReleaseEventSeriesAPIGetOneResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventSeriesForAPIContract])
                res.release_event_series_for_api_contract = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventSeriesForAPIContract])
                res.release_event_series_for_api_contract = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ReleaseEventSeriesForAPIContract])
                res.release_event_series_for_api_contract = out

        return res

    