import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class ChargeRevenueSummaries:
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

    
    def get_crs_by_crs_number(self, request: operations.GetCrsByCrsNumberRequest) -> operations.GetCrsByCrsNumberResponse:
        r"""List all details of a charge revenue summary
        Retrieves the details of a charge revenue summary by specifying the charge revenue summary number. The response includes all revenue items associated with the charge revenue summary.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/charge-revenue-summaries/{crs-number}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrsByCrsNumberResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetChargeRsDetailType])
                res.get_charge_rs_detail_type = out

        return res

    
    def get_crs_by_charge_id(self, request: operations.GetCrsByChargeIDRequest) -> operations.GetCrsByChargeIDResponse:
        r"""Retrieve a charge revenue summary by charge ID
        Retrieves the details of a charge revenue summary by specifying the subscription charge ID. This response retrieves all revenue items associated with a charge revenue summary.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/charge-revenue-summaries/subscription-charges/{charge-key}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCrsByChargeIDResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetChargeRsDetailType])
                res.get_charge_rs_detail_type = out

        return res

    