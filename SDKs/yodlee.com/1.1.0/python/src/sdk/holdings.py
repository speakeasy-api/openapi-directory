import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Holdings:
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

    
    def get_asset_classification_list(self) -> operations.GetAssetClassificationListResponse:
        r"""Get Asset Classification List
        The get asset classifications list service is used to get the supported asset classifications. <br>The response includes different classification types like assetClass, country, sector, style, etc. and the values corresponding to each type.<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/holdings/assetClassificationList"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetAssetClassificationListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.HoldingAssetClassificationListResponse])
                res.holding_asset_classification_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_holding_type_list(self) -> operations.GetHoldingTypeListResponse:
        r"""Get Holding Type List
        The get holding types list service is used to get the supported holding types.<br>The response includes different holding types such as future, moneyMarketFund, stock, etc. and it returns the supported holding types <br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/holdings/holdingTypeList"
        
        
        client = self._client
        
        r = client.request("GET", url)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHoldingTypeListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.HoldingTypeListResponse])
                res.holding_type_list_response = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_holdings(self, request: operations.GetHoldingsRequest) -> operations.GetHoldingsResponse:
        r"""Get Holdings
        The get holdings service is used to get the list of holdings of a user.<br>Supported holding types can be employeeStockOption, moneyMarketFund, bond, etc. and is obtained using get holding type list service. <br>Asset classifications for the holdings need to be requested through the \"include\" parameter.<br>Asset classification information for holdings are not available by default, as it is a premium feature.<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/holdings"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHoldingsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.HoldingResponse])
                res.holding_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_securities(self, request: operations.GetSecuritiesRequest) -> operations.GetSecuritiesResponse:
        r"""Get Security Details
        The get security details service is used to get all the security information for the holdings<br>
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/holdings/securities"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetSecuritiesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.HoldingSecuritiesResponse])
                res.holding_securities_response = out
        elif r.status_code == 400:
            if utils.match_content_type(content_type, "application/json;charset=UTF-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.YodleeError])
                res.yodlee_error = out
        elif r.status_code == 401:
            pass
        elif r.status_code == 404:
            pass

        return res

    