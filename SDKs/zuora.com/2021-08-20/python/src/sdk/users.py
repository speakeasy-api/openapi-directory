import requests
from typing import Optional
from sdk.models import shared, operations
from . import utils

class Users:
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

    
    def get_entities_user_accessible(self, request: operations.GetEntitiesUserAccessibleRequest) -> operations.GetEntitiesUserAccessibleResponse:
        r"""Multi-entity: List all entities that a user can access
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Retrieves detailed information about all the entities that a user has permission to access.
        
        ## User Access Permission
        You can make the call as any entity user.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/users/{username}/accessible-entities", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("GET", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.GetEntitiesUserAccessibleResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.GetEntitiesUserAccessibleResponseType])
                res.get_entities_user_accessible_response_type = out

        return res

    
    def put_accept_user_access(self, request: operations.PutAcceptUserAccessRequest) -> operations.PutAcceptUserAccessResponse:
        r"""Multi-entity: Accept user access
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Accepts user access to an entity.
        
        ## User Access Permission
        You must make the calls as an administrator of the entity that you want to accept the user access to. 
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/users/{username}/accept-access", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutAcceptUserAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutAcceptUserAccessResponseType])
                res.put_accept_user_access_response_type = out

        return res

    
    def put_deny_user_access(self, request: operations.PutDenyUserAccessRequest) -> operations.PutDenyUserAccessResponse:
        r"""Multi-entity: Deny user access
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Denies a user access to an entity. 
        
        ## User Access Permission
        You must make the calls as an administrator of the entity that you want to deny the user access to.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/users/{username}/deny-access", request.path_params)
        
        headers = utils.get_headers(request.headers)
        
        client = self._client
        
        r = client.request("PUT", url, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutDenyUserAccessResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutDenyUserAccessResponseType])
                res.put_deny_user_access_response_type = out

        return res

    
    def put_send_user_access_requests(self, request: operations.PutSendUserAccessRequestsRequest) -> operations.PutSendUserAccessRequestsResponse:
        r"""Multi-entity: Send user access requests
        **Note:** The Multi-entity feature is in **Limited Availability**. If you wish to have access to the feature, submit a request at [Zuora Global Support](http://support.zuora.com/). 
        
        Sends access requests to the entities that a user wants to access.
        
        ## User Access Permission
        You must make the call as an administrator of the entity, in which the request user is created. Also, this administrator must have the permission to access the entities that the request user wants to access.
        
        """
        
        base_url = self._server_url
        
        url = utils.generate_url(base_url, "/v1/users/{username}/request-access", request.path_params)
        
        headers = utils.get_headers(request.headers)
        req_content_type, data, json, files = utils.serialize_request_body(request)
        if req_content_type != "multipart/form-data" and req_content_type != "multipart/mixed":
            headers["content-type"] = req_content_type
        if data is None and form is None:
           raise Exception('request body is required')
        
        client = self._client
        
        r = client.request("PUT", url, data=data, json=json, files=files, headers=headers)
        content_type = r.headers.get("Content-Type")

        res = operations.PutSendUserAccessRequestsResponse(status_code=r.status_code, content_type=content_type)
        
        if r.status_code == 200:
            res.headers = r.headers
            
            if utils.match_content_type(content_type, "application/json; charset=utf-8"):
                out = utils.unmarshal_json(r.text, Optional[shared.PutSendUserAccessRequestResponseType])
                res.put_send_user_access_request_response_type = out

        return res

    