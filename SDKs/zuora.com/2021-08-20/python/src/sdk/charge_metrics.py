import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ChargeMetrics:
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

    
    def get_charge_metrics(self, request: operations.GetChargeMetricsRequest) -> operations.GetChargeMetricsResponse:
        r"""List charge metrics by time range
        Retrieves key charge metrics about rate plan charges that have changes in a specified time range.
        
        The purpose of `fromTimestamp` and `toTimestamp` is to synchronize charge metrics data incrementally. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/charge-metrics/data/charge-metrics"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargeMetricsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChargeMetricsResponse])
                res.charge_metrics_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonReasonsErrorResponse])
                res.common_reasons_error_response = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonReasonsErrorResponse])
                res.common_reasons_error_response = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonReasonsErrorResponse])
                res.common_reasons_error_response = out

        return res

    
    def get_charge_metrics_discount_allocation_details(self, request: operations.GetChargeMetricsDiscountAllocationDetailsRequest) -> operations.GetChargeMetricsDiscountAllocationDetailsResponse:
        r"""List discount allocation details by time range
        Retrieves discount allocation details about rate plan charges that have changes in a specified time range.
        
        The purpose of `fromTimestamp` and `toTimestamp` is to synchronize discount allocation details incrementally. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/charge-metrics/data/charge-metrics-discount-allocation-detail"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetChargeMetricsDiscountAllocationDetailsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.ChargeMetricsDiscountAllocationDetailResponse])
                res.charge_metrics_discount_allocation_detail_response = out
        elif r.status_code == 400:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonReasonsErrorResponse])
                res.common_reasons_error_response = out
        elif r.status_code == 429:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonReasonsErrorResponse])
                res.common_reasons_error_response = out
        elif r.status_code == 500:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonReasonsErrorResponse])
                res.common_reasons_error_response = out

        return res

    