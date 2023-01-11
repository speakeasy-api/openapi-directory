import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class HostedPages:
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

    
    def get_hosted_pages(self, request: operations.GetHostedPagesRequest) -> operations.GetHostedPagesResponse:
        r"""List hosted pages
        Returns the Payment Pages configuration metadata,
        specifically, page ID, page version, payment method type.
        
        The following are the version-specific and general REST requests for Payment Pages:
        
        * The request for Payment Pages 1.0 configuration information: `GET <BaseURL>/hostedpages?version=1`
        * The request for Payment Pages 2.0 configuration information: `GET <BaseURL>/hostedpages?version=2`
        * The request for all versions of Payment Pages configuration information: `GET <BaseURL>/hostedpages`
        
        ## Notes
        If you do not have the corresponding tenant setting enabled, e.g., the request `version` parameter set to 2 with the Payment Pages 2.0 setting disabled, you will receive an error.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/hostedpages"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetHostedPagesResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetHostedPagesType])
                res.get_hosted_pages_type = out

        return res

    