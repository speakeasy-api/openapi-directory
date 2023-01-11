import requests
from typing import Any,Optional
from sdk.models import shared, operations
from . import utils

class RevenueEvents:
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

    
    def get_revenue_event_details(self, request: operations.GetRevenueEventDetailsRequest) -> operations.GetRevenueEventDetailsResponse:
        r"""Retrieve a revenue event
        This REST API reference describes how to get revenue event details by specifying the revenue event number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-events/{event-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevenueEventDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[dict[str, Any]])
                res.get_revenue_event_detail_type = out

        return res

    
    def get_revenue_event_for_revenue_schedule(self, request: operations.GetRevenueEventForRevenueScheduleRequest) -> operations.GetRevenueEventForRevenueScheduleResponse:
        r"""List all revenue events of a revenue schedule
        
        This REST API reference describes how to get all revenue events in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-events/revenue-schedules/{rs-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevenueEventForRevenueScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRevenueEventDetailsType])
                res.get_revenue_event_details_type = out

        return res

    