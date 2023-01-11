import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class RevenueItems:
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

    
    def get_revenue_items_by_charge_revenue_event_number(self, request: operations.GetRevenueItemsByChargeRevenueEventNumberRequest) -> operations.GetRevenueItemsByChargeRevenueEventNumberResponse:
        r"""List revenue items by revenue event number
        This REST API reference describes how to get the details of each revenue item in a revenue event by specifying the revenue event number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-items/revenue-events/{event-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevenueItemsByChargeRevenueEventNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRevenueItemsType])
                res.get_revenue_items_type = out

        return res

    
    def get_revenue_items_by_charge_revenue_summary_number(self, request: operations.GetRevenueItemsByChargeRevenueSummaryNumberRequest) -> operations.GetRevenueItemsByChargeRevenueSummaryNumberResponse:
        r"""List revenue items by charge revenue summary number
        This REST API reference describes how to get the details for each revenue item in a charge revenue summary by specifying the charge revenue summary number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-items/charge-revenue-summaries/{crs-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevenueItemsByChargeRevenueSummaryNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRevenueItemsType])
                res.get_revenue_items_type = out

        return res

    
    def get_revenue_items_by_revenue_schedule(self, request: operations.GetRevenueItemsByRevenueScheduleRequest) -> operations.GetRevenueItemsByRevenueScheduleResponse:
        r"""List all revenue items of a revenue schedule
        This REST API reference describes how to get the details for each revenue items in a revenue schedule by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-items/revenue-schedules/{rs-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetRevenueItemsByRevenueScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetRsRevenueItemsType])
                res.get_rs_revenue_items_type = out

        return res

    
    def put_custom_fieldson_revenue_items_by_revenue_event(self, request: operations.PutCustomFieldsonRevenueItemsByRevenueEventRequest) -> operations.PutCustomFieldsonRevenueItemsByRevenueEventResponse:
        r"""Update custom fields on revenue items by revenue event number
        This REST API reference describes how to update custom fields on revenue items by specifying the revenue event number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-items/revenue-events/{event-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomFieldsonRevenueItemsByRevenueEventResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    
    def put_custom_fieldson_revenue_items_by_revenue_schedule(self, request: operations.PutCustomFieldsonRevenueItemsByRevenueScheduleRequest) -> operations.PutCustomFieldsonRevenueItemsByRevenueScheduleResponse:
        r"""Update custom fields on revenue items by revenue schedule number
        This REST API reference describes how to update custom fields on revenue Items by specifying the revenue schedule number. Request and response field descriptions and sample code are provided.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/revenue-items/revenue-schedules/{rs-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutCustomFieldsonRevenueItemsByRevenueScheduleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    