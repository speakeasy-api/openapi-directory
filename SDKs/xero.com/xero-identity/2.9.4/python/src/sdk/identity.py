import requests
from typing import Any,Optional
from sdk.models import operations
from . import utils

class Identity:
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

    
    def delete_connection(self, request: operations.DeleteConnectionRequest) -> operations.DeleteConnectionResponse:
        r"""Deletes a connection for this user (i.e. disconnect a tenant)
        Override the base server url that include version
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/Connections/{id}", request.path_params)
        
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("DELETE", url)
        content_type = r.headers.get("Content-Type")

        res = operations.DeleteConnectionResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 204:
            pass
        elif r.status_code == 404:
            pass

        return res

    
    def get_connections(self, request: operations.GetConnectionsRequest) -> operations.GetConnectionsResponse:
        r"""Retrieves the connections for this user
        Override the base server url that include version
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/Connections"
        
        query_params = utils.get_query_params(request.query_params)
        
        client = utils.configure_security_client(self._client, request.security)
        
        r = client.request("GET", url, params=query_params)
        content_type = r.headers.get("Content-Type")

        res = operations.GetConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            if utils.match_content_type(content_type, "application/json"):
                out = utils.unmarshal_json(r.text, Optional[list[Any]])
                res.connections = out

        return res

    