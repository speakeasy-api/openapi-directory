import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class VenueAPI:
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

    
    def venue_api_delete(self, request: operations.VenueAPIDeleteRequest) -> operations.VenueAPIDeleteResponse:
        r"""Deletes a venue.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/venues/{id}", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("DELETE", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VenueAPIDeleteResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    
    def venue_api_get_list(self, request: operations.VenueAPIGetListRequest) -> operations.VenueAPIGetListResponse:
        r"""Gets a page of event venue.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/api/venues"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VenueAPIGetListResponse(status_code=r.status_code, content_type=content_type)
        
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
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultVenueForAPIContract])
                res.partial_find_result_venue_for_api_contract_ = out
            if utils.match_content_type(content_type, "application/json-p"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultVenueForAPIContract])
                res.partial_find_result_venue_for_api_contract_ = out
            if utils.match_content_type(content_type, "text/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.PartialFindResultVenueForAPIContract])
                res.partial_find_result_venue_for_api_contract_ = out

        return res

    
    def venue_api_post_report(self, request: operations.VenueAPIPostReportRequest) -> operations.VenueAPIPostReportResponse:
        r"""Creates a new report.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/api/venues/{id}/reports", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("POST", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.VenueAPIPostReportResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass

        return res

    