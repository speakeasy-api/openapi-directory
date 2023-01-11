import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class OAuth2PermissionGrantList:
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

    
    def o_auth2_permission_grant_list(self, request: operations.OAuth2PermissionGrantListRequest) -> operations.OAuth2PermissionGrantListResponse:
        r"""Queries OAuth2 permissions grants for the relevant SP ObjectId of an app.
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/{tenantID}/oauth2PermissionGrants", request.path_params)
        
        query_params = utils.get_query_params(request.query_params)
        
        client = self._security_client
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.OAuth2PermissionGrantListResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[shared.OAuth2PermissionGrantListResult])
                res.o_auth2_permission_grant_list_result = out

        return res

    