import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class CustomExchangeRates:
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

    
    def get_custom_exchange_rates(self, request: operations.GetCustomExchangeRatesRequest) -> operations.GetCustomExchangeRatesResponse:
        r"""List custom exchange rates by currency
        This feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        This reference describes how to query custom foreign exchange rates from Zuora. You can use this API method to query exchange rates only if you use a custom exchange rate provider and upload rates with the Import Foreign Exchange Rates mass action. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/custom-exchange-rates/{currency}", request.path_params)
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetCustomExchangeRatesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetCustomExchangeRatesType])
                res.get_custom_exchange_rates_type = out

        return res

    