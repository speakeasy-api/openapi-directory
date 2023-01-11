import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Walletobjects:
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

    
    def walletobjects_walletobjects_v1_get_valuablesclassescount(self, request: operations.WalletobjectsWalletobjectsV1GetValuablesclassescountRequest) -> operations.WalletobjectsWalletobjectsV1GetValuablesclassescountResponse:
        r"""Returns a total number of valuables classes grouped by type for a given issuer ID.
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/walletobjects/v1/valuablesclassescount"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.WalletobjectsWalletobjectsV1GetValuablesclassescountResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.ValuablesClassesCount])
                res.valuables_classes_count = out

        return res

    