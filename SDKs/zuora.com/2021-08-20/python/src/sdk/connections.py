import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Connections:
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

    
    def post_connections(self, request: operations.PostConnectionsRequest) -> operations.PostConnectionsResponse:
        r"""Establish a connection to Zuora REST API
        Establishes a connection to the Zuora REST API service based on a valid user credentials. 
        
        **Note:**This is a legacy REST API. Zuora recommends you to use [OAuth](https://www.zuora.com/developer/api-reference/#section/Authentication/OAuth-v2.0) for authentication instead. 
        
        This call authenticates the user and returns an API session cookie that's used to authorize subsequent calls to the REST API. The credentials must belong to a user account that has permission to access the API service.
        
        As noted elsewhere, it's strongly recommended that an account used for Zuora API activity is never used to log into the Zuora UI.  Once an account is used to log into the UI, it may be subject to periodic forced password changes, which may eventually lead to authentication failures when using the API.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/connections"
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("POST", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.CommonResponseType])
                res.common_response_type = out

        return res

    