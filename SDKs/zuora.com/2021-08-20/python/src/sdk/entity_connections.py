import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class EntityConnections:
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

    
    def get_entity_connections(self, request: operations.GetEntityConnectionsRequest) -> operations.GetEntityConnectionsResponse:
        r"""Multi-entity: List connections
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
        
        Retrieves information about certain connections for a specified entity. You can specify the entity to retrieve in the `Zuora-Entity-Ids` request header.
        
        You can retrieve:
         - Inbound connections
         - Outbound connections
         - Both inbound and outbound connections
        
        ## User Access Permission
        You can make the call as any entity user. 
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/entity-connections"
        
        headers = utils.get_headers(request.headers)
        query_params = utils.get_query_params(request.query_params)
        
        client = self._client
        
        r = client.request("GET", url, params=query_params, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEntityConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetEntityConnectionsResponseType])
                res.get_entity_connections_response_type = out

        return res

    
    def post_entity_connections(self, request: operations.PostEntityConnectionsRequest) -> operations.PostEntityConnectionsResponse:
        r"""Multi-entity: Initiate a connection request
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
        
        Initiates a connection request from a source entity to a target entity.
        
        ## User Access Permission
        You must make the call as a source entity administrator. Also, this administrator must have permission to access to the target entity.
        
        """
        
        base_url = self._server_url
        
        url = base_url.removesuffix("/") + "/v1/entity-connections"
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        
        client = self._client
        
        r = client.request("POST", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PostEntityConnectionsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PostEntityConnectionsResponseType])
                res.post_entity_connections_response_type = out

        return res

    
    def put_entity_connections_accept(self, request: operations.PutEntityConnectionsAcceptRequest) -> operations.PutEntityConnectionsAcceptResponse:
        r"""Multi-entity: Accept a connection request
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
        
        Accepts a connection request.
        
        ## User Access Permission
        You must make the call as an entity administrator to accept a connection request.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/entity-connections/{connection-id}/accept", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutEntityConnectionsAcceptResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutEntityConnectionsAcceptResponseType])
                res.put_entity_connections_accept_response_type = out

        return res

    
    def put_entity_connections_deny(self, request: operations.PutEntityConnectionsDenyRequest) -> operations.PutEntityConnectionsDenyResponse:
        r"""Multi-entity: Deny a connection request
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
        
        Denies a connection request.
        
        ## User Access Permission
        You must make the call as an entity administrator to deny a connection request.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/entity-connections/{connection-id}/deny", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutEntityConnectionsDenyResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutEntityConnectionsDenyResponseType])
                res.put_entity_connections_deny_response_type = out

        return res

    
    def put_entity_connections_disconnect(self, request: operations.PutEntityConnectionsDisconnectRequest) -> operations.PutEntityConnectionsDisconnectResponse:
        r"""Multi-entity: Disconnect a connection
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/).
        
        Disconnects an established connection. If you have shared objects from a global entity to a target entity, disconnecting the connection will break the mapping relationship between these entities and cannot be recovered later.
        
        ## User Access Permission
        You must make the call as an administrator of the target entity or source entity.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/entity-connections/{connection-id}/disconnect", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutEntityConnectionsDisconnectResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutEntityConnectionsDisconnectResponseType])
                res.put_entity_connections_disconnect_response_type = out

        return res

    